<template>
  <div class="container">
    <h1 class="appTitle">{{ title }}</h1>

    <div class="filter-box">
      <input @input="filter = $event.target.value" class="filter-input" type="text" placeholder="Search some album">
    </div>
    <ul class="albuns-list" >

      <li class="albuns-list-item" v-for="(album, index) in filterAlbums" :key="index">

        <my-panel :title="album.album" >
          <responsive-image :url="album.url" :title="album.album"></responsive-image> 
        </my-panel>
        <my-button type="button" text="Delete" @click.native="removeAlbum(album)"></my-button>

        
      </li>
    </ul>
  </div>
</template>

<script>

import Panel from '../shared/painel/Panel.vue';
import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue';
import Button from '../shared/button/Button.vue';
//Você importa o componente

export default {

  components: {
    'my-panel': Panel,
    'responsive-image': ResponsiveImage,
    'my-button': Button
    //E aqui você "usa ele"
  },

  name: 'app',
  data () {
    return {
      title: "My Favorites Albums",
      albums: [],
      filter: ''
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
    

  },
  computed: {
    filterAlbums: function() {
      if(this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i');
        return this.albums.filter(albums => exp.test(albums.album));
      }else {
        return this.albums
      }
    }
  },
  methods: {
    removeAlbum(album) {
      if (confirm("Thas ok?")) {
        alert(`vamos testar isso: ${album.album}`)
        
      }
    }
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

  /* FILTER STYLE */

  .filter-box {
    width: 68vw;
    margin: auto;
    padding: 2em;
  }

  .filter-input {
    background-color: #f3ec8c;
    border: 2px solid #f3ec8c;
    padding: .2em;
    font-size: 1.2em;
    font-family: 'Karla', sans-serif;
    color: #6c5ce7;
    transform: skewX(-8deg);
    transition: .2s ease-in-out;
  }

  .filter-input:focus {
    background-color: #6c5ce7;
    color: #f3ec8c;
  }
  .filter-input::placeholder {
    color: #5c5a2e;
  }

  
</style>


