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

  computed: {
    emails(){
      return this.$store.getters.inbox
    }
  },

  data(){
    return {}
  }
}

</script>

<style lang="css">
</style>
