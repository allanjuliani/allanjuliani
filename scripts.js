document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop + 5,
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

window.onload = function (e) {
    const form = document.getElementById('form');
    form.addEventListener('submit', logSubmit);
    addLetters();
};

function logSubmit(event) {
    event.preventDefault();
    addLog();
}

function addLog(text = null) {
    const commandInput = document.getElementById('command');
    const consoleLog = document.getElementById('consoleLog');
    var newP = document.createElement('p');
    var newSpanDir = document.createElement('span');
    var newSpanRoot = document.createElement('span');
    var dirContent = document.createTextNode('~/allanjuliani ');
    var rootContent = document.createTextNode('# ');
    var inputValue = document.createTextNode(text || commandInput.value);
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
    var newP = document.createElement('p');
    var textContent = document.createTextNode(text);
    newP.appendChild(textContent);
    consoleLog.appendChild(newP);
}

SLEEP_TIME = 80;
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
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
