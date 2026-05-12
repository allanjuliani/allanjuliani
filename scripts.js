document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;
        window.scrollTo({
            top: targetSection.getBoundingClientRect().top + window.scrollY - headerHeight,
            behavior: 'smooth'
        });
     });
});

const phrases = [
    "hi there 👋",
    "my name is Allan 🙂",
    "I'm based in São Paulo, Brazil 🇧🇷",
    "I'm a software engineer 💻",
    "I've been working in IT for about 18 years 🧠",
    "I'm passionate about technology and software development 🚀",
    "most of my career has been focused on building software 🛠️",
    "I've worked with a wide range of programming languages and technologies ⚙️",
    "I have a solid background in software architecture and system design 🏗️",
    "I enjoy turning complex problems into simple, reliable solutions ✨",
    "I'm always learning and looking for better ways to build things 📚",
    "I really enjoy collaborating and working with teams 🤝",
    "I'm currently a software engineer at Uber 🚗"
];

let Home = {
    speed: 1000,
    init: function () {},
    fill: async function (column_index) {},
};

let aboutStarted = false;
let aboutDoneResolve;
const aboutDone = new Promise(resolve => { aboutDoneResolve = resolve; });

window.addEventListener('load', function (e) {
    const form = document.getElementById('form');
    form.addEventListener('submit', logSubmit);

    const careerForm = document.getElementById('careerForm');
    careerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addCareerLog();
    });

    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !aboutStarted) {
                aboutStarted = true;
                addLetters();
            }
        });
    }, { threshold: 0.3 });
    aboutObserver.observe(document.getElementById('about'));

    const careerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !careerStarted) {
                careerStarted = true;
                addCareerLetters();
            }
        });
    }, { threshold: 0.3 });
    careerObserver.observe(document.getElementById('projects'));
});

function logSubmit(event) {
    event.preventDefault();
    addLog();
}

function addLog(text = null) {
    const commandInput = document.getElementById('command');
    const consoleLog = document.getElementById('consoleLog');
    const newP = document.createElement('p');
    const newSpanDir = document.createElement('span');
    const newSpanRoot = document.createElement('span');
    const dirContent = document.createTextNode('~/allanjuliani ');
    const rootContent = document.createTextNode('# ');
    const inputValue = document.createTextNode(text || commandInput.value);
    newP.appendChild(newSpanDir);
    newP.appendChild(newSpanRoot);
    newP.appendChild(inputValue);
    newSpanDir.appendChild(dirContent);
    newSpanRoot.appendChild(rootContent);
    newSpanDir.classList.add('dir');
    newSpanRoot.classList.add('root');

    consoleLog.appendChild(newP);
    commandInput.value = '';
}

function addOutput(text) {
    const consoleLog = document.getElementById('consoleLog');
    const newP = document.createElement('p');
    const textContent = document.createTextNode(text);
    newP.appendChild(textContent);
    consoleLog.appendChild(newP);
}

const SLEEP_TIME = 80;
async function addLetters() {
    const commandInput = document.getElementById('command');
    const command = './about.sh';

    // Write the command ./about.sh to the input
    for (var i = 0; i < command.length; i++) {
        await sleep(SLEEP_TIME);
        commandInput.value = commandInput.value + command.charAt(i);
    }

    await sleep(500);

    // Add the command to the log
    addLog(command);

    // Show Docker-style loader
    const loaderFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    const loaderP = document.createElement('p');
    loaderP.textContent = loaderFrames[0] + ' Loading...';
    document.getElementById('consoleLog').appendChild(loaderP);

    let frameIndex = 0;
    const loaderInterval = setInterval(() => {
        loaderP.textContent = loaderFrames[frameIndex] + ' Loading...';
        frameIndex = (frameIndex + 1) % loaderFrames.length;
    }, 100);

    await sleep(2000);
    clearInterval(loaderInterval);
    loaderP.remove();

    // Show the texts as output
    for (var i = 0; i < phrases.length; i++) {
        addOutput(phrases[i]);
        await sleep(400);
    }

    // Scroll console to the bottom
    const consoleLog = document.getElementById('consoleLog');
    consoleLog.scrollTop = consoleLog.scrollHeight;
    aboutDoneResolve();
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const careerEntries = [
    {
        company: 'Uber',
        description: 'Developed scalable, high-performance applications using Python and Go, while ensuring code quality and maintainability. Collaborated with teams to optimize systems and deliver robust software solutions.'
    },
    {
        company: 'Cornershop',
        description: 'Led team in designing and delivering scalable solutions using Python, ensuring code quality and project efficiency. Provided technical guidance, optimized workflows, and drove best practices in software development.'
    },
    {
        company: 'Ongame',
        description: 'Led the IT team in managing projects and developing systems using Python, C#, and Java. Streamlined workflows, ensured project delivery, and implemented scalable technical solutions.'
    },
];

let careerStarted = false;

function addCareerLog(text = null) {
    const commandInput = document.getElementById('careerCommand');
    const consoleLog = document.getElementById('careerConsoleLog');
    const newP = document.createElement('p');
    const newSpanDir = document.createElement('span');
    const newSpanRoot = document.createElement('span');
    newSpanDir.appendChild(document.createTextNode('~/allanjuliani '));
    newSpanRoot.appendChild(document.createTextNode('# '));
    newP.appendChild(newSpanDir);
    newP.appendChild(newSpanRoot);
    newP.appendChild(document.createTextNode(text || commandInput.value));
    newSpanDir.classList.add('dir');
    newSpanRoot.classList.add('root');
    consoleLog.appendChild(newP);
    commandInput.value = '';
}

function addCareerOutput(text, className = null) {
    const consoleLog = document.getElementById('careerConsoleLog');
    const newP = document.createElement('p');
    if (className) newP.classList.add(className);
    newP.textContent = text;
    consoleLog.appendChild(newP);
}

async function addCareerLetters() {
    await aboutDone;

    const commandInput = document.getElementById('careerCommand');
    const command = './career.sh';

    for (let i = 0; i < command.length; i++) {
        await sleep(SLEEP_TIME);
        commandInput.value += command.charAt(i);
    }

    await sleep(500);
    addCareerLog(command);

    const loaderFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    const loaderP = document.createElement('p');
    loaderP.textContent = loaderFrames[0] + ' Loading...';
    document.getElementById('careerConsoleLog').appendChild(loaderP);

    let frameIndex = 0;
    const loaderInterval = setInterval(() => {
        loaderP.textContent = loaderFrames[frameIndex] + ' Loading...';
        frameIndex = (frameIndex + 1) % loaderFrames.length;
    }, 100);

    await sleep(2000);
    clearInterval(loaderInterval);
    loaderP.remove();

    for (const entry of careerEntries) {
        addCareerOutput('[' + entry.company + ']', 'career-company');
        await sleep(300);
        addCareerOutput(entry.description);
        await sleep(600);
        addCareerOutput('');
        await sleep(200);
    }
}
