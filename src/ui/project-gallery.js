export function showInstagramLink (e) {
    const project = e.target.parentElement;
    const projectLink = project.children[1];
    projectLink.style.opacity = 0.9;
};

export function hideInstagramLink (e) {
    const project = e.target.parentElement;
    const projectLink = project.children[1];
    projectLink.style.opacity = 0;
};