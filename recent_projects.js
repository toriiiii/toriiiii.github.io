const container = document.getElementById('recent-projects-container');
const loadBtn = document.getElementById('load-more-btn');
let loadSize = 3;

function showMostRecentProjects() {
    projects = document.getElementsByClassName("col s12 m6 l4");
    for (let i = 0; i < projects.length; i++) {
        if (i >= loadSize) {
            break;
        }

        card = projects[i].cloneNode(true);
        container.appendChild(card);
    }
}

showMostRecentProjects();

