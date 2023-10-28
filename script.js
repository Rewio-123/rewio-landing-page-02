const toggleNavbar = () => {
    navHeader.classList.toggle("active");
  };

  const witnessBtn = document.querySelector(".container-btn");

  witnessBtn.addEventListener("click" , () => {
    window.open('wintess.html' , '_blank');
  })