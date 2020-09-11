<template>
  <v-layout
    column
    py-2
  >
    <v-flex class="text-xs-center">
      <span class="subheading">
        {{ payload.title }}
      </span>
    </v-flex>

    <v-flex class="px-4 my-0">
      <v-range-slider
        v-model="range"
        :max="payload.range[1]"
        :min="payload.range[0]"
        class="my-0 py-0"
        @change="$emit('sliderChange',emitValue)"
      />
    </v-flex>
    <v-flex class="px-4 my-0">
      <v-layout justify-space-between>
        <v-text-field
          v-model="range[0]"
          :rules="[textRules.min]"
          class="mt-0 px-2 mr-4"
          hide-details
          single-line
          solo
          type="number"
          @blur="$emit('sliderChange',emitValue)"
        />
        <v-text-field
          v-model="range[1]"
          :rules="[textRules.max]"
          class="mt-0 px-2 ml-4"
          hide-details
          single-line
          solo
          type="number"
          @blur="$emit('sliderChange',emitValue)"
        />
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    payload: {
      type: Object,
      default: () => {
        return {}
      },
    }
  },
  data() {
    return {
      range: [...this.payload.range],
      textRules: {
        min: value => value >= this.payload.range[0],
        max: value => value <= this.payload.range[1]
      }
    };
  },
  computed: {
    emitValue() {
      return {filterSwitch: this.payload.filter, value: this.range};
    }
  }
};
</script>
