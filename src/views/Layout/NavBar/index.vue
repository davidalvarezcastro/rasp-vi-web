<template>

  <section>
    <v-bottom-nav
      :active.sync="activeTab"
      :color="color"
      :value="showNav"
      fixed
      shift>
      <v-btn dark value='tab-video' @click="$router.push({ name: 'tab-video'})">
        <span>Video</span> <v-icon>music_video</v-icon>
      </v-btn>

      <v-btn dark value='tab-settings' @click="$router.push({ name: 'tab-settings'})">
        <span>Settings</span> <v-icon>settings</v-icon>
      </v-btn>
    </v-bottom-nav>
  </section>

</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'NavBar',

  data () {
    return {
      activeTab: 'tab-settings'
    };
  },

  created () {
    this.setCurrentTab(this.$route.name);
  },

  mounted () {
    this.activeTab = this.currentTab;
  },

  computed: {
    ...mapState('navbar', [
      'currentTab', 'showNav'
    ]),

    color () {
      switch (this.activeTab) {
      case 'tab-video': return 'blue-grey';
      case 'tab-settings': return 'teal';
      }
    }
  },

  watch: {
    activeTab: function(newVal, ) {
      this.setCurrentTab(newVal);
    }
  },

  methods: {
    ...mapActions('navbar', {
      setCurrentTab: 'setCurrentTab'
    })
  }
};
</script>
<style lang="scss" scoped>
</style>

