const mainLogo = document.getElementById("mainLogo")
const aboutMe = document.getElementById("accordionExample")
const myWork = document.getElementById("myWork")
const reachMe = document.getElementById("reachMe")
const abtMeBtn = document.getElementById("abtMeBtn")
const myWorkBtn = document.getElementById("myWorkBtn")
const reachMeBtn = document.getElementById("reachMeBtn")

function showAbtMe() {
    aboutMe.classList.remove("d-none")
    myWork.classList.add("d-none")
    reachMe.classList.add("d-none")
    mainLogo.classList.add("d-none")
};

function showMyWork() {
    myWork.classList.remove("d-none")
    aboutMe.classList.add("d-none")
    reachMe.classList.add("d-none")
    mainLogo.classList.remove("d-none")
};

function showReachMe() {
    reachMe.classList.remove("d-none")
    aboutMe.classList.add("d-none")
    myWork.classList.add("d-none")
    mainLogo.classList.remove("d-none")
};

abtMeBtn.addEventListener("click", showAbtMe);
myWorkBtn.addEventListener("click", showMyWork);
reachMeBtn.addEventListener("click", showReachMe);