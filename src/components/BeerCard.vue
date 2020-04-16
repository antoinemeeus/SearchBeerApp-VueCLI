<template>
  <v-card
    hover
    :to="`/beer/${this.beerInformation.id}`"
  >
    <v-layout>
      <v-flex xs4>
        <v-img
          :src="`${beerInformation.image_url}`"
          :lazy-src="require('@/assets/lazy_beer.png')"
          contain
          max-height="250px"
          max-width="150px"
          class="white lighten-2"
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
      <v-flex xs8>
        <v-layout column>
          <v-flex>
            <v-card-title>
              <div>
                <h4>{{ this.beerInformation.name }}</h4><br>
                <span class="font-italic">
                  "{{ this.beerInformation.tagline }}"
                </span>
              </div>
            </v-card-title>
            <v-divider />
            <v-card-text>
              {{ this.beerInformation.description }}
            </v-card-text>
          </v-flex>
          <v-flex>
            <v-layout
              align-end
              justify-space-around
              row
              fill-height
            >
              <v-flex class="text-xs-center">
                <v-tooltip bottom>
                  <div slot="activator">
                    <v-img
                      :src="require('@/assets/abv_drop.png')"
                      contain
                      max-height="60px"
                    />

                    <div class="mt-1">
                      <span>ABV: {{ this.beerInformation.abv }}%</span>
                    </div>
                  </div>
                  <span>Alcohol by volume</span>
                </v-tooltip>
              </v-flex>
              <v-flex class="text-xs-center">
                <v-tooltip bottom>
                  <div slot="activator">
                    <v-img
                      :src="require(`@/assets/srm-${srmIndex}.png`)"
                      contain
                      max-height="60px"
                    />

                    <div class="mt-1">
                      <span>SRM: {{ this.beerInformation.srm }}</span>
                    </div>
                  </div>
                  <span>Beer color</span>
                </v-tooltip>
              </v-flex>
              <v-flex class="text-xs-center">
                <v-tooltip bottom>
                  <div slot="activator">
                    <v-img
                      :src="require(`@/assets/hops-${ibuIndex}.png`)"
                      contain
                      max-height="60px"
                    />

                    <div class="mt-1">
                      <span>IBU: {{ this.beerInformation.ibu }}</span>
                    </div>
                  </div>
                  <span>Relative bitterness of beer</span>
                </v-tooltip>
              </v-flex>
              <v-flex class="text-xs-center">
                <v-tooltip bottom>
                  <div slot="activator">
                    <v-img
                      :src="require(`@/assets/OG_beer.png`)"
                      contain
                      max-height="60px"
                    />

                    <div class="mt-1">
                      <span>OG: {{ this.beerInformation.target_og }}</span>
                    </div>
                  </div>
                  <span>Original gravity of beer</span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: ["beerInformation"],
  data: () => ({}),
  computed: {
    srmIndex() {
      //Return the index of srm of a list that is nearest of the actual beer srm
      //Use to select images from assets with correct srm-{index}
      var srmIndex = [2, 3, 4, 6, 9, 12, 15, 18, 20, 24, 30, 40];
      var pr_srm = this.beerInformation.srm;
      var number = srmIndex.reduce(function(prev, curr) {
        return Math.abs(curr - pr_srm) < Math.abs(prev - pr_srm) ? curr : prev;
      });
      return number;
    },
    ibuIndex() {
      //Return the index of ibu of a list/scale that is nearest of the actual beer ibu
      //Use to select images from assets with correct ibu-{index}
      var ibuIndex = [];
      var scale = [0, 120];
      var step = 12;
      for (let i = scale[0]; i <= scale[1]; i += step) {
        ibuIndex.push(i);
      }
      var pr_ibu = this.beerInformation.ibu;
      var number = ibuIndex.reduce(function(prev, curr) {
        return Math.abs(curr - pr_ibu) < Math.abs(prev - pr_ibu) ? curr : prev;
      });
      return number;
    }
  }
};
</script>

<style scoped>
.v-card__text {
  display: -webkit-box;
  margin: 0 auto;
  margin-bottom: 16px;
  padding-bottom: 0;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /* max-height: 4em;
  overflow: hidden;
  text-overflow: ellipsis; */
}
</style>
