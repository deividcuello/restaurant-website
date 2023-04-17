const toggleElement = document.querySelector('.menu i');
const nav = document.querySelector('header nav');
const header = document.querySelector('header');

toggleElement.addEventListener('click', function() {
    this.classList.toggle('fa-xmark');
    if (toggleElement.classList.contains('fa-xmark')) {
        nav.classList.add("active");
    } else{
        nav.classList.remove("active");
    }
});

window.addEventListener("scroll", function() {
    if (nav.classList.contains("active")){
        nav.classList.remove("active")
        toggleElement.classList.remove('fa-xmark')
    }

    if (window.scrollY> 220){
        header.style.backgroundColor = "var(--black)"
    } else{
        header.style.backgroundColor = "transparent"

    }
});

