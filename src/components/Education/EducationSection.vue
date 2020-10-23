<template>
  <v-row tag="section" id="education" justify="center" class="mx-6">
    <v-col v-for="part in parts" :key="part.title">
      <v-card min-height="500" class="mx-auto" elevation="8">
        <v-card-title>{{ part.title }}</v-card-title>
        <v-row justify="center" class="ma-6">
          <v-col cols="4">
            <v-img
              :src="require(`@/assets/logos/${part.schoolImg}`)"
              contain
              height="124"
            ></v-img>
          </v-col>
          <v-col cols="4">
            <v-img
              :src="require(`@/assets/logos/${part.facultyImg}`)"
              contain
              height="124"
            ></v-img>
          </v-col>
        </v-row>
        <v-row justify="center">
          <ul style="list-style-type:none" class="ma-2">
            <li class="title ma-2">
              <b>{{ part.school }}</b>
            </li>
            <li class="ma-2">{{ part.faculty }}</li>
            <li class="ma-2">{{ part.time }}</li>
            <li class="ma-2">{{ part.gpa }}</li>
          </ul>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "EducationSection",
  data: () => ({
    parts: [
      {
        title: "Bachelor Degree in Statistics",
        schoolImg: "deu-logo.png",
        facultyImg: "deu-stats-logo.png",
        school: "Dokuz Eylul University",
        faculty: "Departmant of Statistics",
        time: "09.2008-03.2013",
        gpa: "3.23/4 GPA"
      },
      {
        title: "Student Exchange",
        schoolImg: "unl-logo.png",
        facultyImg: "fct-logo.png",
        school: "New Lisbon University",
        faculty: "Mathematics Department",
        time: "08.2011-02.2012",
        gpa: ""
      },
      {
        title: "High School",
        schoolImg: "kkk-logo.png",
        facultyImg: "mal-logo.png",
        school: "Maltepe Military High School",
        faculty: "Turkish Land Forces",
        time: "09.2003-07.2007",
        gpa: ""
      }
    ]
  })
};
</script>
