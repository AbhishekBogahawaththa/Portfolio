// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Page navigation
let currentPage = 1;

function showPage(pageNum) {
    const currentPageEl = document.getElementById(`page${currentPage}`);
    const nextPageEl = document.getElementById(`page${pageNum}`);

    currentPageEl.classList.remove('active');
    currentPageEl.classList.add('prev');

    setTimeout(() => {
        nextPageEl.classList.add('active');
        currentPage = pageNum;
    }, 100);

    setTimeout(() => {
        currentPageEl.classList.remove('prev');
    }, 800);
}

// Robot interaction
document.addEventListener('DOMContentLoaded', function() {
    const robot = document.getElementById('robot');
    if (robot) {
        robot.addEventListener('click', function() {
            const hologram = document.getElementById('hologram');
            hologram.classList.add('show');
            
            setTimeout(() => {
                showPage(2);
                setTimeout(() => {
                    hologram.classList.remove('show');
                }, 800);
            }, 1000);
        });
    }
});

// Project tabs
let currentTab = 'personal';
const projectData = {
    personal: [
        {
            icon: '🤖',
            title: 'AI Chatbot Assistant',
            desc: 'An intelligent conversational AI built with natural language processing capabilities and machine learning algorithms.',
            tech: ['Python', 'TensorFlow', 'NLP']
        },
        {
            icon: '🌐',
            title: 'Web Portfolio Platform',
            desc: 'A dynamic portfolio website with modern animations and responsive design for showcasing creative work.',
            tech: ['React', 'CSS3', 'JavaScript']
        },
        {
            icon: '📱',
            title: 'Mobile Task Manager',
            desc: 'A productivity app with offline sync, push notifications, and collaborative features for team management.',
            tech: ['Flutter', 'Firebase', 'Dart']
        }
    ],
    university: [
        {
            icon: '🔬',
            title: 'Research Data Analyzer',
            desc: 'A comprehensive tool for analyzing research data with statistical modeling and visualization capabilities.',
            tech: ['R', 'Python', 'Matplotlib']
        },
        {
            icon: '🎓',
            title: 'Campus Management System',
            desc: 'A full-stack web application for managing student records, courses, and administrative tasks.',
            tech: ['Java', 'Spring Boot', 'MySQL']
        },
        {
            icon: '🧠',
            title: 'Machine Learning Project',
            desc: 'Implementation of various ML algorithms for predictive analysis and pattern recognition in academic datasets.',
            tech: ['Python', 'Scikit-learn', 'Pandas']
        }
    ]
};

function switchTab(tabType) {
    if (tabType === currentTab) return;

    const tabs = document.querySelectorAll('.tab');
    const grid = document.getElementById('projectsGrid');

    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab:nth-child(${tabType === 'personal' ? '1' : '2'})`).classList.add('active');

    grid.classList.add('switching');

    setTimeout(() => {
        renderProjects(tabType);
        grid.classList.remove('switching');
        currentTab = tabType;
    }, 250);
}

function renderProjects(tabType) {
    const grid = document.getElementById('projectsGrid');
    const projects = projectData[tabType];

    grid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-icon">${project.icon}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.desc}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Form submission
function handleSubmit(event) {
    event.preventDefault();
    const btn = event.target.querySelector('.send-btn');
    const originalText = btn.textContent;
    
    btn.textContent = 'Sending... 🚀';
    btn.style.background = 'linear-gradient(145deg, #9d4edd, #00ffff)';
    
    setTimeout(() => {
        btn.textContent = 'Message Sent! ✅';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = 'linear-gradient(145deg, #00ffff, #9d4edd)';
            event.target.reset();
        }, 2000);
    }, 1500);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    renderProjects('personal');
});