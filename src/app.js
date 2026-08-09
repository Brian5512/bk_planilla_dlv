const STORAGE_KEY = "dlv-control-app-v1";
const MONTHS_KEY = "dlv-control-app-months-v1";

const initialData = {
  monthName: "Julio",
  threshold: 3,
  stores: [
    { code: "12017", name: "Apumanque" },
    { code: "31866", name: "Arauco Chillan" },
    { code: "15886", name: "El Faro Fc" },
    { code: "14756", name: "Florida Center" },
    { code: "8965", name: "Irarrazaval Fs" },
    { code: "32047", name: "Irarrazaval Poniente" },
    { code: "23602", name: "Mall  Concepcion" },
    { code: "30181", name: "Mall Plaza Los Angeles" },
    { code: "18690", name: "Plaza Bio Bio" },
    { code: "18174", name: "Plaza Trebol" },
    { code: "14086", name: "Plaza Vespucio" },
    { code: "16284", name: "Los Andes Fc" },
    { code: "32403", name: "Chamisero" }
  ],
  weeks: [
    {
      id: "semana-1-al-04-07",
      name: "Semana 1 al 04-07",
      entries: [
        { storeCode: "12017", incorrect: 132, uberReturn: 3, rejected: 32, approved: 99 },
        { storeCode: "31866", incorrect: 30, uberReturn: 1, rejected: 1, approved: 27 },
        { storeCode: "15886", incorrect: 0, uberReturn: 0, rejected: 4, approved: 3 },
        { storeCode: "14756", incorrect: 5, uberReturn: 1, rejected: 0, approved: 0 },
        { storeCode: "8965", incorrect: 34, uberReturn: 2, rejected: 6, approved: 5 },
        { storeCode: "32047", incorrect: 22, uberReturn: 1, rejected: 0, approved: 0 },
        { storeCode: "23602", incorrect: 9, uberReturn: 3, rejected: 0, approved: 1 },
        { storeCode: "30181", incorrect: 2, uberReturn: 0, rejected: 0, approved: 0 },
        { storeCode: "18690", incorrect: 12, uberReturn: 5, rejected: 0, approved: 2 },
        { storeCode: "18174", incorrect: 13, uberReturn: 0, rejected: 1, approved: 2 },
        { storeCode: "14086", incorrect: 8, uberReturn: 0, rejected: 0, approved: 0 },
        { storeCode: "16284", incorrect: 2, uberReturn: 1, rejected: 32, approved: 32 },
        { storeCode: "32403", incorrect: 309, uberReturn: 32, rejected: 32, approved: 32 }
      ]
    },
    {
      id: "semana-5-al-11-07",
      name: "Semana 5 al 11-07",
      entries: [
        { storeCode: "12017", incorrect: 132, uberReturn: 3, rejected: 32, approved: 99 },
        { storeCode: "31866", incorrect: 3, uberReturn: 1, rejected: 1, approved: 1 },
        { storeCode: "15886", incorrect: 0, uberReturn: 0, rejected: 4, approved: 3 },
        { storeCode: "14756", incorrect: 5, uberReturn: 1, rejected: 0, approved: 0 },
        { storeCode: "8965", incorrect: 34, uberReturn: 2, rejected: 6, approved: 5 },
        { storeCode: "32047", incorrect: 22, uberReturn: 1, rejected: 0, approved: 0 },
        { storeCode: "23602", incorrect: 9, uberReturn: 3, rejected: 0, approved: 1 },
        { storeCode: "30181", incorrect: 2, uberReturn: 0, rejected: 0, approved: 0 },
        { storeCode: "18690", incorrect: 12, uberReturn: 5, rejected: 0, approved: 2 },
        { storeCode: "18174", incorrect: 13, uberReturn: 0, rejected: 1, approved: 2 },
        { storeCode: "14086", incorrect: 8, uberReturn: 0, rejected: 0, approved: 0 },
        { storeCode: "16284", incorrect: 2, uberReturn: 1, rejected: 32, approved: 32 },
        { storeCode: "32403", incorrect: 309, uberReturn: 32, rejected: 32, approved: 32 }
      ]
    },
    {
      id: "semana-12-al-18-07",
      name: "Semana 12 al 18-07",
      entries: [
        { storeCode: "12017", incorrect: 132, uberReturn: 3, rejected: 32, approved: 99 },
        { storeCode: "31866", incorrect: 3, uberReturn: 1, rejected: 1, approved: 1 },
        { storeCode: "15886", incorrect: 0, uberReturn: 0, rejected: 4, approved: 3 },
        { storeCode: "14756", incorrect: 5, uberReturn: 1, rejected: 0, approved: 0 },
        { storeCode: "8965", incorrect: 34, uberReturn: 2, rejected: 6, approved: 5 },
        { storeCode: "32047", incorrect: 22, uberReturn: 1, rejected: 0, approved: 0 },
        { storeCode: "23602", incorrect: 9, uberReturn: 3, rejected: 0, approved: 1 },
        { storeCode: "30181", incorrect: 2, uberReturn: 0, rejected: 0, approved: 0 },
        { storeCode: "18690", incorrect: 12, uberReturn: 5, rejected: 0, approved: 2 },
        { storeCode: "18174", incorrect: 13, uberReturn: 0, rejected: 1, approved: 2 },
        { storeCode: "14086", incorrect: 8, uberReturn: 0, rejected: 0, approved: 0 },
        { storeCode: "16284", incorrect: 2, uberReturn: 1, rejected: 32, approved: 32 },
        { storeCode: "32403", incorrect: 309, uberReturn: 32, rejected: 32, approved: 32 }
      ]
    },
    {
      id: "semana-19-al-25-07",
      name: "Semana 19 al 25-07",
      entries: [
        { storeCode: "12017", incorrect: 132, uberReturn: 3, rejected: 32, approved: 99 },
        { storeCode: "31866", incorrect: 3, uberReturn: 1, rejected: 1, approved: 1 },
        { storeCode: "15886", incorrect: 0, uberReturn: 0, rejected: 4, approved: 3 },
        { storeCode: "14756", incorrect: 5, uberReturn: 1, rejected: 0, approved: 0 },
        { storeCode: "8965", incorrect: 34, uberReturn: 2, rejected: 6, approved: 5 },
        { storeCode: "32047", incorrect: 22, uberReturn: 1, rejected: 0, approved: 0 },
        { storeCode: "23602", incorrect: 9, uberReturn: 3, rejected: 0, approved: 1 },
        { storeCode: "30181", incorrect: 2, uberReturn: 0, rejected: 0, approved: 0 },
        { storeCode: "18690", incorrect: 12, uberReturn: 5, rejected: 0, approved: 2 },
        { storeCode: "18174", incorrect: 13, uberReturn: 0, rejected: 1, approved: 2 },
        { storeCode: "14086", incorrect: 8, uberReturn: 0, rejected: 0, approved: 0 },
        { storeCode: "16284", incorrect: 2, uberReturn: 1, rejected: 32, approved: 32 },
        { storeCode: "32403", incorrect: 309, uberReturn: 32, rejected: 32, approved: 32 }
      ]
    },
    {
      id: "semana-26-al-31-07-2",
      name: "Semana 26 al 31-07 (2)",
      entries: [
        { storeCode: "12017", incorrect: 132, uberReturn: 3, rejected: 32, approved: 99 },
        { storeCode: "31866", incorrect: 3, uberReturn: 1, rejected: 1, approved: 1 },
        { storeCode: "15886", incorrect: 0, uberReturn: 0, rejected: 4, approved: 3 },
        { storeCode: "14756", incorrect: 5, uberReturn: 1, rejected: 0, approved: 0 },
        { storeCode: "8965", incorrect: 34, uberReturn: 2, rejected: 6, approved: 5 },
        { storeCode: "32047", incorrect: 22, uberReturn: 1, rejected: 0, approved: 0 },
        { storeCode: "23602", incorrect: 9, uberReturn: 3, rejected: 0, approved: 1 },
        { storeCode: "30181", incorrect: 2, uberReturn: 0, rejected: 0, approved: 0 },
        { storeCode: "18690", incorrect: 12, uberReturn: 5, rejected: 0, approved: 2 },
        { storeCode: "18174", incorrect: 13, uberReturn: 0, rejected: 1, approved: 2 },
        { storeCode: "14086", incorrect: 8, uberReturn: 0, rejected: 0, approved: 0 },
        { storeCode: "16284", incorrect: 2, uberReturn: 1, rejected: 32, approved: 32 },
        { storeCode: "32403", incorrect: 309, uberReturn: 32, rejected: 32, approved: 32 }
      ]
    },
    {
      id: "semana-26-al-31-07-3",
      name: "Semana 26 al 31-07 (3)",
      entries: [
        { storeCode: "12017", incorrect: 132, uberReturn: 3, rejected: 32, approved: 99 },
        { storeCode: "31866", incorrect: 3, uberReturn: 1, rejected: 1, approved: 1 },
        { storeCode: "15886", incorrect: 0, uberReturn: 0, rejected: 4, approved: 3 },
        { storeCode: "14756", incorrect: 5, uberReturn: 1, rejected: 0, approved: 0 },
        { storeCode: "8965", incorrect: 34, uberReturn: 2, rejected: 6, approved: 5 },
        { storeCode: "32047", incorrect: 22, uberReturn: 1, rejected: 0, approved: 0 },
        { storeCode: "23602", incorrect: 9, uberReturn: 3, rejected: 0, approved: 1 },
        { storeCode: "30181", incorrect: 2, uberReturn: 0, rejected: 0, approved: 0 },
        { storeCode: "18690", incorrect: 12, uberReturn: 5, rejected: 0, approved: 2 },
        { storeCode: "18174", incorrect: 13, uberReturn: 0, rejected: 1, approved: 2 },
        { storeCode: "14086", incorrect: 8, uberReturn: 0, rejected: 0, approved: 0 },
        { storeCode: "16284", incorrect: 2, uberReturn: 1, rejected: 32, approved: 32 },
        { storeCode: "32403", incorrect: 309, uberReturn: 32, rejected: 32, approved: 32 }
      ]
    }
  ]
};

