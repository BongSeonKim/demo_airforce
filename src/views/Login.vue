<template>
  <v-app id="login" class="secondary">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-10 pa-3" light>
              <v-card-text>
                <div class="layout column align-center">
                  <img
                    src="../assets/airforce_ci_basic.png"
                    alt="대한민국 공군"
                    width="300"
                    height="217"
                  />
                  <h1 class="flex my-4 orange--text">
                    디지털트윈 화재방호시스템
                  </h1>
                </div>
                <v-form>
                  <v-text-field
                    :append-icon="mdiAccount"
                    name="id"
                    label="ID"
                    type="text"
                    v-model="id"
                    :error="error"
                    :rules="[rules.required]"
                  ></v-text-field>
                  <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    :append-icon="visibility_off"
                    name="password"
                    label="Password"
                    id="password"
                    :rules="[rules.required]"
                    v-model="password"
                    :error="error"
                    @click:append="hidePassword = !hidePassword"
                  >
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="login" :loading="loading"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar v-model="showResult" :timeout="4000" top>
        {{ result }}
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import { mdiAccount, mdiEye, mdiEyeOff } from "@mdi/js";
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      id: "admin@rokaf.go.kr",
      password: "123456",
      hidePassword: true,
      error: false,
      showResult: false,
      result: "",
      rules: {
        required: (value) => !!value || "Required.",
      },
      mdiAccount: mdiAccount,
      visibility: mdiEye,
      visibility_off: mdiEyeOff,
    };
  },

  methods: {
    login() {
      const vm = this;

      if (!vm.id || !vm.password) {
        vm.result = "ID 와 비밀번호를 모두 입력해야합니다. ";
        vm.showResult = true;

        return;
      }

      if (vm.id && vm.password) {
        axios
          .post("http://localhost:8090/api/user/login", {
            id: vm.id,
            password: vm.password,
            grantinfo: "",
          })
          .then(function(response) {
            console.log(response);
            if (response.status === 202) {
              vm.$router.push({ name: "mainview" });
            } else {
              vm.result =
                "서버에러가 발생하였습니다. 코드 : " +
                response.status.toString();
              vm.showResult = true;
            }
          })
          .catch(function(error) {
            console.log("Error : " + error.message);
            vm.result = "에러가 발생하였습니다. : " + error.message;
            vm.showResult = true;
          });
      } else {
        vm.error = true;
        vm.result = "ID 또는 Password가 일치하지 않습니다.";
        vm.showResult = true;
      }
    },
  },
};
</script>

<style scoped lang="css">
#login {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
  background-image: url("../assets/airforce_img_bg01.jpg");
  background-size: cover;
}
</style>
