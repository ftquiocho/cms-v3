// ===== Chart initialisation and management =====

import { faculty, getDepartmentAverages } from './data.js';

let barChart = null;
let lineChart = null;
let doughnutChart = null;
let radarChart = null;
let stackedChart = null;

// Helper to hide loading skeletons
function hideLoadingSkeleton(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
        setTimeout(() => {
            el.classList.add('hidden');
        }, 300);
    }
}

// Wait for DOM to be fully loaded before initialising
function waitForDOM() {
    return new Promise((resolve) => {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", resolve);
        } else {
            resolve();
        }
    });
}

// Wait for Chart.js to be available
function waitForChartJS() {
    return new Promise((resolve) => {
        if (typeof Chart !== "undefined") {
            resolve();
        } else {
            const checkInterval = setInterval(() => {
                if (typeof Chart !== "undefined") {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
        }
    });
}

export function initAllCharts() {
    // Dashboard charts
    if (document.getElementById("enrollmentBarChart")) initBarChart();
    if (document.getElementById("transfereeLineChart")) initLineChart();
    if (document.getElementById("programDoughnutChart")) initDoughnutChart();
    if (document.getElementById("facultyRadarChart")) initRadarChart();
    if (document.getElementById("stackedEnrollmentChart")) initStackedBarChart();

    // TER page charts – with loading skeleton hiding
    if (document.getElementById("facultyRadarChartTER")) {
        initFacultyRadarChartTER();
        hideLoadingSkeleton('radarChartLoading');
    }
    if (document.getElementById("deptBarChart")) {
        initDeptBarChart();
        hideLoadingSkeleton('barChartLoading');
    }
    if (document.getElementById("trendLineChart")) {
        initTrendLineChart();
        hideLoadingSkeleton('lineChartLoading');
    }

    // Admissions Statistics charts
    if (document.getElementById("programBarChart")) initProgramBarChart();
    if (document.getElementById("monthlyTrendChart")) initMonthlyTrendChart();

    // Update TER charts after init
    updateTERCharts();
}

// ===== Individual Chart Functions =====

export function initBarChart() {
    const canvas = document.getElementById("enrollmentBarChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    try {
        barChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Enrolled Headcount",
                    data: [780, 1100, 820, 500, 560, 480, 580, 490, 820, 820, 1150, 980],
                    backgroundColor: "#ea580c",
                    borderRadius: 6,
                    borderSkipped: false,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false }, ticks: { font: { size: 10 }, color: "#64748b" } },
                    y: { grid: { color: "#f1f5f9" }, ticks: { font: { size: 10 }, color: "#64748b" }, beginAtZero: true },
                },
            },
        });
        console.log("✅ Bar chart initialised");
    } catch (e) {
        console.error("Bar chart error:", e);
    }
}

export function initLineChart() {
    const canvas = document.getElementById("transfereeLineChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    try {
        lineChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Oct", "Mar", "Jul", "Aug"],
                datasets: [{
                    label: "Applicants",
                    data: [18, 22, 42.5, 30],
                    borderColor: "#ea580c",
                    backgroundColor: "rgba(234, 88, 12, 0.1)",
                    borderWidth: 2,
                    tension: 0.4,
                    pointBackgroundColor: "#ea580c",
                    pointRadius: 4,
                }, {
                    label: "Accepted",
                    data: [10, 15, 32, 22],
                    borderColor: "#3b82f6",
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderWidth: 2,
                    tension: 0.4,
                    pointBackgroundColor: "#3b82f6",
                    pointRadius: 4,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: "top",
                        labels: { boxWidth: 12, font: { size: 10, weight: "600" }, color: "#475569" },
                    },
                },
                scales: {
                    x: { grid: { display: false }, ticks: { font: { size: 10 }, color: "#64748b" } },
                    y: { grid: { color: "#f1f5f9" }, ticks: { font: { size: 10 }, color: "#64748b" }, beginAtZero: true },
                },
            },
        });
        console.log("✅ Line chart initialised");
    } catch (e) {
        console.error("Line chart error:", e);
    }
}

