<template>
  <div class="container">

    <nav>
      <ul>
        <li  v-for="(route, index) in routes" :key="index">
          <router-link class="menu-link"  :to="route.path ? route.path : '/'">{{ route.title }}</router-link>
        </li>
      </ul>
    </nav>

    <transition name="page">
      <router-view>
      </router-view>
    </transition>


  </div>
</template>

<script>

  import { routes } from './routes';


  export default {

    data() {
      return {
        routes

      }
    }
  }
</script>

<style>
  nav {
    width: 68vw;
    margin: 1em auto;
  }


  .menu-link {
    color: #f3ec8c;
    font-family: 'Karla', sans-serif;
    font-size: 3em;
    text-decoration: none;
    position: relative;
    margin: 1em 0;
    width: 20%;
    text-decoration: none;
    color: #f3ec8c;
    display: block;
    text-align: center; 
  }

  .menu-link::after {
    content: "";
    position: absolute;
    bottom: -.3em;
    left: 0;
    height: .1em;
    width: 0%;
    background-color: #f3ec8c;
    transition: .4s
  }

  .menu-link::before {
    content: "";
    position: absolute;
    top: -.3em;
    right: 0;
    height: .1em;
    width: 0%;
    background-color: #f3ec8c;
    transition: .4s
  }
  .menu-link:hover::after,
  .menu-link:hover::before {
    width: 100%;
  }


  .page-enter, .page-leave-active {
    opacity: 0;
    width: 0;
  }

  .page-enter-active, .page-leave-active {
    transition: opacity .2s;
  }


</style>


