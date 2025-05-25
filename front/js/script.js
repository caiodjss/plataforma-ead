document.addEventListener('DOMContentLoaded', function() {
    // Verificar login ao carregar a página
    checkLoggedIn();

    // Gerenciar formulário de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Gerenciar logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
});

// Função para lidar com o login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    
    if (!email || !password || !role) {
        showAlert('Por favor, preencha todos os campos.', 'error');
        return;
    }
    
    authenticateUser(email, password, role);
}

// Função de autenticação simulada
// Função para lidar com o login (SIMULADO)
function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (!email || !password || !role) {
        showAlert('Por favor, preencha todos os campos.', 'error');
        return;
    }

    simulateLogin(role); // Chamar função de simulação
}

// Função de simulação de autenticação
function simulateLogin(role) {
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logando...';
        submitBtn.disabled = true;
    }

    // Simulando um breve atraso para a "autenticação"
    setTimeout(() => {
        // Simular login bem-sucedido
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userRole', role);
        localStorage.setItem('userEmail', document.getElementById('email').value);

        // Redirecionar
        redirectUser(role);

        if (submitBtn) {
            submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Entrar';
            submitBtn.disabled = false;
        }
    }, 1000);
}

// Função para redirecionar usuário (já definida anteriormente)
function redirectUser(role) {
    switch(role) {
        case 'student':
            window.location.href ='../pages/aluno.html';
            break;
        case 'teacher':
            window.location.href = '../pages/professor.html';
            break;
        case 'admin':
            window.location.href = '../pages/admin.html';
            break;
        default:
            showAlert('Tipo de usuário inválido', 'error');
    }
}

// Função para verificar se o usuário está logado (mantenha como está)
function checkLoggedIn() {
    const isLoggedIn = localStorage.getItem('loggedIn');
    const userRole = localStorage.getItem('userRole');

    // Se estiver na página de login e já logado, redirecionar
    if (window.location.pathname.includes('../pages/login.html') && isLoggedIn === 'true') {
        redirectUser(userRole);
    }

    // Se estiver em página restrita e não logado, redirecionar para login
    const restrictedPages = ['aluno.html', 'professor.html', 'admin.html'];
    const currentPage = window.location.pathname.split('/').pop();

    if (restrictedPages.includes(currentPage) && isLoggedIn !== 'true') {
        window.location.href = '../login.html';
    }
}

// Função para lidar com logout (mantenha como está)
function handleLogout() {
    // Limpar dados de login
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');

    // Redirecionar para página de login
    window.location.href = '../pages/login.html';
}

// Função para mostrar alertas (mantenha como está)
function showAlert(message, type = 'success') {
    // Remover alertas existentes
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }

    // Criar elemento de alerta
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${type}`;
    alertDiv.textContent = message;

    // Adicionar ao DOM
    document.body.prepend(alertDiv);

    // Remover após 5 segundos
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    // Verificar login ao carregar a página
    checkLoggedIn();

    // Gerenciar formulário de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Gerenciar logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
});