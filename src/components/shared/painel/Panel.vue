<template>
  <div class="panel">
    <slot class="panel-content">
    </slot>
    <h2 class="panel-title">{{ title }}</h2>

  </div>

</template>

<script>
export default {
  props: ['title']
}
</script>

<style>

  :root{
    --bg-color:#6c5ce7;
    --text-color: #f3ec8c;
  }

  /*Panel Style*/

  .panel {
    position: relative;
  }

  .panel-title {
    
    color: var(--bg-color);
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 1.6em;
    text-align: center;
    padding: .2em 0;
    background-color: var(--text-color);
    height: 2em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    line-height: 1;
    box-sizing: border-box;
  }

  .panel-content{
    width: 20em; height: 20em;
    overflow: hidden;
  }

  .cover:hover{
    filter: grayscale(2);
  }

  .cover {
    transition: .3s ease-in-out;
    z-index: -1;
    width: 100%
  }

</style>


