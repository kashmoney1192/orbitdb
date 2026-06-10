// DOM Elements
const missionGrid = document.getElementById('missionGrid');
const searchInput = document.getElementById('searchInput');
const agencyFilter = document.getElementById('agencyFilter');
const noResults = document.getElementById('noResults');
const totalMissionsEl = document.getElementById('totalMissions');
const totalAstronautsEl = document.getElementById('totalAstronauts');

// Modal Elements
const modal = document.getElementById('missionModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

// Initialize Application
function init() {
    renderMissions(missionsData);
    updateStats(missionsData);
    setupEventListeners();
}

// Render Missions
function renderMissions(missions) {
    missionGrid.innerHTML = '';
    
    if (missions.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    
    missions.forEach(mission => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openModal(mission);
        
        let statusClass = 'status-ongoing';
        if (mission.status === 'Success') statusClass = 'status-success';
        if (mission.status === 'Failed') statusClass = 'status-failed';
        
        card.innerHTML = `
            <div>
                <div class="card-header">
                    <div>
                        <h3 class="card-title">${mission.name}</h3>
                        <span class="card-agency">${mission.agency}</span>
                    </div>
                    <span class="status-badge ${statusClass}">${mission.status}</span>
                </div>
                <div class="card-body">
                    <p class="card-date">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        ${formatDate(mission.launchDate)}
                    </p>
                    <p class="card-synopsis">${mission.synopsis}</p>
                </div>
            </div>
            <div class="card-footer">
                <div class="tech-info">
                    Rocket: <span>${mission.rocketName}</span>
                </div>
                <div class="tech-info">
                    Duration: <span>${mission.duration}</span>
                </div>
            </div>
        `;
        missionGrid.appendChild(card);
    });
}

// Update Statistics
function updateStats(missions) {
    totalMissionsEl.textContent = missions.length;
    
    let astronauts = new Set();
    missions.forEach(m => {
        m.astronauts.forEach(a => astronauts.add(a));
    });
    totalAstronautsEl.textContent = astronauts.size;
}

// Format Date string
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

// Open Modal
function openModal(mission) {
    let statusClass = 'status-ongoing';
    if (mission.status === 'Success') statusClass = 'status-success';
    if (mission.status === 'Failed') statusClass = 'status-failed';

    const astroTags = mission.astronauts.map(a => `<span class="astronaut-tag">${a}</span>`).join('');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <div>
                <h2>${mission.name}</h2>
                <span class="card-agency">${mission.agency}</span>
            </div>
            <span class="status-badge ${statusClass}">${mission.status}</span>
        </div>
        
        <p style="margin-bottom: 2rem; font-size: 1.1rem; color: #fff;">${mission.synopsis}</p>
        
        <div class="modal-grid">
            <div class="detail-section">
                <h3>Mission Details</h3>
                <div class="detail-row">
                    <span class="detail-label">Launch Date</span>
                    <span class="detail-value">${formatDate(mission.launchDate)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Duration</span>
                    <span class="detail-value">${mission.duration}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Rocket</span>
                    <span class="detail-value">${mission.rocketName}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Capsule</span>
                    <span class="detail-value">${mission.capsuleName}</span>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Crew Members</h3>
                ${mission.astronauts.length > 0 
                    ? `<div class="astronaut-tags">${astroTags}</div>` 
                    : '<p style="color: var(--text-muted)">Uncrewed Mission</p>'}
            </div>
        </div>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Setup Event Listeners
function setupEventListeners() {
    // Search & Filter
    searchInput.addEventListener('input', filterMissions);
    agencyFilter.addEventListener('change', filterMissions);
    
    // Modal Close
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

// Filter Logic
function filterMissions() {
    const searchTerm = searchInput.value.toLowerCase();
    const agency = agencyFilter.value;
    
    const filtered = missionsData.filter(mission => {
        const matchesSearch = 
            mission.name.toLowerCase().includes(searchTerm) ||
            mission.synopsis.toLowerCase().includes(searchTerm) ||
            mission.astronauts.some(a => a.toLowerCase().includes(searchTerm));
            
        const matchesAgency = agency === 'all' || mission.agency === agency;
        
        return matchesSearch && matchesAgency;
    });
    
    renderMissions(filtered);
    updateStats(filtered);
}

// Boot up
document.addEventListener('DOMContentLoaded', init);
