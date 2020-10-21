<template>
  <v-row tag="section" id="skills" justify="center" class="mx-6">
    <v-col cols="12" v-for="part in parts" :key="part.title">
      <v-sheet class="mx-auto" elevation="8">
        <v-card-title>{{ part.title }}</v-card-title>
        <v-slide-group class="pa-4" center-active>
          <template v-slot:prev>
            <v-icon large>mdi-chevron-left</v-icon>
          </template>
          <template v-slot:next>
            <v-icon large>mdi-chevron-right</v-icon>
          </template>
          <v-slide-item
            v-for="item in part.skills"
            :key="item.img"
            v-slot:default="{ active, toggle }"
          >
            <v-hover class="mx-4 ma-2" v-slot:default="{ hover }">
              <div>
                <v-card
                  :color="active ? 'white' : 'white darken-1'"
                  :class="{ 'on-hover': hover }"
                  :height="active ? '200' : '150'"
                  :width="active ? '200' : '150'"
                  @click="toggle"
                  :elevation="hover ? 12 : 8"
                >
                  <v-img
                    :src="require(`@/assets/logos/${item.img}`)"
                    :alt="item.desc"
                  />
                </v-card>
                <v-card-actions>
                  {{ item.desc }}
                </v-card-actions>
              </div>
            </v-hover>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<style>
.mdi-chevron-left .mdi-chevron-right {
  font-size: 72px;
}
</style>
<script>
export default {
  name: "SkillsSection",
  data: () => ({
    parts: [
      {
        title: "Data Analyst",
        skills: [
          { img: "SPSS.svg", desc: "SPSS" },
          { img: "rstudio-vector-logo-01.png", desc: "R" },
          { img: "minitab.svg", desc: "Minitab" },
          { img: "Python-logo-notext.svg", desc: "Python" },
          { img: "sql.png", desc: "Sql" },
          { img: "mongodb.svg", desc: "MongoDB" },
          { img: "excel.svg", desc: "Excel" },
          { img: "matlab.png", desc: "Matlab" },
          { img: "power_bi.png", desc: "Power Bi" }
        ]
      },
      {
        title: "Web Developer",
        skills: [
          { img: "javascript.svg", desc: "Javascript" },
          { img: "typescript.svg", desc: "Typescript" },
          { img: "php.svg", desc: "PHP" },
          { img: "Python-logo-notext.svg", desc: "Python" },
          { img: "node.png", desc: "Node" },
          { img: "vue.svg", desc: "Vue" },
          { img: "angular.svg", desc: "Angular" },
          { img: "ionic.svg", desc: "Ionic" },

          { img: "vuetify.svg", desc: "Vuetify" },
          { img: "bootstrap.png", desc: "Bootstrap" },
          { img: "sass.svg", desc: "Sass" },

          { img: "git.svg", desc: "Git" },
          { img: "linux.svg", desc: "Linux" }
        ]
      }
    ]
  })
};
</script>
