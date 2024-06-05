document.addEventListener("DOMContentLoaded", () => {
  const tabLinks = document.querySelectorAll(".element");

  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", (event) => {
      event.preventDefault();

      for (let j = 0; j < tabLinks.length; j++) {
        tabLinks[j].classList.remove("active");
      }

      const tabId = tabLinks[i].getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
      tabLinks[i].classList.add("active");

      for (let k = 0; k < tabLinks.length; k++) {
        const contentId = tabLinks[k].getAttribute("data-tab");
        if (contentId !== tabId) {
          document.getElementById(contentId).classList.remove("active");
        }
      }
    });
  }

  tabLinks[0].click();
});

//contact
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const objet = document.getElementById("objet").value;
    const message = document.getElementById("message").value;
    if (name && phone && email && message && objet) {
      const confirmation = document.getElementById("confirmation");
      confirmation.style.display = "block";
      setTimeout(function () {
        confirmation.style.display = "none";
      }, 3000);
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  });
