document.addEventListener("scroll", function () {
    let scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    let footer = document.querySelector("footer");
    footer.style.backgroundColor = `rgb(${scrollPercentage * 2.55}, 0, ${255 - scrollPercentage * 2.55})`;
});
