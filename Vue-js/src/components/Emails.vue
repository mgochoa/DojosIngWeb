<template lang="html">
  <div class="row" style="text-align: left">
    <div class="col-md-4">
      <div class="input-group">
     <input v-model="buscador" type="text" class="form-control" placeholder="Filtrar por asunto">
   </div>

    </div>
    <div class="col-md-12">
      <div class="">
        <table class="table table-striped table-bordered ">
          <thead>
            <tr>
              <th>FROM</th>
              <th>TO</th>
              <th>SUBJECT</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr class="filaEmail" v-for="email in emailFiltrados"  v-bind:class="{seleccionado: email == emailSeleccionado}">
              <td v-on:click="seleccionarEmail(email)">{{email.from}}</td>
              <td v-on:click="seleccionarEmail(email)">{{email.to}}</td>
              <td v-on:click="seleccionarEmail(email)">{{email.asunto}}</td>
              <td v-on:click="toggleFavorite(email)" align="center" v-bind:class="{favorito: email.favorite}"><i class="fa fa-star" aria-hidden="true"></i></td>
              <td v-on:click="eliminar(email)" align="center" v-bind:class="{favorito: email.favorite}"><i class="fa fa-trash eliminar" aria-hidden="true"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>

  </div>
</template>

<script>

import Contenido from './Contenido'

export default {

  components: {
    Contenido
  },

  props: {
    lista: Array
  },

  data(){
    return {
      buscador: "",
      emailSeleccionado: ""
    }
  },

  methods: {
    seleccionarEmail(email){
      this.$store.commit('SET_ACTIVE_EMAIL',email);
    },
    clearEmail(){
      this.emailSeleccionado = "";
    },

    eliminar(email){
      this.$store.commit('REMOVE_EMAIL',email)
    },

    toggleFavorite(email){
      console.log(email);
      this.$store.commit('TOGGLE_FAVORITE',email);
    }

  },



  computed: {
    emailFiltrados(){
      return this.lista.filter(email => email.asunto.includes(this.buscador))
    }
  }



}
</script>

<style lang="css">

    .seleccionado{
      background-color: #BDBDBD !important;
    }

  .filaEmail td:hover{
    background-color: #BDBDBD !important;
  }

  .eliminar{
    color: red;
  }

  .favorito{
    color: #F5DA81
  }



  table{
    margin-top: 30px;
  }

</style>
