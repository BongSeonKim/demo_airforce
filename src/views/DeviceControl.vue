<template>
  <v-main>
    <v-container class="ma-2 pa-2" fluid style="height: 100%; width: 100%">
      <v-row justify="space-around" style="height: 50vh">
        <v-card style="width: 80vh">
          <v-card-title>허쉬하우스 CCTV1</v-card-title>
          <iframe
            src="http://dt.rozetatech.com:3000/cctv/sample_rtsp_player.html"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
          <!--  <iframe
            src="http://10.20.21.19:3000/cctv/hush_cctv01.html"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe> -->
        </v-card>

        <v-card style="width: 80vh">
          <v-card-title>허쉬하우스 CCTV2</v-card-title>
          <iframe
            src="http://dt.rozetatech.com:3000/cctv/sample_rtsp_player.html"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
          <!-- <iframe
            src="http://10.20.21.19:3000/cctv/hush_cctv02.html"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe> -->
        </v-card>
      </v-row>
      <v-row justify="center" align="center">
        <v-card elevation="3" class="ma-3 pa-5" outlined>
          <v-card-title color="black"
            ><v-row justify="center" align="center" dense>
              <v-col cols="auto"
                ><v-icon color="red" size="30px"
                  >{{ mdiExtinguisher }}
                </v-icon></v-col
              ><v-col cols="auto">포소화설비 릴레이보드 제어</v-col></v-row
            ></v-card-title
          >
          <v-row justify="center" align="center">
            <v-col cols="12">
              <v-btn
                width="100%"
                depressed
                :color="status_connection ? 'green' : 'gray'"
                light
                :outlined="!status_connection"
                :class="status_connection ? 'white--text' : 'red--text'"
                >{{ str_connection }}
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-col align="center">
              <v-btn
                width="120px"
                x-large
                depressed
                :color="status_fire ? 'red' : 'grey'"
                light
                :outlined="!status_fire"
                class="white--text"
              >
                기동출력<br />(화재감지)
              </v-btn>
            </v-col>
            <v-col align="center">
              <v-btn
                width="120px"
                x-large
                depressed
                :color="status_onoff_relay ? 'blue' : 'grey'"
                light
                :outlined="!status_onoff_relay"
                class="white--text"
              >
                연결 {{ str_status_relay }}
              </v-btn>
            </v-col>
            <v-col align="center">
              <v-btn
                width="120px"
                x-large
                :color="status_release ? 'orange' : 'grey'"
                :outlined="!status_release"
                depressed
                light
                class="white--text"
              >
                방출중
              </v-btn>
            </v-col>
          </v-row>
          <v-row style="height:30%" justify="center">
            <v-col align-self="center" align="center">
              <!-- <v-btn
                x-large
                color="error"
                light
                @click="changed_relay"
                tile
                :plain="!status_onoff_relay"
                :outlined="!status_onoff_relay"
              >
                ON
              </v-btn>
             
              <v-btn
                x-large
                color="black"
                @click="click_stop_ex"
                tile
                :outlined="status_onoff_relay"
                :plain="status_onoff_relay"
                :class="status_onoff_relay ? 'black--text' : 'white--text'"
              >
                <v-icon>
                  {{ mdiStopCircle }}
                </v-icon>
                OFF
              </v-btn> -->
              <toggle-button
                @change="changed_relay"
                width="120"
                height="40"
                :value="status_onoff_relay"
                :disabled="!status_connection"
                :labels="{ checked: 'ON', unchecked: 'OFF' }"
                font-size="20"
                color="#2196f3"
                sync="true"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-row>
      <!-- 
      <v-dialog v-model="dialog_ext" width="500">
        <v-card outlined light>
          <v-card-title class="text-h5 red darken-3 white--text">
            [경고] 포소화설비 릴레이 접점 해제(OFF)
          </v-card-title>
          <v-card-text class="text-h6 red--text"
            >포소화 설비의 접점연결을 해제(OFF) 하시겠습니까?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-4" class="white--text" @click="deny_ext">
              아니오
            </v-btn>

            <v-btn
              color="red darken-4"
              class="white--text"
              @click="confirm_ext"
            >
              네
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> -->
      <v-snackbar v-model="showResult" :timeout="4000" top>
        {{ result }}
      </v-snackbar>
    </v-container>
  </v-main>
</template>

<script>
import { mdiFireExtinguisher } from "@mdi/js";
import { mdiStopCircle } from "@mdi/js";
import { ToggleButton } from "vue-js-toggle-button";
import axios from "axios";