const sysdateInitialData = createSysdateInitialData();
initialData.monthName = sysdateInitialData.monthName;
initialData.monthKey = sysdateInitialData.monthKey;
initialData.stores = sysdateInitialData.stores;
initialData.weeks = sysdateInitialData.weeks;

let state = loadState();
let selectedWeekId = state.weeks[0]?.id ?? "";
let selectedMonthDate = getStateMonthDate(state);
let monthArchive = loadArchive();
let lastUndo = null;

const els = {
  monthSelect: document.getElementById("month-select"),
  threshold: document.getElementById("threshold"),
  stats: document.getElementById("stats"),
  summaryTable: document.getElementById("summary-table"),
  weekSelect: document.getElementById("week-select"),
  weekName: document.getElementById("week-name"),
  weekTable: document.getElementById("week-table"),
  search: document.getElementById("search"),
  storeDialog: document.getElementById("store-dialog"),
  weekDialog: document.getElementById("week-dialog"),
  insights: document.getElementById("insights"),
  undoToast: document.getElementById("undo-toast"),
  undoText: document.getElementById("undo-text"),
  undoAction: document.getElementById("undo-action"),
  newStoreCode: document.getElementById("new-store-code"),
  newStoreName: document.getElementById("new-store-name"),
  newWeekName: document.getElementById("new-week-name"),
  storeError: document.getElementById("store-error"),
  weekError: document.getElementById("week-error")
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function compactState(data) {
  return {
    monthName: data.monthName,
    monthKey: data.monthKey,
    threshold: data.threshold,
    stores: clone(data.stores),
    weeks: clone(data.weeks)
  };
}

function loadArchive() {
  try {
    const saved = localStorage.getItem(MONTHS_KEY);
    const parsed = saved ? JSON.parse(saved) : {};
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveArchive() {
  localStorage.setItem(MONTHS_KEY, JSON.stringify(monthArchive));
}

function createSysdateInitialData(referenceDate = new Date()) {
  const stores = clone(initialData.stores);
  const weeks = buildMonthWeeks(referenceDate).map((week) => ({
    ...week,
    entries: stores.map((store) => ({
      storeCode: store.code,
      incorrect: null,
      uberReturn: null,
      rejected: null,
      approved: null
    }))
  }));

  return {
    monthName: monthLabel(referenceDate),
    monthKey: monthKey(referenceDate),
    threshold: 3,
    stores,
    weeks
  };
}

function buildMonthWeeks(referenceDate) {
  const year = referenceDate.getFullYear();
  const month = referenceDate.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const weeks = [];
  let startDay = 1;

  while (startDay <= lastDay) {
    const endDay = Math.min(nextFridayOrSevenDayEnd(year, month, startDay), lastDay);
    const label = `Semana ${startDay} al ${String(endDay).padStart(2, "0")}-${String(month + 1).padStart(2, "0")}`;
    weeks.push({
      id: stableId(label),
      name: label
    });
    startDay = endDay + 1;
  }

  return weeks;
}

function nextFridayOrSevenDayEnd(year, month, startDay) {
  const start = new Date(year, month, startDay);
  const dayOfWeek = start.getDay();
  const friday = 5;
  const daysUntilFriday = (friday - dayOfWeek + 7) % 7;
  return startDay + daysUntilFriday;
}

function monthLabel(referenceDate) {
  const formatter = new Intl.DateTimeFormat("es-CL", { month: "long", year: "numeric" });
  return formatter.format(referenceDate).replace(/^\w/, (letter) => letter.toUpperCase());
}

function monthKey(referenceDate) {
  return `${referenceDate.getFullYear()}-${String(referenceDate.getMonth() + 1).padStart(2, "0")}`;
}

function getStateMonthDate(data) {
  if (data.monthKey) {
    const [year, month] = data.monthKey.split("-").map(Number);
    if (Number.isFinite(year) && Number.isFinite(month)) return new Date(year, month - 1, 1);
  }
  return new Date();
}

function applyMonth(referenceDate, stores = state.stores) {
  selectedMonthDate = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 1);
  const key = monthKey(selectedMonthDate);
  if (monthArchive[key]) {
    state = normalizeState(monthArchive[key]);
    selectedWeekId = state.weeks[0]?.id ?? "";
    return;
  }
  state.monthKey = monthKey(selectedMonthDate);
  state.monthName = monthLabel(selectedMonthDate);
  state.weeks = buildMonthWeeks(selectedMonthDate).map((week) => ({
    ...week,
    entries: stores.map((store) => ({
      storeCode: store.code,
      incorrect: null,
      uberReturn: null,
      rejected: null,
      approved: null
    }))
  }));
  selectedWeekId = state.weeks[0]?.id ?? "";
}

function renderMonthOptions() {
  const year = new Date().getFullYear();
  const archivedDates = Object.keys(monthArchive).map((key) => {
    const [archiveYear, archiveMonth] = key.split("-").map(Number);
    return new Date(archiveYear, archiveMonth - 1, 1);
  });
  const months = [
    ...Array.from({ length: 12 }, (_, index) => new Date(year, index, 1)),
    ...archivedDates
  ].filter((date, index, dates) => dates.findIndex((item) => monthKey(item) === monthKey(date)) === index)
    .sort((a, b) => a - b);
  els.monthSelect.innerHTML = months.map((date) => {
    const key = monthKey(date);
    return `<option value="${key}" ${key === monthKey(selectedMonthDate) ? "selected" : ""}>${escapeHtml(monthLabel(date))}</option>`;
  }).join("");
}

function stableId(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return clone(initialData);
  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed.stores) || !Array.isArray(parsed.weeks)) {
      return clone(initialData);
    }
    return normalizeState(parsed);
  } catch {
    return clone(initialData);
  }
}

