const container = document.getElementById('recent-projects-container');
const loadBtn = document.getElementById('load-more-btn');
const allProjects = document.getElementsByClassName("col s12 m6 l4");
let loadSize = 3; 

function showMostRecentProjects() {
    container.innerHTML = ""; // clear container first to avoid duplicates

    for (let i = 0; i < loadSize && i < allProjects.length; i++) {
        const card = allProjects[i].cloneNode(true);
        container.appendChild(card);
    }

    if (loadSize >= allProjects.length) {
        loadBtn.style.display = 'none'; 
    }
}

// Handle load more
loadBtn.addEventListener('click', () => {
    loadSize += 3; // load 3 more
    showMostRecentProjects();
});

// Initial render
showMostRecentProjects();

