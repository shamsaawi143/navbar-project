const menuBtn = document.querySelector(".menu-img");
const navigation = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
  navigation.classList.toggle("show-nav-links");
});