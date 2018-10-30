<template lang="html">

  <section class="app-main">
    <v-container justify-space-around fill-height>
      <router-view />
    </v-container>
  </section>

</template>

<script lang="js">
export default  {
  name: 'AppMain',
  props: [],
  mounted() {

  },
  data() {
    return {

    };
  },
  methods: {

  },
  computed: {

  }
};
</script>

<style scoped lang="scss">
  .app-main {
    height: 100%;
    padding: 60px;
    margin: 0 auto;
  }
</style>
