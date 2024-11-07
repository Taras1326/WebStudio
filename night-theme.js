
const nightThemeBtn = document.getElementById("night-theme-btn")

nightThemeBtn.addEventListener("click", function() {
    document.body.classList.toggle("night-theme")
    // localStorage.setItem('theme', this.dataset.theme)
    
})







// let activeTheme = localStorage.getItem('theme');

// if(activeTheme === null) {
//     applyTheme('light');
// } else {
//     applyTheme(activeTheme);
// }
