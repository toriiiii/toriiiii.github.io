const container = document.getElementById('recent-projects-container');
const loadBtn = document.getElementById('load-more-btn');
const allProjects = document.getElementsByClassName("col s12 m6 l4");
let loadSize = 3; 

function showMostRecentProjects() {
    console.log("Projects found:", allProjects.length);
    container.innerHTML = ""; 

    for (let i = 0; i < loadSize && i < allProjects.length; i++) {
        const card = allProjects[i].cloneNode(true);
        card.style.display = 'block';
        container.appendChild(card);
    }

    if (loadSize >= allProjects.length) {
        loadBtn.style.display = 'none'; 
    }
}

loadBtn.addEventListener('click', () => {
    loadSize += 3; 
    showMostRecentProjects();
});

showMostRecentProjects();

