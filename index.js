"use script";
document.querySelector("#burger-memu").onclick = () => {
    let classButton = document.querySelector("#burger-memu").classList;
    let classMenu = document.querySelector(".header").classList;
    if (!classMenu.contains("active")) {
        classButton.add("active");
        classMenu.add("active")
    } else {
        classButton.remove("active");
        classMenu.remove("active")
    }
}