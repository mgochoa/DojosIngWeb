<template lang="html">
  <div class="editor" v-if="Object.keys(email).length !== 0">
    <div class="cabecera">
      <i class="fa fa-window-close pull-right" aria-hidden="true" v-on:click="clearEmail"></i>
      <div class="" style="clear: both">
      </div>
    </div>
    <div class="contenido">
      <div class="form-group">
        <label for="">TO: </label><span>{{email.to}}</span><br>

        <label for="">FROM: </label><span>{{email.from}}</span><br>

        <label for="">SUBJECT: </label><span>{{email.asunto}}</span>

      </div>
      <div class="form-group">
        <label for="">CONTENT</label>
        <p>{{email.contenido}}</p>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      newEmail: {}
    }
  },

  methods: {
    clearEmail(){
      this.$store.commit('SET_ACTIVE_EMAIL',{});
    },
    sendEmail(){
      console.log(this.newEmail);
    }
  },

  computed: {
    email(){
      return this.$store.state.activeEmail
    }
  },

  watch: {

  }
}
</script>

<style lang="css" scoped>

  .form-group{
    padding: 10px
  }

  .form-control{
    margin-bottom: 10px
  }

  .editor{
    height: 85%;
    width: 60%;
    border: 2px solid #BDBDBD;
    z-index: 2;
    position: fixed;
    z-index: 2;
    right: 0;
    bottom: 0;
    color: black;
    background-color: #F2F2F2;
  }

  .cabecera{
    font-size: 20px;
    padding:5px 15px 5px 5px;
    color: white;
    align-items: center;
    justify-content: center;
    background-color:black;
  }

  .contenido{
    text-align: left;

  }

  .campo{
    padding: 10px 10px 10px 10px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }

  .texto{
    padding: 10px
  }

  .btn-success{
    margin-left: 10px
  }
</style>
