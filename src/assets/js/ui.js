// ============================================================
//  UI INTERACTIONS – COMPLETE IMPLEMENTATION
//  Organised into logical sections for maintainability.
// ============================================================



// ============================================================
//  1. TOAST SYSTEM
// ============================================================
export function showNotification(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  const bgColor =
    type === "success"
      ? "bg-emerald-800"
      : type === "error"
        ? "bg-rose-800"
        : type === "warning"
          ? "bg-amber-800"
          : "bg-slate-900";
  toast.className = `pointer-events-auto ${bgColor} text-white text-sm px-4 py-3 rounded-xl shadow-2xl border border-slate-700/80 flex items-center gap-2.5 toast-enter`;
  toast.innerHTML = `<svg class="w-4 h-4 text-brand-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><span class="font-medium">${message}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.remove("toast-enter");
    toast.classList.add("toast-enter-active");
  });
  setTimeout(() => {
    toast.classList.remove("toast-enter-active");
    toast.classList.add("toast-exit");
    setTimeout(() => {
      toast.classList.add("toast-exit-active");
      setTimeout(() => toast.remove(), 200);
    }, 50);
  }, 3500);
}

// ============================================================
//  2. SIDEBAR & DRAWERS
// ============================================================
export function toggleMobileSidebar() {
  const sidebar = document.getElementById("mainSidebar");
  const backdrop = document.getElementById("mobileBackdrop");
  if (!sidebar) return;
  const isClosed = sidebar.classList.toggle("-translate-x-full");
  if (backdrop) backdrop.classList.toggle("hidden", isClosed);
  const toggleBtn = document.getElementById("mobileSidebarToggle");
  if (toggleBtn) toggleBtn.setAttribute("aria-expanded", !isClosed);
}

export function toggleWaffleDrawer() {
  const drawer = document.getElementById("waffleDrawer");
  if (!drawer) return;
  const isHidden = drawer.classList.toggle("hidden");
  const btn = document.getElementById("waffleBtn");
  if (btn) btn.setAttribute("aria-expanded", !isHidden);
}

export function toggleNotificationDrawer() {
  const drawer = document.getElementById("notificationDrawer");
  if (!drawer) return;
  const isHidden = drawer.classList.toggle("hidden");
  const btn = document.getElementById("notifBtn");
  if (btn) btn.setAttribute("aria-expanded", !isHidden);
}

// ============================================================
//  3. MODALS
// ============================================================
export function openReviewModal(title, body) {
  const modal = document.getElementById("reviewModal");
  if (!modal) return;
  document.getElementById("reviewModalTitle").innerText = title;
  document.getElementById("reviewModalBody").innerText = body;
  modal.classList.remove("hidden");
}

export function closeReviewModal() {
  const modal = document.getElementById("reviewModal");
  if (modal) modal.classList.add("hidden");
}

export function confirmModalApproval() {
  closeReviewModal();
  showNotification(
    "Official sign‑off recorded under Dr. Mateo R. Alcantara credentials.",
    "success"
  );
}

export function openSystemSettingsModal() {
  const modal = document.getElementById("systemSettingsModal");
  if (modal) modal.classList.remove("hidden");
}

export function closeSystemSettingsModal() {
  const modal = document.getElementById("systemSettingsModal");
  if (modal) modal.classList.add("hidden");
}

export function launchModule(moduleName) {
  toggleWaffleDrawer();
  showNotification("Launching " + moduleName + " subsystem…", "info");
}

export function confirmSignOut() {
  showNotification("Signing out… Redirecting to institutional SSO.", "warning");
}

// ============================================================
//  4. APPLICANT DRAWER
// ============================================================
export function openApplicantDrawer(
  name,
  id,
  program,
  exam,
  track,
  school,
  status
) {
  const drawer = document.getElementById("applicantDrawer");
  if (!drawer) return;
  document.getElementById("appDrawerName").innerText = name;
  document.getElementById("appDrawerID").innerText = id;
  document.getElementById("appDrawerProgram").innerText = program;
  document.getElementById("appDrawerExam").innerText = exam;
  document.getElementById("appDrawerTrack").innerText = track;
  document.getElementById("appDrawerSchool").innerText = school;
  document.getElementById("appDrawerStatus").innerText = status;
  drawer.classList.remove("hidden");
}

export function closeApplicantDrawer() {
  const drawer = document.getElementById("applicantDrawer");
  if (drawer) drawer.classList.add("hidden");
}

// ============================================================
//  5. QUEUE APPROVALS
// ============================================================
export function approveQueueItem(buttonEl, itemName) {
  if (!buttonEl) return;
  buttonEl.disabled = true;
  buttonEl.innerHTML = '<span class="spinner"></span> Processing…';
  setTimeout(() => {
    const card = buttonEl.closest(".queue-item, .action-card, tr");
    if (card) {
      card.style.opacity = "0.4";
      card.style.pointerEvents = "none";
    }
    buttonEl.innerHTML = "Approved ✓";
    buttonEl.className = "btn btn-secondary text-xs py-1 px-2.5";
    buttonEl.disabled = false;
    showNotification("Approved: " + itemName + ". Audit log updated.", "success");
  }, 600);
}

export function rejectQueueItem(buttonEl, itemName) {
  if (!buttonEl) return;
  if (!confirm(`Are you sure you want to reject "${itemName}"?`)) return;

  buttonEl.disabled = true;
  buttonEl.innerHTML = '<span class="spinner"></span> Rejecting…';
  setTimeout(() => {
    const card = buttonEl.closest(".approval-row, .queue-item, .action-card, tr");
    if (card) {
      card.style.opacity = "0.4";
      card.style.pointerEvents = "none";
      const badge = card.querySelector(".status-badge");
      if (badge) {
        badge.className = "status-badge status-badge--rejected";
        badge.textContent = "Rejected";
      }
    }
    buttonEl.innerHTML = "Rejected ✕";
    buttonEl.className = "btn btn-danger text-xs py-1 px-2.5";
    buttonEl.disabled = false;
    showNotification("Rejected: " + itemName + ". Reason noted.", "error");
  }, 600);
}

export function filterActionQueue(category, tabBtn) {
  document.querySelectorAll(".queue-tab").forEach((btn) => {
    btn.className = "queue-tab btn btn-secondary text-xs";
  });
  if (tabBtn) tabBtn.className = "queue-tab btn btn-primary text-xs";

  const items = document.querySelectorAll(".queue-item");
  let visibleCount = 0;
  items.forEach((item) => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "flex";
      visibleCount++;
    } else {
      item.style.display = "none";
    }
  });
  const emptyState = document.getElementById("queueEmptyState");
  if (emptyState) {
    if (visibleCount === 0) emptyState.classList.remove("hidden");
    else emptyState.classList.add("hidden");
  }
}

// ============================================================
//  6. ADMISSIONS FILTERS
// ============================================================
export function filterAdmissionsList(segment, buttonEl) {
  document.querySelectorAll(".adm-seg-btn").forEach((btn) => {
    btn.className =
      "adm-seg-btn px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900";
  });
  if (buttonEl)
    buttonEl.className =
      "adm-seg-btn px-3.5 py-1.5 rounded-lg bg-white text-slate-900 font-bold shadow-xs";

  const rows = document.querySelectorAll(".adm-row");
  rows.forEach((row) => {
    if (segment === "all" || row.classList.contains(segment)) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
  const emptyState = document.getElementById("undergradEmptyState");
  const visibleRows = document.querySelectorAll(
    '#undergradBody .adm-row:not([style*="display: none"])'
  );
  if (emptyState) {
    if (visibleRows.length === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  }
}

export function filterPostgradList(segment, buttonEl) {
  document.querySelectorAll(".post-seg-btn").forEach((btn) => {
    btn.className =
      "post-seg-btn px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900";
  });
  if (buttonEl)
    buttonEl.className =
      "post-seg-btn px-3.5 py-1.5 rounded-lg bg-white text-slate-900 font-bold shadow-xs";

  const rows = document.querySelectorAll(".post-row");
  rows.forEach((row) => {
    if (segment === "all" || row.classList.contains(segment)) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
  const emptyState = document.getElementById("postgradEmptyState");
  const visibleRows = document.querySelectorAll(
    '#postgradBody .post-row:not([style*="display: none"])'
  );
  if (emptyState) {
    if (visibleRows.length === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  }
}

export function openQuickActionModal(actionName) {
  showNotification("Opening " + actionName + " workflow…", "info");
}

// ============================================================
//  7. APPROVALS TABLE – ADVANCED FILTER + SORT
// ============================================================
let currentFilter = { category: "all", status: "all" };
let currentSort = { column: null, direction: "asc" };

export function filterApprovalsTable(category = null, status = null) {
  if (category !== null) currentFilter.category = category;
  if (status !== null) currentFilter.status = status;
  applyFiltersAndSort();
}

export function searchApprovalsTable(query) {
  const searchTerm = query.toLowerCase().trim();
  const table = document.querySelector("#approvalsTable");
  if (table) table.dataset.search = searchTerm;
  applyFiltersAndSort();
}

export function toggleAllApprovals(checkbox) {
  const checkboxes = document.querySelectorAll(".approval-checkbox");
  checkboxes.forEach((cb) => (cb.checked = checkbox.checked));
}

export function sortApprovalsTable(column) {
  if (currentSort.column === column) {
    currentSort.direction = currentSort.direction === "asc" ? "desc" : "asc";
  } else {
    currentSort.column = column;
    currentSort.direction = "asc";
  }

  document.querySelectorAll(".sort-header").forEach((th) => {
    th.classList.remove("sort-asc", "sort-desc");
    const arrow = th.querySelector(".sort-arrow");
    if (arrow) arrow.textContent = "";
  });

  const activeHeader = document.querySelector(
    `.sort-header[data-column="${column}"]`
  );
  if (activeHeader) {
    activeHeader.classList.add(
      currentSort.direction === "asc" ? "sort-asc" : "sort-desc"
    );
    const arrow = activeHeader.querySelector(".sort-arrow");
    if (arrow) arrow.textContent = currentSort.direction === "asc" ? " ▲" : " ▼";
  }

  applyFiltersAndSort();
}

function applyFiltersAndSort() {
  const rows = document.querySelectorAll(".approval-row");
  const tbody = document.getElementById("approvalsBody");
  const table = document.querySelector("#approvalsTable");
  const searchTerm = (table?.dataset?.search || "").toLowerCase();
  if (!tbody) return;

  let visibleRows = [];
  rows.forEach((row) => {
    const rowCategory = row.dataset.category;
    const rowStatus = row.dataset.status;
    const categoryMatch =
      currentFilter.category === "all" || rowCategory === currentFilter.category;
    const statusMatch =
      currentFilter.status === "all" || rowStatus === currentFilter.status;
    const textMatch =
      searchTerm === "" || row.textContent.toLowerCase().includes(searchTerm);

    if (categoryMatch && statusMatch && textMatch) {
      row.style.display = "";
      visibleRows.push(row);
    } else {
      row.style.display = "none";
    }
  });

  if (currentSort.column) {
    visibleRows.sort((a, b) => {
      let aVal = getCellValue(a, currentSort.column);
      let bVal = getCellValue(b, currentSort.column);

      if (
        currentSort.column === "submitted" ||
        currentSort.column === "deadline"
      ) {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }
      if (currentSort.column === "id") {
        aVal = parseInt(aVal.replace(/[^0-9]/g, ""));
        bVal = parseInt(bVal.replace(/[^0-9]/g, ""));
      }

      if (aVal < bVal) return currentSort.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return currentSort.direction === "asc" ? 1 : -1;
      return 0;
    });

    visibleRows.forEach((row) => tbody.appendChild(row));
  }

  updateCount(visibleRows.length);
}

function getCellValue(row, column) {
  const cells = row.querySelectorAll("td");
  const columnMap = {
    id: 1,
    type: 2,
    requester: 3,
    department: 4,
    submitted: 5,
    deadline: 6,
    status: 7,
  };
  const index = columnMap[column];
  if (index !== undefined && cells[index]) {
    return cells[index].textContent.trim();
  }
  return "";
}

function updateCount(visible) {
  const total = document.querySelectorAll(".approval-row").length;
  const countSpan = document.querySelector(".visible-count");
  if (countSpan) countSpan.textContent = visible;
  const totalSpan = document.querySelector(".total-count");
  if (totalSpan) totalSpan.textContent = total;
}

// ============================================================
//  8. KEYBOARD SHORTCUTS
// ============================================================
export function setupKeyboardShortcuts() {
  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      const search = document.getElementById("globalCommandSearch");
      if (search) search.focus();
    } else if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      const search = document.getElementById("globalCommandSearch");
      if (search) search.focus();
    } else if (e.key === "Escape") {
      closeReviewModal();
      closeSystemSettingsModal();
      closeApplicantDrawer();
      const waffle = document.getElementById("waffleDrawer");
      if (waffle && !waffle.classList.contains("hidden"))
        waffle.classList.add("hidden");
      const notif = document.getElementById("notificationDrawer");
      if (notif && !notif.classList.contains("hidden"))
        notif.classList.add("hidden");
      const sidebar = document.getElementById("mainSidebar");
      if (sidebar && !sidebar.classList.contains("-translate-x-full")) {
        toggleMobileSidebar();
      }
    }
  });
}

// ============================================================
//  9. ADDITIONAL ADMISSIONS FUNCTIONS
// ============================================================
export function searchAdmissionsTable(query) {
  const rows = document.querySelectorAll("#undergradBody .adm-row");
  const searchTerm = query.toLowerCase().trim();
  let visibleCount = 0;
  rows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    if (searchTerm === "" || text.includes(searchTerm)) {
      row.style.display = "";
      visibleCount++;
    } else {
      row.style.display = "none";
    }
  });
  updateAdmissionsCount("undergrad", visibleCount);
  const emptyState = document.getElementById("undergradEmptyState");
  const visibleRows = document.querySelectorAll(
    '#undergradBody .adm-row:not([style*="display: none"])'
  );
  if (emptyState) {
    if (visibleRows.length === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  }
}

export function filterAdmissionsProgram(program) {
  const rows = document.querySelectorAll("#undergradBody .adm-row");
  let visibleCount = 0;
  rows.forEach((row) => {
    const rowProgram = row.dataset.program;
    if (program === "all" || rowProgram === program) {
      row.style.display = "";
      visibleCount++;
    } else {
      row.style.display = "none";
    }
  });
  updateAdmissionsCount("undergrad", visibleCount);
  const emptyState = document.getElementById("undergradEmptyState");
  const visibleRows = document.querySelectorAll(
    '#undergradBody .adm-row:not([style*="display: none"])'
  );
  if (emptyState) {
    if (visibleRows.length === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  }
}

export function filterPostgradProgram(program) {
  const rows = document.querySelectorAll("#postgradBody .post-row");
  let visibleCount = 0;
  rows.forEach((row) => {
    const rowProgram = row.dataset.program;
    if (program === "all" || rowProgram === program) {
      row.style.display = "";
      visibleCount++;
    } else {
      row.style.display = "none";
    }
  });
  updateAdmissionsCount("postgrad", visibleCount);
  const emptyState = document.getElementById("postgradEmptyState");
  const visibleRows = document.querySelectorAll(
    '#postgradBody .post-row:not([style*="display: none"])'
  );
  if (emptyState) {
    if (visibleRows.length === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  }
}

function updateAdmissionsCount(type, visible) {
  const total = document.querySelectorAll(
    type === "undergrad"
      ? "#undergradBody .adm-row"
      : "#postgradBody .post-row"
  ).length;
  const prefix = type === "undergrad" ? "#undergrad" : "#postgrad";
  const countSpan = document.querySelector(`${prefix} .visible-count`);
  const totalSpan = document.querySelector(`${prefix} .total-count`);
  if (countSpan) countSpan.textContent = visible;
  if (totalSpan) totalSpan.textContent = total;
}

export function switchAdmissionsTab(tabId) {
  const panels = [
    "Undergrad",
    "Postgrad",
    "StudentCreation",
    "Import",
    "Statistics",
  ];
  panels.forEach((p) => {
    const el = document.getElementById("admPanel" + p);
    if (el) el.classList.add("hidden");
  });

  document.querySelectorAll(".adm-tab").forEach((btn) => {
    btn.className = "adm-tab btn btn-secondary text-xs shrink-0";
  });

  const map = {
    undergrad: {
      panel: "Undergrad",
      tab: "admTabUndergrad",
      label: "Undergrad",
    },
    postgrad: { panel: "Postgrad", tab: "admTabPostgrad", label: "Postgrad" },
    "student-creation": {
      panel: "StudentCreation",
      tab: "admTabStudentCreation",
      label: "Student Creation",
    },
    import: { panel: "Import", tab: "admTabImport", label: "Import Data" },
    statistics: {
      panel: "Statistics",
      tab: "admTabStatistics",
      label: "Statistics",
    },
  };

  const target = map[tabId];
  if (target) {
    document.getElementById("admPanel" + target.panel).classList.remove("hidden");
    const tabBtn = document.getElementById(target.tab);
    if (tabBtn) {
      tabBtn.className =
        "adm-tab btn btn-primary text-xs shrink-0 flex items-center gap-2";
    }
  }
}

export function admitApplicant(buttonEl, applicantName) {
  if (!buttonEl) return;
  if (!confirm(`Confirm admission for ${applicantName}?`)) return;

  buttonEl.disabled = true;
  buttonEl.innerHTML = '<span class="spinner"></span> Processing…';
  setTimeout(() => {
    const row = buttonEl.closest("tr");
    if (row) {
      row.style.opacity = "0.7";
      row.style.transition = "opacity 0.3s";
      const badge = row.querySelector(".status-badge");
      if (badge) {
        badge.className = "status-badge status-badge--approved";
        badge.textContent = "Official Registry";
      }
      const cells = row.querySelectorAll("td");
      if (cells.length >= 8) {
        const admittedCell = cells[7];
        admittedCell.innerHTML =
          '<span class="text-xs font-mono text-slate-700">Dr. Mateo Alcantara</span>';
      }
      const actionsCell = cells[cells.length - 1];
      actionsCell.innerHTML = `
                <div class="flex items-center justify-end gap-1.5 flex-nowrap">
                    <button type="button" onclick="openApplicantDrawer('${applicantName}','${row.querySelector(".font-mono")?.textContent || ""}','${row.querySelector("td:nth-child(4)")?.textContent || ""}','${row.querySelector(".font-mono.font-bold.text-emerald-700")?.textContent || ""}','${row.querySelector("td:nth-child(5) .text-xs")?.textContent || ""}','${row.querySelector("td:nth-child(5)")?.textContent?.trim() || ""}','Official Registry')" class="btn btn-secondary text-xs py-1 px-2">View</button>
                    <button type="button" onclick="showNotification('Docket printed for ${applicantName}.')" class="btn btn-secondary text-xs py-1 px-2">Print</button>
                </div>
            `;
    }
    buttonEl.innerHTML = "Admitted ✓";
    buttonEl.className = "btn btn-success text-xs py-1 px-2";
    buttonEl.disabled = false;
    showNotification(`${applicantName} successfully admitted!`, "success");
  }, 800);
}

export function toggleAllAdmissions(checkbox, bodyId) {
  const tbody = document.getElementById(bodyId);
  if (!tbody) return;
  const checkboxes = tbody.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((cb) => (cb.checked = checkbox.checked));
}

// ============================================================
//  10. MANAGE HUB FUNCTIONS
// ============================================================
export function filterManageTiles(query) {
  const tiles = document.querySelectorAll(".manage-tile");
  const searchTerm = query.toLowerCase().trim();
  let visible = 0;
  tiles.forEach((tile) => {
    const text = tile.textContent.toLowerCase();
    if (searchTerm === "" || text.includes(searchTerm)) {
      tile.style.display = "";
      visible++;
    } else {
      tile.style.display = "none";
    }
  });
  document.getElementById("manageCount").textContent = visible + " modules";
}

export function filterManageCategory(category) {
  const tiles = document.querySelectorAll(".manage-tile");
  let visible = 0;
  tiles.forEach((tile) => {
    const tileCategory = tile.dataset.category;
    if (category === "all" || tileCategory === category) {
      tile.style.display = "";
      visible++;
    } else {
      tile.style.display = "none";
    }
  });
  document.getElementById("manageCount").textContent = visible + " modules";
}

export function resetManageFilters() {
  document.getElementById("manageSearch").value = "";
  document
    .querySelector("#manageGrid")
    .querySelectorAll(".manage-tile")
    .forEach((t) => (t.style.display = ""));
  document.querySelector(".select-field").value = "all";
  document.getElementById("manageCount").textContent = "17 modules";
}

// ============================================================
//  11. TOOLTIP SYSTEM
// ============================================================
let tooltipTimeout = null;

export function initTooltips() {
  const tooltipTriggers = document.querySelectorAll("[data-tooltip]");
  const tooltipEl = document.createElement("div");
  tooltipEl.id = "globalTooltip";
  tooltipEl.className =
    "fixed z-50 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg border border-slate-700/80 pointer-events-none transition-opacity duration-150 opacity-0 max-w-xs";
  document.body.appendChild(tooltipEl);

  // Helper: check if sidebar is collapsed
  function isSidebarCollapsed() {
    const sidebar = document.getElementById("mainSidebar");
    return sidebar && sidebar.classList.contains("collapsed");
  }

  // Helper: check if element is inside the sidebar
  function isInsideSidebar(el) {
    return el.closest && el.closest('#mainSidebar');
  }

  tooltipTriggers.forEach((el) => {
    const showTooltip = (e) => {
      // ----- CRITICAL CHANGE -----
      // If the element is INSIDE the sidebar, ONLY show when sidebar is collapsed.
      // If the element is OUTSIDE the sidebar, ALWAYS show (no restriction).
      if (isInsideSidebar(el) && !isSidebarCollapsed()) {
        tooltipEl.classList.add("opacity-0");
        return;
      }
      // ----- END CHANGE -----

      clearTimeout(tooltipTimeout);
      const text = el.getAttribute("data-tooltip");
      if (!text) return;
      tooltipEl.textContent = text;
      tooltipEl.classList.remove("opacity-0");
      const rect = el.getBoundingClientRect();
      const top = rect.top - tooltipEl.offsetHeight - 8;
      const left = rect.left + rect.width / 2 - tooltipEl.offsetWidth / 2;
      tooltipEl.style.top = Math.max(8, top) + "px";
      tooltipEl.style.left = Math.max(8, left) + "px";
    };

    const hideTooltip = () => {
      tooltipTimeout = setTimeout(() => {
        tooltipEl.classList.add("opacity-0");
      }, 150);
    };

    el.addEventListener("mouseenter", showTooltip);
    el.addEventListener("mouseleave", hideTooltip);
    el.addEventListener("focus", showTooltip);
    el.addEventListener("blur", hideTooltip);
    el._tooltipCleanup = () => {
      el.removeEventListener("mouseenter", showTooltip);
      el.removeEventListener("mouseleave", hideTooltip);
      el.removeEventListener("focus", showTooltip);
      el.removeEventListener("blur", hideTooltip);
    };
  });

  // Click behavior – also check sidebar scope
  tooltipTriggers.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.stopPropagation();

      // ----- CRITICAL CHANGE -----
      if (isInsideSidebar(el) && !isSidebarCollapsed()) {
        tooltipEl.classList.add("opacity-0");
        return;
      }
      // ----- END CHANGE -----

      const text = this.getAttribute("data-tooltip");
      if (!text) return;
      const tooltip = document.getElementById("globalTooltip");
      if (
        tooltip.classList.contains("opacity-0") === false &&
        tooltip.textContent === text
      ) {
        tooltip.classList.add("opacity-0");
        return;
      }
      tooltip.textContent = text;
      tooltip.classList.remove("opacity-0");
      const rect = this.getBoundingClientRect();
      const top = rect.top - tooltip.offsetHeight - 8;
      const left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2;
      tooltip.style.top = Math.max(8, top) + "px";
      tooltip.style.left = Math.max(8, left) + "px";
    });
  });
}

// ============================================================
//  12. HELP MODAL
// ============================================================
export function openHelpModal() {
  const modal = document.getElementById("helpModal");
  if (modal) modal.classList.remove("hidden");
}

export function closeHelpModal() {
  const modal = document.getElementById("helpModal");
  if (modal) modal.classList.add("hidden");
}

// ============================================================
//  13. ACADEMIC FUNCTIONS (with "All" tab support)
// ============================================================
export function switchAcademicTab(tabId) {
  const panels = ["All", "Structure", "Policies", "Calendar", "Institution"];
  panels.forEach((p) => {
    const el = document.getElementById("acadPanel" + p);
    if (el) el.classList.add("hidden");
  });

  document.querySelectorAll(".acad-tab").forEach((btn) => {
    btn.className = "acad-tab btn btn-secondary text-xs shrink-0";
  });

  const map = {
    all: { panel: "All", tab: "acadTabAll" },
    structure: { panel: "Structure", tab: "acadTabStructure" },
    policies: { panel: "Policies", tab: "acadTabPolicies" },
    calendar: { panel: "Calendar", tab: "acadTabCalendar" },
    institution: { panel: "Institution", tab: "acadTabInstitution" },
  };

  const target = map[tabId];
  if (target) {
    const panel = document.getElementById("acadPanel" + target.panel);
    if (panel) panel.classList.remove("hidden");
    const tabBtn = document.getElementById(target.tab);
    if (tabBtn) {
      tabBtn.className =
        "acad-tab btn btn-primary text-xs shrink-0 flex items-center gap-2";
    }
    localStorage.setItem("academicTab", tabId);

    // Update count
    const activePanel = document.getElementById("acadPanel" + target.panel);
    let tiles = [];
    if (activePanel) {
      const grid = activePanel.querySelector('[id$="Grid"]');
      if (grid) tiles = Array.from(grid.querySelectorAll(".acad-tile"));
      if (tiles.length === 0) {
        const list = activePanel.querySelector('[id$="List"]');
        if (list) tiles = Array.from(list.querySelectorAll("tbody tr"));
      }
    }
    const countEl = document.getElementById("acadCount");
    if (countEl) countEl.textContent = tiles.length + " modules";
  }
}

export function setAcademicView(view) {
  const panels = ["All", "Structure", "Policies", "Calendar", "Institution"];
  panels.forEach((p) => {
    const grid = document.getElementById(p.toLowerCase() + "Grid");
    const list = document.getElementById(p.toLowerCase() + "List");
    if (grid && list) {
      if (view === "grid") {
        grid.classList.remove("hidden");
        list.classList.add("hidden");
      } else {
        grid.classList.add("hidden");
        list.classList.remove("hidden");
      }
    }
  });

  const gridBtn = document.getElementById("gridViewBtn");
  const listBtn = document.getElementById("listViewBtn");
  if (gridBtn && listBtn) {
    if (view === "grid") {
      gridBtn.className =
        "text-brand-600 hover:text-brand-700 transition-colors p-1";
      listBtn.className =
        "text-slate-400 hover:text-brand-600 transition-colors p-1";
    } else {
      gridBtn.className =
        "text-slate-400 hover:text-brand-600 transition-colors p-1";
      listBtn.className =
        "text-brand-600 hover:text-brand-700 transition-colors p-1";
    }
  }

  localStorage.setItem("academicView", view);

  // Update count after view change
  const searchInput = document.getElementById("academicSearch");
  if (searchInput) {
    filterAcademicModules(searchInput.value);
  } else {
    filterAcademicModules("");
  }
}

export function filterAcademicModules(query) {
  const search = query.toLowerCase().trim();

  // Find the active panel
  const activePanel = document.querySelector('[id^="acadPanel"]:not(.hidden)');
  if (!activePanel) return;

  // Get tiles from the active panel
  const grid = activePanel.querySelector('[id$="Grid"]');
  const list = activePanel.querySelector('[id$="List"]');
  let tiles = [];

  if (grid) {
    tiles = Array.from(grid.querySelectorAll(".acad-tile"));
  } else if (list) {
    tiles = Array.from(list.querySelectorAll("tbody tr"));
  }

  let visible = 0;
  tiles.forEach((tile) => {
    const text = tile.textContent.toLowerCase();
    if (search === "" || text.includes(search)) {
      tile.style.display = "";
      visible++;
    } else {
      tile.style.display = "none";
    }
  });

  const countEl = document.getElementById("acadCount");
  if (countEl) {
    if (visible === tiles.length) {
      countEl.textContent = tiles.length + " modules";
    } else {
      countEl.textContent = visible + " of " + tiles.length + " modules";
    }
  }
}

export function resetAcademicFilters() {
  const searchInput = document.getElementById("academicSearch");
  if (searchInput) searchInput.value = "";

  // Reset all tiles in the active panel
  const activePanel = document.querySelector('[id^="acadPanel"]:not(.hidden)');
  if (activePanel) {
    const grid = activePanel.querySelector('[id$="Grid"]');
    const list = activePanel.querySelector('[id$="List"]');
    let tiles = [];
    if (grid) tiles = Array.from(grid.querySelectorAll(".acad-tile"));
    else if (list) tiles = Array.from(list.querySelectorAll("tbody tr"));

    tiles.forEach((t) => (t.style.display = ""));

    const countEl = document.getElementById("acadCount");
    if (countEl) countEl.textContent = tiles.length + " modules";
  }

  if (searchInput) searchInput.focus();
}

// ============================================================
//  14. DYNAMIC TABLE RENDERERS
// ============================================================
export function renderUndergradTable(tbodyId, studentsData) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;

  const statuses = ["Pre-Admission", "Official Registry"];
  const tracks = ["ABM", "STEM", "HUMSS", "TVL"];
  const schools = [
    "St. Paul College",
    "La Salle College",
    "Negros Occidental High",
    "Batangas High",
    "Iloilo High",
    "City National High",
    "Provincial Science High",
    "Manila Academic Center",
    "Southridge Institute",
    "St. Scholastica College",
    "Laguna Agricultural High",
    "Pasig Integrated School",
    "Davao Regional High",
    "Quezon City Science High",
    "Manila High",
    "Calamba High",
    "Tondo High",
    "Kawit High",
    "Bulacan Agri High",
  ];
  const programs = [
    "BS Accountancy",
    "BS Accounting Tech",
    "Diploma Ag Tech",
    "ABMT Entrepreneurship",
    "Juris Doctor",
  ];

  let html = "";
  studentsData.forEach((student, index) => {
    const status = statuses[index % statuses.length];
    const track = tracks[index % tracks.length];
    const school = schools[index % schools.length];
    const program = programs[index % programs.length];
    const examScore = (75 + Math.random() * 25).toFixed(1);
    const isPending = status === "Pre-Admission";
    const isOfficial = status === "Official Registry";
    const badgeClass = isPending
      ? "status-badge--pending"
      : "status-badge--approved";
    const admittedBy = isOfficial ? "Dr. Mateo Alcantara" : "—";
    const lrn = `10982347${String(1000 + index).padStart(4, "0")}`;
    const appId = `ADM-2021-${String(1000 + index).padStart(4, "0")}`;

    html += `
            <tr class="adm-row ${isPending ? "preadmission" : "official"}" data-program="${program}" data-admission-id="${appId}">
                <td class="p-3"><input type="checkbox" class="rounded border-slate-300 text-brand-600" onchange="toggleAdmissionCheckbox(this, this.closest('tr'))" /></td>
                <td class="p-3"><span class="font-mono font-bold text-slate-900">${appId}</span><br><span class="text-xs text-slate-400 font-mono">LRN: ${lrn}</span></td>
                <td class="p-3"><span class="font-bold text-slate-900">${student.name}</span><br><span class="text-xs text-slate-500">${student.name.toLowerCase().replace(" ", ".")}@email.com</span></td>
                <td class="p-3">${program}</td>
                <td class="p-3"><span class="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-semibold">${track}</span></td>
                <td class="p-3"><span class="font-mono font-bold ${parseFloat(examScore) > 85 ? "text-emerald-700 bg-emerald-50" : "text-amber-700 bg-amber-50"} px-2 py-0.5 rounded border border-${parseFloat(examScore) > 85 ? "emerald-200" : "amber-200"}">${examScore}%</span></td>
                <td class="p-3"><span class="status-badge ${badgeClass}">${status}</span></td>
                <td class="p-3 text-xs text-slate-500">${admittedBy}</td>
                <td class="p-3 text-right space-x-1">
                    <button type="button" onclick="openApplicantDrawer('${student.name}','${appId}','${program}','${examScore}%','${track}','${school}','${status}')" class="btn btn-secondary text-xs py-1 px-2">View</button>
                    ${isPending ? `<button type="button" onclick="admitApplicant(this, '${student.name}')" class="btn btn-primary text-xs py-1 px-2">Admit</button>` : `<button type="button" onclick="showNotification('Docket printed.')" class="btn btn-secondary text-xs py-1 px-2">Print</button>`}
                </td>
            </tr>
        `;
  });

  html += `
        <tr id="undergradEmptyState" class="hidden">
            <td colspan="9" class="p-8 text-center text-slate-500">
                <div class="flex flex-col items-center gap-2">
                    <svg class="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="font-bold text-slate-700">No applicants match your filters</p>
                    <p class="text-sm">Try adjusting your search or filter criteria.</p>
                </div>
            </td>
        </tr>
    `;
  tbody.innerHTML = html;
}

export function renderPostgradTable(tbodyId, postgradData) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;

  let html = "";
  postgradData.forEach((candidate) => {
    const statusClass =
      candidate.status === "Official"
        ? "status-badge--approved"
        : candidate.status === "Interview"
          ? "status-badge--review"
          : "status-badge--pending";
    const actionLabel =
      candidate.status === "Official"
        ? "View Docket"
        : candidate.status === "Interview"
          ? "Schedule"
          : candidate.status === "Screening"
            ? "Grant Clearance"
            : "Verify";
    const actionHandler =
      candidate.status === "Official"
        ? `showNotification('Docket opened.')`
        : `openReviewModal('${candidate.name}', '${candidate.reviewNote}')`;

    html += `
            <tr class="post-row ${candidate.status.toLowerCase()}" data-program="${candidate.program}">
                <td class="p-3 font-mono font-bold text-slate-900">${candidate.id}</td>
                <td class="p-3 font-bold text-slate-900">${candidate.name}</td>
                <td class="p-3 text-slate-700">${candidate.bachelorOrigin}</td>
                <td class="p-3"><span class="status-badge ${candidate.eligibility.includes("Passer") || candidate.eligibility.includes("Top") || candidate.eligibility.includes("Certified") ? "status-badge--approved" : "status-badge--review"}">${candidate.eligibility}</span></td>
                <td class="p-3 font-mono font-bold text-emerald-700">${candidate.rating}</td>
                <td class="p-3"><span class="status-badge ${statusClass}">${candidate.status}</span></td>
                <td class="p-3 text-right">
                    <button type="button" onclick="${actionHandler}" class="btn btn-primary text-xs py-1 px-2">${actionLabel}</button>
                    ${candidate.status === "Official" ? "" : `<button type="button" onclick="showNotification('Skipped for now.')" class="btn btn-secondary text-xs py-1 px-2">Skip</button>`}
                </td>
            </tr>
        `;
  });

  html += `
        <tr id="postgradEmptyState" class="hidden">
            <td colspan="7" class="p-8 text-center text-slate-500">
                <div class="flex flex-col items-center gap-2">
                    <svg class="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="font-bold text-slate-700">No postgrad candidates match your filters</p>
                </div>
            </td>
        </tr>
    `;
  tbody.innerHTML = html;
}

// ============================================================
//  15. BULK ACTION BAR
// ============================================================
let selectedAdmissions = [];

export function toggleAdmissionCheckbox(checkbox, row) {
  const id =
    row.dataset.admissionId || row.querySelector(".font-mono")?.textContent || "";
  if (checkbox.checked) {
    if (!selectedAdmissions.includes(id)) selectedAdmissions.push(id);
  } else {
    selectedAdmissions = selectedAdmissions.filter((s) => s !== id);
  }
  updateAdmissionsBulkBar();
}

function updateAdmissionsBulkBar() {
  const bar = document.getElementById("admissionsBulkBar");
  const countEl = document.getElementById("bulkCount");
  if (!bar) return;
  if (selectedAdmissions.length > 0) {
    bar.classList.remove("hidden");
    countEl.textContent = selectedAdmissions.length;
  } else {
    bar.classList.add("hidden");
  }
}

export function bulkAdmitAdmissions() {
  if (selectedAdmissions.length === 0) return;
  if (!confirm(`Admit ${selectedAdmissions.length} selected applicants?`))
    return;
  const ids = [...selectedAdmissions];
  ids.forEach((id) => {
    const row = document.querySelector(`tr[data-admission-id="${id}"]`);
    if (row) {
      const admitBtn = row.querySelector('button[onclick*="admitApplicant"]');
      if (admitBtn) admitBtn.click();
    }
  });
  selectedAdmissions = [];
  updateAdmissionsBulkBar();
  showNotification(`Bulk admission initiated.`, "success");
}

export function bulkExportAdmissions() {
  if (selectedAdmissions.length === 0) return;
  showNotification(
    `Exporting ${selectedAdmissions.length} applicant records as CSV…`,
    "info"
  );
  selectedAdmissions = [];
  updateAdmissionsBulkBar();
}

// ============================================================
//  16. COLLEGES SUBMODULE
// ============================================================
let collegesData = [];
let currentCollegeSort = { column: 'id', direction: 'asc' };

export function initColleges(data) {
    collegesData = data || [];
    renderColleges();
}

export function renderColleges() {
    const tbody = document.getElementById('collegesBody');
    if (!tbody) return;
    
    const search = document.getElementById('collegeSearch')?.value?.toLowerCase()?.trim() || '';
    let filtered = collegesData.filter(c =>
        c.name?.toLowerCase().includes(search) ||
        c.dean?.toLowerCase().includes(search) ||
        c.code?.toLowerCase().includes(search)
    );

    if (currentCollegeSort.column) {
        filtered.sort((a, b) => {
            let aVal = a[currentCollegeSort.column];
            let bVal = b[currentCollegeSort.column];
            if (typeof aVal === 'string') aVal = aVal.toLowerCase();
            if (typeof bVal === 'string') bVal = bVal.toLowerCase();
            if (aVal < bVal) return currentCollegeSort.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return currentCollegeSort.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }

    const emptyState = document.getElementById('collegesEmptyState');
    if (filtered.length === 0) {
        if (emptyState) emptyState.classList.remove('hidden');
        tbody.innerHTML = '';
    } else {
        if (emptyState) emptyState.classList.add('hidden');
        tbody.innerHTML = filtered.map((c, i) => `
            <tr>
                <td class="p-3">${i + 1}</td>
                <td class="p-3 font-bold text-slate-900">${c.name}</td>
                <td class="p-3">${c.dean}</td>
                <td class="p-3 font-mono text-slate-600">${c.code}</td>
                <td class="p-3 text-center">${c.programs}</td>
                <td class="p-3"><span class="status-badge ${c.status === 'Active' ? 'status-badge--approved' : 'status-badge--hold'}">${c.status}</span></td>
                <td class="p-3 text-right space-x-1">
                    <button onclick="editCollege(${c.id})" class="btn btn-secondary text-xs py-1 px-2">Edit</button>
                    <button onclick="deleteCollege(${c.id})" class="btn btn-danger text-xs py-1 px-2">Delete</button>
                </td>
            </tr>
        `).join('');
    }

    const countEl = document.getElementById('collegeCount');
    if (countEl) {
        countEl.textContent = filtered.length + ' college' + (filtered.length !== 1 ? 's' : '');
    }
}

export function filterColleges() {
    renderColleges();
}

export function resetCollegeSearch() {
    const searchInput = document.getElementById('collegeSearch');
    if (searchInput) searchInput.value = '';
    renderColleges();
}

export function sortColleges(column) {
    if (currentCollegeSort.column === column) {
        currentCollegeSort.direction = currentCollegeSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentCollegeSort.column = column;
        currentCollegeSort.direction = 'asc';
    }
    document.querySelectorAll('.sort-header').forEach(th => {
        th.classList.remove('sort-asc', 'sort-desc');
        const arrow = th.querySelector('.sort-arrow');
        if (arrow) arrow.textContent = '↕';
    });
    const activeHeader = document.querySelector(`.sort-header[data-column="${column}"]`);
    if (activeHeader) {
        activeHeader.classList.add(currentCollegeSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
        const arrow = activeHeader.querySelector('.sort-arrow');
        if (arrow) arrow.textContent = currentCollegeSort.direction === 'asc' ? ' ▲' : ' ▼';
    }
    renderColleges();
}

export function openAddCollegeModal() {
    const modal = document.getElementById('collegeModal');
    if (!modal) return;
    document.getElementById('collegeModalTitle').textContent = 'Add New College';
    document.getElementById('editCollegeId').value = '';
    document.getElementById('collegeForm').reset();
    modal.classList.remove('hidden');
}

export function editCollege(id) {
    const college = collegesData.find(c => c.id === id);
    if (!college) return;
    document.getElementById('collegeModalTitle').textContent = 'Edit College';
    document.getElementById('editCollegeId').value = id;
    document.getElementById('collegeName').value = college.name;
    document.getElementById('collegeDean').value = college.dean;
    document.getElementById('collegeCode').value = college.code;
    document.getElementById('collegePrograms').value = college.programs;
    document.getElementById('collegeStatus').value = college.status;
    document.getElementById('collegeModal').classList.remove('hidden');
}

export function closeCollegeModal() {
    const modal = document.getElementById('collegeModal');
    if (modal) modal.classList.add('hidden');
}

export function saveCollege(e) {
    e.preventDefault();
    const id = document.getElementById('editCollegeId').value;
    const name = document.getElementById('collegeName').value.trim();
    const dean = document.getElementById('collegeDean').value.trim();
    const code = document.getElementById('collegeCode').value.trim();
    const programs = parseInt(document.getElementById('collegePrograms').value) || 0;
    const status = document.getElementById('collegeStatus').value;

    if (!name || !dean || !code) {
        showNotification('Please fill in all required fields.', 'warning');
        return;
    }

    if (id) {
        const idx = collegesData.findIndex(c => c.id === parseInt(id));
        if (idx !== -1) {
            collegesData[idx] = { ...collegesData[idx], name, dean, code, programs, status };
            showNotification('College updated successfully!', 'success');
        }
    } else {
        collegesData.push({ 
            id: Math.max(...collegesData.map(c => c.id), 0) + 1, 
            name, dean, code, programs, status 
        });
        showNotification('College added successfully!', 'success');
    }

    closeCollegeModal();
    renderColleges();
}

export function deleteCollege(id) {
    if (!confirm('Are you sure you want to delete this college?')) return;
    collegesData = collegesData.filter(c => c.id !== id);
    renderColleges();
    showNotification('College deleted.', 'warning');
}

// Export for global access
window.filterColleges = filterColleges;
window.resetCollegeSearch = resetCollegeSearch;
window.sortColleges = sortColleges;
window.openAddCollegeModal = openAddCollegeModal;
window.editCollege = editCollege;
window.closeCollegeModal = closeCollegeModal;
window.saveCollege = saveCollege;
window.deleteCollege = deleteCollege;

// ============================================================
//  21. SUBJECTS SUBMODULE
// ============================================================
let subjectsData = [];
let currentSubjectSort = { column: 'code', direction: 'asc' };

export function initSubjects(data) {
    subjectsData = data || [];
    renderSubjects();
}

export function renderSubjects() {
    const tbody = document.getElementById('subjectsBody');
    if (!tbody) return;
    
    const search = document.getElementById('subjectSearch')?.value?.toLowerCase()?.trim() || '';
    const deptFilter = document.getElementById('deptFilter')?.value || 'all';
    const typeFilter = document.getElementById('typeFilter')?.value || 'all';

    let filtered = subjectsData.filter(s => {
        const matchSearch = s.code?.toLowerCase().includes(search) ||
                            s.name?.toLowerCase().includes(search) ||
                            s.department?.toLowerCase().includes(search) ||
                            s.type?.toLowerCase().includes(search);
        const matchDept = deptFilter === 'all' || s.department === deptFilter;
        const matchType = typeFilter === 'all' || s.type === typeFilter;
        return matchSearch && matchDept && matchType;
    });

    if (currentSubjectSort.column) {
        filtered.sort((a, b) => {
            let aVal = a[currentSubjectSort.column];
            let bVal = b[currentSubjectSort.column];
            if (typeof aVal === 'string') aVal = aVal.toLowerCase();
            if (typeof bVal === 'string') bVal = bVal.toLowerCase();
            if (aVal < bVal) return currentSubjectSort.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return currentSubjectSort.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }

    const emptyState = document.getElementById('subjectsEmptyState');
    if (filtered.length === 0) {
        if (emptyState) emptyState.classList.remove('hidden');
        tbody.innerHTML = '';
    } else {
        if (emptyState) emptyState.classList.add('hidden');
        const typeStyles = {
            'Core': 'bg-blue-100 text-blue-700',
            'Elective': 'bg-green-100 text-green-700',
            'Laboratory': 'bg-amber-100 text-amber-700',
            'Research': 'bg-purple-100 text-purple-700'
        };
        const statusMap = {
            'Active': 'status-badge--approved',
            'Inactive': 'status-badge--hold',
            'Archived': 'status-badge--pending'
        };
        tbody.innerHTML = filtered.map((s, i) => `
            <tr>
                <td class="p-3">${i + 1}</td>
                <td class="p-3 font-mono font-bold text-brand-700">${s.code}</td>
                <td class="p-3 font-bold text-slate-900">${s.name}</td>
                <td class="p-3 text-slate-700">${s.department}</td>
                <td class="p-3"><span class="text-xs font-medium px-2 py-0.5 rounded ${typeStyles[s.type] || 'bg-slate-100 text-slate-700'}">${s.type}</span></td>
                <td class="p-3 text-center">${s.units}</td>
                <td class="p-3"><span class="status-badge ${statusMap[s.status] || 'status-badge--pending'}">${s.status}</span></td>
                <td class="p-3 text-right space-x-1">
                    <button onclick="editSubject(${s.id})" class="btn btn-secondary text-xs py-1 px-2">Edit</button>
                    <button onclick="deleteSubject(${s.id})" class="btn btn-danger text-xs py-1 px-2">Delete</button>
                </td>
            </tr>
        `).join('');
    }

    const countEl = document.getElementById('subjectCount');
    if (countEl) {
        countEl.textContent = filtered.length + ' subject' + (filtered.length !== 1 ? 's' : '');
    }
}

export function filterSubjects() {
    renderSubjects();
}

export function resetSubjectSearch() {
    const searchInput = document.getElementById('subjectSearch');
    if (searchInput) searchInput.value = '';
    const deptFilter = document.getElementById('deptFilter');
    if (deptFilter) deptFilter.value = 'all';
    const typeFilter = document.getElementById('typeFilter');
    if (typeFilter) typeFilter.value = 'all';
    renderSubjects();
}

export function sortSubjects(column) {
    if (currentSubjectSort.column === column) {
        currentSubjectSort.direction = currentSubjectSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentSubjectSort.column = column;
        currentSubjectSort.direction = 'asc';
    }
    document.querySelectorAll('.sort-header').forEach(th => {
        th.classList.remove('sort-asc', 'sort-desc');
        const arrow = th.querySelector('.sort-arrow');
        if (arrow) arrow.textContent = '↕';
    });
    const activeHeader = document.querySelector(`.sort-header[data-column="${column}"]`);
    if (activeHeader) {
        activeHeader.classList.add(currentSubjectSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
        const arrow = activeHeader.querySelector('.sort-arrow');
        if (arrow) arrow.textContent = currentSubjectSort.direction === 'asc' ? ' ▲' : ' ▼';
    }
    renderSubjects();
}

export function openAddSubjectModal() {
    const modal = document.getElementById('subjectModal');
    if (!modal) return;
    document.getElementById('subjectModalTitle').textContent = 'Add New Subject';
    document.getElementById('editSubjectId').value = '';
    document.getElementById('subjectForm').reset();
    modal.classList.remove('hidden');
}

export function editSubject(id) {
    const subject = subjectsData.find(s => s.id === id);
    if (!subject) return;
    document.getElementById('subjectModalTitle').textContent = 'Edit Subject';
    document.getElementById('editSubjectId').value = id;
    document.getElementById('subjectCode').value = subject.code;
    document.getElementById('subjectName').value = subject.name;
    document.getElementById('subjectDepartment').value = subject.department;
    document.getElementById('subjectType').value = subject.type;
    document.getElementById('subjectUnits').value = subject.units;
    document.getElementById('subjectStatus').value = subject.status;
    document.getElementById('subjectModal').classList.remove('hidden');
}

export function closeSubjectModal() {
    const modal = document.getElementById('subjectModal');
    if (modal) modal.classList.add('hidden');
}

export function saveSubject(e) {
    e.preventDefault();
    const id = document.getElementById('editSubjectId').value;
    const code = document.getElementById('subjectCode').value.trim();
    const name = document.getElementById('subjectName').value.trim();
    const department = document.getElementById('subjectDepartment').value;
    const type = document.getElementById('subjectType').value;
    const units = parseFloat(document.getElementById('subjectUnits').value) || 0;
    const status = document.getElementById('subjectStatus').value;

    if (!code || !name || !department || !type || !units) {
        showNotification('Please fill in all required fields.', 'warning');
        return;
    }

    if (id) {
        const idx = subjectsData.findIndex(s => s.id === parseInt(id));
        if (idx !== -1) {
            subjectsData[idx] = { ...subjectsData[idx], code, name, department, type, units, status };
            showNotification('Subject updated successfully!', 'success');
        }
    } else {
        subjectsData.push({ 
            id: Math.max(...subjectsData.map(s => s.id), 0) + 1, 
            code, name, department, type, units, status 
        });
        showNotification('Subject added successfully!', 'success');
    }

    closeSubjectModal();
    renderSubjects();
}

export function deleteSubject(id) {
    if (!confirm('Are you sure you want to delete this subject?')) return;
    subjectsData = subjectsData.filter(s => s.id !== id);
    renderSubjects();
    showNotification('Subject deleted.', 'warning');
}

// Export for global access
window.filterSubjects = filterSubjects;
window.resetSubjectSearch = resetSubjectSearch;
window.sortSubjects = sortSubjects;
window.openAddSubjectModal = openAddSubjectModal;
window.editSubject = editSubject;
window.closeSubjectModal = closeSubjectModal;
window.saveSubject = saveSubject;
window.deleteSubject = deleteSubject;

// ============================================================
//  17. DYNAMIC PAGINATION
// ============================================================
export function initPagination(
  tableId,
  rowsPerPageOptions = [10, 25, 50, 100],
  containerId = null
) {
  const table = document.getElementById(tableId);
  if (!table) return;
  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.querySelectorAll("tr:not(.empty-state-row)"));
  const totalRows = rows.length;
  let currentPage = 1;
  let rowsPerPage = 25;

  const container = containerId
    ? document.getElementById(containerId)
    : table.closest(".card")?.querySelector(".pagination-container");
  if (!container) return;

  function renderPagination() {
    const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
    const start = (currentPage - 1) * rowsPerPage;
    const end = Math.min(start + rowsPerPage, totalRows);

    rows.forEach((row, index) => {
      row.style.display = index >= start && index < end ? "" : "none";
    });

    let info = container.querySelector(".pagination-info");
    if (!info) {
      info = document.createElement("p");
      info.className = "pagination-info text-sm text-slate-500";
      container.prepend(info);
    }
    info.innerHTML = `Showing <span class="font-bold text-slate-700">${
      totalRows === 0 ? 0 : start + 1
    }–${end}</span> of <span class="font-bold text-slate-700">${totalRows}</span> applicants`;

    let btnGroup = container.querySelector(".pagination-buttons");
    if (!btnGroup) {
      btnGroup = document.createElement("div");
      btnGroup.className =
        "pagination-buttons flex items-center gap-1.5 flex-wrap";
      container.appendChild(btnGroup);
    }
    btnGroup.innerHTML = "";

    // Rows per page dropdown
    const selectWrapper = document.createElement("div");
    selectWrapper.className = "flex items-center gap-1.5 mr-2";
    const label = document.createElement("span");
    label.className = "text-xs text-slate-500";
    label.textContent = "Rows:";
    selectWrapper.appendChild(label);
    const select = document.createElement("select");
    select.className = "select-field text-xs py-0.5 px-1.5 h-7";
    rowsPerPageOptions.forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt;
      option.textContent = opt;
      if (opt === rowsPerPage) option.selected = true;
      select.appendChild(option);
    });
    select.addEventListener("change", (e) => {
      rowsPerPage = parseInt(e.target.value);
      currentPage = 1;
      renderPagination();
    });
    selectWrapper.appendChild(select);
    btnGroup.appendChild(selectWrapper);

    // Previous
    const prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = `btn ${currentPage === 1 ? "btn-secondary" : "btn-primary"} text-xs`;
    prevBtn.textContent = "Previous";
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderPagination();
      }
    });
    btnGroup.appendChild(prevBtn);

    // Page numbers
    const maxPages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(totalPages, startPage + maxPages - 1);
    if (endPage - startPage < maxPages - 1)
      startPage = Math.max(1, endPage - maxPages + 1);

    for (let p = startPage; p <= endPage; p++) {
      const pageBtn = document.createElement("button");
      pageBtn.type = "button";
      pageBtn.className = `btn ${p === currentPage ? "btn-primary" : "btn-secondary"} text-xs`;
      pageBtn.textContent = p;
      pageBtn.addEventListener("click", () => {
        currentPage = p;
        renderPagination();
      });
      btnGroup.appendChild(pageBtn);
    }

    // Next
    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = `btn ${currentPage === totalPages ? "btn-secondary" : "btn-primary"} text-xs`;
    nextBtn.textContent = "Next";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderPagination();
      }
    });
    btnGroup.appendChild(nextBtn);
  }

  renderPagination();

  return { refresh: renderPagination };
}

// ============================================================
//  18. EXPOSE TO GLOBAL SCOPE
// ============================================================
// All functions that are used in inline onclick or need to be accessible from the browser
window.openHelpModal = openHelpModal;
window.closeHelpModal = closeHelpModal;
window.showNotification = showNotification;

window.toggleMobileSidebar = toggleMobileSidebar;
window.toggleWaffleDrawer = toggleWaffleDrawer;
window.toggleNotificationDrawer = toggleNotificationDrawer;

window.openReviewModal = openReviewModal;
window.closeReviewModal = closeReviewModal;
window.confirmModalApproval = confirmModalApproval;
window.openSystemSettingsModal = openSystemSettingsModal;
window.closeSystemSettingsModal = closeSystemSettingsModal;
window.launchModule = launchModule;
window.confirmSignOut = confirmSignOut;

window.openApplicantDrawer = openApplicantDrawer;
window.closeApplicantDrawer = closeApplicantDrawer;

window.approveQueueItem = approveQueueItem;
window.rejectQueueItem = rejectQueueItem;
window.filterActionQueue = filterActionQueue;

window.filterAdmissionsList = filterAdmissionsList;
window.filterPostgradList = filterPostgradList;
window.openQuickActionModal = openQuickActionModal;
window.searchAdmissionsTable = searchAdmissionsTable;
window.filterAdmissionsProgram = filterAdmissionsProgram;
window.filterPostgradProgram = filterPostgradProgram;
window.switchAdmissionsTab = switchAdmissionsTab;
window.admitApplicant = admitApplicant;
window.toggleAllAdmissions = toggleAllAdmissions;

window.filterApprovalsTable = filterApprovalsTable;
window.searchApprovalsTable = searchApprovalsTable;
window.toggleAllApprovals = toggleAllApprovals;
window.sortApprovalsTable = sortApprovalsTable;

window.filterManageTiles = filterManageTiles;
window.filterManageCategory = filterManageCategory;
window.resetManageFilters = resetManageFilters;

window.switchAcademicTab = switchAcademicTab;
window.setAcademicView = setAcademicView;
window.filterAcademicModules = filterAcademicModules;
window.resetAcademicFilters = resetAcademicFilters;

window.renderUndergradTable = renderUndergradTable;
window.renderPostgradTable = renderPostgradTable;
window.toggleAdmissionCheckbox = toggleAdmissionCheckbox;
window.bulkAdmitAdmissions = bulkAdmitAdmissions;
window.bulkExportAdmissions = bulkExportAdmissions;
window.initPagination = initPagination;

// Page navigation
window.showDashboard = function () {
  window.location.href = "index.html";
};
window.showApprovals = function () {
  window.location.href = "approvals.html";
};
window.showAdmissions = function () {
  window.location.href = "admissions.html";
};
window.showManage = function () {
  window.location.href = "manage.html";
};
window.showAcademic = function () {
  window.location.href = "academic.html";
};
window.showEnrol = function () {
  window.location.href = "enrol.html";
};
window.showGraduation = function () {
  window.location.href = "graduation.html";
};
window.showBilling = function () {
  window.location.href = "billing.html";
};
window.showRegistrar = function () {
  window.location.href = "registrar.html";
};
window.showSecurity = function () {
  window.location.href = "security.html";
};
window.showSettings = function () {
  window.location.href = "settings.html";
};
window.showTER = function () {
  window.location.href = "ter.html";
};

// ============================================================
//  18. DOM INITIALISATION
// ============================================================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTooltips);
} else {
  initTooltips();
}

document.addEventListener("DOMContentLoaded", function () {
  // Academic tab initialisation – only if academic panel exists
  if (document.getElementById("acadPanelAll")) {
    const savedTab = localStorage.getItem("academicTab") || "all";
    switchAcademicTab(savedTab);
    const savedView = localStorage.getItem("academicView") || "grid";
    setAcademicView(savedView);
  }

  // Keyboard shortcuts (global)
  setupKeyboardShortcuts();
});

// ============================================================
//  19. DEPARTMENTS SUBMODULE
// ============================================================
let departmentsData = [];
let currentDeptSort = { column: 'id', direction: 'asc' };

export function initDepartments(data) {
    departmentsData = data || [];
    renderDepartments();
}

export function renderDepartments() {
    const tbody = document.getElementById('departmentsBody');
    if (!tbody) return;
    
    const search = document.getElementById('deptSearch')?.value?.toLowerCase()?.trim() || '';
    const collegeFilter = document.getElementById('collegeFilter')?.value || 'all';

    let filtered = departmentsData.filter(d => {
        const matchSearch = d.name?.toLowerCase().includes(search) ||
                            d.chair?.toLowerCase().includes(search) ||
                            d.code?.toLowerCase().includes(search);
        const matchCollege = collegeFilter === 'all' || d.college === collegeFilter;
        return matchSearch && matchCollege;
    });

    if (currentDeptSort.column) {
        filtered.sort((a, b) => {
            let aVal = a[currentDeptSort.column];
            let bVal = b[currentDeptSort.column];
            if (typeof aVal === 'string') aVal = aVal.toLowerCase();
            if (typeof bVal === 'string') bVal = bVal.toLowerCase();
            if (aVal < bVal) return currentDeptSort.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return currentDeptSort.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }

    const emptyState = document.getElementById('departmentsEmptyState');
    if (filtered.length === 0) {
        if (emptyState) emptyState.classList.remove('hidden');
        tbody.innerHTML = '';
    } else {
        if (emptyState) emptyState.classList.add('hidden');
        tbody.innerHTML = filtered.map((d, i) => `
            <tr>
                <td class="p-3">${i + 1}</td>
                <td class="p-3 font-bold text-slate-900">${d.name}</td>
                <td class="p-3">${d.college}</td>
                <td class="p-3">${d.chair}</td>
                <td class="p-3 font-mono text-slate-600">${d.code}</td>
                <td class="p-3 text-center">${d.faculty}</td>
                <td class="p-3"><span class="status-badge ${d.status === 'Active' ? 'status-badge--approved' : 'status-badge--hold'}">${d.status}</span></td>
                <td class="p-3 text-right space-x-1">
                    <button onclick="editDepartment(${d.id})" class="btn btn-secondary text-xs py-1 px-2">Edit</button>
                    <button onclick="deleteDepartment(${d.id})" class="btn btn-danger text-xs py-1 px-2">Delete</button>
                </td>
            </tr>
        `).join('');
    }

    const countEl = document.getElementById('deptCount');
    if (countEl) {
        countEl.textContent = filtered.length + ' department' + (filtered.length !== 1 ? 's' : '');
    }
}

export function filterDepartments() {
    renderDepartments();
}

export function resetDepartmentSearch() {
    const searchInput = document.getElementById('deptSearch');
    if (searchInput) searchInput.value = '';
    const filterSelect = document.getElementById('collegeFilter');
    if (filterSelect) filterSelect.value = 'all';
    renderDepartments();
}

export function sortDepartments(column) {
    if (currentDeptSort.column === column) {
        currentDeptSort.direction = currentDeptSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentDeptSort.column = column;
        currentDeptSort.direction = 'asc';
    }
    document.querySelectorAll('.sort-header').forEach(th => {
        th.classList.remove('sort-asc', 'sort-desc');
        const arrow = th.querySelector('.sort-arrow');
        if (arrow) arrow.textContent = '↕';
    });
    const activeHeader = document.querySelector(`.sort-header[data-column="${column}"]`);
    if (activeHeader) {
        activeHeader.classList.add(currentDeptSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
        const arrow = activeHeader.querySelector('.sort-arrow');
        if (arrow) arrow.textContent = currentDeptSort.direction === 'asc' ? ' ▲' : ' ▼';
    }
    renderDepartments();
}

export function openAddDepartmentModal() {
    const modal = document.getElementById('deptModal');
    if (!modal) return;
    document.getElementById('deptModalTitle').textContent = 'Add New Department';
    document.getElementById('editDeptId').value = '';
    document.getElementById('deptForm').reset();
    modal.classList.remove('hidden');
}

export function editDepartment(id) {
    const dept = departmentsData.find(d => d.id === id);
    if (!dept) return;
    document.getElementById('deptModalTitle').textContent = 'Edit Department';
    document.getElementById('editDeptId').value = id;
    document.getElementById('deptName').value = dept.name;
    document.getElementById('deptCollege').value = dept.college;
    document.getElementById('deptChair').value = dept.chair;
    document.getElementById('deptCode').value = dept.code;
    document.getElementById('deptFaculty').value = dept.faculty;
    document.getElementById('deptStatus').value = dept.status;
    document.getElementById('deptModal').classList.remove('hidden');
}

export function closeDepartmentModal() {
    const modal = document.getElementById('deptModal');
    if (modal) modal.classList.add('hidden');
}

export function saveDepartment(e) {
    e.preventDefault();
    const id = document.getElementById('editDeptId').value;
    const name = document.getElementById('deptName').value.trim();
    const college = document.getElementById('deptCollege').value;
    const chair = document.getElementById('deptChair').value.trim();
    const code = document.getElementById('deptCode').value.trim();
    const faculty = parseInt(document.getElementById('deptFaculty').value) || 0;
    const status = document.getElementById('deptStatus').value;

    if (!name || !college || !chair || !code) {
        showNotification('Please fill in all required fields.', 'warning');
        return;
    }

    if (id) {
        const idx = departmentsData.findIndex(d => d.id === parseInt(id));
        if (idx !== -1) {
            departmentsData[idx] = { ...departmentsData[idx], name, college, chair, code, faculty, status };
            showNotification('Department updated successfully!', 'success');
        }
    } else {
        departmentsData.push({ 
            id: Math.max(...departmentsData.map(d => d.id), 0) + 1, 
            name, college, chair, code, faculty, status 
        });
        showNotification('Department added successfully!', 'success');
    }

    closeDepartmentModal();
    renderDepartments();
}

export function deleteDepartment(id) {
    if (!confirm('Are you sure you want to delete this department?')) return;
    departmentsData = departmentsData.filter(d => d.id !== id);
    renderDepartments();
    showNotification('Department deleted.', 'warning');
}

// Export for global access
window.filterDepartments = filterDepartments;
window.resetDepartmentSearch = resetDepartmentSearch;
window.sortDepartments = sortDepartments;
window.openAddDepartmentModal = openAddDepartmentModal;
window.editDepartment = editDepartment;
window.closeDepartmentModal = closeDepartmentModal;
window.saveDepartment = saveDepartment;
window.deleteDepartment = deleteDepartment;

// ============================================================
//  20. COURSES SUBMODULE
// ============================================================
let coursesData = [];
let currentCourseSort = { column: 'id', direction: 'asc' };

export function initCourses(data) {
    coursesData = data || [];
    renderCourses();
}

export function renderCourses() {
    const tbody = document.getElementById('coursesBody');
    if (!tbody) return;
    
    const search = document.getElementById('courseSearch')?.value?.toLowerCase()?.trim() || '';
    const collegeFilter = document.getElementById('collegeFilter')?.value || 'all';
    const levelFilter = document.getElementById('levelFilter')?.value || 'all';

    let filtered = coursesData.filter(c => {
        const matchSearch = c.name?.toLowerCase().includes(search) ||
                            c.college?.toLowerCase().includes(search) ||
                            c.level?.toLowerCase().includes(search);
        const matchCollege = collegeFilter === 'all' || c.college === collegeFilter;
        const matchLevel = levelFilter === 'all' || c.level === levelFilter;
        return matchSearch && matchCollege && matchLevel;
    });

    if (currentCourseSort.column) {
        filtered.sort((a, b) => {
            let aVal = a[currentCourseSort.column];
            let bVal = b[currentCourseSort.column];
            if (typeof aVal === 'string') aVal = aVal.toLowerCase();
            if (typeof bVal === 'string') bVal = bVal.toLowerCase();
            if (aVal < bVal) return currentCourseSort.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return currentCourseSort.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }

    const emptyState = document.getElementById('coursesEmptyState');
    if (filtered.length === 0) {
        if (emptyState) emptyState.classList.remove('hidden');
        tbody.innerHTML = '';
    } else {
        if (emptyState) emptyState.classList.add('hidden');
        const statusMap = {
            'Accredited': 'status-badge--approved',
            'Active': 'status-badge--approved',
            'Inactive': 'status-badge--hold',
            'Pending Review': 'status-badge--pending'
        };
        tbody.innerHTML = filtered.map((c, i) => `
            <tr>
                <td class="p-3">${i + 1}</td>
                <td class="p-3 font-bold text-slate-900">${c.name}</td>
                <td class="p-3">${c.college}</td>
                <td class="p-3"><span class="text-xs font-bold bg-slate-100 px-2 py-0.5 rounded">${c.level}</span></td>
                <td class="p-3 text-center">${c.duration}</td>
                <td class="p-3 text-center">${c.units}</td>
                <td class="p-3"><span class="status-badge ${statusMap[c.status] || 'status-badge--pending'}">${c.status}</span></td>
                <td class="p-3 text-right space-x-1">
                    <button onclick="editCourse(${c.id})" class="btn btn-secondary text-xs py-1 px-2">Edit</button>
                    <button onclick="deleteCourse(${c.id})" class="btn btn-danger text-xs py-1 px-2">Delete</button>
                </td>
            </tr>
        `).join('');
    }

    const countEl = document.getElementById('courseCount');
    if (countEl) {
        countEl.textContent = filtered.length + ' course' + (filtered.length !== 1 ? 's' : '');
    }
}

export function filterCourses() {
    renderCourses();
}

export function resetCourseSearch() {
    const searchInput = document.getElementById('courseSearch');
    if (searchInput) searchInput.value = '';
    const collegeFilter = document.getElementById('collegeFilter');
    if (collegeFilter) collegeFilter.value = 'all';
    const levelFilter = document.getElementById('levelFilter');
    if (levelFilter) levelFilter.value = 'all';
    renderCourses();
}

export function sortCourses(column) {
    if (currentCourseSort.column === column) {
        currentCourseSort.direction = currentCourseSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentCourseSort.column = column;
        currentCourseSort.direction = 'asc';
    }
    document.querySelectorAll('.sort-header').forEach(th => {
        th.classList.remove('sort-asc', 'sort-desc');
        const arrow = th.querySelector('.sort-arrow');
        if (arrow) arrow.textContent = '↕';
    });
    const activeHeader = document.querySelector(`.sort-header[data-column="${column}"]`);
    if (activeHeader) {
        activeHeader.classList.add(currentCourseSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
        const arrow = activeHeader.querySelector('.sort-arrow');
        if (arrow) arrow.textContent = currentCourseSort.direction === 'asc' ? ' ▲' : ' ▼';
    }
    renderCourses();
}

export function openAddCourseModal() {
    const modal = document.getElementById('courseModal');
    if (!modal) return;
    document.getElementById('courseModalTitle').textContent = 'Add New Course';
    document.getElementById('editCourseId').value = '';
    document.getElementById('courseForm').reset();
    modal.classList.remove('hidden');
}

export function editCourse(id) {
    const course = coursesData.find(c => c.id === id);
    if (!course) return;
    document.getElementById('courseModalTitle').textContent = 'Edit Course';
    document.getElementById('editCourseId').value = id;
    document.getElementById('courseName').value = course.name;
    document.getElementById('courseCollege').value = course.college;
    document.getElementById('courseLevel').value = course.level;
    document.getElementById('courseDuration').value = course.duration;
    document.getElementById('courseUnits').value = course.units;
    document.getElementById('courseStatus').value = course.status;
    document.getElementById('courseModal').classList.remove('hidden');
}

export function closeCourseModal() {
    const modal = document.getElementById('courseModal');
    if (modal) modal.classList.add('hidden');
}

export function saveCourse(e) {
    e.preventDefault();
    const id = document.getElementById('editCourseId').value;
    const name = document.getElementById('courseName').value.trim();
    const college = document.getElementById('courseCollege').value;
    const level = document.getElementById('courseLevel').value;
    const duration = parseInt(document.getElementById('courseDuration').value) || 0;
    const units = parseInt(document.getElementById('courseUnits').value) || 0;
    const status = document.getElementById('courseStatus').value;

    if (!name || !college || !level || !duration) {
        showNotification('Please fill in all required fields.', 'warning');
        return;
    }

    if (id) {
        const idx = coursesData.findIndex(c => c.id === parseInt(id));
        if (idx !== -1) {
            coursesData[idx] = { ...coursesData[idx], name, college, level, duration, units, status };
            showNotification('Course updated successfully!', 'success');
        }
    } else {
        coursesData.push({ 
            id: Math.max(...coursesData.map(c => c.id), 0) + 1, 
            name, college, level, duration, units, status 
        });
        showNotification('Course added successfully!', 'success');
    }

    closeCourseModal();
    renderCourses();
}

export function deleteCourse(id) {
    if (!confirm('Are you sure you want to delete this course?')) return;
    coursesData = coursesData.filter(c => c.id !== id);
    renderCourses();
    showNotification('Course deleted.', 'warning');
}

// Export for global access
window.filterCourses = filterCourses;
window.resetCourseSearch = resetCourseSearch;
window.sortCourses = sortCourses;
window.openAddCourseModal = openAddCourseModal;
window.editCourse = editCourse;
window.closeCourseModal = closeCourseModal;
window.saveCourse = saveCourse;
window.deleteCourse = deleteCourse;

// ============================================================
//  22. GENERIC TABLE MODULE (for paginated, filterable lists)
// ============================================================

/**
 * Initialises a paginated, filterable, sortable table.
 * All logic is self-contained; returns API functions.
 *
 * @param {Object} config
 * @param {string} config.tableId – ID of the table element
 * @param {string} config.tbodyId – ID of the tbody element
 * @param {string} config.paginationContainerId – ID of the container for pagination controls
 * @param {string} config.emptyStateId – ID of the empty state row (inside tbody)
 * @param {string} config.countDisplayId – ID of the element to show count (e.g., "X colleges")
 * @param {string} config.searchInputId – ID of the search input
 * @param {string} config.rowsPerPageId – ID of the rows-per-page select (default: 'rowsPerPage')
 * @param {Array} config.filterSelectors – Array of { id, field } for filter dropdowns
 * @param {Array} config.searchFields – Array of field names to search against
 * @param {Object} config.sortMap – Map of column names to sort functions
 * @param {Function} config.getData – Function that returns the full data array (from data.js)
 * @param {Function} config.updateStats – Optional function called after filtering to update stats
 * @param {Function} config.renderRow – Function that takes an item and index (1-based) and returns HTML string
 * @param {string} config.defaultSort – Default sort column
 * @param {string} config.defaultSortDir – 'asc' or 'desc'
 * @param {Array} config.rowsPerPageOptions – e.g., [10, 25, 50, 100]
 * @param {number} config.defaultRowsPerPage – e.g., 25
 * @param {string} config.itemLabelPlural – Plural label for the items (e.g., 'colleges')
 * @param {Array} config.additionalFilters – Optional array of filter functions
 * @returns {Object} – { refresh, applyFilters, resetFilters, goToPage, changeRowsPerPage, sortBy, renderTable, renderPagination }
 */
export function initTableModule(config) {
    const {
        tableId,
        tbodyId,
        paginationContainerId,
        emptyStateId,
        countDisplayId,
        searchInputId,
        rowsPerPageId = 'rowsPerPage',
        filterSelectors = [],
        searchFields = ['name'],
        sortMap = {},
        getData,
        updateStats = null,
        renderRow,
        defaultSort = 'id',
        defaultSortDir = 'asc',
        rowsPerPageOptions = [10, 25, 50, 100],
        defaultRowsPerPage = 25,
        itemLabelPlural = 'items',
        additionalFilters = []
    } = config;

    // State
    let allData = getData();
    let filteredData = [];
    let currentPage = 1;
    let rowsPerPage = defaultRowsPerPage;
    let currentSort = { column: defaultSort, direction: defaultSortDir };

    // Helper: get sort function
    function getSortFn(column) {
        return sortMap[column] || ((a, b) => {
            let aVal = a[column];
            let bVal = b[column];
            if (typeof aVal === 'string') aVal = aVal.toLowerCase();
            if (typeof bVal === 'string') bVal = bVal.toLowerCase();
            if (aVal < bVal) return -1;
            if (aVal > bVal) return 1;
            return 0;
        });
    }

    // Apply filters, sort, and refresh view
    function applyFilters() {
        const search = document.getElementById(searchInputId)?.value?.toLowerCase()?.trim() || '';
        let data = allData;

        // Search filter
        if (search) {
            data = data.filter(item => {
                return searchFields.some(field => {
                    const val = item[field];
                    return val && val.toString().toLowerCase().includes(search);
                });
            });
        }

        // Dropdown filters
        filterSelectors.forEach(filter => {
            const select = document.getElementById(filter.id);
            if (select && select.value !== 'all') {
                const value = select.value;
                data = data.filter(item => {
                    const fieldValue = item[filter.field];
                    return fieldValue && fieldValue.toString() === value;
                });
            }
        });

        // Additional custom filters
        additionalFilters.forEach(fn => {
            data = data.filter(fn);
        });

        // Sort
        if (currentSort.column) {
            const sortFn = getSortFn(currentSort.column);
            data.sort((a, b) => {
                let result = sortFn(a, b);
                return currentSort.direction === 'asc' ? result : -result;
            });
        }

        filteredData = data;

        // Update stats
        if (updateStats) {
            updateStats(data);
        }

        // Reset to first page
        currentPage = 1;
        renderTable();
        renderPagination();

        // Update count display
        const countEl = document.getElementById(countDisplayId);
        if (countEl) {
            countEl.textContent = data.length + ' ' + itemLabelPlural;
        }
    }

    // Render table body
    function renderTable() {
        const tbody = document.getElementById(tbodyId);
        const emptyState = document.getElementById(emptyStateId);
        if (!tbody) return;

        const start = (currentPage - 1) * rowsPerPage;
        const end = Math.min(start + rowsPerPage, filteredData.length);
        const pageItems = filteredData.slice(start, end);

        if (pageItems.length === 0) {
            if (emptyState) emptyState.classList.remove('hidden');
            tbody.innerHTML = '';
        } else {
            if (emptyState) emptyState.classList.add('hidden');
            tbody.innerHTML = pageItems.map((item, index) => renderRow(item, start + index + 1)).join('');
        }

        // Update page info elements
        const startEl = document.getElementById('pageStart');
        const endEl = document.getElementById('pageEnd');
        const totalEl = document.getElementById('totalItems');
        const showingEl = document.getElementById('showingInfo');
        const total = filteredData.length;
        if (startEl) startEl.textContent = total === 0 ? 0 : start + 1;
        if (endEl) endEl.textContent = end;
        if (totalEl) totalEl.textContent = total;
        if (showingEl) showingEl.textContent = `Showing ${start + 1}-${end} of ${total}`;
    }

    // Render pagination controls
    function renderPagination() {
        const container = document.getElementById(paginationContainerId);
        if (!container) return;
        const totalPages = Math.ceil(filteredData.length / rowsPerPage);

        if (totalPages <= 1) {
            container.innerHTML = `
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full">
                    <p class="text-sm text-slate-500">
                        Showing <span id="pageStart">1</span>–<span id="pageEnd">0</span> of <span id="totalItems">0</span> entries
                    </p>
                </div>
            `;
            return;
        }

        let html = `
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full">
                <p class="text-sm text-slate-500">
                    Showing <span id="pageStart">1</span>–<span id="pageEnd">10</span> of <span id="totalItems">0</span> entries
                </p>
                <div class="flex items-center gap-1.5 flex-wrap">
        `;

        // Rows per page dropdown
        html += `<div class="flex items-center gap-2 mr-2">
            <label for="${rowsPerPageId}" class="text-xs text-slate-500">Rows:</label>
            <select id="${rowsPerPageId}" class="select-field text-sm w-20" onchange="window['changeRowsPerPage_${tableId.replace('Table', '')}']()">
                ${rowsPerPageOptions.map(opt => `<option value="${opt}" ${opt === rowsPerPage ? 'selected' : ''}>${opt}</option>`).join('')}
            </select>
        </div>`;

        // Previous
        html += `<button class="btn btn-secondary text-xs ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}" ${currentPage === 1 ? 'disabled' : ''} onclick="window['goToPage_${tableId.replace('Table', '')}'](${currentPage - 1})">Previous</button>`;

        // Page numbers (limit to 5)
        const maxPages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
        let endPage = Math.min(totalPages, startPage + maxPages - 1);
        if (endPage - startPage < maxPages - 1) startPage = Math.max(1, endPage - maxPages + 1);

        for (let i = startPage; i <= endPage; i++) {
            html += `<button class="btn ${i === currentPage ? 'btn-primary' : 'btn-secondary'} text-xs" onclick="window['goToPage_${tableId.replace('Table', '')}'](${i})">${i}</button>`;
        }

        // Next
        html += `<button class="btn btn-secondary text-xs ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}" ${currentPage === totalPages ? 'disabled' : ''} onclick="window['goToPage_${tableId.replace('Table', '')}'](${currentPage + 1})">Next</button>`;

        html += `</div></div>`;
        container.innerHTML = html;
    }

    // Change rows per page
    function changeRowsPerPage() {
        const select = document.getElementById(rowsPerPageId);
        if (select) {
            rowsPerPage = parseInt(select.value);
            currentPage = 1;
            renderTable();
            renderPagination();
        }
    }

    // Go to page
    function goToPage(page) {
        const totalPages = Math.ceil(filteredData.length / rowsPerPage);
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        renderTable();
        renderPagination();
    }

    // Reset filters (clear search and dropdowns)
    function resetFilters() {
        const searchInput = document.getElementById(searchInputId);
        if (searchInput) searchInput.value = '';
        filterSelectors.forEach(filter => {
            const select = document.getElementById(filter.id);
            if (select) select.value = 'all';
        });
        applyFilters();
    }

    // Sort by column
    function sortBy(column) {
        if (currentSort.column === column) {
            currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            currentSort.column = column;
            currentSort.direction = 'asc';
        }
        // Update arrow indicators
        const table = document.getElementById(tableId);
        if (table) {
            table.querySelectorAll('.sort-header').forEach(th => {
                th.classList.remove('sort-asc', 'sort-desc');
                const arrow = th.querySelector('.sort-arrow');
                if (arrow) arrow.textContent = '↕';
            });
            const activeHeader = table.querySelector(`.sort-header[data-column="${column}"]`);
            if (activeHeader) {
                activeHeader.classList.add(currentSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
                const arrow = activeHeader.querySelector('.sort-arrow');
                if (arrow) arrow.textContent = currentSort.direction === 'asc' ? ' ▲' : ' ▼';
            }
        }
        applyFilters();
    }

    // Refresh everything (e.g., after CRUD)
    function refresh() {
        allData = getData(); // reload data from data.js
        applyFilters();
    }

    // Expose functions globally with table-specific names
    const tableKey = tableId.replace('Table', '');
    window[`applyFilters_${tableKey}`] = applyFilters;
    window[`goToPage_${tableKey}`] = goToPage;
    window[`changeRowsPerPage_${tableKey}`] = changeRowsPerPage;
    window[`resetFilters_${tableKey}`] = resetFilters;
    window[`sortBy_${tableKey}`] = sortBy;
    window[`refresh_${tableKey}`] = refresh;

    // Also expose generic names for simplicity (last one wins, but that's okay)
    // We'll use the table-specific ones in the HTML.

    // Initialise
    applyFilters();

    // Return public API
    return {
        refresh,
        applyFilters,
        resetFilters,
        goToPage,
        changeRowsPerPage,
        sortBy,
        renderTable,
        renderPagination
    };
}