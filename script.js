const accBtns = [...document.querySelectorAll("[data-toggle]")];

accBtns.forEach((btn) => {
  const dataTarget = btn.getAttribute("data-target");
  const targetElement = document.getElementById(dataTarget);
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("open")) {
      btn.classList.remove("open");
      btn.classList.remove("active-btn");
      targetElement.classList.add("toggle-component");
    } else if (!btn.classList.contains("open")) {
      btn.classList.add("open");
      btn.classList.add("active-btn");
      targetElement.classList.remove("toggle-component");
    }
  });
});
