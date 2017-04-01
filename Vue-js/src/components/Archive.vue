<template lang="html">
  <div class="">
    <emails :lista="emails"></emails>
  </div>
</template>

<script>

import Emails from './Emails'


export default {

  components: {
    Emails
  },

  data(){
    return {
    }
  },

  computed: {
    emails(){
      return this.$store.getters.archive
    }
  }

}
</script>

<style lang="css">
</style>
