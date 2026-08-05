import {
  projects,
  experience,
  skills,
  education,
  about,
} from "./data.js";

const THEME_KEY = "portfolio-theme";

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $$(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function techList(items) {
  return `<ul class="tech">${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function projectMedia(project) {
  if (!project.image) return "";

  const webp = project.image.replace(/\.(jpe?g|png)$/i, ".webp");
  const hasWebp = /\.(jpe?g|png)$/i.test(project.image);

  return `<div class="project__media">
    <picture>
      ${
        hasWebp
          ? `<source srcset="${escapeHtml(webp)}" type="image/webp" />`
          : ""
      }
      <img
        src="${escapeHtml(project.image)}"
        alt="${escapeHtml(project.imageAlt || project.name)}"
        width="640"
        height="400"
        loading="lazy"
        decoding="async"
      />
    </picture>
  </div>`;
}

function projectLinks(project) {
  const links = [];
  if (project.live) {
    links.push(
      `<a class="btn btn--solid btn--sm" href="${escapeHtml(
        project.live
      )}" target="_blank" rel="noopener noreferrer">Live site</a>`
    );
  }
  if (project.github) {
    links.push(
      `<a class="btn btn--line btn--sm" href="${escapeHtml(
        project.github
      )}" target="_blank" rel="noopener noreferrer">GitHub</a>`
    );
  }
  return links.join("");
}

function renderProjects() {
  const root = $("#project-list");
  if (!root) return;

  root.innerHTML = projects
    .map((project, index) => {
      const media = projectMedia(project);
      const layoutClass = media ? "project" : "project project--text";

      return `
      <article class="${layoutClass} reveal" id="${escapeHtml(project.id)}">
        ${media}
        <div class="project__body">
          <p class="project__index">0${index + 1}</p>
          <div class="project__title-row">
            <h3>${escapeHtml(project.name)}</h3>
            <span class="project__status">${escapeHtml(project.status)}</span>
          </div>
          <p class="project__tagline">${escapeHtml(project.tagline)}</p>
          <p class="project__desc">${escapeHtml(project.description)}</p>
          ${techList(project.technologies)}
          <div class="project__actions">${projectLinks(project)}</div>
        </div>
      </article>`;
    })
    .join("");
}

function renderExperience() {
  const root = $("#experience-list");
  if (!root) return;

  root.innerHTML = experience
    .map(
      (job) => `
      <li class="xp reveal">
        <div class="xp__when">${escapeHtml(job.dates)}</div>
        <div>
          <h3>${escapeHtml(job.company)}</h3>
          <p class="xp__role">${escapeHtml(job.role)}</p>
          <p class="xp__where">${escapeHtml(job.location)}</p>
          <ul>
            ${job.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
          </ul>
          ${techList(job.technologies)}
        </div>
      </li>`
    )
    .join("");
}

function renderSkills() {
  const root = $("#skills-grid");
  if (!root) return;

  root.innerHTML = Object.entries(skills)
    .map(
      ([category, items]) => `
      <div class="skill-row reveal">
        <h3>${escapeHtml(category)}</h3>
        <p>${items.map((item) => escapeHtml(item)).join("  ·  ")}</p>
      </div>`
    )
    .join("");
}

function renderAbout() {
  const textRoot = $("#about-text");
  const eduRoot = $("#education-card");

  if (textRoot) {
    textRoot.innerHTML = about.paragraphs
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");
  }

  if (eduRoot) {
    eduRoot.innerHTML = `
      <p class="kicker">Education</p>
      <h3 id="education-heading">${escapeHtml(education.school)}</h3>
      <p class="edu__degree">${escapeHtml(education.degree)}</p>
      <p>${escapeHtml(education.minor)}</p>
      <p>${escapeHtml(education.dates)}</p>
      <p>${escapeHtml(education.honors)}</p>
      <ul aria-label="Relevant coursework">
        ${education.coursework.map((course) => `<li>${escapeHtml(course)}</li>`).join("")}
      </ul>`;
  }
}

function initTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);

  const toggle = $("#theme-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
  });
}

function initNav() {
  const toggle = $("#nav-toggle");
  const panel = $("#nav-menu");
  if (!toggle || !panel) return;

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    panel.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  const openMenu = () => {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    panel.classList.add("is-open");
    document.body.classList.add("nav-open");
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    if (expanded) closeMenu();
    else openMenu();
  });

  $$("[data-nav-link]", panel).forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!panel.classList.contains("is-open")) return;
    if (panel.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });
}

function initActiveSection() {
  const links = $$("[data-nav-link]");
  const sections = links
    .map((link) => {
      const id = link.getAttribute("href")?.slice(1);
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initReveal() {
  const items = $$(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((item) => observer.observe(item));
}

function initEmailCopy() {
  const button = $("#email-copy");
  const hint = $("#email-copy-hint");
  if (!button || !hint) return;

  button.addEventListener("click", async () => {
    const email = button.dataset.email || "";
    try {
      await navigator.clipboard.writeText(email);
      hint.textContent = "Copied";
      window.setTimeout(() => {
        hint.textContent = "Copy";
      }, 1600);
    } catch {
      hint.textContent = "Select";
    }
  });
}

function initCopyright() {
  const year = $("#copyright-year");
  if (year) year.textContent = `© ${new Date().getFullYear()}`;
}

function initScrollTop() {
  const brand = $("[data-scroll-top]");
  if (!brand) return;

  brand.addEventListener("click", (event) => {
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    history.replaceState(null, "", "#top");
  });
}

function init() {
  initTheme();
  renderProjects();
  renderExperience();
  renderSkills();
  renderAbout();
  initNav();
  initActiveSection();
  initReveal();
  initEmailCopy();
  initCopyright();
  initScrollTop();
}

init();
