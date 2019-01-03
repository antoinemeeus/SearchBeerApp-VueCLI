<template>
  <div>
    <h4 class="sub-header py-3"> Brew Sheet:</h4>
    <table>
      <tr
        v-for="item in items"
        :key="item.title"
      >
        <td xs4>
          <v-img
            :src="item.imageSrc"
            contain
            max-height="60px"
          >
          </v-img>
        </td>
        <td
          xs3
          class="py-2"
        >
          {{item.title}}
        </td>
        <td xs6>
          {{item.content}} {{item.append}}
        </td>
      </tr>
      <tr>
        <td>
          <v-img
            :src="require(`@/assets/food_icon.png`)"
            contain
            max-height="60px"
          >
          </v-img>
          <!-- <v-icon>
            {{foodItems.icon}}
          </v-icon> -->
        </td>
        <td>
          <h5>
            {{foodItems.title}}
          </h5>
        </td>
        <td>
          <div
            v-for="(food,key) in foodItems.content"
            :key="key"
          >
            {{food}}
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <v-icon>
            {{ingredientsItems.icon}}
          </v-icon>
        </td>
        <td>
          <h5>
            {{ingredientsItems.title}}
          </h5>
        </td>
        <td>
          <div
            v-for="(value,key) in ingredientsItems.content"
            :key="value.key"
          >
            <span class="body-2">
              {{key}}:
            </span>
            <span> {{formatList(value)}}</span>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["beerInformation"],
  data: () => ({
    items: [
      {
        imageSrc: "",
        key: "abv",
        typeImg: "percent_icon",
        dynamicLink: false,
        title: "ABV",
        content: "",
        append: "%"
      },
      {
        imageSrc: "",
        key: "ibu",
        typeImg: "hops",
        dynamicLink: true,
        title: "IBU",
        content: "",
        append: ""
      },
      {
        imageSrc: "",
        key: "ebc",
        typeImg: "OG_beer",
        dynamicLink: false,
        title: "EBC",
        content: "",
        append: ""
      },
      {
        imageSrc: "",
        key: "srm",
        typeImg: "srm",
        dynamicLink: true,
        title: "SRM",
        content: "",
        append: ""
      },
      {
        imageSrc: "",
        key: "target_og",
        typeImg: "OG_beer",
        dynamicLink: false,
        title: "Target OG",
        content: "",
        append: ""
      },
      {
        imageSrc: "",
        key: "ph",
        typeImg: "pH",
        dynamicLink: false,
        title: "pH",
        content: "",
        append: ""
      },
      {
        imageSrc: "",
        key: "attenuation_level",
        typeImg: "percent_icon",
        dynamicLink: false,
        title: "Attenuation Level",
        content: "",
        append: "%"
      },
      {
        imageSrc: "",
        key: "brewers_tips",
        typeImg: "tips",
        dynamicLink: false,
        title: "Brewers Tips",
        content: "",
        append: ""
      }
    ],
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
    }
  }),
  mounted() {
    this.setItemContent();
  },
  methods: {
    setItemContent() {
      console.log("Trying to setItem");
      this.foodItems.content = this.beerInformation[this.foodItems.key];
      this.ingredientsItems.content = this.beerInformation[
        this.ingredientsItems.key
      ];
      this.items.map(obj => {
        obj.dynamicLink
          ? (obj.imageSrc = this.srcTypeImg(obj.typeImg))
          : (obj.imageSrc = this.srcImg(obj.typeImg));
        obj.content = this.beerInformation[obj.key];
      });
    },

    formatList(listOfObj) {
      if (typeof listOfObj === "string") return listOfObj;
      //remove duplicate names
      console.log(listOfObj);
      return listOfObj
        .filter((obj, pos, arr) => {
          return arr.map(mapObj => mapObj["name"]).indexOf(obj["name"]) === pos;
        })
        .map(obj => obj.name)
        .join(", ");
    },
    srcImg(keyName) {
      return require("@/assets/" + keyName + ".png");
    },
    srcTypeImg(keyName) {
      if (
        typeof this.ibuIndex === "undefined" ||
        typeof this.srmIndex === "undefined"
      )
        return require("@/assets/logo.png");
      return require("@/assets/" +
        keyName +
        "-" +
        this.getIndex(keyName) +
        ".png");
    },

    getIndex(val) {
      if (val === "srm") {
        var srmIndex = [2, 3, 4, 6, 9, 12, 15, 18, 20, 24, 30, 40];
        var pr_srm = this.beerInformation.srm;
        var number = srmIndex.reduce(function(prev, curr) {
          return Math.abs(curr - pr_srm) < Math.abs(prev - pr_srm)
            ? curr
            : prev;
        });
        return number;
      }
      if (val === "hops") {
        var ibuIndex = [];
        var scale = [0, 120];
        var step = 12;
        for (let i = scale[0]; i <= scale[1]; i += step) {
          ibuIndex.push(i);
        }
        var pr_ibu = this.beerInformation.ibu;
        var number = ibuIndex.reduce(function(prev, curr) {
          return Math.abs(curr - pr_ibu) < Math.abs(prev - pr_ibu)
            ? curr
            : prev;
        });
        return number;
      }
      return "";
    }
  },
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
</style>