function normalizeState(data) {
  const normalized = {
    monthName: data.monthName || "Mes actual",
    monthKey: data.monthKey || monthKey(new Date()),
    threshold: Number.isFinite(Number(data.threshold)) ? Number(data.threshold) : 3,
    stores: data.stores.map((store) => ({
      code: String(store.code).trim(),
      name: String(store.name).trim()
    })).filter((store) => store.code && store.name),
    weeks: data.weeks.map((week, index) => ({
      id: week.id || makeId(`${week.name || "semana"}-${index}`),
      name: week.name || `Semana ${index + 1}`,
      entries: Array.isArray(week.entries) ? week.entries.map(normalizeEntry) : []
    }))
  };
  normalized.weeks.forEach((week) => syncWeekEntries(week, normalized.stores));
  return normalized;
}

function normalizeEntry(entry) {
  return {
    storeCode: String(entry.storeCode).trim(),
    incorrect: toNullableNumber(entry.incorrect),
    uberReturn: toNullableNumber(entry.uberReturn),
    rejected: toNullableNumber(entry.rejected),
    approved: toNullableNumber(entry.approved)
  };
}

function saveState() {
  monthArchive[state.monthKey] = compactState(state);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  saveArchive();
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, Math.trunc(number)) : 0;
}

function toNullableNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  return toNumber(value);
}

