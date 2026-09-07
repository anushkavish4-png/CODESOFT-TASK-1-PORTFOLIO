var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");



function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbxHRGrxl24EfgmaVN6uG_q_gnxLGH8Vm6y8XyRtEQpgFHTEMTBZJoLRQhEckro4WkxX1A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
});

const seeMoreBtn = document.getElementById("seeMoreBtn");
const hiddenWorks = document.querySelectorAll(".hidden-work");

let expanded = false;

seeMoreBtn.addEventListener("click", function(e){
    e.preventDefault();

    if (!expanded) {

    hiddenWorks.forEach(work => {
        work.style.display = "block";
        work.classList.remove("hide-work");
        work.classList.add("show-work");
    });

    seeMoreBtn.innerHTML = "See Less";
    expanded = true;

} else {

    hiddenWorks.forEach(work => {
        work.classList.remove("show-work");
        work.classList.add("hide-work");

        setTimeout(() => {
            work.style.display = "none";
        }, 500);
    });

    seeMoreBtn.innerHTML = "See More";
    expanded = false;

    setTimeout(() => {
        document.getElementById("portfolio").scrollIntoView({
            behavior: "smooth"
        });
    }, 300);


        seeMoreBtn.innerHTML = "See More <i class='fa-solid fa-chevron-down'></i>";
        expanded = false;

        setTimeout(()=>{
            document.getElementById("portfolio").scrollIntoView({
                behavior:"smooth"
            });
        },700);

    }
});