// App State
let currentMissions = missionsData;
let selectedMission = null;

// DOM Elements
const views = {
    home: document.getElementById('homeView'),
    browse: document.getElementById('browseView'),
    detail: document.getElementById('detailView')
};

const backBtn = document.getElementById('backBtn');
const tabBtns = document.querySelectorAll('.tab-btn');

// Initialize
function init() {
    renderHomeView();
    renderBrowseGrid(missionsData);
    setupEventListeners();
    
    // Default route
    navigateTo('home');
}

// Navigation Logic
function navigateTo(viewName) {
    // Hide all views
    Object.values(views).forEach(v => v.classList.add('hidden'));
    views[viewName].classList.remove('hidden');
    views[viewName].classList.add('active');
    
    // Update tabs
    if (viewName === 'home' || viewName === 'browse') {
        tabBtns.forEach(btn => {
            if (btn.dataset.target === viewName + 'View') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        backBtn.classList.add('hidden');
        window.scrollTo(0, 0);
    } else if (viewName === 'detail') {
        backBtn.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
}

function setupEventListeners() {
    // Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target.replace('View', '');
            navigateTo(target);
        });
    });

    // Back Button
    backBtn.addEventListener('click', () => {
        selectedMission = null;
        // Check which tab is active to return to
        const activeTab = document.querySelector('.tab-btn.active').dataset.target.replace('View', '');
        navigateTo(activeTab);
    });

    // Search and Filter
    const searchInput = document.getElementById('searchInput');
    const agencyFilter = document.getElementById('agencyFilter');

    searchInput.addEventListener('input', () => filterMissions(searchInput.value, agencyFilter.value));
    agencyFilter.addEventListener('change', () => filterMissions(searchInput.value, agencyFilter.value));
}

// Data Helpers
function getStatusClass(status) {
    if (status === "Success" || status === "Completed") return "bg-success";
    if (status === "Failed") return "bg-failed";
    if (status === "Upcoming") return "bg-upcoming";
    return "bg-default";
}

function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
}