function makeId(value) {
  const base = String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const candidate = base || `semana-${Date.now()}`;
  const used = new Set((globalThis.dlvStateForIds || { weeks: [] }).weeks.map((week) => week.id));
  if (!used.has(candidate)) return candidate;
  let counter = 2;
  while (used.has(`${candidate}-${counter}`)) counter += 1;
  return `${candidate}-${counter}`;
}

function syncWeekEntries(week, stores = state.stores) {
  const byCode = new Map(week.entries.map((entry) => [entry.storeCode, entry]));
  week.entries = stores.map((store) => byCode.get(store.code) || {
    storeCode: store.code,
    incorrect: null,
    uberReturn: null,
    rejected: null,
    approved: null
  });
}

function calcEntry(entry) {
  const fields = [entry.incorrect, entry.uberReturn, entry.rejected, entry.approved];
  const hasData = fields.some((value) => value !== null && value !== undefined && value !== "");
  const withoutDispute = hasData
    ? toNumber(entry.incorrect) - toNumber(entry.uberReturn) - toNumber(entry.rejected) - toNumber(entry.approved)
    : null;
  return {
    ...entry,
    hasData,
    withoutDispute,
    complies: hasData ? withoutDispute <= state.threshold : null
  };
}

function getWeek(id = selectedWeekId) {
  return state.weeks.find((week) => week.id === id) || state.weeks[0];
}

function getEntry(week, storeCode) {
  let entry = week.entries.find((item) => item.storeCode === storeCode);
  if (!entry) {
    entry = { storeCode, incorrect: null, uberReturn: null, rejected: null, approved: null };
    week.entries.push(entry);
  }
  return entry;
}

function getStoreSummary(store) {
  const totals = { incorrect: 0, uberReturn: 0, rejected: 0, approved: 0, withoutDispute: 0 };
  const weeks = state.weeks.map((week) => {
    const entry = calcEntry(getEntry(week, store.code));
    if (entry.hasData) {
      totals.incorrect += toNumber(entry.incorrect);
      totals.uberReturn += toNumber(entry.uberReturn);
      totals.rejected += toNumber(entry.rejected);
      totals.approved += toNumber(entry.approved);
      totals.withoutDispute += entry.withoutDispute;
    }
    return { week, entry };
  });
  const complied = weeks.filter(({ entry }) => entry.complies === true).length;
  const totalWeeks = weeks.filter(({ entry }) => entry.hasData).length;
  const percent = totalWeeks ? complied / totalWeeks : 0;
  return { store, totals, weeks, complied, totalWeeks, percent, monthlyComplies: totalWeeks > 0 && complied === totalWeeks };
}

function formatPercent(value) {
  return `${Math.round(value * 100)}%`;
}

function formatNumber(value) {
  return new Intl.NumberFormat("es-CL").format(value);
}

function badge(complies, empty = false) {
  const isEmpty = empty || complies === null;
  const cls = isEmpty ? "badge-empty" : complies ? "badge-ok" : "badge-bad";
  const label = isEmpty ? "Sin datos" : complies ? "Cumple" : "No cumple";
  return `<span class="badge ${cls}">${label}</span>`;
}

function render() {
  globalThis.dlvStateForIds = state;
  state.weeks.forEach((week) => syncWeekEntries(week));
  if (!state.weeks.some((week) => week.id === selectedWeekId)) {
    selectedWeekId = state.weeks[0]?.id ?? "";
  }
  selectedMonthDate = getStateMonthDate(state);
  renderMonthOptions();
  els.threshold.value = state.threshold;
  renderStats();
  renderInsights();
  renderSummary();
  renderWeekSelector();
  renderWeekEditor();
  saveState();
}

function renderInsights() {
  const summaries = state.stores.map(getStoreSummary);
  const noData = summaries.filter((row) => row.totalWeeks === 0);
  const failed = summaries.filter((row) => row.totalWeeks > 0 && row.complied < row.totalWeeks);
  const topRisk = failed
    .sort((a, b) => a.percent - b.percent || b.totals.withoutDispute - a.totals.withoutDispute)
    .slice(0, 5);

  const loadedChecks = summaries.reduce((sum, row) => sum + row.totalWeeks, 0);
  const possibleChecks = state.stores.length * state.weeks.length;
  const pendingChecks = Math.max(0, possibleChecks - loadedChecks);

  els.insights.innerHTML = `
    <div class="section-heading">
      <div>
        <p class="eyebrow">Control operativo</p>
        <h2>Alertas del mes</h2>
      </div>
      <span class="summary-chip">${pendingChecks} cargas pendientes</span>
    </div>
    <div class="insight-grid">
      <article>
        <strong>${failed.length}</strong>
        <span>locales con incumplimientos</span>
      </article>
      <article>
        <strong>${noData.length}</strong>
        <span>locales sin datos cargados</span>
      </article>
      <article>
        <strong>${state.weeks.length}</strong>
        <span>semanas listas para ${escapeHtml(state.monthName)}</span>
      </article>
    </div>
    <div class="risk-list">
      ${topRisk.length ? topRisk.map((row) => `
        <button class="risk-item" type="button" data-search-store="${escapeAttr(row.store.code)}">
          <span>${escapeHtml(row.store.name)}</span>
          <strong>${row.complied}/${row.totalWeeks} · ${formatPercent(row.percent)}</strong>
        </button>
      `).join("") : `<p class="empty-note">No hay locales en riesgo con los datos actuales.</p>`}
    </div>
  `;
}

