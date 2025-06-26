function active(id) {
    let links = document.querySelectorAll(".nav-link")
    links.forEach(function (ele) {
        ele.classList.remove("active");
    })
    document.getElementById(id).classList.add("active");
    
} 