/**
 * script.js
 * - Renders projects/skills/certifications dynamically from arrays below
 * - Handles modal, nav toggle, theme toggle, contact form (basic)
 *
 * NOTE:
 * - To add/edit projects: update the "PROJECTS" array below.
 * - For contact form integration: replace FORM_ENDPOINT with your Formspree or EmailJS endpoint.
 */

/* -------------------- Config (Edit here) -------------------- */

const PROJECTS = [
  {
    id: "proj-sales",
    title: "Customer Sales Analysis",
    subtitle: "Customer Buying Patterns & Revenue Analysis",
    thumb: "./Image/CSA.png",
    problem: "Businesses often struggle to understand customer purchasing patterns and sales performance due to scattered data. Analyzing sales data helps identify trends, improve decision-making, and optimize strategies for revenue growth.",
    data_source: "Company CSV ",
    tools: ["Python (Pandas)", "SQL", "Power BI"],
    process: ["Aggregated sales & customer tables using SQL , Cleaned and normalized data with Pandas, Built interactive Power BI dashboard with filters",],
    insights: "Top 3 regions account for ~70% sales; Repeat customers show 25% higher AOV.",
    links: { github: "#", powerbi: "#", tableau: "#" },
    images: [
      "./Image/CSA1.png",
      "./Image/CSA2.png",
      "./Image/CSA3.png"
    ]
  },
  {
    id: "proj-churn",
    title: "Government Sector Project",
    subtitle: "Analysis of Tax Collections & Government Schemes Across Cities",
    thumb: "./Image/Uadd.png",
    problem: "Government departments generate large volumes of tax and scheme-related data across cities and divisions.Lack of a centralized dashboard limits visibility into revenue, collections, and scheme performance.The challenge is to design an actionable and interactive dashboard that delivers meaningful insights for decision-making.",
    data_source: "Internal Company Dataset",
    tools: ["Lumenore", "SQL", "MariaDB", "Vertica", "DBeaver"],
    process: ["Performed ETL operations to transform raw tax data into structured formats, integrated datasets for analyzing demand, collection, and government schemes, and designed interactive dashboards to visualize performance across cities and divisions.",],
    insights: "Provides ULB-wise tax demand and collection analysis along with actionable insights on revenue and scheme performance.",
    links: { github: "#", powerbi: "#", tableau: "#" },
    images: ["./Image/GP1.png",
      "./Image/GP2.png",
      "./Image/GP3.png"
    ]

  },
  {
    id: "proj-eda",
    title: "E-Gaming Agency",
    subtitle: "Visualizing E-Gaming Agency & Investments",
    thumb: "./Image/EG.png",
    problem: "E-Sports organizations generate large volumes of data from player performance, tournaments, viewership, social media, ticketing, and revenue, and the lack of a centralized analytics platform makes it difficult to track key metrics, identify trends, and evaluate performance. The challenge is to design an interactive dashboard that consolidates this data and provides actionable insights for stakeholders.",
    data_source: "Internal Company Dataset",
    tools: ["Lumenore", "SQL", "MariaDB", "Vertica", "DBeaver"],
    process: ["E-Sports agencies generate large volumes of data on player performance, tournaments, and audience engagement, but the absence of a centralized dashboard limits visibility into key metrics and trends. The challenge is to design an interactive and insightful dashboard that consolidates this data and provides actionable insights for players, teams, and stakeholders."],
    insights: "Provides a comprehensive view of viewership, social media engagement, ticketing, and revenue, delivering actionable insights for stakeholders.",
    links: { github: "#", powerbi: "#", tableau: "#" },
    images: ["./Image/EWC251.png",
      "./Image/EWC252.png"
    ]
  }
];

const SKILLS = [
  { name: "Python", note: "Pandas, NumPy, Matplotlib, Seaborn, etc.", Image: "/Image/python.png", link: "https://www.python.org/" },
  { name: "SQL", note: "Postgres / MySQL, SQL Server, etc.", Image: "/Image/sql-server.png", link: "https://www.postgresql.org/" },
  { name: "Power BI", note: "Dashboards, Reports, Data Modeling & Transformation, etc.", Image: "/Image/power-bi.jpg", link: "https://powerbi.microsoft.com/" },
  { name: "Tableau", note: "Vizulization & storytelling, Dashboard & Reports, etc.", Image: "/Image/tablue.png", link: "https://www.tableau.com/" },
  { name: "Excel", note: "Pivot Tables, Power Query, Lookup, etc.", Image: "/Image/logo.png", link: "https://www.microsoft.com/en-us/microsoft-365/excel" },
  { name: "Statistics", note: "Basic Statistics, Probability, Regression Analysis, Hypothesis Testing, etc.", Image: "/Image/statics.png", link: "https://www.khanacademy.org/math/statistics-probability" },
  { name: "Lumenore", note: "Dashboarding, BI Tool, Advance Analysis, etc.", Image: "/Image/lumenore.png", link: "https://lumenore.com/" },
  { name: "Machine Learning", note: "Deep Learning, ML Models, NLP, etc.", Image: "/Image/ML.png", link: "https://www.tensorflow.org/" }
];


