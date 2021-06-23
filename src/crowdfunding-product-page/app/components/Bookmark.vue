<template>
   <a 
      class="md:flex md:items-center md:rounded-full md:bg-gray-100 md:pr-3" 
      :class="{'text-crowd-d-cyan font-bold':isBookMark}"
      href="#"
   >
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
         <g fill="none" fill-rule="evenodd">
            <circle class="fill-current" fill="#2F2F2F" cx="28" cy="28" r="28"/>
            <path 
               :fill="[isBookMark ? '#fff':'#B1B1B1']" 
               d="M23 19v18l5-5.058L33 37V19z"
            />
         </g>
      </svg>
      <span 
         class="hidden md:inline-block ml-2 text-sm"
      >{{ words }}</span>
   </a>
</template>

<script>
export default {
   name:'Bookmark',
   props: {
      isBookMark: {
         type:Boolean,
         default: false,
      },
   },
   data(){
      return {
      }
   },
   computed:{
      words(){
         return this.isBookMark ? 'Bookmarked':'Bookmark';
      }
   }
}
</script>

<style>

</style>