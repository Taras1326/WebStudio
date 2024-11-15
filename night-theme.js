
const nightThemeBtn = document.getElementById("night-theme-btn")

nightThemeBtn.addEventListener("click", function() {
    document.body.classList.toggle("night-theme")
    // localStorage.setItem('theme', this.dataset.theme)
    
})


// let styleMode = localStorage.getItem('styleMode');
// const styleToggle = document.querySelector('.header__button');

// const enableDarkStyle = () => {
//   document.body.classList.add('darkstyle');
//   localStorage.setItem('styleMode', 'dark');
// };

// const disableDarkStyle = () => {
//   document.body.classList.remove('darkstyle');
//   localStorage.setItem('styleMode', 'light');
// };

// styleToggle.addEventListener('click', () => {
//   if (styleMode !== 'dark') {
//     enableDarkStyle();
//   } else {
//     disableDarkStyle();
//   }
// });

// if (styleMode === 'dark') {
//   enableDarkStyle();
// }







// let activeTheme = localStorage.getItem('theme');

// if(activeTheme === null) {
//     applyTheme('light');
// } else {
//     applyTheme(activeTheme);
// }
