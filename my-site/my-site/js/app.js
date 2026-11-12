const store = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const DEFAULT_PROJECTS = [
  {
    id: 'p1',
    name: 'E-Commerce Website',
    desc: "Zamonaviy onlayn do'kon — savat, filtr va to'lov tizimi bilan.",
    tech: ['React', 'CSS3', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    demo: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 'p2',
    name: 'Weather App',
    desc: "Real vaqt ob-havo ma'lumotlarini ko'rsatuvchi ilova.",
    tech: ['JavaScript', 'HTML5', 'API'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&q=80',
    demo: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 'p3',
    name: 'Portfolio Template',
    desc: 'Minimalist va responsiv shaxsiy portfolio shabloni.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
    demo: 'https://example.com',
    github: 'https://github.com'
  }
];

const DEFAULT_PROFILE = {
  name: 'Aziz Karimov',
  role: 'Frontend Developer',
  bio: 'Zamonaviy, tez va foydalanuvchiga qulay veb-saytlar yarataman. HTML, CSS, JavaScript va React bilan ishlayman.'
};

let projects = store.get('my_projects', DEFAULT_PROJECTS);
let profile = store.get('my_profile', DEFAULT_PROFILE);
let users = store.get('my_users', []);
let currentUser = store.get('my_current_user', null);
let lang = store.get('my_lang', 'uz');

const I18N = {
  uz: {
    nav_home: 'Bosh sahifa',
    nav_about: 'Men haqimda',
    nav_projects: 'Loyihalar',
    nav_skills: "Ko'nikmalar",
    nav_contact: 'Aloqa',
    nav_login: 'Kirish',
    home_hello: 'Salom, men',
    home_role: 'Frontend Developer',
    home_desc: 'Zamonaviy, tez va foydalanuvchiga qulay veb-saytlar yarataman. HTML, CSS, JavaScript va React bilan ishlayman.',
    home_btn_projects: 'Loyihalarim',
    home_btn_contact: "Bog'lanish",
    about_title: 'Men haqimda',
    about_sub: 'Tanishuv, qiziqishlar va maqsadlar',
    about_who: 'Men haqimda',
    about_who_text: '2 yillik tajribaga ega frontend dasturchiman. Toza kod va chiroyli interfeys yaratishga ishtiyoqliman.',
    about_interests: 'Qiziqishlarim',
    about_interests_text: 'Veb-texnologiyalar, UI/UX dizayn, ochiq kodli loyihalar va yangi frameworklarni o\'rganish.',
    about_goals: 'Maqsadlarim',
    about_goals_text: 'Xalqaro loyihalarda ishlash va yuqori sifatli mahsulotlar yaratish.',
    about_knowledge: 'Bilimlarim',
    about_knowledge_text: 'HTML5, CSS3, JavaScript (ES6+), React, Git, GitHub va responsiv dizayn.',
    projects_title: 'Mening loyihalarim',
    projects_sub: 'Men yaratgan ishlar',
    projects_admin: "Loyiha qo'shish",
    projects_add: "Qo'shish",
    projects_demo: 'Live Demo',
    projects_github: 'GitHub',
    projects_delete: "O'chirish",
    skills_title: "Ko'nikmalarim",
    skills_sub: 'Men ishlaydigan texnologiyalar',
    contact_title: 'Bog\'lanish',
    contact_sub: 'Men bilan bog\'laning',
    contact_send: 'Yuborish',
    footer_rights: 'Barcha huquqlar himoyalangan.',
    auth_login: 'Kirish',
    auth_register: "Ro'yxatdan o'tish",
    admin_title: 'Admin Dashboard',
    admin_profile: 'Profilni tahrirlash',
    admin_projects: 'Loyihalarni boshqarish',
    admin_save: 'Saqlash',
    admin_logout: 'Chiqish',
    project_name: 'Loyiha nomi',
    project_desc: 'Qisqacha tavsif',
    project_tech: 'Texnologiyalar (vergul bilan)',
    project_image: 'Rasm URL',
    project_demo_url: 'Live Demo URL',
    project_github_url: 'GitHub URL',
    contact_name: 'Ismingiz',
    contact_email: 'Email',
    contact_message: 'Xabaringiz',
    login_username: 'Foydalanuvchi nomi',
    login_password: 'Parol',
    register_username: 'Foydalanuvchi nomi',
    register_password: 'Parol',
    profile_name: 'Ism',
    profile_role: 'Kasb',
    profile_bio: 'Qisqacha tanishtiruv'
  },
  ru: {
    nav_home: 'Главная',
    nav_about: 'Обо мне',
    nav_projects: 'Проекты',
    nav_skills: 'Навыки',
    nav_contact: 'Контакты',
    nav_login: 'Вход',
    home_hello: 'Привет, я',
    home_role: 'Frontend Разработчик',
    home_desc: 'Создаю современные, быстрые и удобные сайты. Работаю с HTML, CSS, JavaScript и React.',
    home_btn_projects: 'Мои проекты',
    home_btn_contact: 'Связаться',
    about_title: 'Обо мне',
    about_sub: 'Знакомство, интересы и цели',
    about_who: 'Обо мне',
    about_who_text: 'Frontend разработчик с 2-летним опытом. Люблю чистый код и красивый интерфейс.',
    about_interests: 'Интересы',
    about_interests_text: 'Веб-технологии, UI/UX дизайн, open-source проекты и изучение новых фреймворков.',
    about_goals: 'Цели',
    about_goals_text: 'Работать над международными проектами и создавать качественные продукты.',
    about_knowledge: 'Знания',
    about_knowledge_text: 'HTML5, CSS3, JavaScript (ES6+), React, Git, GitHub и адаптивный дизайн.',
    projects_title: 'Мои проекты',
    projects_sub: 'Мои работы',
    projects_admin: 'Добавить проект',
    projects_add: 'Добавить',
    projects_demo: 'Демо',
    projects_github: 'GitHub',
    projects_delete: 'Удалить',
    skills_title: 'Навыки',
    skills_sub: 'Технологии с которыми работаю',
    contact_title: 'Контакты',
    contact_sub: 'Свяжитесь со мной',
    contact_send: 'Отправить',
    footer_rights: 'Все права защищены.',
    auth_login: 'Вход',
    auth_register: 'Регистрация',
    admin_title: 'Админ панель',
    admin_profile: 'Редактировать профиль',
    admin_projects: 'Управление проектами',
    admin_save: 'Сохранить',
    admin_logout: 'Выйти',
    project_name: 'Название проекта',
    project_desc: 'Краткое описание',
    project_tech: 'Технологии (через запятую)',
    project_image: 'URL изображения',
    project_demo_url: 'URL Live Demo',
    project_github_url: 'URL GitHub',
    contact_name: 'Ваше имя',
    contact_email: 'Электронная почта',
    contact_message: 'Ваше сообщение',
    login_username: 'Имя пользователя',
    login_password: 'Пароль',
    register_username: 'Имя пользователя',
    register_password: 'Пароль',
    profile_name: 'Имя',
    profile_role: 'Профессия',
    profile_bio: 'Краткое представление'
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_contact: 'Contact',
    nav_login: 'Login',
    home_hello: "Hi, I'm",
    home_role: 'Frontend Developer',
    home_desc: 'I build modern, fast and user-friendly websites. Working with HTML, CSS, JavaScript and React.',
    home_btn_projects: 'My Projects',
    home_btn_contact: 'Contact Me',
    about_title: 'About Me',
    about_sub: 'Introduction, interests and goals',
    about_who: 'About Me',
    about_who_text: 'Frontend developer with 2 years of experience. Passionate about clean code and beautiful UI.',
    about_interests: 'Interests',
    about_interests_text: 'Web technologies, UI/UX design, open-source projects and learning new frameworks.',
    about_goals: 'Goals',
    about_goals_text: 'Work on international projects and build high-quality products.',
    about_knowledge: 'Knowledge',
    about_knowledge_text: 'HTML5, CSS3, JavaScript (ES6+), React, Git, GitHub and responsive design.',
    projects_title: 'My Projects',
    projects_sub: 'Works I have built',
    projects_admin: 'Add project',
    projects_add: 'Add',
    projects_demo: 'Live Demo',
    projects_github: 'GitHub',
    projects_delete: 'Delete',
    skills_title: 'My Skills',
    skills_sub: 'Technologies I work with',
    contact_title: 'Contact',
    contact_sub: 'Get in touch with me',
    contact_send: 'Send',
    footer_rights: 'All rights reserved.',
    auth_login: 'Login',
    auth_register: 'Register',
    admin_title: 'Admin Dashboard',
    admin_profile: 'Edit profile',
    admin_projects: 'Manage projects',
    admin_save: 'Save',
    admin_logout: 'Logout',
    project_name: 'Project name',
    project_desc: 'Short description',
    project_tech: 'Technologies (comma separated)',
    project_image: 'Image URL',
    project_demo_url: 'Live Demo URL',
    project_github_url: 'GitHub URL',
    contact_name: 'Your name',
    contact_email: 'Email',
    contact_message: 'Your message',
    login_username: 'Username',
    login_password: 'Password',
    register_username: 'Username',
    register_password: 'Password',
    profile_name: 'Name',
    profile_role: 'Profession',
    profile_bio: 'Short introduction'
  }
};

const toastEl = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2500);
}

