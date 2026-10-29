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
    title: "Power BI Case Study | Loesche India Pvt. Ltd",
    subtitle: "Power BI dashboard, EDA, Database design, SQL, Python, Data Engineering",
    thumb: "Image\\Loesche India Pvt. Ltd.png",
    problem: "To transform raw industrial business data into actionable insights through Python, SQL Server, and Power BI, enabling better analysis of sales, profitability, customer performance, and deliveries.",
    data_source: "Synthetic data generated to simulate real-world industrial business scenarios.",
    tools: ["Python (Pandas, Numpy, Faker)", "SQL", "Power BI", "MS SQL Server", "Data Engineering", "Data Modeling", "ETL Pipelines"],
    process: [
      "Business Understanding: Identified business requirements and key performance indicators (KPIs).",
      "Data Generation: Created synthetic industrial business data using Python.",
      "Data Cleaning: Cleaned, transformed, and validated data using Pandas and NumPy.",
      "EDA: Analyzed trends, distributions, and business patterns.",
      "SQL Server: Loaded data into fact and dimension tables and validated records.",
      "Data Modeling: Built a star schema and relationships in Power BI.",
      "DAX & KPIs: Created measures for sales, profit, quantity, orders, and customer performance.",
      "Dashboard Development: Built an interactive Power BI dashboard to support data-driven decisions.",
      "Insights & Recommendations: Derived actionable insights and provided recommendations for business improvement."
    ],
    insights: [
      "Total sales are ₹10.02 billion, generating ₹4.16 billion in profit.",
      "Jindal Steel & Power leads customer sales at approximately ₹720 million.",
      "Direct Sales is the largest channel by total cost at ₹2.3 billion.",
      "Existing customers contribute the largest share of orders (26.8%), followed by email enquiries (25.87%).",
      "Revenue shown for FY 2024–25 is ₹33 billion, FY 2025–26 is ₹30 billion, and FY 2026–27 is ₹10 billion, indicating a downward trend across the displayed years. FY 2026–27 may be incomplete.",
      "More...."],
    links: { github: "#", powerbi: "#", tableau: "#" },
    images: [
      "Image\\Dark Theme.png",
      "Image\\Light Theme.png",
      "Image\\Product Overview.png",
      "Image\\Geographical Analysis.png",
      "Image\\Data Model.png"
    ]
  },
  {
    id: "proj-churn",
    title: "🌦️ Live Weather Analytics Dashboard",
    subtitle: "Live API Integration, Data Visualization, Data modeling, power BI",
    thumb: "Image\\Weather Dashboard.png",
    problem: "Develop a Live Weather Forecasting Dashboard using a Weather API to visualize real-time weather conditions, temperature trends, humidity, wind speed, and future forecasts for better decision-making.",
    data_source: "Weather API (OpenWeatherMap API)",
    tools: ["Python", "Power BI", "API Integration", "Data Visualization", "Data Modeling"],
    process: [
      "Requirement Gathering – Identify business needs and KPIs",
      "Data Collection – Gather data from Excel and OpenWeatherMap APIs",
      "Data Cleaning (ETL) – Remove duplicates, handle missing values, and transform data using Power Query.",
      "Data Modeling – Establish relationships between tables and create a star schema.",
      "Dashboard Design – Choose suitable charts, tables, slicers, and KPI cards.",
      "Validation & Testing – Verify data accuracy, calculations, and performance.",
      "Publishing & Sharing – Publish the dashboard to Power BI Service and configure access.",
      "Refresh & Maintenance – Configure data refresh and update the dashboard as required."
    ],
    insights: "This dashboard provides an overview of key business performance metrics, including total revenue, profit, sales trends, product-wise performance, sales channels, and regional analysis to help identify trends and support data-driven decisions.",
    links: { github: "#", powerbi: "#", tableau: "#" },
    images: ["Image\\Weather Dashboard.png"]
  },
  {
    id: "proj-eda",
    title: "Sales Data Analysis & Recommendations",
    subtitle: "Excel based data analysis and visualization for business insights",
    thumb: "Image\\Excel Dashboard.png",
    problem: "Businesses often struggle to monitor sales performance, track customer behavior, and identify regional and product-wise sales trends. This project aims to develop an interactive Sales Dashboard in Excel to analyze revenue, orders, discounts, product performance, payment modes, and regional sales, enabling data-driven business decisions.",
    data_source: "CSV file containing sales data for a retail company, including order details, customer information, product details, and sales metrics.",
    tools: ["Power Query", "Excel", "Power Pivot Tables", "Data Visualization", "Data Analysis"],
    process: [
      "Data Import: Imported sales, product, and customer datasets into Excel.",
      "Data Cleaning: Removed duplicates, handled missing values, corrected data formats, and validated data consistency.",
      "Data Modeling: Established relationships between sales, products, and customers tables to enable integrated analysis.",
      "KPI & Measure Calculation: Calculated Total Sales, Net Revenue, Total Orders, Average Sales, Total Customers, and Average Discount.",
      "Dashboard Development: Created interactive charts, KPI cards, slicers, and filters to analyze sales trends, regional performance, product categories, customer segments, and order distribution.",
      "Insights & Analysis: Identified top-performing regions, product categories, sales trends, and order statuses to support data-driven business decisions."
    ],
    insights:
    [
      "Sales Performance: Generated ₹7.8M in total sales and ₹6.99M in net revenue.",
      "Regional Analysis: Central region contributed the highest share of sales at 23%, followed by East at 22% and North at 21%.",
      "Order Distribution: 64% of orders were delivered, while 20% were pending and 16% were returned.",
      "Customer Segments: Retail contributed the highest sales (₹2,961.84K), followed by SME (₹2,176.60K) and Corporate (₹1,851.18K).",
      "Category Performance: Furniture led category-wise sales at ₹2,294.08K, followed by Office Supplies at ₹1,705.96K.",
      "Sales Trends: Monthly sales fluctuated significantly, with a sharp decline in January 2026, indicating a period that requires further investigation.",
      "Discount Analysis: The average discount was 10.07%, highlighting an opportunity to evaluate discounting practices and their impact on profitability."
    ],
    links: { github: "#", powerbi: "#", tableau: "#" },
    images: ["Image\\Excel Dashboard.png"]
  },
  {
    id: "proj-govt",
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
    id: "proj-egaming",
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
  { name: "SQL (Hakkerank)", year: 2026, link: "https://www.hackerrank.com/certificates/iframe/be6f57dd1d25" },
  { name: "Data Science & Analytics (HP)", year: 2025, link: "https://www.life-global.org/certificate/f07e5692-835f-4632-9e52-cb94a6db21b4" },
  { name: "Lumenore BI Tools", year: 2024, link: "./Doc/lumenore_certi.pdf" },
  { name: "Data Analytics Workshop", year: 2024, link: "./Doc/DA.pdf" },
  { name: "Basic Python", year: 2024, link: "./Doc/python_basic certificate.pdf" },
  { name: "Python Programming Essentials (CISCO)", year: 2024, link: "https://drive.google.com/file/d/1hB7BprlgF-WsIFEyR1wg4H1IWz_tV_Cf/view?usp=drive_link" }
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
        <ol>
          ${(Array.isArray(p.insights) ? p.insights : [p.insights])
          .map(item => `<li>${escapeHTML(item)}</li>`)
          .join("")}
        </ol>

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
