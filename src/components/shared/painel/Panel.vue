<template>
  <div class="panel">
    <div class="panel-content">
      <slot></slot>
    </div>
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
    overflow: hidden;
    cursor: pointer;
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
    position: relative;
  }

  .panel:hover .cover{
    /* filter: grayscale(2); */
    transform: scale(1.3);
  }

  .panel-content::after{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0px;
    height: 0px;
    background-color: #31226491;
    border-radius: 50%;
    transition: .4s ease-in-out;
  }

  .panel:hover .panel-content::after {
    width: 150%;
    height: 150%;
  }



</style>