function applyLang() {
  const dict = I18N[lang] || I18N.uz;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  store.set('my_lang', lang);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  store.set('my_theme', theme);
}

function renderProfile() {
  const heroName = document.querySelector('.hero-name');
  if (heroName) heroName.textContent = profile.name;

  const roleEl = document.querySelector('.hero-role');
  const descEl = document.querySelector('.hero-desc');
  if (roleEl) roleEl.textContent = profile.role;
  if (descEl) descEl.textContent = profile.bio;
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const dict = I18N[lang] || I18N.uz;
  grid.innerHTML = '';

  if (!projects.length) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text-2);grid-column:1/-1;">Hozircha loyihalar yo\'q.</p>';
    renderAdminProjects();
    return;
  }

  projects.forEach((p) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <img class="project-img" src="${p.image || 'https://via.placeholder.com/600x360/16161f/8b5cf6?text=Project'}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/600x360/16161f/8b5cf6?text=Project'" />
      <div class="project-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="tech-tags">${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}</div>
        <div class="project-links">
          <a href="${p.demo || '#'}" target="_blank" rel="noopener">${dict.projects_demo}</a>
          <a href="${p.github || '#'}" target="_blank" rel="noopener">${dict.projects_github}</a>
          ${currentUser ? `<button class="btn-delete" data-id="${p.id}">${dict.projects_delete}</button>` : ''}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll('.btn-delete').forEach((btn) => {
    btn.addEventListener('click', () => deleteProject(btn.dataset.id));
  });

  renderAdminProjects();
}

