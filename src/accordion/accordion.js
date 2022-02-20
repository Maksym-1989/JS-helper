window.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".experience-accordion button");
  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");
    // for (let i = 0; i < items.length; i++) {
    //   items[i].setAttribute('aria-expanded', 'false');
    // }
    if (itemToggle == "false") {
      this.setAttribute("aria-expanded", "true");
    }
    if (itemToggle == "true") {
      this.setAttribute("aria-expanded", "false");
    }
  }
  items.forEach((item) => item.addEventListener("click", toggleAccordion));
});
///////////v2////////
const accordions = document.querySelectorAll(".accordion-item");

for (item of accordions) {
  item.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      for (el of accordions) {
        el.classList.remove("active");
      }
      this.classList.add("active");
    }
  });
}