const CERTIFICATES = [
  { name: "Basic Python Programing", year: 2023, location: "./Doc/python.pdf" },
  { name: "Data Analytics Workshoap", year: 2023, location: "./Doc/DA.pdf" },
  { name: "Lumenore BI Tools", year: 2024, link: "./Doc/lumenore_certi.pdf" }
];

/* -------------------- DOM Helpers -------------------- */

const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

/* -------------------- Render Functions -------------------- */

function renderProjects() {
  const grid = $("#projects-grid");
  grid.innerHTML = "";
  PROJECTS.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-thumb"><img src="${p.thumb}" alt="${escapeHTML(p.title)} thumbnail"></div>
      <div>
        <h3>${escapeHTML(p.title)}</h3>
        <p class="muted">${escapeHTML(p.subtitle)}</p>
        <div class="project-meta">
          <div class="project-tags">${p.tools.slice(0, 3).map(t => `<span class="tag">${escapeHTML(t)}</span>`).join("")}</div>
          <div><button class="btn small" data-action="open" data-id="${p.id}">Open</button></div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}


function renderSkills() {
  const grid = $("#skills-grid");
  grid.innerHTML = "";
  SKILLS.forEach(s => {
    const el = document.createElement("div");
    el.className = "skill-pill";

    // If you want to add a link property to SKILLS, use s.link (else '#' as fallback)
    const skillLink = s.link || "#";

    el.innerHTML = `
      <a href="${skillLink}" target="_blank" rel="noopener" style="display:flex;align-items:center;text-decoration:none;color:inherit">
        <img src="${s.Image || ""}" alt="${s.name}" width="50" height="50" style="margin-right:10px">
        <div>
          <div style="font-weight:600">${escapeHTML(s.name)}</div>
          <div style="font-size:12px;color:var(--muted)">${escapeHTML(s.note || "")}</div>
        </div>
      </a>
    `;
    grid.appendChild(el);
  });
}


// function renderSkills() {
//   const grid = $("#skills-grid");
//   grid.innerHTML = "";
//   SKILLS.forEach(s => {
//     const el = document.createElement("div");
//     el.className = "skill-pill";
//     el.innerHTML = `
//       <img src="${s.Image || ""}" alt="${s.name}" width="50" height="50">
//       <div>
//         <div style="font-weight:600">${escapeHTML(s.name)}</div>
//         <div style="font-size:12px;color:var(--muted)">${escapeHTML(s.note || "")}</div>
//       </div>
//     `;
//     grid.appendChild(el);
//   });
// }

// function renderCerts() {
//   const grid = $("#certs-grid");
//   grid.innerHTML = "";
//   CERTIFICATES.forEach(c => {
//     const el = document.createElement("div");
//     el.className = "cert-card";
//     el.innerHTML = `<strong>${escapeHTML(c.name)}</strong><div style="color:var(--muted);font-size:13px">${c.year}</div>`;
//     grid.appendChild(el);
//   });
// }

function renderCerts() {
  const grid = $("#certs-grid");
  grid.innerHTML = "";

  CERTIFICATES.forEach(c => {
    const el = document.createElement("div");
    el.className = "cert-card";
    el.innerHTML = `
      <strong>${escapeHTML(c.name)}</strong>
      <div style="color:var(--muted);font-size:13px;margin-bottom:6px">${c.year}</div>
      ${c.link || c.location
        ? `<a class="btn small" href="${c.link || c.location}" target="_blank" rel="noopener">View Certificate</a>`
        : ''
      }
    `;
    grid.appendChild(el);
  });
}



/* -------------------- Modal & Events -------------------- */

function openProjectModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  const modal = $("#project-modal");
  const container = $("#modal-content");
  modal.setAttribute("aria-hidden", "false");

  // Images rendering (multi-line string for clarity)
  const images = p.images && p.images.length
    ? p.images.map(src => `
        <img src="${src}" 
             alt="${escapeHTML(p.title)} image"
             style="
               width:100%;
               height:auto;
               object-fit:cover;
               border-radius:8px;
               margin-bottom:8px;
             ">
      `).join("")
    : "";

  // Modal content
  container.innerHTML = `
    <h2 id="modal-title">${escapeHTML(p.title)}</h2>
    <p style="color:var(--muted)">${escapeHTML(p.subtitle)}</p>
    
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin:12px 0">
      
      <!-- Left section -->
      <div style="min-width:220px">
        <h4>Problem</h4>
        <p>${escapeHTML(p.problem)}</p>
        
        <h4>Data Source</h4>
        <p>${escapeHTML(p.data_source)}</p>
        
        <h4>Tools</h4>
        <p>${p.tools.map(t => `<span class="tag">${escapeHTML(t)}</span>`).join(" ")}</p>
      </div>
      
      <!-- Right section -->
      <div style="flex:1">
        <h4>Process</h4>
        <p>
          ${p.process.map(s => `<li>${escapeHTML(s)}</li>`).join("")}
        </p>
        
        <h4>Insights</h4>
        <p>${escapeHTML(p.insights)}</p>

      </div>
    </div>

    <!-- Images -->
    <div>${images}</div>
  `;

  // Accessibility: move focus inside modal
  setTimeout(() => modal.querySelector(".modal-panel").focus(), 100);
}

function closeModal() {
  const modal = $("#project-modal");
  modal.setAttribute("aria-hidden", "true");
  $("#modal-content").innerHTML = "";
}

/* -------------------- Misc Helpers -------------------- */
function getInitials(text) {
  return text.split(" ").map(s => s[0]).slice(0, 2).join("").toUpperCase();
}
function escapeHTML(str) { return String(str || "").replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])) }

/* -------------------- Event Listeners -------------------- */

document.addEventListener("click", (e) => {
  // Open project
  const openBtn = e.target.closest("button[data-action='open']");
  if (openBtn) {
    openProjectModal(openBtn.dataset.id);
    return;
  }
  // Close modal
  if (e.target.id === "modal-close" || e.target.id === "project-modal") {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

$("#modal-close").addEventListener("click", closeModal);
$("#project-modal").addEventListener("click", (e) => {
  if (e.target === $("#project-modal")) closeModal();
});

/* Nav toggle for mobile */
$("#nav-toggle").addEventListener("click", () => {
  const nav = $("#primary-nav");
  const expanded = nav.getAttribute("aria-hidden") === "false";
  nav.setAttribute("aria-hidden", expanded ? "true" : "false");
  $("#nav-toggle").setAttribute("aria-expanded", expanded ? "false" : "true");
});

/* Theme toggle (dark/light) - persisted */
const themeToggle = $("#theme-toggle");
function setTheme(dark) {
  if (dark) document.body.classList.add("dark");
  else document.body.classList.remove("dark");
  themeToggle.textContent = dark ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-pressed", dark ? "true" : "false");
  localStorage.setItem("theme-dark", dark ? "1" : "0");
}
themeToggle.addEventListener("click", () => setTheme(!document.body.classList.contains("dark")));
(function initTheme() {
  const stored = localStorage.getItem("theme-dark");
  if (stored === null) {
    // prefer user's device setting
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);
  } else {
    setTheme(stored === "1");
  }
})();

/* Contact form basic handler (client-side only) */
const FORM_ENDPOINT = "#"; // <-- Replace with your Formspree endpoint or EmailJS

$("#contact-form").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const statusEl = $("#form-status");
  statusEl.textContent = "Sending...";
  const data = {
    name: $("#cf-name").value.trim(),
    email: $("#cf-email").value.trim(),
    message: $("#cf-message").value.trim()
  };
  // Basic validation
  if (!data.name || !data.email || !data.message) {
    statusEl.textContent = "Please complete all fields.";
    return;
  }
  try {
    if (FORM_ENDPOINT && FORM_ENDPOINT !== "#") {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.ok) {
        statusEl.textContent = "Message sent — thank you!";
        $("#contact-form").reset();
      } else {
        statusEl.textContent = "Error sending message. Try via email.";
      }
    } else {
      // Fallback: open mailto (non-ideal, but works offline)
      window.location.href = `mailto:youremail@example.com?subject=${encodeURIComponent("Portfolio contact: " + data.name)}&body=${encodeURIComponent(data.message + "\n\nFrom: " + data.email)}`;
      statusEl.textContent = "Opening email client...";
      $("#contact-form").reset();
    }
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Network error. Try again later.";
  }
});

/* Footer Year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Initial render */
renderProjects();
renderSkills();
renderCerts();
renderskillsDownloads();
