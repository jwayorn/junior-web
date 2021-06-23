<template>
 <div class="container max-w-desktop mx-auto bg-gray-100">

    <header class="bg-crowdfund-m-hero px-8 h-80">
      <Nav />
    </header>

  <!-- body -->
    <section class="max-w-3xl mx-auto px-8 -mt-16">
      <div class="bg-white rounded-lg text-center mb-4">
          
        <img class="inline-block -mt-7" src="../images/logo-mastercraft.svg" alt="logo mastercraft">
        <div class="py-5 px-5">
          <h1 class="font-bold text-xl mb-4 md:text-3xl">Mastercraft Bamboo Monitor Riser</h1>
          <p class="text-crowd-d-gray text-sm mb-4 md:text-lg md:mb-5">A beautifully handcrafted monitor stand to reduce neck and eye train.</p>

          <div class="flex justify-between items-center">
            <Button :txt="'Back this project'" :bgColor="'bg-crowd-moderate-cyan'" :bgColorHover="'hover:bg-crowd-d-cyan'" />
            <!-- <a class="rounded-full bg-crowd-moderate-cyan text-sm px-10 py-4 text-white leading-tight" href="#">Back this project</a> -->
            
            <!-- Bookmark btn -->
             <Bookmark />
            <!-- Bookmark btn -->
            
          </div>

        </div>
      </div>
      
      <!-- funding amount card -->
      <div class="bg-white rounded-lg mb-4">

        <div class="relative py-5 px-5 text-center">

          <div>
            <span class="font-bold text-3xl">$89,914</span>
            <br/>
            <span class="text-xs text-crowd-d-gray">of $100,000 backed</span>
          </div>

          <div class="w-1/6 mx-auto bg-gray-100 h-px my-3"></div>

          <div>
            <span class="font-bold text-3xl">5,007</span>
            <br/>
            <span class="text-xs text-crowd-d-gray">total backers</span>
          </div>

          <div class="w-1/6 mx-auto bg-gray-400 h-px my-3"></div>

          <div>
            <span class="font-bold text-3xl">56</span>
            <br/>
            <span class="text-xs text-crowd-d-gray">days left</span>
          </div>

          <!-- progress bar -->
          <div class="mt-5 h-3 w-full bg-gray-200 rounded-full">
            <div class="bg-crowd-moderate-cyan h-3 w-1/6 rounded-full"></div>
          </div>

        </div>
        
      </div>
      <!-- end funding amount card -->

      <!-- about this project -->
      <div class="bg-white rounded-lg mb-4">
          
        <div class="py-5 px-5">
          <h2 class="font-bold text-lg mb-4">About this project</h2>
          <p class="text-crowd-d-gray text-sm mb-4">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
          <p class="text-crowd-d-gray text-sm mb-4">
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>

          <!-- product card -->
          <div class="border-2 rounded-lg p-3">
            <div class="md:flex md:justify-between md:items-center">
              <h3 class="text-md font-bold">Bamboo Stand</h3>
              <span class="text-sm text-crowd-moderate-cyan font-medium">Pledge $25 or more</span>
            </div>

            <p class="text-crowd-d-gray text-sm py-5">
              You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.
            </p>

            <div class="md:flex md:justify-between md:items-center">
              <p>
                <span class="text-4xl font-bold align-middle">101</span>&nbsp;&nbsp;<span class="text-sm text-crowd-d-gray">left</span>
              </p>

              <a class="inline-block px-7 py-2.5 bg-crowd-moderate-cyan mt-5 text-white text-sm rounded-full" href="#">Select Reward</a>
            </div>
          </div>
          <!-- end product card -->

        </div>
      </div>
      <!-- end about this project -->
    </section>
  <!-- end body -->

   </div>

</template>

<script>
import Nav from './components/Nav.vue';
import Bookmark from './components/Bookmark.vue';
import Button from './components/Button.vue';

export default {
   name: 'App',
  components: {Nav, Bookmark, Button}
}
</script>

<style>
  .bg-crowdfund-m-hero{
    /* background-image:url('/crowdfunding-product-page/images/image-hero-mobile.jpg'); */
    background: hsla(0, 0%, 0%, 0.89);
    background: linear-gradient(180deg,hsla(0, 0%, 0%, 0.89) 0% , hsla(0, 0%, 0%, 0.01) 100%) , url("/crowdfunding-product-page/images/image-hero-mobile.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }

  @media (min-width: 1024px) {
    .bg-crowdfund-m-hero {
      background: hsla(0, 0%, 0%, 0.89);
      background: linear-gradient(180deg,hsla(0, 0%, 0%, 0.89) 0% , hsla(0, 0%, 0%, 0.01) 100%) , url("/crowdfunding-product-page/images/image-hero-desktop.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: bottom
    }
  }

</style>