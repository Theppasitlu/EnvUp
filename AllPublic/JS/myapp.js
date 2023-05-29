// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting){
//             entry.target.classList.add("Show");
//         }
//         else {
//             entry.target.classList.remove("Show");
//         }
//     });
// });

// const hiddenElement = document.querySelectorAll(".ContainLine");
// hiddenElement.forEach((el) => observer.observe(el));

window.addEventListener("scroll", reveal);

function reveal(){
    var Reveals = document.querySelectorAll(".ContainLine");
    for (var i = 0; i < Reveals.length; i++) {
        var WindowHeight = window.innerHeight;
        var Revealtop = Reveals[i].getBoundingClientRect().top;
        var RevealPoint = 100;
        if (Revealtop < WindowHeight - RevealPoint){
            Reveals[i].classList.add("Show");
        }
        else {
            Reveals[i].classList.remove("Show");
        }
    }
}

