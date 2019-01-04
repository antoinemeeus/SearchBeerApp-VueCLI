<template>
  <v-container fluid>
    <v-layout
      column
      wrap
      class="my-5"
      align-center
      justify-space-around
      fill-height
    >
      <v-flex>
        I don't own this logo, this is just for place holder.
      </v-flex>
      <v-flex>
        <v-img
          contain
          width="300"
          :src="require('@/assets/brew-dog.png')"
        >
        </v-img>
      </v-flex>
      <v-flex>
        Welcome to the Beer App!
      </v-flex>
      <v-flex>
        Here you can search and discover all the beers brew by BrewDogs
        <v-layout
          row
          justify-space-around
        >
          <v-text-field
            flat
            solo-inverted
            v-model="search"
            @keyup.enter.native="submitSearch()"
            prepend-icon="search"
            label="Search"
            class="hidden-sm-and-down"
          ></v-text-field>
          <v-btn
            round
            color="primary"
            dark
            @click="submitSearch()"
          >Search & browse Now!</v-btn>
        </v-layout>
      </v-flex>
      <v-flex>
        Or
      </v-flex>
      <v-flex>
        <v-btn
          round
          color="primary"
          dark
          to="/results"
        >Simply browse</v-btn>
      </v-flex>
      <v-flex>
        Or
      </v-flex>
      <v-flex>
        <v-btn
          round
          color="primary"
          dark
          to="/beer/random"
        >Get some random beer!</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import DisplaySearch from "../components/DisplaySearchResults";

export default {
  name: "Home",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    submitSearch() {
      if (this.search !== "")
        this.$store.commit(
          "SET_FILTERS_PARAMETERS",
          "beer_name=" + this.search
        );

      this.$router.push("/results");
    }
  }
};
</script>
