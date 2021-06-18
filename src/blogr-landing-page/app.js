// toggle mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', function(){
   document.body.classList.toggle('open');
   mobileMenu.classList.toggle('hidden');
});

// toggle dropdown menu
const hasSubMenus = document.querySelectorAll('.menu .has-sub-menu');

Array.from(hasSubMenus).forEach((hasSubMenu)=>{
   hasSubMenu.querySelector('.main-menu-label').addEventListener('click', function(){
      hasSubMenu.classList.toggle('submenu-open');
   });
})


// toggle dropdown desktop menu
const desktopHasSubmenus = document.querySelectorAll('.desktop-menu .desktop-has-submenu');

Array.from(desktopHasSubmenus).forEach(dHas_Submenu => {
   dHas_Submenu.querySelector('.desktop-main-menu-label').addEventListener('click', function(){
   
      // clear other dropdown are opening  
      if(!dHas_Submenu.classList.contains('desktop-submenu-open')){
         Array.from(desktopHasSubmenus).forEach((has_Submenu)=>{
            has_Submenu.classList.remove('desktop-submenu-open');
         });
      }

      dHas_Submenu.classList.toggle('desktop-submenu-open');
      

   });
});

// close dropdown menu when click outer element
window.addEventListener('click', function(e){
   if(!e.target.parentNode.classList.contains('desktop-submenu-open')){
      
      Array.from(desktopHasSubmenus).forEach((dHas_Submenu)=>{
         dHas_Submenu.classList.remove('desktop-submenu-open');
      });

   }

})