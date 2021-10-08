<template>
  <v-main>
    <v-container class="ma-0 pa-0 black" fluid>
      <v-row class="ma-0 pa-0 black" no-gutters>
        <v-col class="ma-0 pa-0" cols="12" lg="3" rounded="sm">
          <v-row class="ma-0 pa-0" no-gutters>
            <v-col class="ma-0 pa-0" cols="12" lg="12" rounded="sm">
              <v-card
                id="hush"
                @mouseover="onMouseOver(1, $event)"
                @mouseout="onMouseOut()"
                :class="[this.card_gubun === 1 ? strClass_over : strClass]"
                tile
                style="height: 42vh; width: 100vw"
              >
                <v-card-title class="d-flex justify-center ma-0 pa-0"
                  >허쉬하우스
                </v-card-title>
                <iframe
                  src="http://file.rozetatech.com:3000/grafana/d/9hB_ffm7k/heoswihauseu_main?orgId=1&refresh=5s&kiosk"
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
                name="eng"
                @mouseover="onMouseOver(2)"
                @mouseout="onMouseOut()"
                :class="[this.card_gubun === 2 ? strClass_over : strClass]"
                tile
                style="height: 42vh; width: 100vw"
              >
                <v-card-title class="d-flex justify-center ma-0 pa-0"
                  >공병대대
                </v-card-title>
                <iframe
                  src="http://file.rozetatech.com:3000/grafana/d/rZo9BBmnz/gongbyeongdaedae_main?orgId=1&refresh=5s&kiosk"
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
          @mouseover="onMouseOver(5)"
          @mouseout="onMouseOut()"
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
                name="tower"
                @mouseover="onMouseOver(3)"
                @mouseout="onMouseOut()"
                :class="[this.card_gubun === 3 ? strClass_over : strClass]"
                tile
                style="height: 42vh; width: 100vw"
              >
                <v-card-title class="d-flex justify-center ma-0 pa-0"
                  >관제탑
                </v-card-title>
                <iframe
                  src="http://file.rozetatech.com:3000/grafana/d/9hB_ffm7k/heoswihauseu_main?orgId=1&refresh=5s&kiosk"
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
                name="fire"
                @mouseover="onMouseOver(4)"
                @mouseout="onMouseOut()"
                :class="[this.card_gubun === 4 ? strClass_over : strClass]"
                tile
                style="height: 42vh; width: 100vw"
              >
                <v-card-title class="d-flex justify-center ma-0 pa-0"
                  >소방중대
                </v-card-title>
                <iframe
                  src="http://file.rozetatech.com:3000/grafana/d/rZo9BBmnz/gongbyeongdaedae_main?orgId=1&refresh=5s&kiosk"
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
      fname_img: "3d_map_all.png",
      card_gubun: 0,
      strClass: "ma-0 pa-0",
      strClass_over: "ma-0 pa-0 light-blue",
    };
  },
  methods: {
    //패널별 mouseover 시 중간 이미지 변경
    onMouseOver(key) {
      if (key === 1) {
        this.fname_img = "3d_map_hush.png";
        this.card_gubun = key;
      } else if (key === 2) {
        this.fname_img = "3d_map_eng.png";
        this.card_gubun = key;
      } else if (key === 3) {
        this.fname_img = "3d_map_tower.png";
        this.card_gubun = key;
      } else if (key === 4) {
        this.fname_img = "3d_map_fire.png";
        this.card_gubun = key;
      } else if (key === 5) {
        this.fname_img = "3d_map_all.png";
        this.card_gubun = key;
      }
    },

    onMouseOut() {
      this.card_gubun = 0;
    },
  },
};
</script>
