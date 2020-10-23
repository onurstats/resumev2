<template>
  <v-row tag="section" id="home" class="text-center" justify="center">
    <v-col class="ma-4" cols="12">
      <v-img
        contain
        class="hidden-sm-and-down"
        min-height="200"
        :src="require('@/assets/name-logo.svg')"
      />
      <Ribbon />
      <DownButton v-if="!isMobile" />
    </v-col>
  </v-row>
</template>

<script>
import Ribbon from "@/components/Ribbon";
import DownButton from "@/components/DownButton";

export default {
  name: "HomePage",
  components: {
    Ribbon,
    DownButton
  },

  data: () => ({
    isMobile: false
  }),
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
