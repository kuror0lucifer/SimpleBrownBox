let contexts = document.querySelectorAll(".faq-div-p-context");
let faq = document.querySelectorAll(".faq-div-block");

faq.forEach((faqItem, index) => {
  faqItem.addEventListener("click", function () {
    contexts[index].classList.toggle("hidden");
  });
});
