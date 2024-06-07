document.addEventListener("DOMContentLoaded", function() {
    fetch('/projects')
    .then(response => response.json())
    .then(projects => {
        const projectsContainer = document.getElementById("projects-container");
        projects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project");
            projectElement.innerHTML = `
                <h2>${project.title}</h2>
                <p>${project.description}</p>
            `;
            projectsContainer.appendChild(projectElement);
        });
    })
    .catch(error => console.error('Error fetching projects:', error));
});
