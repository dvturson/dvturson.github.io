document.querySelector("#projects-link").addEventListener("click", function(e) {
    e.preventDefault();

    const projects = document.querySelector("#projects");
    const cursor = document.querySelector("#cursor");

    if (projects.style.display === "none") {
        projects.style.display = "block";
        cursor.style.display = "none";
    } else {
        projects.style.display = "none";
        cursor.style.display = "inline";
    }

    console.log("show projects");

});