function renderStats() {
  const summaries = state.stores.map(getStoreSummary);
  const totalChecks = summaries.reduce((sum, row) => sum + row.totalWeeks, 0);
  const totalComplies = summaries.reduce((sum, row) => sum + row.complied, 0);
  const monthlyComplies = summaries.filter((row) => row.monthlyComplies).length;
  const monthlyPercent = state.stores.length ? monthlyComplies / state.stores.length : 0;
  const weeklyPercent = totalChecks ? totalComplies / totalChecks : 0;
  const totalWithoutDispute = summaries.reduce((sum, row) => sum + row.totals.withoutDispute, 0);

  const stats = [
    ["Locales", state.stores.length, `${state.weeks.length} semanas listas`],
    ["Cumplen todo el mes", `${monthlyComplies}/${state.stores.length}`, formatPercent(monthlyPercent)],
    ["Cumplimiento semanal", `${totalComplies}/${totalChecks}`, formatPercent(weeklyPercent)],
    ["Total sin disputas", formatNumber(totalWithoutDispute), `Limite semanal: ${state.threshold}`]
  ];

  els.stats.innerHTML = stats.map(([label, value, note]) => `
    <article class="stat-card">
      <div class="stat-label">${escapeHtml(label)}</div>
      <div class="stat-value">${escapeHtml(value)}</div>
      <div class="stat-note">${escapeHtml(note)}</div>
    </article>
  `).join("");
}

function renderSummary() {
  const search = els.search.value.trim().toLowerCase();
  const summaries = state.stores
    .map(getStoreSummary)
    .filter(({ store }) => `${store.code} ${store.name}`.toLowerCase().includes(search));

  const headWeeks = state.weeks.map((week) => `<th>${escapeHtml(week.name)}</th>`).join("");
  els.summaryTable.querySelector("thead").innerHTML = `
    <tr>
      <th>Codigo</th>
      <th>Tienda</th>
      ${headWeeks}
      <th>Cumple</th>
      <th>% mensual</th>
      <th>P. incorrectos</th>
      <th>Dev. Uber</th>
      <th>Rechazadas</th>
      <th>Aprobadas</th>
      <th>Sin disputas</th>
      <th>Cumple mes?</th>
    </tr>
  `;

  const body = summaries.map((row) => {
    const weekCells = row.weeks.map(({ entry }) => `<td>${badge(entry.complies)}</td>`).join("");
    return `
      <tr>
        <td class="store-code">${escapeHtml(row.store.code)}</td>
        <td class="store-name">${escapeHtml(row.store.name)}</td>
        ${weekCells}
        <td class="num">${row.complied}/${row.totalWeeks}</td>
        <td>${progress(row.percent)}</td>
        <td class="num">${formatNumber(row.totals.incorrect)}</td>
        <td class="num">${formatNumber(row.totals.uberReturn)}</td>
        <td class="num">${formatNumber(row.totals.rejected)}</td>
        <td class="num">${formatNumber(row.totals.approved)}</td>
        <td class="num">${formatNumber(row.totals.withoutDispute)}</td>
        <td>${badge(row.monthlyComplies, row.totalWeeks === 0)}</td>
      </tr>
    `;
  }).join("");

  els.summaryTable.querySelector("tbody").innerHTML = body || `
    <tr><td class="empty-state" colspan="${10 + state.weeks.length}">No hay locales para mostrar.</td></tr>
  `;

  const totals = summaries.reduce((acc, row) => {
    acc.complied += row.complied;
    acc.totalWeeks += row.totalWeeks;
    acc.incorrect += row.totals.incorrect;
    acc.uberReturn += row.totals.uberReturn;
    acc.rejected += row.totals.rejected;
    acc.approved += row.totals.approved;
    acc.withoutDispute += row.totals.withoutDispute;
    return acc;
  }, { complied: 0, totalWeeks: 0, incorrect: 0, uberReturn: 0, rejected: 0, approved: 0, withoutDispute: 0 });

  const blankWeekFoot = state.weeks.map(() => "<td></td>").join("");
  els.summaryTable.querySelector("tfoot").innerHTML = `
    <tr>
      <td></td>
      <td>Total mostrado</td>
      ${blankWeekFoot}
      <td class="num">${totals.complied}/${totals.totalWeeks}</td>
      <td>${progress(totals.totalWeeks ? totals.complied / totals.totalWeeks : 0)}</td>
      <td class="num">${formatNumber(totals.incorrect)}</td>
      <td class="num">${formatNumber(totals.uberReturn)}</td>
      <td class="num">${formatNumber(totals.rejected)}</td>
      <td class="num">${formatNumber(totals.approved)}</td>
      <td class="num">${formatNumber(totals.withoutDispute)}</td>
      <td></td>
    </tr>
  `;
}

function progress(value) {
  const width = Math.max(0, Math.min(100, Math.round(value * 100)));
  return `
    <div class="progress" aria-label="${width}%">
      <div class="bar"><span style="width: ${width}%"></span></div>
      <strong>${width}%</strong>
    </div>
  `;
}

function renderWeekSelector() {
  els.weekSelect.innerHTML = state.weeks.map((week) => `
    <option value="${escapeAttr(week.id)}" ${week.id === selectedWeekId ? "selected" : ""}>${escapeHtml(week.name)}</option>
  `).join("");
}

function renderWeekEditor() {
  const week = getWeek();
  els.weekName.value = week?.name ?? "";
  document.getElementById("delete-week").disabled = state.weeks.length <= 1;

  if (!week) {
    els.weekTable.querySelector("tbody").innerHTML = `<tr><td class="empty-state" colspan="9">Crea una semana para empezar.</td></tr>`;
    els.weekTable.querySelector("tfoot").innerHTML = "";
    return;
  }

  const rows = state.stores.map((store) => {
    const entry = calcEntry(getEntry(week, store.code));
    return `
      <tr data-store-code="${escapeAttr(store.code)}">
        <td class="store-code">${escapeHtml(store.code)}</td>
        <td class="store-name">${escapeHtml(store.name)}</td>
        ${numberInput("incorrect", entry.incorrect)}
        ${numberInput("uberReturn", entry.uberReturn)}
        ${numberInput("rejected", entry.rejected)}
        ${numberInput("approved", entry.approved)}
        <td class="num">${entry.hasData ? formatNumber(entry.withoutDispute) : ""}</td>
        <td>${badge(entry.complies)}</td>
        <td class="row-actions"><button class="icon-action" data-action="delete-store" type="button" aria-label="Eliminar local ${escapeAttr(store.name)}">X</button></td>
      </tr>
    `;
  }).join("");

  els.weekTable.querySelector("tbody").innerHTML = rows || `
    <tr><td class="empty-state" colspan="9">Agrega locales para cargar la semana.</td></tr>
  `;

  renderWeekFooter(week);
}

