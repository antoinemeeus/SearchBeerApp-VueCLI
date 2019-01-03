<template>
  <v-app>
    <v-navigation-drawer
      fixed
      width="400"
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
      v-model="drawer"
    >
      <SearchAndFilters />

    </v-navigation-drawer>

    <v-toolbar
      color="indigo"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Beer App</v-toolbar-title>
      <v-toolbar-items mx-4>
        <v-btn
          flat
          to="/"
        >Home</v-btn>
        <v-btn
          flat
          to="/about"
        >About</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-toolbar-title
        v-if="this.$store.state.loading"
        class="white--text"
      >Loading</v-toolbar-title>
      <v-progress-circular
        v-if="this.$store.state.loading"
        indeterminate
        color="red"
      ></v-progress-circular>

    </v-toolbar>
    <v-content>

      <router-view />

    </v-content>
    <v-footer
      color="blue-grey"
      class="white--text"
      app
    >
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; 2018</span>
    </v-footer>

  </v-app>
</template>

<script>
import SearchAndFilters from "./components/SearchAndFilters";

export default {
  name: "App",
  components: {
    SearchAndFilters
  },
  data() {
    return {
      drawer: null
    };
  },
  methods: {},
  computed: {},
  watch: {
    $route(to, from) {
      // react to route changes...
    }
  }
};
</script>
