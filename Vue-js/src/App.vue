<template>
  <div id="app" style="">

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <ul class="nav nav-tabs" >
            <router-link to="/" active-class="active" tag="li" exact><a href="#">Inbox</a></router-link>
            <router-link to="/archive" active-class="active"  tag="li"><a href="#">Favorite</a></router-link>
            <router-link to="/sent" active-class="active"  tag="li"><a href="#">Sent</a></router-link>
          </ul>
          <router-view></router-view>
          <editor></editor>
        </div>
      </div>
    </div>


  </div>




</template>

<script>

import Editor from './components/Editor.vue'

export default {
  components:{
    Editor
  },

  name: 'app'
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}





.nav{
  margin-bottom: 50px;
}
</style>