function renderWeekFooter(week) {
  const total = week.entries.reduce((acc, raw) => {
    const entry = calcEntry(raw);
    if (entry.hasData) {
      acc.incorrect += toNumber(entry.incorrect);
      acc.uberReturn += toNumber(entry.uberReturn);
      acc.rejected += toNumber(entry.rejected);
      acc.approved += toNumber(entry.approved);
      acc.withoutDispute += entry.withoutDispute;
      acc.withData += 1;
      acc.complies += entry.complies ? 1 : 0;
    }
    return acc;
  }, { incorrect: 0, uberReturn: 0, rejected: 0, approved: 0, withoutDispute: 0, complies: 0, withData: 0 });

  els.weekTable.querySelector("tfoot").innerHTML = `
    <tr>
      <td></td>
      <td>Total semana</td>
      <td class="num">${formatNumber(total.incorrect)}</td>
      <td class="num">${formatNumber(total.uberReturn)}</td>
      <td class="num">${formatNumber(total.rejected)}</td>
      <td class="num">${formatNumber(total.approved)}</td>
      <td class="num">${formatNumber(total.withoutDispute)}</td>
      <td class="num">${total.complies}/${total.withData}</td>
      <td></td>
    </tr>
  `;
}

function numberInput(field, value) {
  return `
    <td>
      <input class="metric-input" data-field="${field}" type="number" min="0" step="1" value="${value ?? ""}">
    </td>
  `;
}

function addStore() {
  els.storeError.textContent = "";
  els.newStoreCode.value = "";
  els.newStoreName.value = "";
  els.storeDialog.showModal();
  els.newStoreCode.focus();
}

function saveStore(event) {
  event?.preventDefault();
  const code = els.newStoreCode.value.trim();
  const name = els.newStoreName.value.trim();
  if (!code || !name) {
    els.storeError.textContent = "Completa codigo y nombre.";
    return;
  }
  if (state.stores.some((store) => store.code === code)) {
    els.storeError.textContent = "Ese codigo ya existe.";
    return;
  }
  state.stores.push({ code, name });
  state.weeks.forEach((week) => {
    week.entries.push({ storeCode: code, incorrect: null, uberReturn: null, rejected: null, approved: null });
  });
  els.storeDialog.close();
  render();
}

function addWeek() {
  els.weekError.textContent = "";
  els.newWeekName.value = "";
  els.weekDialog.showModal();
  els.newWeekName.focus();
}

function saveWeek(event) {
  event?.preventDefault();
  const name = els.newWeekName.value.trim();
  if (!name) {
    els.weekError.textContent = "Escribe un nombre para la semana.";
    return;
  }
  const week = {
    id: makeId(name),
    name,
    entries: state.stores.map((store) => ({
      storeCode: store.code,
      incorrect: null,
      uberReturn: null,
      rejected: null,
      approved: null
    }))
  };
  state.weeks.push(week);
  selectedWeekId = week.id;
  els.weekDialog.close();
  render();
}

function deleteStore(code) {
  const store = state.stores.find((item) => item.code === code);
  if (!store) return;
  const entriesByWeek = state.weeks.map((week) => ({
    weekId: week.id,
    entry: clone(week.entries.find((entry) => entry.storeCode === code) || null)
  }));
  state.stores = state.stores.filter((item) => item.code !== code);
  state.weeks.forEach((week) => {
    week.entries = week.entries.filter((entry) => entry.storeCode !== code);
  });
  setUndo(`Local eliminado: ${store.name}`, () => {
    state.stores.push(store);
    state.stores.sort((a, b) => a.name.localeCompare(b.name, "es"));
    entriesByWeek.forEach(({ weekId, entry }) => {
      const week = state.weeks.find((item) => item.id === weekId);
      if (week && entry) week.entries.push(entry);
    });
    render();
  });
  render();
}

function deleteWeek() {
  if (state.weeks.length <= 1) return;
  const week = getWeek();
  const removedWeek = clone(week);
  const removedIndex = state.weeks.findIndex((item) => item.id === week.id);
  state.weeks = state.weeks.filter((item) => item.id !== week.id);
  selectedWeekId = state.weeks[0]?.id ?? "";
  setUndo(`Semana eliminada: ${week.name}`, () => {
    state.weeks.splice(Math.max(0, removedIndex), 0, removedWeek);
    selectedWeekId = removedWeek.id;
    render();
  });
  render();
}

function setUndo(message, action) {
  lastUndo = action;
  els.undoText.textContent = message;
  els.undoToast.hidden = false;
}

function clearUndo() {
  lastUndo = null;
  els.undoToast.hidden = true;
  els.undoText.textContent = "";
}

function exportJson() {
  saveState();
  const backup = {
    version: 2,
    currentMonthKey: state.monthKey,
    current: compactState(state),
    months: monthArchive
  };
  downloadFile(`respaldo-dlv-${safeFileName(state.monthName)}.json`, JSON.stringify(backup, null, 2), "application/json");
}

function exportCsv() {
  const report = buildMonthlyReport();
  downloadFile(`resumen-mensual-dlv-${safeFileName(state.monthName)}.html`, report, "text/html;charset=utf-8");
}

