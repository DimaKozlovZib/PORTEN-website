"use script";
document.querySelector("#burger-memu").onclick = () => {
    let classButton = document.querySelector("#burger-memu").classList;
    let classMenu = document.querySelector(".header").classList;
    let body = document.querySelector("body").classList
    if (!classMenu.contains("active")) {
        classButton.add("active");
        classMenu.add("active")
        body.add("mobile-menu-acctive")
    } else {
        classButton.remove("active");
        classMenu.remove("active")
        body.remove("mobile-menu-acctive")
    }
}