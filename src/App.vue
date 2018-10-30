<template>
<v-app>
    <v-content>
      <vue-headful :title="title"/>
      <v-container fluid ma-0 pa-0 fill-height>
        <!-- Main content -->
        <appmain />
        <!-- NavBar -->
        <navbar />
      </v-container>
  </v-content>
</v-app>
</template>

<script>
import Navbar from '@/views/Layout/NavBar';
import Appmain from '@/views/Layout/AppMain';

export default {
  name: 'App',
  components: {
    Navbar,
    Appmain
  },

  data (){
    return {
      title: process.env.VUE_APP_TITLE
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
