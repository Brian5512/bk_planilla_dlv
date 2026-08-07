const STORAGE_KEY = "dlv-control-app-v1";

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
initialData.stores = sysdateInitialData.stores;
initialData.weeks = sysdateInitialData.weeks;

let state = loadState();
let selectedWeekId = state.weeks[0]?.id ?? "";

const els = {
  monthName: document.getElementById("month-name"),
  threshold: document.getElementById("threshold"),
  stats: document.getElementById("stats"),
  summaryTable: document.getElementById("summary-table"),
  weekSelect: document.getElementById("week-select"),
  weekName: document.getElementById("week-name"),
  weekTable: document.getElementById("week-table"),
  search: document.getElementById("search"),
  storeDialog: document.getElementById("store-dialog"),
  weekDialog: document.getElementById("week-dialog"),
  newStoreCode: document.getElementById("new-store-code"),
  newStoreName: document.getElementById("new-store-name"),
  newWeekName: document.getElementById("new-week-name"),
  storeError: document.getElementById("store-error"),
  weekError: document.getElementById("week-error")
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
  els.monthName.value = state.monthName;
  els.threshold.value = state.threshold;
  renderStats();
  renderSummary();
  renderWeekSelector();
  renderWeekEditor();
  saveState();
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
      <td>Total visible</td>
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

function saveStore() {
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

function saveWeek() {
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
  const confirmed = confirm(`Eliminar el local ${store.name}? Se quitara de todas las semanas.`);
  if (!confirmed) return;
  state.stores = state.stores.filter((item) => item.code !== code);
  state.weeks.forEach((week) => {
    week.entries = week.entries.filter((entry) => entry.storeCode !== code);
  });
  render();
}

function deleteWeek() {
  if (state.weeks.length <= 1) return;
  const week = getWeek();
  const confirmed = confirm(`Eliminar ${week.name}?`);
  if (!confirmed) return;
  state.weeks = state.weeks.filter((item) => item.id !== week.id);
  selectedWeekId = state.weeks[0]?.id ?? "";
  render();
}

function exportJson() {
  downloadFile(`dlv-control-${safeFileName(state.monthName)}.json`, JSON.stringify(state, null, 2), "application/json");
}

function exportCsv() {
  const headers = [
    "codigo",
    "tienda",
    ...state.weeks.map((week) => week.name),
    "cumple_semanas",
    "total_semanas",
    "porcentaje_mensual",
    "p_incorrectos",
    "dev_uber",
    "disp_rechazadas",
    "disp_aprobadas",
    "sin_disputas",
    "cumple_mes"
  ];

  const rows = state.stores.map((store) => {
    const summary = getStoreSummary(store);
    return [
      store.code,
      store.name,
      ...summary.weeks.map(({ entry }) => entry.complies ? "Cumple" : "No cumple"),
      summary.complied,
      summary.totalWeeks,
      formatPercent(summary.percent),
      summary.totals.incorrect,
      summary.totals.uberReturn,
      summary.totals.rejected,
      summary.totals.approved,
      summary.totals.withoutDispute,
      summary.monthlyComplies ? "Cumple" : "No cumple"
    ];
  });

  const csv = [headers, ...rows].map((row) => row.map(csvCell).join(";")).join("\n");
  downloadFile(`resumen-dlv-${safeFileName(state.monthName)}.csv`, csv, "text/csv;charset=utf-8");
}

function importJson(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = normalizeState(JSON.parse(reader.result));
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

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
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

els.monthName.addEventListener("input", () => {
  state.monthName = els.monthName.value;
  saveState();
});

els.threshold.addEventListener("input", () => {
  state.threshold = toNumber(els.threshold.value);
  render();
});

els.search.addEventListener("input", renderSummary);
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
document.getElementById("save-store").addEventListener("click", saveStore);
document.getElementById("add-week").addEventListener("click", addWeek);
document.getElementById("save-week").addEventListener("click", saveWeek);
document.getElementById("delete-week").addEventListener("click", deleteWeek);
document.getElementById("export-json").addEventListener("click", exportJson);
document.getElementById("export-csv").addEventListener("click", exportCsv);
document.getElementById("import-json").addEventListener("change", (event) => importJson(event.target.files[0]));
document.getElementById("reset-data").addEventListener("click", () => {
  const confirmed = confirm("Generar el mes actual? Esto reemplazara los datos actuales.");
  if (!confirmed) return;
  state = createSysdateInitialData();
  selectedWeekId = state.weeks[0]?.id ?? "";
  render();
});

render();
