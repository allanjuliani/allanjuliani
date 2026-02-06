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
    "my name is Allan",
    "software engineer",
    "18 years in IT field",
    "Software Engineer at Uber",
];

let Home = {
    speed: 1000,
    init: function () {},
    fill: async function (column_index) {},
};

window.onload = function (e) {
    //Home.init();
    const form = document.getElementById('form');
    form.addEventListener('submit', logSubmit);
    addLetters();
};

function logSubmit(event) {
    event.preventDefault();
    addLog();
}

function addLog() {
    const commandInput = document.getElementById('command');
    const consoleLog = document.getElementById('consoleLog');
    var newP = document.createElement('p');
    var newSpanDir = document.createElement('span');
    var newSpanRoot = document.createElement('span');
    var dirContent = document.createTextNode('~/allanjuliani ');
    var rootContent = document.createTextNode('# ');
    var inputValue = document.createTextNode(commandInput.value);
    newP.appendChild(newSpanDir);
    newP.appendChild(newSpanRoot);
    newP.appendChild(inputValue);
    newSpanDir.appendChild(dirContent);
    newSpanRoot.appendChild(rootContent);
    newSpanDir.classList.add('dir');
    newSpanRoot.classList.add('root');

    // gtag('event', 'page_view', {
    //     page_title: commandInput.value,
    //     page_location: location.pathname,
    //     page_path: '/?command=' + commandInput.value,
    // });

    consoleLog.appendChild(newP);
    commandInput.value = '';
}

SLEEP_TIME = 50;
async function addLetters() {
    const commandInput = document.getElementById('command');

    for (var i = 0; i < phrases.length; i++) {
        var phrase = phrases[i];

        for (var i2 = 0; i2 < phrase.length; i2++) {
            await sleep(SLEEP_TIME);
            commandInput.value = commandInput.value + phrase.charAt(i2);
        }

        await sleep(SLEEP_TIME);

        addLog();
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
