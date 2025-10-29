function toggleMenu(){
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function showBasic() {
    document.querySelector('.row1').classList.remove('hidden');
    document.querySelector('.row2').classList.add('hidden');
    document.querySelector('.row3').classList.add('hidden');
}

function showStandard() {
    document.querySelector('.row1').classList.add('hidden');
    document.querySelector('.row2').classList.remove('hidden');
    document.querySelector('.row3').classList.add('hidden');
}

function showPremium() {
    document.querySelector('.row1').classList.add('hidden');
    document.querySelector('.row2').classList.add('hidden');
    document.querySelector('.row3').classList.remove('hidden');
}


document.querySelector(".btn-basic").addEventListener("click", function () {
    this.style.backgroundColor = "#f4b400"; // Changes to green when clicked
    document.querySelector(".btn-standard").style.backgroundColor = "#0c0c3c";
    document.querySelector(".btn-premium").style.backgroundColor = "#0c0c3c";

});

document.querySelector(" .btn-standard").addEventListener("click", function () {
    this.style.backgroundColor = "#f4b400"; // Changes to green when clicked
    document.querySelector(".btn-basic").style.backgroundColor = "#0c0c3c";
    document.querySelector(".btn-premium").style.backgroundColor = "#0c0c3c";

});

document.querySelector(".btn-premium").addEventListener("click", function () {
    this.style.backgroundColor = "#f4b400"; // Changes to green when clicked
    document.querySelector(".btn-basic").style.backgroundColor = "#0c0c3c";
    document.querySelector(".btn-standard").style.backgroundColor = "#0c0c3c";

});