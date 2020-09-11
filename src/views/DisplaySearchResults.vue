<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-data-iterator
      :items="beers"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >
      <v-flex
        slot="item"
        slot-scope="props"
        d-flex
        xs12
        sm6
        md4
      >
        <BeerCard :beer-information="props.item" />
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import BeerCard from "../components/BeerCard";
export default {
  name: "DisplaySearchResults",
  components: {
    BeerCard
  },
  data: () => ({
    show: false,
    rowsPerPageItems: [12, 24, 36],
    pagination: {
      page: 1,
      rowsPerPage: 24
    },
    type: "number",
    number: 0,
    duration: 300,
    offset: 0,
    easing: "easeInOutCubic",
  }),
  computed: {
    ...mapState(["beers"]),
    target() {
      const value = this[this.type];
      if (!isNaN(value)) return Number(value);
      else return value;
    },

    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    }
  },
  watch: {
    pagination(newP, oldP) {
      this.setPaginationQuery();
      if (newP.page !== oldP.page) {
        //scroll to top of window after changing pages
        this.$vuetify.goTo(this.target, this.options);
      }

      if (this.beers.length <= newP.page * newP.rowsPerPage) {
        console.log("We are at last page, getting more data");
        this.$store.dispatch("fetchMoreBeers");
      }
    }
  },
  mounted() {
    this.setPaginationQuery();
  },
  methods: {
    setPaginationQuery() {
      let queryStr =
        "page=" +
        this.pagination.page +
        "&" +
        "per_page=" +
        this.pagination.rowsPerPage * 2;

      this.$store.commit("SET_PAGINATION_PARAMETERS", queryStr);
    }
  }
};
</script>

<style>
</style>
