const validUser = {
    username: "drsilva",
    password: "123456"
};

const auditLog = [];

function login() {
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("senha").value;
    const errorMessage = document.getElementById("error-message");

    if (username === validUser.username && password === validUser.password) {
        document.querySelector('.login-form').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        errorMessage.textContent = "";
        logAccess(username);
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos.";
    }
}

function logout() {
    document.getElementById('main-content').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
    document.getElementById('usuario').value = "";
    document.getElementById('senha').value = "";
}

function viewPatientRecord() {
    const alertBox = document.getElementById("alert");
    alertBox.style.display = 'block';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 4000);

    logAccess(validUser.username, "Prontuário VIP acessado.");
}

function logAccess(user, action = "Login realizado") {
    const timestamp = new Date().toLocaleString();
    auditLog.push({ user, action, timestamp });
    updateLogDisplay();
}

function updateLogDisplay() {
    const logList = document.getElementById("log-list");
    logList.innerHTML = "";

    auditLog.forEach(log => {
        const listItem = document.createElement("li");
        listItem.textContent = `${log.timestamp} - ${log.user}: ${log.action}`;
        logList.appendChild(listItem);
    });
}
