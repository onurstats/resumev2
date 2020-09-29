<template>
  <v-row
    class="mb-4"
    id="action_button"
    justify="center"
    align="center"
    height="120px"
    @click.stop="changetab"
  >
    <v-col cols="4">
      <v-card class="mx-auto card-button" elevation="24" href="#tab-about">
        <div class="left-side">
          <svg
            version="1.1"
            id="svglogo"
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1024 1024"
            xml:space="preserve"
          >
            <g id="layer1" inkscape:groupmode="layer" inkscape:label="Katman 1">
              <ellipse
                id="path833-5"
                class="sline"
                cx="486.9"
                cy="511"
                rx="8.3"
                ry="421.2"
              />
              <circle
                id="path833-9"
                class="circle"
                cx="503.5"
                cy="394"
                r="251.4"
              />
              <ellipse
                id="path833-5-5-5"
                class="sline"
                cx="398.9"
                cy="512"
                rx="8.3"
                ry="422.2"
              />

              <ellipse
                id="path833-5-5-5-5"
                transform="matrix(0.8781 -0.4785 0.4785 0.8781 -215.4215 278.5)"
                class="sline"
                cx="438.8"
                cy="562"
                rx="8.3"
                ry="422.2"
              />
            </g>
          </svg>
          <v-btn hidden class="arrow i-show" icon>
            <v-icon color="white">mdi-arrow-right</v-icon>
          </v-btn>
        </div>
        <div class="right-side">
          <div class="new">Learn More About Me!!</div>
          <v-btn class="arrow" icon>
            <v-icon color="black">mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Ribbon",
  data: () => ({}),
  methods: {
    changetab() {
      this.$store.commit("settab", "tab-about");
    }
  }
};

//"text-md-h1 text-xs-h3 mb-3 name-heading"
</script>

<style scoped>
#action_button {
  height: 120px;
  margin-top: 24px;
}

.card-button {
  background-color: #ffffff;
  display: flex;
  width: 100%;
  height: 120px;
  position: relative;
  transition: 0.3s ease-in-out;
  border-radius: 24px !important;
}

.card-button:hover {
  width: 50%;
  height: 150px;
}
.card-button:hover .left-side {
  width: 100%;
  background-color: #bc002d;
}

.logo-row {
  height: 100px;
  width: 124px;
}

#button_img {
  transition: 0.3s ease-in-out;
  overflow: visible;
  margin-top: -24px;
}

.left-side {
  background-color: gray;
  width: 130px;
  border-radius: 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  flex-shrink: 0;
  flex-direction: row;
}

.right-side {
  width: calc(100% - 130px);
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  justify-content: space-between;
  white-space: nowrap;
  transition: 0.3s;
}
.right-side:hover {
  background-color: #f9f7f9;
}

.arrow {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}

.new {
  font-size: 23px;
  font-family: "Roboto", sans-serif;
  margin-left: 20px;
}

.card-button:hover .i-show {
  display: block;
}

.card-button:hover .sline {
  fill: white;
  stroke: white;
}
.card-button:hover .circle {
  stroke: white;
}

.sline {
  fill: #bc002d;
  fill-opacity: 0.9412;
  stroke: #bc002d;
  stroke-width: 2;
  stroke-miterlimit: 15.1181;
  transition: all 0.5s ease;
}
.circle {
  fill-opacity: 0;
  stroke: #bc002d;
  stroke-width: 12;
  stroke-miterlimit: 15.1181;
  transition: all 0.5s ease;
}
</style>
