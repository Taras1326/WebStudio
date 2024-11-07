

(() => {
  document
    .querySelector('.js-speaker-form')
    .addEventListener('submit', e => {
      e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`),
    );

    e.currentTarget.reset();
  });
})();



function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show');
    }
  });
}
let options = { threshold: [0.4] };
let observer = new IntersectionObserver(onEntry, options);
let elementss = document.querySelectorAll('.container');
for (let elm of elementss) {
  observer.observe(elm);
}


(() => {
	document.addEventListener("DOMContentLoaded", function () {
		const filterButtons = document.querySelectorAll(".filter__btn");
		const projects = document.querySelectorAll(".project__item");

		filterButtons.forEach(function (button) {
			button.addEventListener("click", function () {
				const filterValue = button.getAttribute("data-filter");

				projects.forEach(function (project) {
					const projectClasses = project.classList;
					if (filterValue === "all" || projectClasses.contains(filterValue)) {
						project.style.display = "block";
					} else {
						project.style.display = "none";
					}
				});
			});
		});
	});
})();



// function ChangeLanguage(){
//   let hash = window.location.hash;
//   console.log(hash);
//   hash = hash.substr(1);
//   if (!allLang.includes(hash)){
//       location.href = window.location.pathname + '#ua';
//       location.reload();
//   }
//   select.value = hash;
//   document.querySelector('.nav-link').innerHTML = langArr['.link'][hash];
// }

// var arrLang = {
//   'en': {
//       'studio': 'Studio' ,
//       'portfolio': 'Portfolio' ,
//       'contacts': 'Contacts' ,
//   },
//   'ua': {
//       'studio': 'Студія' ,
//       'portfolio': 'Портфоліо' ,
//       'contacts': 'Контакти'  ,
//   }
// }

// $(function () {
//   $('.translate').click(function() {
//       var lang = $(this).attr('id');

//       $('.lang').each(function(index, mains) {
//           $(this).text(arrLang[lang][$(this).attr('key')]);
//       }); 
//   });
// });


            // themeSwitch

// function setThemeOnLoad() {
//   const currentTheme = localStorage.getItem("theme");

//   if (currentTheme === "dark") {
//     switchElement.checked = true;
//     document.body.classList.add(currentTheme);
//     iconMoon.style.display = "none";
//     iconSun.style.display = "unset";
//   }
// }

// const switchElement = document.querySelector(".theme-switch"),
//   iconMoon = document.querySelector(".switch-icon-moon"),
//   iconSun = document.querySelector(".switch-icon-sun");

// switchElement.addEventListener("click", themeSwitch);

// function themeSwitch() {
//   if (switchElement.checked) {
//     document.body.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//     iconMoon.style.display = "none";
//     iconSun.style.display = "unset";
//   } else {
//     document.body.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//     iconMoon.style.display = "unset";
//     iconSun.style.display = "none";
//   }
// }

// function setThemeOnLoad() {
//   const currentTheme = localStorage.getItem("theme");

//   if (currentTheme === "dark") {
//     switchElement.checked = true;
//     document.body.classList.add(currentTheme);
//     iconMoon.style.display = "none";
//     iconSun.style.display = "unset";
//   }
// }

// setThemeOnLoad();






// const header = document.querySelector('.header');
// const navlist = document.querySelector('.first');
// const headerHeight = header.offsetHeight;
// console.log(headerHeight)
// const firstHeight = first.offsetHeight;
// console.log(firstHeight)

// window.addEventListener("scroll", () => {
//   let scrollDistange = window.scrollY;
//   console.log(scrollDistange)

//   if (scrollDistange >= firstHeight) {
//     header.classList.add('header--fixed');
//     first.style.marginTop = `${headerHeight}px`;
//   }
//   else {
//     header.classList.remove('header--fixed');
//     first.style.marginTop = null;
//   }
// })


// window.addEventListener("scroll", function() {
//   const scrollPos = window.scrollY

//   if(scrollPos > 100){
//      headerEl.classList.add("header-mini")
//   }
//   else{
//     headerEl.classList.remove("header-mini")
//   }
// })]





// window.addEventListener('scroll', e => {
//   let header = document.getElementById('header').classList
//   let active_class = 'header_scrolled'

//   if(pageYOffset > 100) header.add(active_class)
//   else header.remove(active_class)
// })

