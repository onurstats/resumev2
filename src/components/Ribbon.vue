<template>
  <v-row justify="center">
    <v-col cols="10" md="4">
      <div class="banner">
        <div class="line">
          <span>DATA ANALYST</span>
        </div>
        <div class="line">
          <span>WEB DEVELOPER</span>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Ribbon",
  data: () => ({})
};

//"text-md-h1 text-xs-h3 mb-3 name-heading"
</script>

<style scoped>
.banner {
  position: relative;
  z-index: 1;
  margin: 80px auto;
  width: 100%;
}

.banner .line {
  margin: 0 0 10px;
  width: 100%;
  height: 78px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  text-transform: uppercase;
  font-size: 2.5em;
  line-height: 78px;
  transform: skew(0, -15deg);
}

.banner .line:after,
.banner .line:first-child:before {
  position: absolute;
  top: 44px;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 78px;
  border-radius: 4px;

  content: "";
  transform: skew(0, 12deg);
}

.banner .line:first-child:before {
  top: -10px;
  right: 0;
  left: auto;
}

.banner .line:first-child:before,
.banner .line:last-child:after {
  width: 0;
  height: 0;
  border-width: 38px;
  border-style: solid;
  border-color: rgba(180, 180, 180, 0.8) rgba(180, 180, 180, 0.8) transparent
    transparent;
  background: transparent;
}

.banner .line:last-child:after {
  top: 12px;
  border-color: transparent transparent rgba(180, 180, 180, 0.8)
    rgba(180, 180, 180, 0.8);
}

.banner span {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  color: #666;
  text-shadow: 1px 1px 0 #444;
  font-family: "Oswald";
}
</style>
