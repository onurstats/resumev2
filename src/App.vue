<template>
  <v-app>
    <Header />
    <v-main class="fill-height" id="line-anim">
      <v-row
        align="center"
        justify="center"
        style="height: calc(100vh - 64px);"
        no-gutters
      >
        <v-col cols="1" class="hidden-sm-and-down">
          <v-item-group
            v-model="page"
            class="ml-12 dot-nav-group"
            mandatory
            tag="v-flex"
          >
            <v-item
              v-for="n in nav"
              :key="n"
              v-slot:default="{ active, toggle }"
            >
              <div class="dot-nav" @click="toggle">
                <v-btn :input-value="active" icon>
                  <v-icon color="white">mdi-record</v-icon>
                </v-btn>
                <span class="hidden-sm-and-down white--text dot-text">{{
                  n
                }}</span>
              </div>
            </v-item>
          </v-item-group>
        </v-col>
        <v-col md="10">
          <v-window v-model="page" vertical>
            <v-window-item>
              <HomePage />
            </v-window-item>
            <v-window-item>
              <SkillsSection />
            </v-window-item>
            <v-window-item>
              <EducationSection />
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from "@/components/HomePage";
import Header from "@/components/Header";
import SkillsSection from "@/components/Skills/SkillsSection";
import EducationSection from "@/components/Education/EducationSection";

export default {
  name: "App",

  components: {
    HomePage,
    Header,
    SkillsSection,
    EducationSection
  },

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

  data: () => ({
    nav: ["Home", "Skills", "Education"]
  }),
  mounted: function() {
    let scene, camera, renderer, ribbon;

    const container = document.querySelector(".v-main__wrap");

    const init = () => {
      scene = new this.$three.Scene();
      camera = new this.$three.PerspectiveCamera(75, 1, 0.1, 10000);
      camera.position.z = 2;

      renderer = new this.$three.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      renderer.domElement.id = "lines_canvas";
      container.prepend(renderer.domElement);

      ribbon = new this.$three.Mesh(
        new this.$three.PlaneGeometry(1, 1, 128, 128),
        new this.$three.ShaderMaterial({
          uniforms: {
            time: { value: 1.0 }
          },
          vertexShader: `
        varying vec3 vEC;
        uniform float time;

        float iqhash(float n) {
          return fract(sin(n) * 43758.5453);
        }

        float noise(vec3 x) {
          vec3 p = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          float n = p.x + p.y * 57.0 + 113.0 * p.z;
          return mix(mix(mix(iqhash(n), iqhash(n + 1.0), f.x),
                     mix(iqhash(n + 57.0), iqhash(n + 58.0), f.x), f.y),
                     mix(mix(iqhash(n + 113.0), iqhash(n + 114.0), f.x),
                     mix(iqhash(n + 170.0), iqhash(n + 171.0), f.x), f.y), f.z);
        }

        float xmb_noise2(vec3 x) {
          return cos(x.z * 4.0) * cos(x.z + time / 10.0 + x.x);
        }

        void main() {
          vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vec3 v = vec3(pos.x, 0.0, pos.y);
          vec3 v2 = v;
          vec3 v3 = v;

          v.y = xmb_noise2(v2) / 8.0;

          v3.x -= time / 5.0;
          v3.x /= 4.0;

          v3.z -= time / 10.0;
          v3.y -= time / 100.0;

          v.z -= noise(v3 * 7.0) / 15.0;
          v.y -= noise(v3 * 7.0) / 15.0 + cos(v.x * 2.0 - time / 2.0) / 5.0 - 0.3;

          vEC = v;
          gl_Position = vec4(v, 1.0);
        }
      `,
          fragmentShader: `
        uniform float time;
        varying vec3 vEC;

        void main()
        {
           const vec3 up = vec3(0.0, 0.0, 1.0);
           vec3 x = dFdx(vEC);
           vec3 y = dFdy(vEC);
           vec3 normal = normalize(cross(x, y));
           float c = 1.0 - dot(normal, up);
           c = (1.0 - cos(c * c)) / 3.0;
           gl_FragColor = vec4(1.0, 1.0, 1.0, c * 1.5);
        }
      `,
          extensions: {
            derivatives: true,
            fragDepth: false,
            drawBuffers: false,
            shaderTextureLOD: false
          },
          side: this.$three.DoubleSide,
          transparent: true,
          depthTest: false
        })
      );

      scene.add(ribbon);

      resize();
      window.addEventListener("resize", resize);
    };

    const resize = () => {
      const { offsetWidth, offsetHeight } = container;

      renderer.setSize(offsetWidth, offsetHeight);
      renderer.setPixelRatio(devicePixelRatio);

      camera.aspect = offsetWidth / offsetHeight;
      camera.updateProjectionMatrix();

      ribbon.scale.set(camera.aspect * 1.55, 0.75, 1);
    };

    const animate = () => {
      ribbon.material.uniforms.time.value += 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(() => animate());
    };

    init();
    animate();
  }
};
</script>

<style lang="scss">
.ml-n124 {
  margin-left: -124px;
}

.dot-nav-group {
  z-index: 2;
}

.v-btn--active {
  background-color: rgba($color: white, $alpha: 0.4);
}

.v-item--active {
  .dot-text {
    scale: 1.5;
    left: 52px;
  }
}

.dot-nav {
  transition: ease-in 0.5s;
  cursor: pointer;
  width: 124px;
  &:hover {
    .dot-text {
      left: 52px;
    }
  }
  .dot-text {
    position: absolute;
    cursor: pointer;
  }
}

.v-main {
  background-color: #212121;
  height: calc(100vh - 64px);
}
#lines_canvas {
  position: fixed;
  margin-top: -5%;
}
</style>