function deleteProject(id) {
  if (!currentUser) return;
  projects = projects.filter((p) => p.id !== id);
  store.set('my_projects', projects);
  renderProjects();
  showToast('Loyiha o\'chirildi');
}

function renderAdminProjects() {
  const list = document.getElementById('adminProjectsList');
  if (!list) return;

  const dict = I18N[lang] || I18N.uz;
  list.innerHTML = '';

  if (!projects.length) {
    list.innerHTML = '<p style="color:var(--text-2);font-size:0.88rem;">Loyihalar yo\'q.</p>';
    return;
  }

  projects.forEach((p) => {
    const item = document.createElement('div');
    item.className = 'admin-project-item';
    item.innerHTML = `
      <span>${p.name}</span>
      <button data-id="${p.id}">${dict.projects_delete}</button>
    `;
    list.appendChild(item);
  });

  list.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      projects = projects.filter((p) => p.id !== btn.dataset.id);
      store.set('my_projects', projects);
      renderProjects();
      showToast('Loyiha o\'chirildi');
    });
  });
}

function updateAuthUI() {
  const dict = I18N[lang] || I18N.uz;
  const authBtn = document.getElementById('authBtn');
  if (authBtn) {
    authBtn.textContent = currentUser ? '👤 ' + currentUser : dict.nav_login;
  }

  const adminPanel = document.getElementById('projectAdmin');
  if (adminPanel) {
    adminPanel.classList.toggle('hidden', !currentUser);
  }

  renderProjects();
}

function openModal(modal) {
  if (modal) modal.classList.add('open');
}

function closeModal(modal) {
  if (modal) modal.classList.remove('open');
}

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    lang = btn.dataset.lang;
    applyLang();
    renderProjects();
  });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const projectForm = document.getElementById('projectForm');
if (projectForm) {
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!currentUser) return;

    const newProject = {
      id: 'p' + Date.now(),
      name: document.getElementById('pName').value.trim(),
      desc: document.getElementById('pDesc').value.trim(),
      tech: document.getElementById('pTech').value.split(',').map((t) => t.trim()).filter(Boolean),
      image: document.getElementById('pImage').value.trim(),
      demo: document.getElementById('pDemo').value.trim(),
      github: document.getElementById('pGithub').value.trim()
    };

    if (!newProject.name || !newProject.desc || !newProject.tech.length) {
      showToast('Barcha majburiy maydonlarni to\'ldiring');
      return;
    }

    projects.unshift(newProject);
    store.set('my_projects', projects);
    renderProjects();
    e.target.reset();
    showToast('Loyiha qo\'shildi ✅');
  });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('contactStatus');
    if (status) {
      status.textContent = 'Xabar yuborildi! ✅';
      status.style.color = '#22c55e';
    }
    e.target.reset();
    showToast('Xabar muvaffaqiyatli yuborildi');
    setTimeout(() => { if (status) status.textContent = ''; }, 3000);
  });
}

