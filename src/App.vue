<template>
  <div class="container">
    <h1 class="appTitle">{{ title }}</h1>

    <ul class="albuns-list" >

      <li class="albuns-list-item" v-for="(album, index) in albums" :key="index">

        <my-panel :title="album.album" >
          <img class="cover" :src="album.url" :alt="album.album">  
        </my-panel>
        
      </li>
    </ul>

  </div>
</template>

<script>

import Panel from './components/shared/painel/Panel.vue';
//Você importa o componente

export default {

  components: {
    'my-panel': Panel
    //E aqui você "usa ele"
  },

  name: 'app',
  data () {
    return {
      title: "My Favorites Albums",
      albums: []
    }
  },
  created() {

    let API = () => {
      let promise = this.$http.get("http://localhost:3000/posts/");
      promise
        .then(res => res.json())
        .then(albums => this.albums = albums)
        .catch(err => {
          console.log("Não foi possivel fazer as requisições das fotos")
          console.log(err);
      
        })
    }
    API()
    

  }

}
</script>

<style>

  @import url("https://meyerweb.com/eric/tools/css/reset/reset200802.css");
  /* RESET */
  @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Karla|Rakkas');
  /* Fonts */

  :root{
    --bg-color:#6c5ce7;
    --text-color: #f3ec8c;
  }


  body {
    background-color: var(--bg-color); 
    box-sizing: border-box;
  }

  .container {
    width: 85vw;
    margin: 0 auto;
  }

  .appTitle {
    font-size: 2.5em;
    color: var(--text-color);
    font-family: 'Karla', sans-serif;
    text-transform: uppercase;
    text-align: center;
    padding: .8em;
  }
  
  .albuns-list {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2em;
    line-height: 0;
  }

  .albuns-list-item img{
    width: 20em;
    height: 20em;
  }
  
</style>