export function initDoughnutChart() {
    const canvas = document.getElementById("programDoughnutChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    try {
        doughnutChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["BS Accountancy", "BSBA Accounting", "Juris Doctor", "Diploma Ag Tech", "ABMT"],
                datasets: [{
                    data: [35, 25, 15, 15, 10],
                    backgroundColor: ["#ea580c", "#06b6d4", "#10b981", "#eab308", "#ef4444"],
                    borderWidth: 2,
                    borderColor: "#ffffff",
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "right",
                        labels: { boxWidth: 10, font: { size: 10, weight: "600" }, color: "#475569", padding: 8 },
                    },
                },
                cutout: "65%",
            },
        });
        console.log("✅ Doughnut chart initialised");
    } catch (e) {
        console.error("Doughnut chart error:", e);
    }
}

export function initRadarChart() {
    const canvas = document.getElementById("facultyRadarChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    try {
        radarChart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: ["Teaching Quality", "Research Output", "Student Mentorship", "Administrative Work", "Community Engagement"],
                datasets: [{
                    label: "College of Law",
                    data: [4.8, 4.2, 4.5, 4.0, 3.8],
                    backgroundColor: "rgba(234, 88, 12, 0.2)",
                    borderColor: "#ea580c",
                    borderWidth: 2,
                    pointBackgroundColor: "#ea580c",
                }, {
                    label: "College of Business",
                    data: [4.5, 4.0, 4.7, 4.3, 4.1],
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    borderColor: "#3b82f6",
                    borderWidth: 2,
                    pointBackgroundColor: "#3b82f6",
                }, {
                    label: "College of Agriculture",
                    data: [4.2, 3.8, 4.3, 4.0, 4.5],
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    borderColor: "#10b981",
                    borderWidth: 2,
                    pointBackgroundColor: "#10b981",
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "top",
                        labels: { boxWidth: 12, font: { size: 9, weight: "600" }, color: "#475569" },
                    },
                },
                scales: {
                    r: {
                        min: 0,
                        max: 5,
                        ticks: { stepSize: 1, font: { size: 8 }, color: "#64748b" },
                        pointLabels: { font: { size: 9 }, color: "#334155" },
                    },
                },
            },
        });
        console.log("✅ Radar chart initialised");
    } catch (e) {
        console.error("Radar chart error:", e);
    }
}

export function initStackedBarChart() {
    const canvas = document.getElementById("stackedEnrollmentChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    try {
        stackedChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year+"],
                datasets: [{
                    label: "Accountancy",
                    data: [180, 160, 140, 100, 20],
                    backgroundColor: "#ea580c",
                }, {
                    label: "Accounting Tech",
                    data: [150, 130, 110, 90, 34],
                    backgroundColor: "#3b82f6",
                }, {
                    label: "Agri Tech",
                    data: [140, 120, 100, 80, 60],
                    backgroundColor: "#10b981",
                }, {
                    label: "Juris Doctor",
                    data: [60, 70, 80, 60, 53],
                    backgroundColor: "#eab308",
                }, {
                    label: "Entrepreneurship",
                    data: [80, 70, 60, 50, 63],
                    backgroundColor: "#ef4444",
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "top",
                        labels: { boxWidth: 12, font: { size: 9, weight: "600" }, color: "#475569" },
                    },
                },
                scales: {
                    x: { stacked: true, grid: { display: false }, ticks: { font: { size: 9 } } },
                    y: { stacked: true, grid: { color: "#f1f5f9" }, ticks: { font: { size: 9 } }, beginAtZero: true },
                },
            },
        });
        console.log("✅ Stacked bar chart initialised");
    } catch (e) {
        console.error("Stacked bar chart error:", e);
    }
}

// ===== Chart Update Functions =====

export function switchChartMetric(buttonEl, metricName) {
    document.querySelectorAll(".chart-tab-btn").forEach((btn) => {
        btn.className = "chart-tab-btn btn btn-secondary text-xs";
    });
    buttonEl.className = "chart-tab-btn btn btn-primary text-xs";

    if (barChart) {
        const baseData = [780, 1100, 820, 500, 560, 480, 580, 490, 820, 820, 1150, 980];
        let variation = 1.0;
        switch (metricName) {
            case "Total Students": variation = 1.0; break;
            case "Degree/Program": variation = 0.6; break;
            case "Scholarship": variation = 0.3; break;
            case "College": variation = 0.8; break;
            case "Admission Type": variation = 0.5; break;
            default: variation = 1.0;
        }
        const randomData = baseData.map((v) => Math.round(v * (0.7 + Math.random() * 0.6) * variation));
        barChart.data.datasets[0].data = randomData;
        barChart.update();
    }
    showNotification("Updated chart metric: " + metricName);
}