const authModal = document.getElementById('authModal');
const authBtn = document.getElementById('authBtn');

if (authBtn) {
  authBtn.addEventListener('click', () => {
    if (currentUser) {
      const adminModal = document.getElementById('adminModal');
      if (adminModal) {
        const adminNameEl = document.getElementById('adminName');
        if (adminNameEl) adminNameEl.textContent = currentUser;
        openModal(adminModal);
      }
      return;
    }

    if (authModal) {
      openModal(authModal);
      return;
    }

    window.location.href = 'login.html';
  });
}

document.querySelectorAll('.modal-close').forEach((btn) => {
  btn.addEventListener('click', () => closeModal(btn.closest('.modal')));
});

document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modal);
  });
});

document.querySelectorAll('.auth-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.auth-tab').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    if (loginForm) loginForm.classList.toggle('hidden', tab.dataset.tab !== 'login');
    if (registerForm) registerForm.classList.toggle('hidden', tab.dataset.tab !== 'register');
  });
});

const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('regUser').value.trim();
    const pass = document.getElementById('regPass').value;
    const msg = document.getElementById('regMsg');

    if (user.length < 3) {
      msg.textContent = 'Nom kamida 3 belgidan iborat bo\'lsin';
      msg.className = 'auth-msg error';
      return;
    }
    if (pass.length < 4) {
      msg.textContent = 'Parol kamida 4 belgidan iborat bo\'lsin';
      msg.className = 'auth-msg error';
      return;
    }
    if (users.find((u) => u.username === user)) {
      msg.textContent = 'Bunday foydalanuvchi mavjud';
      msg.className = 'auth-msg error';
      return;
    }

    users.push({ username: user, password: pass });
    store.set('my_users', users);
    msg.textContent = 'Ro\'yxatdan o\'tdingiz! Endi kiring.';
    msg.className = 'auth-msg success';
    e.target.reset();

    setTimeout(() => {
      const tab = document.querySelector('.auth-tab[data-tab="login"]');
      if (tab) tab.click();
      const loginUser = document.getElementById('loginUser');
      if (loginUser) loginUser.value = user;
      msg.textContent = '';
    }, 1000);
  });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value;
    const msg = document.getElementById('loginMsg');

    const found = users.find((u) => u.username === user && u.password === pass);
    if (!found) {
      msg.textContent = 'Noto\'g\'ri nom yoki parol';
      msg.className = 'auth-msg error';
      return;
    }

    currentUser = user;
    store.set('my_current_user', currentUser);
    updateAuthUI();
    if (authModal) closeModal(authModal);
    showToast('Xush kelibsiz, ' + user + '! ✅');
    e.target.reset();
    msg.textContent = '';
    setTimeout(() => { window.location.href = 'index.html'; }, 600);
  });
}

const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    currentUser = null;
    store.set('my_current_user', null);
    updateAuthUI();
    closeModal(document.getElementById('adminModal'));
    showToast('Chiqdingiz');
  });
}

const profileForm = document.getElementById('profileForm');
if (profileForm) {
  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    profile = {
      name: document.getElementById('pfName').value.trim() || profile.name,
      role: document.getElementById('pfRole').value.trim() || profile.role,
      bio: document.getElementById('pfBio').value.trim() || profile.bio
    };
    store.set('my_profile', profile);
    renderProfile();
    const status = document.getElementById('profileStatus');
    if (status) {
      status.textContent = 'Saqlandi ✅';
      status.style.color = '#22c55e';
    }
    showToast('Profil yangilandi ✅');
    setTimeout(() => { if (status) status.textContent = ''; }, 2000);
  });
}

setInterval(() => {
  const adminModal = document.getElementById('adminModal');
  if (adminModal && adminModal.classList.contains('open') && currentUser) {
    const pfName = document.getElementById('pfName');
    if (pfName && !pfName.value) {
      pfName.value = profile.name;
      const pfRole = document.getElementById('pfRole');
      const pfBio = document.getElementById('pfBio');
      if (pfRole) pfRole.value = profile.role;
      if (pfBio) pfBio.value = profile.bio;
    }
  }
}, 1000);

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

function initSite() {
  const savedTheme = store.get('my_theme', 'dark');
  applyTheme(savedTheme);
  applyLang();
  renderProfile();
  renderProjects();
  updateAuthUI();

  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          document.querySelectorAll('.bar-fill').forEach((bar) => {
            const width = bar.dataset.width;
            setTimeout(() => { bar.style.width = width; }, 200);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(skillsSection);
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const pageLinks = document.querySelectorAll('.nav-link');
  const page = location.pathname.split('/').pop() || 'index.html';
  pageLinks.forEach((link) => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });
}

initSite();
