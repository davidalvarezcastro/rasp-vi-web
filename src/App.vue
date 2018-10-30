<template>
<v-app>
    <v-content>
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
  }
};
</script>
<style lang="scss" scoped>
</style>