export function updateMainChartData(term) {
    if (barChart) {
        const factor = term === "sem1" ? 0.6 : term === "sem2" ? 0.8 : 1;
        const currentData = barChart.data.datasets[0].data;
        const newData = currentData.map((v) => Math.round(v * factor));
        barChart.data.datasets[0].data = newData;
        barChart.update();

        document.querySelectorAll(".text-brand-600").forEach((el) => {
            el.classList.remove("text-brand-600", "font-bold");
        });
        const termBtn = document.querySelector(`[onclick="updateMainChartData('${term}')"]`);
        if (termBtn) {
            termBtn.classList.add("text-brand-600", "font-bold");
        }
    }
}

// ===== TER Charts =====

export function initFacultyRadarChartTER() {
    const canvas = document.getElementById("facultyRadarChartTER");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    try {
        window.radarTERChart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: ["Teaching Quality", "Research Output", "Student Mentorship", "Administrative Work", "Community Engagement"],
                datasets: [{
                    label: "College of Law",
                    data: [4.8, 4.2, 4.5, 4.0, 3.8],
                    backgroundColor: "rgba(234, 88, 12, 0.2)",
                    borderColor: "#ea580c",
                    borderWidth: 2,
                    pointBackgroundColor: "#ea580c",
                }, {
                    label: "College of Business",
                    data: [4.5, 4.0, 4.7, 4.3, 4.1],
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    borderColor: "#3b82f6",
                    borderWidth: 2,
                    pointBackgroundColor: "#3b82f6",
                }, {
                    label: "College of Agriculture",
                    data: [4.2, 3.8, 4.3, 4.0, 4.5],
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    borderColor: "#10b981",
                    borderWidth: 2,
                    pointBackgroundColor: "#10b981",
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "top",
                        labels: { boxWidth: 12, font: { size: 9, weight: "600" }, color: "#475569" },
                    },
                },
                scales: {
                    r: {
                        min: 0,
                        max: 5,
                        ticks: { stepSize: 1, font: { size: 8 }, color: "#64748b" },
                        pointLabels: { font: { size: 9 }, color: "#334155" },
                    },
                },
            },
        });
        console.log("✅ TER Radar chart initialised");
    } catch (e) {
        console.error("TER Radar chart error:", e);
    }
}

export function initDeptBarChart() {
    const canvas = document.getElementById("deptBarChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    try {
        window.deptBarChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Accountancy", "Accounting Tech", "Agriculture Tech", "Law", "Entrepreneurship"],
                datasets: [{
                    label: "Average Rating",
                    data: [4.81, 4.74, 4.68, 4.72, 4.82],
                    backgroundColor: ["#ea580c", "#3b82f6", "#10b981", "#eab308", "#ef4444"],
                    borderRadius: 6,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false }, ticks: { font: { size: 10 }, color: "#64748b" } },
                    y: { grid: { color: "#f1f5f9" }, ticks: { font: { size: 10 }, color: "#64748b" }, min: 0, max: 5 },
                },
            },
        });
        console.log("✅ Department Bar chart initialised");
    } catch (e) {
        console.error("Department Bar chart error:", e);
    }
}

export function initTrendLineChart() {
    const canvas = document.getElementById("trendLineChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    try {
        window.trendLineChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["AY 2020-21 1st", "2nd", "Summer", "AY 2021-22 1st", "2nd", "Current"],
                datasets: [{
                    label: "Overall Rating",
                    data: [4.3, 4.4, 4.5, 4.55, 4.62, 4.62],
                    borderColor: "#ea580c",
                    backgroundColor: "rgba(234, 88, 12, 0.1)",
                    borderWidth: 2,
                    tension: 0.4,
                    pointBackgroundColor: "#ea580c",
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false }, ticks: { font: { size: 10 }, color: "#64748b" } },
                    y: { grid: { color: "#f1f5f9" }, ticks: { font: { size: 10 }, color: "#64748b" }, min: 4, max: 5 },
                },
            },
        });
        console.log("✅ Trend Line chart initialised");
    } catch (e) {
        console.error("Trend Line chart error:", e);
    }
}

// ===== Admissions Statistics Charts =====