// Format rating as stars
function getStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        } else if (i - 0.5 <= rating) {
            html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`; // simplified half star
        } else {
            html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        }
    }
    return html;
}

// ----------------------------------------------------
// HOME VIEW RENDERING
// ----------------------------------------------------
function renderHomeView() {
    // 1. Featured Missions (First 5 that have images)
    const featured = missionsData.filter(m => m.imageURL).slice(0, 5);
    const featuredContainer = document.getElementById('featuredCarousel');
    featuredContainer.innerHTML = featured.map(m => `
        <div class="featured-card" onclick="openMissionDetail('${m.id}')">
            <img src="${m.imageURL}" class="featured-img" alt="${m.name}">
            <div class="featured-overlay">
                <div class="featured-title">${m.name}</div>
                <div class="featured-agency">${m.agency}</div>
            </div>
        </div>
    `).join('');

    // 2. On This Day
    const today = new Date();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();
    
    // Format Today's Date String
    const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    document.getElementById('onThisDayTitle').innerText = `ON THIS DAY - ${monthNames[todayMonth-1]} ${todayDay}`;

    const todaysEvents = eventsData.filter(e => {
        const d = new Date(e.date);
        return (d.getMonth() + 1) === todayMonth && d.getDate() === todayDay;
    });
    
    const todaysMissions = missionsData.filter(m => {
        const d = new Date(m.launchDate);
        return (d.getMonth() + 1) === todayMonth && d.getDate() === todayDay;
    });

    const otdContainer = document.getElementById('onThisDayContainer');
    if (todaysEvents.length === 0 && todaysMissions.length === 0) {
        otdContainer.innerHTML = `<div class="synopsis-box" style="text-align: center; border-style: dashed;">NO HISTORICAL EVENTS OR LAUNCHES TODAY.</div>`;
    } else {
        let otdHtml = '';
        todaysEvents.forEach(e => {
            const year = new Date(e.date).getFullYear();
            otdHtml += `
                <div class="event-card">
                    <div class="event-header">
                        <div class="event-year">${year}</div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--text-muted)"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    </div>
                    <div class="event-title">${e.title}</div>
                    <div class="event-desc">${e.description}</div>
                </div>
            `;
        });
        
        todaysMissions.forEach(m => {
            otdHtml += generateMissionRow(m);
        });
        otdContainer.innerHTML = otdHtml;
    }

    // 3. Top Rated
    const topRated = [...missionsData].sort((a, b) => b.averageRating - a.averageRating).slice(0, 10);
    document.getElementById('topRatedContainer').innerHTML = topRated.map(m => generateMissionRow(m)).join('');
}

function generateMissionRow(m) {
    return `
        <div class="mission-row" onclick="openMissionDetail('${m.id}')">
            <div class="row-header">
                <span class="row-agency">${m.agency}</span>
                <span class="status-badge ${getStatusClass(m.status)}">${m.status}</span>
            </div>
            <div class="row-title">${m.name}</div>
            <div class="row-footer">
                <span class="row-date">${formatDate(m.launchDate)}</span>
                ${m.averageRating > 0 ? `
                <div class="row-rating">
                    ${getStars(m.averageRating)}
                    <span>${m.averageRating.toFixed(1)}</span>
                </div>
                ` : ''}
            </div>
        </div>
    `;
}

// ----------------------------------------------------
// BROWSE VIEW RENDERING
// ----------------------------------------------------
function renderBrowseGrid(missions) {
    const grid = document.getElementById('missionGrid');
    const noResults = document.getElementById('noResults');

    if (missions.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');
    grid.innerHTML = missions.map(m => generateMissionRow(m)).join('');
}

function filterMissions(searchTerm, agencyFilter) {
    const term = searchTerm.toLowerCase();
    
    currentMissions = missionsData.filter(mission => {
        const matchesSearch = 
            mission.name.toLowerCase().includes(term) ||
            mission.agency.toLowerCase().includes(term) ||
            mission.synopsis.toLowerCase().includes(term) ||
            mission.astronauts.some(a => a.name.toLowerCase().includes(term));
            
        const matchesAgency = agencyFilter === 'all' || mission.agency === agencyFilter;
        
        return matchesSearch && matchesAgency;
    });

    renderBrowseGrid(currentMissions);
}

// ----------------------------------------------------
// MISSION DETAIL VIEW
// ----------------------------------------------------
function openMissionDetail(id) {
    selectedMission = missionsData.find(m => m.id === id);
    if (!selectedMission) return;

    const container = document.getElementById('detailContainer');
    const m = selectedMission;
    
    let html = `
        <div class="detail-header">
            <div class="detail-agency-status">
                <span class="row-agency" style="color:var(--text-secondary);">${m.agency}</span>
                <span class="status-badge ${getStatusClass(m.status)}">${m.status}</span>
            </div>
            <h2 class="detail-title">${m.name}</h2>
            <div class="row-date">${formatDate(m.launchDate)}</div>
            ${m.averageRating > 0 ? `
            <div class="row-rating" style="font-size:1.2rem;">
                ${getStars(m.averageRating)}
                <span>${m.averageRating.toFixed(1)}</span>
                <span style="color:var(--text-muted); font-size:0.9rem; margin-left:8px;">(${m.totalRatings} RATINGS)</span>
            </div>
            ` : ''}
        </div>

        <div class="detail-section">
            <div class="section-title">LAUNCH VIDEO</div>
            <div class="video-container">
                ${m.videoURL ? `
                    <video controls poster="${m.imageURL || ''}">
                        <source src="${m.videoURL}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                ` : `
                    <div style="text-align:center; color:var(--text-muted);">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                        <div style="margin-top:8px; font-weight:900; font-family:var(--font-heading);">NO VIDEO AVAILABLE</div>
                    </div>
                `}
            </div>
        </div>

        <div class="detail-section">
            <div class="section-title">SYNOPSIS</div>
            <div class="synopsis-box">
                ${m.synopsis}
                <div style="margin-top: 12px; display:flex; align-items:center; gap:8px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="color:var(--accent-yellow)"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span style="font-family:var(--font-heading); font-weight:900; color:#fff; font-size:0.9rem;">DURATION: ${m.duration.toUpperCase()}</span>
                </div>
            </div>
        </div>
    `;

    if (m.astronauts && m.astronauts.length > 0) {
        html += `
            <div class="detail-section">
                <div class="section-title">THE ASTRONAUTS</div>
                <div class="astronauts-scroll">
                    ${m.astronauts.map(a => `
                        <div class="astronaut-item">
                            ${a.imageURL ? 
                                `<img src="${a.imageURL}" class="astro-img" alt="${a.name}">` : 
                                `<div class="astro-img" style="display:flex; justify-content:center; align-items:center; color:var(--text-muted);">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                </div>`
                            }
                            <div>
                                <div class="astro-name">${a.name}</div>
                                <div class="astro-role">${a.role}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    html += `
        <div class="detail-section">
            <div class="section-title">HARDWARE SPECS</div>
            <div class="hardware-specs">
                <div class="hw-row">
                    <div class="hw-label">ROCKET</div>
                    <div class="hw-val">${m.rocketName.toUpperCase()}</div>
                </div>
                <div class="hw-row">
                    <div class="hw-label">CAPSULE</div>
                    <div class="hw-val">${m.capsuleName.toUpperCase()}</div>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
    navigateTo('detail');
}

// Start
init();
