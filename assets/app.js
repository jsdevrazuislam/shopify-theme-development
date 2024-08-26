const footerDate = document.querySelector(".footerDate");

document.addEventListener("DOMContentLoaded", () => {
    footerDate.innerHTML = new Date().getFullYear();
});
