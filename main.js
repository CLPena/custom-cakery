const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

/********************************* HEADER *********************************/

document.querySelector(".hamburger").addEventListener("click", () => {
  if (!menu.classList.contains("active")) {
    menu.classList.add("active");
    close.classList.add("active")
  }
});

document.querySelector(".close").addEventListener("click", () => {
  if (close.classList.contains("active")) {
    close.classList.remove("active");
    menu.classList.remove("active")
  }
});

/********************************* LANDING PAGE *********************************/


if (document.querySelector("#landing")) {
  document.querySelector(".landing-image").addEventListener("click", () => {
    window.location.href = 'order.html'
  })
}
if (document.querySelector("#landing") && document.querySelector("#landing").focus) {
  document.querySelector(".landing-image").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
      window.location.href = 'order.html'
    }
  });
}

/********************************* ORDER PAGE *********************************/

if (document.querySelector("#order")) {
  let body = document.querySelector("body");
  let modal = document.querySelector(".modal");

  window.setTimeout(() => {
   showModal();
  }, 5000);

  const hideModal = () => {
   modal.classList.remove("active")
   body.classList.remove("modal-active")
   modal.setAttribute("aria-hidden", "true")
   body.setAttribute("aria-hidden", "false")
  }

  const showModal = () => {
    modal.classList.add("active")
    body.classList.add("modal-active")
    modal.setAttribute("aria-hidden", "false")
    body.setAttribute("aria-hidden", "true")
    // need something here to disable tabbing outside of modal
  }

  document.querySelector(".modal-button").addEventListener("click", () => {
    if (document.querySelector(".modal-email-field").value) {
      document.querySelector(".modal-content").innerHTML =
      "<h3>Your coupon code is <span class='green'>cakelovers</span></h3>"
    }
  })

  document.querySelector(".modal-close").addEventListener("click", () => {
    hideModal()
  })

  const validateForm = () => {
    alert("Thanks for ordering a cake with us!")
  }

  document.querySelector("form").addEventListener("submit", () => {
    validateForm()
  })
}
