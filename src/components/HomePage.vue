<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col class="ma-4" cols="12">
        <v-img
          contain
          class="hidden-sm-and-down"
          min-height="200"
          :src="require('@/assets/name-logo.svg')"
        />
        <Ribbon />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Ribbon from "@/components/Ribbon";

export default {
  name: "HomePage",
  components: {
    Ribbon
  },

  data: () => ({})
};
</script>
