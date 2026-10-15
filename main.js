const projectsLink = document.querySelector("#projects-link");
const projects = document.querySelector("#projects");
const cursor = document.querySelector("#cursor");

let typing = false;

const projectsList = [
    {
        name: "routine-clicker/",
        url: "https://github.com/dvturson/routine-clicker",
        desc: "a physical check in system bridging hardware (esp32 + button + 128x64px oled) and a real time web dashboard"
    },
    {
        name: "space-cats/",
        url: "https://github.com/dvturson/space-cats",
        desc: "A top-down roguelike game built with p5.js. You play a cat fighting through cheese-themed planets to rescue kidnapped parents from the Rat King."
    },
];

projectsLink.addEventListener("click", function (e) {
    e.preventDefault();

    if (typing) return;

    if (projects.style.display === "block") {
        projects.style.display = "none";
        return;
    }

    projects.style.display = "block";
    projects.innerHTML = "<br>";
    typing = true;

    const lines = projectsList.map(p => ({
        text: `${p.name}\u00A0\u00A0\u00A0\u00A0${p.desc}`,
        url: p.url,
        name: p.name,
    }));

    let lineIndex = 0;

    function typeLine(line) {
        const p = document.createElement('p');
        projects.appendChild(p);
        let i = 0;

        const interval = setInterval(() => {
            i++;
            const typed = line.text.slice(0, i);
            p.innerHTML = typed.replace(
                line.name,
                `<a href="${line.url}" target="_blank">${line.name}</a>`
            );

            if (i >= line.text.length) {
                clearInterval(interval);
                lineIndex++;
                if (lineIndex < lines.length) {
                    setTimeout(() => typeLine(lines[lineIndex]), 500);
                } else {
                    typing = false;
                }
            }
        }, 20);
        // const space = document.createElement("br");
        // dispatchEvent.
        projects.appendChild(document.createElement("br"));
    }

    typeLine(lines[0]);
});