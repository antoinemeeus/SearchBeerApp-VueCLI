<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      width="400"
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
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
      <v-toolbar-side-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title onclick="this.$router.push('/')">
        Beer App
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-title
        v-if="this.$store.state.loading"
        class="white--text"
      >
        Loading
      </v-toolbar-title>
      <v-progress-circular
        v-if="this.$store.state.loading"
        indeterminate
        color="red"
      />
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
      <v-spacer />
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
  watch: {
    $route() {
      // react to route changes...
    }
  }
};
</script>