function exportXls() {
  const workbookHtml = buildExcelWorkbookHtml();
  downloadFile(`planilla-dlv-${safeFileName(state.monthName)}.xls`, workbookHtml, "application/vnd.ms-excel;charset=utf-8");
}

function buildMonthlyReport() {
  const summaries = state.stores.map(getStoreSummary);
  const totalWeeks = summaries.reduce((sum, row) => sum + row.totalWeeks, 0);
  const totalComplies = summaries.reduce((sum, row) => sum + row.complied, 0);
  const monthlyComplies = summaries.filter((row) => row.monthlyComplies).length;
  const totalWithoutDispute = summaries.reduce((sum, row) => sum + row.totals.withoutDispute, 0);
  const weeklyPercent = totalWeeks ? totalComplies / totalWeeks : 0;
  const monthPercent = state.stores.length ? monthlyComplies / state.stores.length : 0;
  const rows = summaries.map((summary) => `
    <tr>
      <td>${escapeHtml(summary.store.code)}</td>
      <td>${escapeHtml(summary.store.name)}</td>
      ${summary.weeks.map(({ entry }) => `<td><span class="${entry.complies === null ? "pill empty" : entry.complies ? "pill ok" : "pill bad"}">${entry.complies === null ? "Sin datos" : entry.complies ? "Cumple" : "No cumple"}</span></td>`).join("")}
      <td>${summary.complied}/${summary.totalWeeks}</td>
      <td><strong>${formatPercent(summary.percent)}</strong></td>
      <td>${formatNumber(summary.totals.incorrect)}</td>
      <td>${formatNumber(summary.totals.uberReturn)}</td>
      <td>${formatNumber(summary.totals.rejected)}</td>
      <td>${formatNumber(summary.totals.approved)}</td>
      <td>${formatNumber(summary.totals.withoutDispute)}</td>
      <td><span class="${summary.totalWeeks === 0 ? "pill empty" : summary.monthlyComplies ? "pill ok" : "pill bad"}">${summary.totalWeeks === 0 ? "Sin datos" : summary.monthlyComplies ? "Cumple" : "No cumple"}</span></td>
    </tr>
  `).join("");

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Resumen mensual DLV - ${escapeHtml(state.monthName)}</title>
  <style>
    body { margin: 0; background: #f7efe2; color: #45210c; font-family: Arial, Helvetica, sans-serif; }
    main { width: min(1280px, calc(100% - 32px)); margin: 0 auto; padding: 28px 0 40px; }
    header { display: flex; justify-content: space-between; gap: 18px; align-items: end; margin-bottom: 18px; border-bottom: 4px solid #d62300; padding-bottom: 14px; }
    h1 { margin: 0; font-size: 30px; }
    .eyebrow { margin: 0 0 4px; color: #d62300; font-size: 12px; font-weight: 800; text-transform: uppercase; }
    .date { color: #7b5130; font-weight: 700; }
    .cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 18px; }
    .card { background: #fffaf0; border: 1px solid #e8bf8f; border-radius: 8px; padding: 14px; }
    .label { color: #7b5130; font-size: 12px; font-weight: 800; text-transform: uppercase; }
    .value { margin-top: 6px; font-size: 28px; font-weight: 900; }
    table { width: 100%; border-collapse: collapse; background: #fffaf0; border: 1px solid #e8bf8f; }
    th, td { border-bottom: 1px solid #e8bf8f; padding: 8px; text-align: left; vertical-align: middle; }
    th { background: #502314; color: #fffaf0; font-size: 11px; text-transform: uppercase; }
    td { font-size: 13px; }
    .pill { display: inline-block; min-width: 74px; border-radius: 999px; padding: 4px 9px; text-align: center; font-size: 11px; font-weight: 900; }
    .ok { background: #e0f2d6; color: #197445; }
    .bad { background: #ffd9ca; color: #d62300; }
    .empty { background: #fff0bf; color: #8b5d00; }
    footer { margin-top: 14px; color: #7b5130; font-size: 12px; }
    @media print {
      body { background: #fff; }
      main { width: 100%; padding: 0; }
      .cards { grid-template-columns: repeat(4, 1fr); }
      th, td { padding: 6px; font-size: 10px; }
      .pill { min-width: 58px; padding: 3px 6px; font-size: 9px; }
    }
  </style>
</head>
<body>
  <main>
    <header>
      <div>
        <p class="eyebrow">Disputas Uber</p>
        <h1>Resumen mensual DLV</h1>
      </div>
      <div class="date">${escapeHtml(state.monthName)}</div>
    </header>
    <section class="cards">
      <article class="card"><div class="label">Locales</div><div class="value">${state.stores.length}</div></article>
      <article class="card"><div class="label">Cumplen mes</div><div class="value">${monthlyComplies}/${state.stores.length}</div><strong>${formatPercent(monthPercent)}</strong></article>
      <article class="card"><div class="label">Cumplimiento semanal</div><div class="value">${totalComplies}/${totalWeeks}</div><strong>${formatPercent(weeklyPercent)}</strong></article>
      <article class="card"><div class="label">Total sin disputas</div><div class="value">${formatNumber(totalWithoutDispute)}</div><strong>Limite: ${state.threshold}</strong></article>
    </section>
    <table>
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Tienda</th>
          ${state.weeks.map((week) => `<th>${escapeHtml(week.name)}</th>`).join("")}
          <th>Cumple</th>
          <th>% mensual</th>
          <th>P. incorrectos</th>
          <th>Dev. Uber</th>
          <th>Rechazadas</th>
          <th>Aprobadas</th>
          <th>Sin disputas</th>
          <th>Cumple mes?</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <footer>Informe generado desde Control mensual DLV.</footer>
  </main>
</body>
</html>`;
}

function buildExcelWorkbookHtml() {
  const summaries = state.stores.map(getStoreSummary);
  const weekHeaders = state.weeks.map((week) => `<th>${escapeHtml(week.name)}</th>`).join("");
  const rows = summaries.map((summary) => `
    <tr>
      <td style="mso-number-format:'\\@';">${escapeHtml(summary.store.code)}</td>
      <td>${escapeHtml(summary.store.name)}</td>
      ${summary.weeks.map(({ entry }) => `<td>${entry.complies === null ? "Sin datos" : entry.complies ? "Cumple" : "No cumple"}</td>`).join("")}
      <td>${summary.complied}</td>
      <td>${summary.totalWeeks}</td>
      <td>${formatPercent(summary.percent)}</td>
      <td>${summary.totals.incorrect}</td>
      <td>${summary.totals.uberReturn}</td>
      <td>${summary.totals.rejected}</td>
      <td>${summary.totals.approved}</td>
      <td>${summary.totals.withoutDispute}</td>
      <td>${summary.totalWeeks === 0 ? "Sin datos" : summary.monthlyComplies ? "Cumple" : "No cumple"}</td>
    </tr>
  `).join("");

  return `<!doctype html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
<head>
  <meta charset="utf-8">
  <!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Resumen mensual</x:Name><x:WorksheetOptions><x:FreezePanes/><x:FrozenNoSplit/><x:SplitHorizontal>1</x:SplitHorizontal><x:TopRowBottomPane>1</x:TopRowBottomPane></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
  <style>
    body { font-family: Arial, sans-serif; color: #45210c; }
    h1 { color: #502314; }
    table { border-collapse: collapse; }
    th { background: #502314; color: #fffaf0; font-weight: bold; }
    th, td { border: 1px solid #e8bf8f; padding: 6px; }
    .meta { background: #ffe3b5; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Resumen mensual DLV - ${escapeHtml(state.monthName)}</h1>
  <table>
    <tr><td class="meta">Limite sin disputar</td><td>${state.threshold}</td></tr>
    <tr><td class="meta">Locales</td><td>${state.stores.length}</td></tr>
    <tr><td class="meta">Semanas</td><td>${state.weeks.length}</td></tr>
  </table>
  <br>
  <table>
    <thead>
      <tr>
        <th>Codigo</th>
        <th>Tienda</th>
        ${weekHeaders}
        <th>Cumple semanas</th>
        <th>Semanas cargadas</th>
        <th>% mensual</th>
        <th>P. incorrectos</th>
        <th>Dev. Uber</th>
        <th>Disp. rechazadas</th>
        <th>Disp. aprobadas</th>
        <th>Sin disputas</th>
        <th>Cumple mes?</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>
</body>
</html>`;
}

function importJson(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (parsed.months && parsed.current) {
        monthArchive = parsed.months;
        state = normalizeState(parsed.current);
        saveArchive();
      } else {
        state = normalizeState(parsed);
        monthArchive[state.monthKey] = compactState(state);
        saveArchive();
      }
      selectedWeekId = state.weeks[0]?.id ?? "";
      render();
    } catch {
      alert("No se pudo importar el archivo. Revisa que sea un respaldo JSON de esta app.");
    }
  };
  reader.readAsText(file);
}

function downloadFile(fileName, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function safeFileName(value) {
  return String(value || "mes")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "mes";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

els.monthSelect.addEventListener("change", () => {
  saveState();
  const [year, month] = els.monthSelect.value.split("-").map(Number);
  applyMonth(new Date(year, month - 1, 1), state.stores);
  render();
});

els.threshold.addEventListener("input", () => {
  state.threshold = toNumber(els.threshold.value);
  render();
});

els.search.addEventListener("input", renderSummary);
els.insights.addEventListener("click", (event) => {
  const item = event.target.closest("[data-search-store]");
  if (!item) return;
  els.search.value = item.dataset.searchStore;
  renderSummary();
});
els.weekSelect.addEventListener("change", () => {
  selectedWeekId = els.weekSelect.value;
  renderWeekEditor();
});

els.weekName.addEventListener("input", () => {
  const week = getWeek();
  if (!week) return;
  week.name = els.weekName.value.trim() || "Semana sin nombre";
  renderWeekSelector();
  renderSummary();
  saveState();
});

els.weekTable.addEventListener("input", (event) => {
  const input = event.target.closest(".metric-input");
  if (!input) return;
  const row = input.closest("tr");
  const week = getWeek();
  const entry = getEntry(week, row.dataset.storeCode);
  entry[input.dataset.field] = toNullableNumber(input.value);
  const calculated = calcEntry(entry);
  row.cells[6].textContent = calculated.hasData ? formatNumber(calculated.withoutDispute) : "";
  row.cells[7].innerHTML = badge(calculated.complies);
  renderWeekFooter(week);
  renderStats();
  renderSummary();
  saveState();
});

els.weekTable.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action='delete-store']");
  if (!button) return;
  const row = button.closest("tr");
  deleteStore(row.dataset.storeCode);
});

document.getElementById("add-store").addEventListener("click", addStore);
document.getElementById("store-form").addEventListener("submit", saveStore);
document.getElementById("add-week").addEventListener("click", addWeek);
document.getElementById("week-form").addEventListener("submit", saveWeek);
document.getElementById("delete-week").addEventListener("click", deleteWeek);
document.getElementById("export-json").addEventListener("click", exportJson);
document.getElementById("export-csv").addEventListener("click", exportCsv);
document.getElementById("export-xls").addEventListener("click", exportXls);
document.getElementById("import-json").addEventListener("change", (event) => importJson(event.target.files[0]));
document.getElementById("reset-data").addEventListener("click", () => {
  applyMonth(new Date(), state.stores);
  render();
});

els.undoAction.addEventListener("click", () => {
  if (!lastUndo) return;
  const action = lastUndo;
  clearUndo();
  action();
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.closeDialog)?.close();
  });
});

render();
