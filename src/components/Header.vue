<template>
  <v-app-bar app color="white" height="64" :extended="isMobile">
    <template v-if="isMobile" v-slot:extension style="padding:0">
      <v-tabs v-model="page" centered slider-color="secondary">
        <v-tab>Home</v-tab>
        <v-tab>Skills</v-tab>
        <v-tab>Education</v-tab>
      </v-tabs>
    </template>
    <v-row justify="center" align="center">
      <v-col cols="12" md="10">
        <v-row class="justify-center justify-md-start">
          <v-img
            contain
            max-width="600"
            min-width="360"
            height="64"
            :src="require('@/assets/name-logo-black.svg')"
          />
          <v-spacer class="hidden-sm-and-down" />
          <v-toolbar-items class="hidden-sm-and-down">
            <v-tabs
              v-model="page"
              fixed-tabs
              slider-color="secondary"
              slider-size="4"
            >
              <v-tab>Home</v-tab>
              <v-tab>Skills</v-tab>
              <v-tab>Education</v-tab>
            </v-tabs>
          </v-toolbar-items>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header",
  data: () => ({ isMobile: false }),

  computed: {
    page: {
      // getter
      get: function() {
        return this.$store.state.pageIndex;
      },
      // setter
      set: function(val) {
        this.$store.commit("setpageIndex", val);
      }
    }
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },

  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 960;
    }
  }
};
</script>

<style lang="scss" scoped>
.o-title {
  font-family: "Poiret One";
}

.v-tab {
  letter-spacing: 0.2em;
  font-size: 1.1rem !important;
  color: #666 !important;
  text-shadow: 1px 1px 0 #444;
}

.v-tab--active {
  background-color: #444;
  color: white !important;
}
</style>

<style>
.st5 {
  font-family: "Poiret One";
}
</style>