export default {
  name: "DeviceCtrl",

  components: { ToggleButton },

  directives: {},

  computed: {
    str_connection: function() {
      return this.status_connection ? "네트워크 정상" : "네트워크 끊김";
    },
    str_status_relay: function() {
      return this.status_onoff_relay ? "ON" : "OFF";
    },
  },

  data() {
    return {
      conn_stat_ext: false,
      status_fire: true,
      switch_extinguisher: false,
      status_release: true,
      status_onoff_relay: false,
      status_connection: true,
      mdiExtinguisher: mdiFireExtinguisher,
      mdiStopCircle: mdiStopCircle,
      hdl_interval: 0,
      //obj_status_extinguish: [],
    };
  },

  mounted() {
    this.getExtinguishStatus();
    this.extInterval();
  },

  methods: {
    extInterval: function() {
      this.hdl_interval = setInterval(() => {
        this.getExtinguishStatus();
      }, 3000);
    },
    sleep: function(ms) {
      return new Promise((r) => setTimeout(r, ms));
    },
    waitSetting: async function() {
      await this.sleep(15000);
      this.extInterval();
    },
    changed_relay: function() {
      clearInterval(this.hdl_interval);
      if (this.status_onoff_relay == false) {
        this.status_onoff_relay = true;
        this.setExtinguishStatus();
        this.waitSetting();
      } else {
        this.status_onoff_relay = false;
        this.setExtinguishStatus();
        this.waitSetting();
      }
    },
    click_stop_ex: function() {
      this.switch_extinguisher = false;
      this.status_onoff_ext = "OFF";
    },
    getExtinguishStatus: function() {
      const vm = this;
      const axiosConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        //.get("http://10.20.21.19:3000/api/device/extinguish", axiosConfig)
        .get(
          "http://file.rozetatech.com:3000/api/device/extinguish",
          axiosConfig
        )
        .then(function(response) {
          //console.log(response);
          if (response.status === 200) {
            if (response.data == "") {
              vm.status_connection = false;
              vm.status_onoff_relay = false;
              vm.status_fire = false;
              vm.status_release = false;
            } else {
              vm.status_connection = true;
              vm.status_onoff_relay =
                response.data.status_onoff_relay == "true" ? true : false;
              vm.status_fire =
                response.data.status_fire == "true" ? true : false;
              vm.status_release =
                response.data.status_release == "true" ? true : false;
            }
            /*  console.info(response.data.toString());
            console.info(
              "res_json.status_onoff_relay = [" +
                response.data.status_onoff_relay +
                "]"
            );
            console.info(
              "res_json.status_onoff_relay = [" +
                response.data.status_fire +
                "]"
            );
            console.info(
              "res_json.status_onoff_relay = [" +
                response.data.status_release +
                "]"
            ); */
          } else {
            vm.result =
              "서버에러가 발생하였습니다. 코드 : " + response.status.toString();
            vm.showResult = true;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    setExtinguishStatus: function() {
      //alert("setExtinguishStatus 호출");
      //alert(this.getCurrentDate());
      const vm = this;
      var json_setinfo =
        vm.status_onoff_relay == true
          ? {
              Command: "Control",
              Extinguish: "Enable",
              Id: "Dashboard",
              Time: this.getCurrentDate(),
            }
          : {
              Command: "Control",
              Extinguish: "Disable",
              Id: "Dashboard",
              Time: this.getCurrentDate(),
            };
      const axiosConfig = {
        headers: {
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin": "http://10.20.21.19:3000",
          "Access-Control-Allow-Origin": "http://file.rozetatech.com:3000",
        },
      };
      axios
        .post(
          //"http://10.20.21.19:3000/log/http_set_extinguish",
          "http://file.rozetatech.com:3000/log/http_set_extinguish",
          JSON.stringify(json_setinfo),
          axiosConfig
        )
        .then(function(response) {
          //console.log(response);
          if (response.status === 404) {
            vm.result = "설정이 전달되었습니다.";
            vm.showResult = true;
          } else {
            vm.result =
              "서버에러가 발생하였습니다. 코드 : " + response.status.toString();
            vm.showResult = true;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getCurrentDate: function() {
      var date = new Date();
      var year = date.getFullYear().toString();

      var month = date.getMonth() + 1;
      month = month < 10 ? "0" + month.toString() : month.toString();

      var day = date.getDate();
      day = day < 10 ? "0" + day.toString() : day.toString();

      var hour = date.getHours();
      hour = hour < 10 ? "0" + hour.toString() : hour.toString();

      var minites = date.getMinutes();
      minites = minites < 10 ? "0" + minites.toString() : minites.toString();

      var seconds = date.getSeconds();
      seconds = seconds < 10 ? "0" + seconds.toString() : seconds.toString();

      return year + month + day + hour + minites + seconds;
    },
  },
};
</script>

<style lang="scss"></style>
