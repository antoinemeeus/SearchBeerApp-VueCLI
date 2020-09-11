<template>
  <v-container
    grid-list-xl
    justify-center
  >
    <v-layout
      column
      flex-child
      wrap
    >
      <v-flex>
        <v-btn
          to="/beer/random"
          @click="requestBeer('random')"
        >
          Random
        </v-btn>
      </v-flex>
      <v-flex>
        <v-progress-linear :indeterminate="loadingBeer" />
      </v-flex>

      <v-flex>
        <v-layout
          v-if="!loadingBeer"
          flex-child
          wrap
        >
          <v-flex
            xs12
            sm4
            d-flex
          >
            <v-img
              :src="`${idvBeerInformation.image_url}`"
              :lazy-src="require('@/assets/lazy_beer.png')"
              contain
              max-height="350px"
            >
              <v-layout
                slot="placeholder"
                fill-height
                align-center
                justify-center
                ma-0
              >
                <v-progress-circular
                  indeterminate
                  color="black lighten-5"
                />
              </v-layout>
            </v-img>
          </v-flex>
          <v-flex
            xs12
            sm8
            d-flex
          >
            <v-layout column>
              <v-flex>
                <div>
                  <h4 class="display-2">
                    {{ idvBeerInformation.name }}
                  </h4><br>
                  <span class=" headline font-italic">
                    "{{ idvBeerInformation.tagline }}"
                  </span>
                </div>

                <v-divider />

                <v-layout
                  py-4
                  column
                >
                  <v-flex py-3>
                    <h5 class="title">
                      Description
                    </h5>
                  </v-flex>
                  <v-flex>
                    <div>
                      {{ idvBeerInformation.description }}
                    </div>
                  </v-flex>
                  <v-flex pb-2>
                    <span class="font-weight-medium font-italic">
                      First brewed: {{ idvBeerInformation.first_brewed }}
                    </span>
                  </v-flex>
                </v-layout>

                <BrewSheet
                  v-if="!loadingBeer"
                  :beer-information="idvBeerInformation"
                />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-spacer />
      <v-flex
        d-flex
        align-start
      />
      <!-- <BeerCard :beerInformation="idvBeerInformation"></BeerCard> -->
    </v-layout>
  </v-container>
</template>

<script>
import BrewSheet from "../components/BrewSheet";
import {mapState} from "vuex";

export default {
  name: "Beer",
  components: {
    BrewSheet
  },
  props: {
    id: {
      type: String,
      default: "1"
    }
  },
  data() {
    return {
      loadingBeer: true,
      idvBeerInformation: {},

      foodItems: {
        icon: "restaurant_menu",
        title: "Food",
        key: "food_pairing",
        content: null
      },
      ingredientsItems: {
        icon: "menu",
        title: "Ingredients",
        key: "ingredients",
        content: null
      },
      oneLineItems: [
        {
          icon: "mdi-flask-outline",
          title: "ph",
          key: "ph",
          content: null
        },
        {
          icon: "restaurant_menu",
          title: "Attenuation Level",
          key: "attenuation_level",
          content: null
        },
        {
          icon: "restaurant_menu",
          title: "Brewers Tips",
          key: "brewers_tips",
          content: null
        }
      ]
    };
  },
  computed: {
    ...mapState(["beers"]),
    srmIndex() {
      //Return the index of srm of a list that is nearest of the actual beer srm
      //Use to select images from assets with correct srm-{index}
      let srmIndex = [2, 3, 4, 6, 9, 12, 15, 18, 20, 24, 30, 40];
      let pr_srm = this.idvBeerInformation.srm;
      return srmIndex.reduce(function (prev, curr) {
        return Math.abs(curr - pr_srm) < Math.abs(prev - pr_srm) ? curr : prev;
      });
    },
    ibuIndex() {
      //Return the index of ibu of a list/scale that is nearest of the actual beer ibu
      //Use to select images from assets with correct ibu-{index}
      let ibuIndex = [];
      let scale = [0, 120];
      let step = 12;
      for (let i = scale[0]; i <= scale[1]; i += step) {
        ibuIndex.push(i);
      }
      let pr_ibu = this.idvBeerInformation.ibu;
      return ibuIndex.reduce(function (prev, curr) {
        return Math.abs(curr - pr_ibu) < Math.abs(prev - pr_ibu) ? curr : prev;
      });
    }
  },
  watch: {
    "$route.params.id"(newId) {
      this.requestBeer(newId);
    },
    beers(newBeers) {
      this.idvBeerInformation = newBeers[0];
      this.setItemContent();
      this.loadingBeer = false;
    }
  },
  mounted() {
    this.requestBeer(this.id);
  },
  methods: {
    setItemContent() {
      console.log("Trying to setItem");
      this.foodItems.content = this.idvBeerInformation[this.foodItems.key];
      this.ingredientsItems.content = this.idvBeerInformation[
        this.ingredientsItems.key
        ];
      this.oneLineItems.map(obj => {
        obj.content = this.idvBeerInformation[obj.key];
      });
    },
    formatList(listOfObj) {
      if (typeof listOfObj === "string") return listOfObj;

      return listOfObj
        .filter((obj, pos, arr) => {
          return arr.map(mapObj => mapObj["name"]).indexOf(obj["name"]) === pos;
        })
        .map(obj => obj.name)
        .join(", ");
    },
    requestBeer(param) {
      //return beer in memory
      let test = this.beers.find(function (obj) {
        return obj.id === param;
      });
      if (test) {
        this.idvBeerInformation = test;
        this.loadingBeer = false;
      } else {
        this.loadingBeer = true;
        this.$store.dispatch("fetchUniqueBeers", param);
      }
    }
  }
};
</script>
