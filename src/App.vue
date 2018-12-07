<template>
  <div class="container">
    <h1 class="appTitle">{{ title }}</h1>

    <ul class="albuns-list" >

      <li class="albuns-list-item" v-for="(album, index) in albums" :key="index">
        <div class="panel">
          <div class="panel-content">
            <img class="cover" :src="album.url" :alt="album.titulo">
          </div>
          <h2 class="panel-title">{{album.id}}. {{ album.album }}</h2>
        </div>
      </li>
    </ul>

  


  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: "My Favorites Albums",
      albums: []
    }
  },
  created() {

    let promise = this.$http.get("http://localhost:3000/posts/");

    promise
      .then(res => res.json())
      .then(albums => this.albums = albums)
      .catch(err => {
        console.log("Não foi possivel fazer as requisições das fotos")
        console.log(err);
    
      })

  }

}
</script>

<style>

  @import url("https://meyerweb.com/eric/tools/css/reset/reset200802.css");
  /* RESET */
  @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Karla|Rakkas');
  /* Fonts */

  body {
    background-color: #5f27cd; 
  }

  .container {
    width: 85vw;
    margin: 0 auto;
  }

  .appTitle {
    font-size: 2.5em;
    color: #f7fb00;
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

  /*Panel Style*/

  .panel-title {
    color: #5f27cd;
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 1.6em;
    text-align: center;
    padding: .2em 0;
    background-color: #f7fb00;
    height: 2em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    line-height: 1;
  }




</style>


