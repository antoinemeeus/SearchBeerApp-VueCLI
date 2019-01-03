<template>
  <v-container fluid>

    <v-divider class="py-3"></v-divider>
    <v-text-field
      class="pb-0 mb-0"
      v-model="userSearch"
      @blur="requestAPI"
      @keyup.enter="requestAPI"
      label="Search for beer name/food/ingredients"
      outline
      clearable
      append-outer-icon="search"
      @click:append-outer="requestAPI"
    ></v-text-field>
    <v-radio-group
      class="pt-0 mt-0 "
      v-model="searchUserInputOption"
      row
    >
      <v-radio
        label="by Beer Name"
        value="beer_name"
      ></v-radio>
      <v-radio
        label="by Food Pairing"
        value="food"
      ></v-radio>
      <v-radio
        label="by Malt"
        value="malt"
      ></v-radio>
      <v-radio
        label="by Hops"
        value="hops"
      ></v-radio>
    </v-radio-group>
    <v-divider></v-divider>
    <FilterSwitch
      v-for="(item,i) in items"
      :key="i"
      :payload="item"
      v-on:sliderChange="onFilterChange"
    />
    <v-divider></v-divider>
    <v-menu
      ref="menu"
      :close-on-content-click="false"
      v-model="menu"
      :nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      max-width="290px"
      min-width="290px"
    >
      <v-text-field
        slot="activator"
        v-model="filters.brewed_after"
        label="Beers brew after"
        prepend-icon="event"
        readonly
      ></v-text-field>
      <v-date-picker
        v-model="date_after"
        type="month"
        :max="new Date().toISOString().substr(0, 10)"
        min="2007-03-01"
        no-title
        scrollable
        @input="pickedDate"
      >
      </v-date-picker>
    </v-menu>
    <v-divider></v-divider>
    <v-menu
      ref="menu2"
      :close-on-content-click="false"
      v-model="menu2"
      :nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      max-width="290px"
      min-width="290px"
    >
      <v-text-field
        slot="activator"
        v-model="filters.brewed_before"
        label="Beers brew before:"
        prepend-icon="event"
        readonly
      ></v-text-field>
      <v-date-picker
        v-model="date_before"
        type="month"
        :max="new Date().toISOString().substr(0, 10)"
        min="2007-03-01"
        no-title
        scrollable
        @input="pickedDate"
      >
      </v-date-picker>
    </v-menu>
  </v-container>

</template>


<script>
import FilterSwitch from "./FilterSwitch";

export default {
  components: {
    FilterSwitch
  },
  props: [],
  data() {
    return {
      menu: false,
      menu2: false,
      date_before: new Date().toISOString().substr(0, 7),
      date_after: "2007-03",
      searchUserInputOption: "beer_name",
      userSearch: "",
      filters: {
        beer_name: "",
        brewed_before: "",
        brewed_after: "",
        hops: "",
        malt: "",
        food: ""
      },

      //Items in filtered list switch for sliders in drawers- will be included in filters with initializeFilter
      items: [
        { title: "ABV range", filter: "abv_", range: [0, 60] },
        { title: "IBU range", filter: "ibu_", range: [0, 255] },
        { title: "EBC range", filter: "ebc_", range: [0, 120] }
      ]
    };
  },
  created() {
    this.initializeFilter();
    this.setQueryString();
  },
  methods: {
    initializeFilter() {
      for (let obj of this.items) {
        this.filters[obj.filter + "gt"] = obj.range[0];
        this.filters[obj.filter + "lt"] = obj.range[1];
      }
    },
    check_and_filter() {
      //Before reloading and requesting new data, first we display what we already have and later will add, if it exist the new data from request
      let obj = {};
      let prop = "id";
      var uniqueArray = Object.keys(
        tempList.reduce((prev, next) => {
          if (!obj[next[prop]]) obj[next[prop]] = next;
          return obj;
        }, obj)
      ).map(i => obj[i]);
      // state.beers = uniqueArray
    },
    requestAPI() {
      this.$router.push("/results");
      this.setQueryString();

      this.$store.dispatch("fetchBeers");
    },
    setQueryString() {
      //check radio buttons for type of string search
      this.filters[this.searchUserInputOption] = this.userSearch;
      var str = "";
      for (let key in this.filters) {
        if (this.filters[key] !== "" && this.filters[key]) {
          str += key + "=" + this.filters[key] + "&";
        }
      }
      console.log("STR before COMMIT: ", str);
      this.$store.commit("SET_FILTERS_PARAMETERS", str);
      this.filters[this.searchUserInputOption] = "";
    },
    onFilterChange: function(newRange) {
      this.filters[newRange.filterSwitch + "gt"] = newRange.value[0];
      this.filters[newRange.filterSwitch + "lt"] = newRange.value[1];
      this.requestAPI();
    },
    pickedDate() {
      this.menu = false;
      this.menu2 = false;
      this.filters.brewed_before = this.formatDate(this.date_before);
      this.filters.brewed_after = this.formatDate(this.date_after);
      console.log("WE CLOSED THE CALENDAR, THIS IS THE FILTERS STATE");
      console.log(this.filters);
      this.requestAPI();
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month] = date.split("-");
      return `${month}-${year}`;
    }
  },
  computed: {}
};
</script>