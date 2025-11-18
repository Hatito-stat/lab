(function () {
    const root = document.documentElement;
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function applyTheme(theme) {
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
            btn.textContent = 'Темна тема';
        } else {
            root.setAttribute('data-theme', 'dark');
            btn.textContent = 'Світла тема';
        }
    }

    // Читаємо збережену тему (якщо є)
    let savedTheme = null;
    try {
        savedTheme = localStorage.getItem('theme');
    } catch (e) {}

    if (savedTheme === 'light') {
        applyTheme('light');
    } else {
        applyTheme('dark'); // тема за замовчуванням
    }

    btn.addEventListener('click', () => {
        const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';
        applyTheme(next);
        try {
            localStorage.setItem('theme', next);
        } catch (e) {}
    });
})();
