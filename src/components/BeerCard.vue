<template>
  <v-card
    :to="`/beer/${beerInformation.id}`"
    hover
  >
    <v-layout>
      <v-flex xs4>
        <v-img
          :lazy-src="require('@/assets/lazy_beer.png')"
          :src="`${beerInformation.image_url}`"
          class="white lighten-2"
          contain
          max-height="250px"
          max-width="150px"
        >
          <v-layout
            slot="placeholder"
            align-center
            fill-height
            justify-center
            ma-0
          >
            <v-progress-circular
              color="black lighten-5"
              indeterminate
            />
          </v-layout>
        </v-img>
      </v-flex>
      <v-flex xs8>
        <v-layout column>
          <v-flex>
            <v-card-title>
              <div>
                <h4>{{ beerInformation.name }}</h4><br>
                <span class="font-italic">
                  "{{ beerInformation.tagline }}"
                </span>
              </div>
            </v-card-title>
            <v-divider />
            <v-card-text>
              {{ beerInformation.description }}
            </v-card-text>
          </v-flex>
          <v-flex>
            <v-layout
              align-end
              fill-height
              justify-space-around
              row
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
                      <span>ABV: {{ beerInformation.abv }}%</span>
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
                      <span>SRM: {{ beerInformation.srm }}</span>
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
                      <span>IBU: {{ beerInformation.ibu }}</span>
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
                      <span>OG: {{ beerInformation.target_og }}</span>
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
  props: {
    beerInformation: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data: () => ({}),
  computed: {
    srmIndex() {
      //Return the index of srm of a list that is nearest of the actual beer srm
      //Use to select images from assets with correct srm-{index}
      let srmIndex = [2, 3, 4, 6, 9, 12, 15, 18, 20, 24, 30, 40];
      let pr_srm = this.beerInformation.srm;
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
      let pr_ibu = this.beerInformation.ibu;
      return ibuIndex.reduce(function (prev, curr) {
        return Math.abs(curr - pr_ibu) < Math.abs(prev - pr_ibu) ? curr : prev;
      });
    }
  }
};
</script>

<style scoped>
.v-card__text {
  display: -webkit-box;
  margin: 0 auto 16px;
  padding-bottom: 0;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
