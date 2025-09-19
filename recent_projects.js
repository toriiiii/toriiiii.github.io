const container = document.getElementById('recent-projects-container');
const loadBtn = document.getElementById('load-more-btn');
const allProjects = document.getElementsByClassName("col s12 m6 l4");
let loadSize = 3; 

const projects = [
  {
    title: "GIS Application",
    description: "A C-based Geographical Information System akin to Google Maps.",
    image: "/assets/img/gis.jpg",
    tools: "C, EZGL, GTK",
    accomplishments: [
      "Dynamically search and pinpoint global locations.",
      "Generate shortest paths to a destination."
    ],
    github: null,
    liveDemo: null
  },
  {
    title: "Smart Kitchen Inventory System",
    description: "An application that tracks the groceries you have at home.",
    image: "/assets/img/fridge.jpg",
    tools: "ESP32, Arduino IDE, React",
    accomplishments: [
      "View your groceries from anywhere.",
      "See what groceries are running low or close to expiring",
      "Compose a grocery list based on your existing groceries"
    ],
    github: null,
    liveDemo: null
  },
  {
    title: "Personal Website",
    description: "An HTML-based website about my programming experience.",
    image: "/assets/img/website.jpg",
    tools: "HTML, CSS, GitHub Pages",
    accomplishments: [
      "Detailed my skills and experience for potential employers.",
      "Utilized several key HTML and CSS elements."
    ],
    github: "https://github.com/toriiiii/toriiiii.github.io/",
    liveDemo: "https://toriiiii.github.io/"
  },
  {
    title: "Durable Salad Spinner",
    description: "An improved salad spinner model resistant to breakage.",
    image: "/assets/img/salad.jpg",
    tools: "AutoCAD, Power Tools",
    accomplishments: [
      "Developed a working model of an automated salad spinner.",
      "Satisfied client with the design and met requirements."
    ],
    github: null,
    liveDemo: null
  }
];

function showMostRecentProjects() {
    projects.forEach(project => {
        container.innerHTML += `
            <div class="col s12 m6 l4">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="${project.title}" src="${project.image}"
                style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator teal-text hoverline">"${project.title}"<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  "${project.description}"
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title teal-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li><b>Tools:</b> " ${project.tools}"</li>
                  <li>"${project.accomplishments}"</li>

                </ul>
                <div class="card-action">
                  <a aria-label="Visit website" href="${project.liveDemo}" target="_blank" data-position="top"
                    data-tooltip="View Online"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-external-link"></i></a>
                  <a aria-label="Visit the GitHub repo for project" href=""${project.github}""
                    target="_blank" data-position="top" data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-github"></i></a>
                </div>
              </div>
            </div>
            </div>
        `;
    })
}

loadBtn.addEventListener('click', () => {
    loadSize += 3; 
    showMostRecentProjects();
});

showMostRecentProjects();

