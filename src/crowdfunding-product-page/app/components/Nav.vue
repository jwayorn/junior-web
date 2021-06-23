<template>
  <nav class="flex justify-between items-center py-7 ">

            <div class="flex items-center justify-between w-full">

               <!-- logo -->
               <a href="/junior-web/junior-web/crowdfunding-product-page/">
                  <img class="md:h-13.25 md:w-17.25 lg:" src="../../images/logo.svg" alt="crowdfinding product landing page logo">
               </a>
               <!-- end logo -->
               
               <!-- desktop menu -->
               <div id="desktopMenu" class="hidden lg:block ml-16">
                  <ul class="desktop-menu flex">
                     <li class="desktop-has-submenu relative mr-8">
                        <a class="desktop-main-menu-label text-white text-opacity-70 hover:text-white hover:underline text-lg tracking-wide font-medium" href="#">Product</a>
                     </li>

                  </ul>
               </div>
               <!-- end desktop menu -->
            </div>

            <!-- auth -->
            <!-- end auth -->
            

            <!-- burger -->
            <a id="burger_menu" href="#" class="block lg:hidden" @click="mobile_menu_handler($event)">
               <span class="block mb-1.5 w-6 h-0.5 bg-white"></span>
               <span class="block mb-1.5 w-6 h-0.5 bg-white"></span>
               <span class="block w-6 h-0.5 bg-white"></span>
            </a>
            <!-- end burger -->

            <!-- mobile menu -->
            <div id="mobile_menu" class="hidden absolute font-medium text-lg left-0 right-0 top-24 border rounded-lg max-w-xs mx-auto w-full bg-white z-50 sm:max-w-md lg:hidden">

               <ul class="menu">

                  <li class="border-b">
                     <a class="block p-5" href="#">About</a>
                  </li>
                  <li class="border-b">
                     <a class="block p-5" href="#">Discover</a>
                  </li>
                 <li class="">
                     <a class="block p-5" href="#">Get Started</a>
                  </li>
               </ul>
            </div>
            <!-- end mobile menu -->

         </nav>
</template>

<script>
export default {
   name: 'Nav',
   methods: {
      mobile_menu_handler(event){
         // event.currentTarget.parentElement.classList.toggle('menu-m-open');
         
         event.currentTarget.parentElement.querySelector('#mobile_menu').classList.toggle('hidden');

         event.currentTarget.parentElement.classList.toggle('menu-m-open');
      }

   }
}
</script>

<style>

/**
* Mobile menu
*/

   /** burger toggle style */
   #burger_menu span{
      transform-origin: 1px 1px;
      transition: transform 300ms ease-in-out;
   }

   .menu-m-open #burger_menu span:first-child {
      transform: rotate(45deg);
   }

   .menu-m-open #burger_menu span:nth-child(2) {
      opacity: 0;
   }

   .menu-m-open #burger_menu span:last-child {
      transform: rotate(-45deg);
   }
   /** End burger toggle style */

/** Mobile menu */

</style>