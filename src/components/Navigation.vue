<template>
  <v-app-bar
    app
    class="d-flex justify-space-between"
    color="black"
    height="80"
    width="100vw"
  >
    <v-img
      src="@/assets/logo_airforce.png"
      :aspect-ratio="16 / 9"
      width="380"
      height="80"
    ></v-img>
    <v-btn-toggle tile group>
      <v-btn x-large @click="routeContent('dt')">
        디지털트윈
      </v-btn>
      <v-btn x-large @click="routeContent('iot')">
        대시보드
      </v-btn>
      <v-btn x-large @click="routeContent('ctrl')">
        장치제어
      </v-btn>
      <!-- <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn x-large v-on="on">관리자설정</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="([title, id], i) in admins" :key="i">
            <v-btn plain @click="routeContent(id)">
              <v-list-item-title
                v-text="title"
                color="blue"
              ></v-list-item-title>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-btn-toggle>
    <!-- <v-spacer></v-spacer> -->
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      admins: [
        ["사용자관리", "UserMng"],
        ["권한관리", "RoleMng"],
      ],
    };
  },
  methods: {
    routeContent(key) {
      if (key === "main") {
        // this.$emit("route", "main");
        this.$emit("route", "dt");
      } else if (key === "dt") {
        this.$emit("route", "dt");
      } else if (key === "iot") {
        this.$emit("route", "iot");
      } else if (key === "ctrl") {
        this.$emit("route", "ctrl");
      } else if (key === "UserMng") {
        this.$emit("route", "UserMng");
      } else if (key === "RoleMng") {
        this.$emit("route", "RoleMng");
      }
    },
  },
};
</script>
