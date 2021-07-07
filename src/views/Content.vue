<template>
  <v-main fluid>
    <v-container class="ma-0 pa-0 black" fluid>
      <v-row class="ma-0 pa-0 black" no-gutters>
        <v-col class="ma-0 pa-0" cols="12" lg="3" rounded="sm">
          <v-row class="ma-0 pa-0" no-gutters>
            <v-col class="ma-0 pa-0" cols="12" lg="12" rounded="sm">
              <v-card
                @mouseover="onMouseOver(1)"
                class="ma-0 pa-0"
                tile
                style="height: 42vh; width: 100vw"
              >
                <v-card-title class="d-flex justify-center ma-0 pa-0"
                  >허쉬하우스
                </v-card-title>
                <iframe
                  src="http://localhost:3000/d/P-2cuek7z/heoswihauseu_main?orgId=1&refresh=5s&kiosk"
                  width="100%"
                  height="100%"
                  frameborder="0"
                ></iframe>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="ma-0 pa-0" no-gutters>
            <v-col class="ma-0 pa-0" cols="12" lg="12" rounded="sm">
              <v-card
                @mouseover="onMouseOver(2)"
                class="ma-0 pa-0"
                tile
                style="height: 42vh; width: 100vw"
              >
                <v-card-title class="d-flex justify-center ma-0 pa-0"
                  >공병대대
                </v-card-title>
                <iframe
                  src="http://localhost:3000/d/qQC49ek7k/gongbyeongdaedae_main?orgId=1&refresh=5s&kiosk"
                  width="100%"
                  height="100%"
                  frameborder="0"
                ></iframe>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          class="d-flex justify-center align-center pa-0 ma-0 black "
          cols="12"
          lg="6"
          rounded="sm"
        >
          <v-img
            v-bind:src="require('../assets/' + fname_img)"
            :aspect-ratio="16 / 9"
          ></v-img>
          <!-- <v-img src="@/assets/3d_map_hush.png" :aspect-ratio="16 / 9"></v-img> -->
        </v-col>
        <v-col class="ma-0 pa-0" cols="12" lg="3" rounded="sm">
          <v-row class="ma-0 pa-0" no-gutters>
            <v-col class="ma-0 pa-0" cols="12" lg="12" rounded="sm">
              <v-card
                @mouseover="onMouseOver(3)"
                class="ma-0 pa-0"
                tile
                style="height: 42vh; width: 100vw"
              >
                <v-card-title class="d-flex justify-center ma-0 pa-0"
                  >관제탑
                </v-card-title>
                <iframe
                  src="http://localhost:3000/d/P-2cuek7z/heoswihauseu_main?orgId=1&refresh=5s&kiosk"
                  width="100%"
                  height="100%"
                  frameborder="0"
                ></iframe>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="ma-0 pa-0" no-gutters>
            <v-col class="ma-0 pa-0" cols="12" lg="12" rounded="sm">
              <v-card
                @mouseover="onMouseOver(4)"
                class="ma-0 pa-0"
                tile
                style="height: 42vh; width: 100vw"
              >
                <v-card-title class="d-flex justify-center ma-0 pa-0"
                  >소방중대
                </v-card-title>
                <iframe
                  src="http://localhost:3000/d/qQC49ek7k/gongbyeongdaedae_main?orgId=1&refresh=5s&kiosk"
                  width="100%"
                  height="100%"
                  frameborder="0"
                ></iframe>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data: function() {
    return {
      fname_img: "main_3d_map.png",
    };
  },
  methods: {
    //패널별 mouseover 시 중간 이미지 변경
    onMouseOver(key) {
      if (key === 1) {
        this.fname_img = "3d_map_hush.png";
        //alert("MouseOver!");
      } else if (key === 2) {
        this.fname_img = "3d_map_eng.png";
        //alert("MouseOver!");
      } else if (key === 3) {
        this.fname_img = "3d_map_tower.png";
        //alert("MouseOver!");
      } else if (key === 4) {
        this.fname_img = "3d_map_fire.png";
        //alert("MouseOver!");
      }
    },
  },
};
</script>
