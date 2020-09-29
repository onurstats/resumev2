<template>
  <v-app-bar app color="white">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-row class="justify-center justify-md-start">
          <v-card
            class="hidden-sm-and-down"
            width="124"
            height="124"
            elevation="24"
            shaped
            ripple
            style="cursor:pointer;margin-top: 48px;"
          >
            <v-img
              contain
              width="124"
              height="124"
              style="margin-top:-12px"
              :src="require('@/assets/logo-circle-dark.svg')"
            />
          </v-card>
          <v-img
            max-width="600"
            min-height="64"
            contain
            :src="require('@/assets/name-logo-black.svg')"
          />
          <v-toolbar-items>
            <v-tabs height="64">
              <v-tab>Item One</v-tab>
              <v-tab>Item Two</v-tab>
              <v-tab>Item Three</v-tab>
            </v-tabs>
          </v-toolbar-items>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.o-title {
  font-family: "Poiret One";
}
</style>

<style>
.st5 {
  font-family: "Poiret One";
}
</style>
