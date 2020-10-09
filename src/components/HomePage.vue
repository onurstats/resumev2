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
      <DownButton />
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

  data: () => ({})
};
</script>
