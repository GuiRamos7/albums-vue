<template>
  <img class="cover" :src="url" :alt="title">
</template>


<script>
export default {

  props: ['url', 'title']
}
</script>


<style scoped>
  .cover {
    transition: .4s ease-in-out;
    width: 100%;
  }
</style>

