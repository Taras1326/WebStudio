function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      } else {
        change.target.classList.remove('element-show');
      }
    });
  }
  let options = { threshold: [0.3] };
  let observer = new IntersectionObserver(onEntry, options);
  let elementss = document.querySelectorAll('.container');
  for (let elm of elementss) {
    observer.observe(elm);
}

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('backdrop--hidden');
    }
  })();


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