export function initProgramBarChart() {
    const canvas = document.getElementById('programBarChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['BS Accountancy', 'BS Accounting Tech', 'Diploma Ag Tech', 'Juris Doctor', 'ABMT Entrepreneurship'],
            datasets: [{
                label: 'Applications',
                data: [320, 280, 180, 150, 120],
                backgroundColor: ['#ea580c', '#3b82f6', '#10b981', '#eab308', '#ef4444'],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 10 }, color: '#64748b' } },
                y: { grid: { color: '#f1f5f9' }, ticks: { font: { size: 10 }, color: '#64748b' }, beginAtZero: true }
            }
        }
    });
}

export function initMonthlyTrendChart() {
    const canvas = document.getElementById('monthlyTrendChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [{
                label: 'Applications',
                data: [95, 110, 130, 145, 140, 160, 180, 170, 150, 120, 100, 85],
                borderColor: '#ea580c',
                backgroundColor: 'rgba(234, 88, 12, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#ea580c'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 10 }, color: '#64748b' } },
                y: { grid: { color: '#f1f5f9' }, ticks: { font: { size: 10 }, color: '#64748b' }, beginAtZero: true }
            }
        }
    });
}

// ===== Update TER Charts (Dynamic) =====

export function updateTERCharts() {
    // Radar chart: group by college (department) and compute averages for each metric
    const deptMap = {};
    faculty.forEach(f => {
        if (!deptMap[f.department]) {
            deptMap[f.department] = { teaching: 0, research: 0, mentorship: 0, admin: 0, community: 0, count: 0 };
        }
        deptMap[f.department].teaching += f.teaching;
        deptMap[f.department].research += f.research;
        deptMap[f.department].mentorship += f.mentorship;
        deptMap[f.department].admin += f.admin;
        deptMap[f.department].community += f.community;
        deptMap[f.department].count++;
    });
    const depts = Object.keys(deptMap);
    const radarLabels = depts;
    const radarDatasets = [
        {
            label: 'Teaching',
            data: depts.map(d => +(deptMap[d].teaching / deptMap[d].count).toFixed(2)),
            backgroundColor: 'rgba(234, 88, 12, 0.2)',
            borderColor: '#ea580c',
            borderWidth: 2,
            pointBackgroundColor: '#ea580c',
        },
        {
            label: 'Mentorship',
            data: depts.map(d => +(deptMap[d].mentorship / deptMap[d].count).toFixed(2)),
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: '#3b82f6',
            borderWidth: 2,
            pointBackgroundColor: '#3b82f6',
        },
        {
            label: 'Research',
            data: depts.map(d => +(deptMap[d].research / deptMap[d].count).toFixed(2)),
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            borderColor: '#10b981',
            borderWidth: 2,
            pointBackgroundColor: '#10b981',
        },
    ];
    // Update radar chart if it exists
    const radarCanvas = document.getElementById('facultyRadarChartTER');
    if (radarCanvas && window.radarTERChart) {
        window.radarTERChart.data.labels = radarLabels;
        window.radarTERChart.data.datasets = radarDatasets;
        window.radarTERChart.update();
    }

    // Bar chart: department averages
    const deptAverages = getDepartmentAverages();
    const barLabels = Object.keys(deptAverages);
    const barData = Object.values(deptAverages);
    const barCanvas = document.getElementById('deptBarChart');
    if (barCanvas && window.deptBarChart) {
        window.deptBarChart.data.labels = barLabels;
        window.deptBarChart.data.datasets[0].data = barData;
        window.deptBarChart.update();
    }

    // Line chart: overall trend (average of all faculty across semesters)
    const trendData = faculty.map(f => f.trend || []);
    const avgTrend = [];
    if (trendData.length > 0) {
        for (let i = 0; i < 6; i++) {
            let sum = 0, count = 0;
            trendData.forEach(t => { if (t[i] !== undefined) { sum += t[i]; count++; } });
            avgTrend.push(count > 0 ? +(sum / count).toFixed(2) : 0);
        }
    }
    const lineCanvas = document.getElementById('trendLineChart');
    if (lineCanvas && window.trendLineChart) {
        window.trendLineChart.data.datasets[0].data = avgTrend;
        window.trendLineChart.update();
    }
}

// Auto-initialise when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAllCharts);
} else {
    initAllCharts();
}

// Make functions globally available for inline onclick
window.switchChartMetric = switchChartMetric;
window.updateMainChartData = updateMainChartData;
window.initAllCharts = initAllCharts;
window.updateTERCharts = updateTERCharts;