import { setCookieByName, getCookieByName } from '@/utils/';

// Vuex store to manage the tabs
const navbar = {
  namespaced: true,

  state: {
    currentTab: getCookieByName('activeTab'),
    showNav: getCookieByName('showNav') || true
  },

  getters: {
    currentTab: state => { return state.currentTab; },
    showNav: state => { return state.showNav; }
  },

  mutations: {
    SET_CURRENTTAB: (state, tab) => {
      setCookieByName('activeTab', tab);
      state.currentTab = tab;
    },
    SET_SHOWNAV: (state, show) => {
      setCookieByName('showNav', show);
      state.showNav = show;
    }
  },

  actions: {
    setCurrentTab: ({ commit }, tab) => {
      commit('SET_CURRENTTAB', tab);
    },
    setShowNav: ({ commit }, show) => {
      commit('SET_SHOWNAV', show);
    }
  }
};

export default navbar;