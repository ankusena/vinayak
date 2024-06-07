document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const contentForm = document.getElementById('content-form');
    const logoutButton = document.getElementById('logout');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userId = e.target.userId.value;
            const password = e.target.password.value;

            if (userId === 'guest' && password === 'guest' || userId === 'admin' && password === '1234') {
                sessionStorage.setItem('loggedIn', true);
                sessionStorage.setItem('user', userId);
                window.location.href = userId === 'admin' ? 'admin.html' : 'index.html';
            } else {
                alert('Invalid login credentials');
            }
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            sessionStorage.removeItem('loggedIn');
            sessionStorage.removeItem('user');
        });
    }

    if (contentForm) {
        contentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const content = e.target.content.value;
            // Save content logic here
            alert('Content updated');
        });
    }

    const user = sessionStorage.getItem('user');
    if (user === 'guest') {
        document.querySelectorAll('nav a')[1].style.display = 'none';
    } else if (!sessionStorage.getItem('loggedIn')) {
        window.location.href = 'login.html';
    }
});
          
