<template>
  <a 
   class="rounded-full text-sm px-10 py-4 leading-tight" 
   :class="[bgColor, bgColorHover, color, colorHover]"
   href="#">{{ txt }}</a>
</template>

<script>
export default {
   name: 'Button',
   props: {
      txt: {
         type: String,
         default: 'Click Here'
      },
      bgColor: {
         type: String,
         default: 'bg-green-400'
      },
      bgColorHover: {
         type: String,
         default: 'hover:bg-green-500'
      },
      color:{
         type: String,
         default: 'text-white'
      },
      colorHover:{
         type: String,
         default: 'hover:text-white'
      }
   }
}
</script>

<style>

</style>