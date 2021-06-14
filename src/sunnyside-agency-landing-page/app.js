const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', function(){
   document.body.classList.toggle('open');
   mobileMenu.classList.toggle('hidden');
})