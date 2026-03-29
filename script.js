const tasks = [
  {
    title: "Atualizar documentação do sistema",
    description: "Atualizar a documentação técnica com as novas funcionalidades",
    date: "Mar 23, 2026",
    name: "Maria Silva",
    email: "maria@example.com",
    status: "In Progress"
  },
  {
    title: "Configurar ambiente de teste",
    description: "Configurar ambiente automatizado",
    date: "Mar 23, 2026",
    name: "Usuário Padrão",
    email: "user@example.com",
    status: "Completed"
  },
  
];

renderDashboard();

function navigate(page, button){
    const buttons = document.querySelectorAll(".button-menu");
    buttons.forEach(b => b.classList.remove("marcado"));

    if (page === 'dashboard'){
        renderDashboard()
        button.classList.add("marcado");
        lucide.createIcons();
    }
    if (page === 'users'){
        renderUsers();
        button.classList.add("marcado");
    }
}

function renderUsers(){
    const app = document.getElementById('app');

    app.innerHTML = `
       --- Tela de usuarios Aqui ---
    `;

}

function renderDashboard(){
    const app = document.getElementById('app');

    app.innerHTML = `
        <div class="top-admin">
            <div class="top">
                <h1>Admin Dashboard</h1>
                <p>Manage and assign tasks across all users.</p>
            </div>
            <button><span>+ Assign New Task</span></button>
        </div>
        <div id="cards"></div>
        <div id="tasks"></div>
    `;

    renderCards();
    renderTasks();
}

function renderCards(){

const total = tasks.filter(tasks => tasks).length;
const pending = tasks.filter(tasks => tasks.status === "Pending").length;
const progress = tasks.filter(tasks => tasks.status === "In Progress").length;
const complet = tasks.filter(tasks => tasks.status === "Completed").length;

    document.getElementById("cards").innerHTML = `
        <div class="card">
        <span class="card-check" data-lucide="square-check-big"></span>
            <div class="card-info">
                <span>Total Tasks</span>
                <p>${total}</p>
            </div>
        </div>
        <div class="card">
        <span class="card-alert" data-lucide="circle-alert"></span>
            <div class="card-info">
                <span>Pending</span>
                <p>${pending}</p>
            </div>
        </div>        
        <div class="card">
        <span class="card-clock" data-lucide="clock-4"></span>
            <div class="card-info">
                <span>In Progress</span>
                <p>${progress}</p>
            </div>                
        </div>
        <div class="card">
        <span class="card-circle-check" data-lucide="circle-check"></span>
            <div class="card-info">
                <span>Completed</span>
                <p>${complet}</p>
            </div>                
        </div>
    `
}

function renderTasks(){
    const container = document.getElementById("tasks");

    let tasksHTML = "";

    tasks.forEach(task => {
        tasksHTML += `
                <div class="list-tasks">
                    <div class="details">
                        <h1>${task.title}</h1>
                        <p>${task.description}</p>
                        <span>Created ${task.date}</span>
                    </div>
                    <div class="info-final">
                        <div class="assigned">
                            <span class="avatar">${task.name.charAt(0)}</span>
                            <div class="assigned-content">
                                <span class="assigned-name">${task.name}</span>
                                <span class="assigned-email">${task.email}</span>
                            </div>
                        </div>
                        <div class="status">
                            <span class="status-color ${task.status.toLowerCase().replace(" ", "-")}">${task.status}</span>
                        </div>
                        <div class="actions">
                            <span data-lucide="trash-2"></span>
                        </div>
                    </div>
                </div>
         `      
    })

    container.innerHTML = `
        <div class="tasks">
            <span>All Tasks Status</span>
            <div class="info-bar">
                <div class="info-bar-details">TASK DETAILS</div>
                <div class="info-bar-final">
                    <div class="">ASSIGNED TO</div>
                    <div class="">STATUS</div>
                    <div class="">ACTIONS</div>
                </div>
            </div>
            <div class="tasks-content">
                ${tasksHTML}
            </div>
        </div>
    `
}

lucide.createIcons();