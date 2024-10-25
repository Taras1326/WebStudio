

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

