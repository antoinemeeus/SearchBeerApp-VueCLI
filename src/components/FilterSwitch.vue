<template>
  <v-layout
    py-2
    column
  >
    <v-flex class="text-xs-center">
      <span class="subheading">
        {{ this.payload.title }}
      </span>
    </v-flex>

    <v-flex class="px-4 my-0">
      <v-range-slider
        v-model="range"
        class="my-0 py-0"
        :max="this.payload.range[1]"
        :min="this.payload.range[0]"
        @change="$emit('sliderChange',emitValue)"
      />
    </v-flex>
    <v-flex class="px-4 my-0">
      <v-layout justify-space-between>
        <v-text-field
          v-model="range[0]"
          class="mt-0 px-2 mr-4"
          hide-details
          :rules="[textRules.min]"
          solo
          single-line
          type="number"
          @blur="$emit('sliderChange',emitValue)"
        />
        <v-text-field
          v-model="range[1]"
          class="mt-0 px-2 ml-4"
          :rules="[textRules.max]"
          hide-details
          solo
          single-line
          type="number"
          @blur="$emit('sliderChange',emitValue)"
        />
      </v-layout>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  props: ["payload"],

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
      return { filterSwitch: this.payload.filter, value: this.range };
    }
  },
  methods: {
    textFieldsLimitsCheck() {
      var isCorrect = true;

      if (this.range[0] < this.payload.range[0]) {
        isCorrect = false;
        this.range[0] = 0;
      }
      if (this.range[1] > this.payload.range[1]) {
        isCorrect = false;
        this.range[1] = this.payload.range[1];
      }
      return isCorrect;
    }
  }
};
</script>