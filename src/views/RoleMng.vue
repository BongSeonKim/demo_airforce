<template>
  <v-main>
    <v-container class="pa-1" fluid style="height: 100%; width: 100%">
      <v-card outlined light height="100vh">
        <v-card-title>
          <v-row justify="start">
            <v-col cols="6">
              <v-row align="start" dense>
                <v-col cols="auto">
                  <v-avatar color="indigo">
                    <v-icon dark>
                      mdi-shield-key
                    </v-icon>
                  </v-avatar>
                </v-col>
                <v-col class="text-h5" align-self="center" cols="auto">
                  권한 관리
                </v-col>
                <v-col cols="auto"></v-col>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row justify="end">
                <v-col cols="4" align-self="center">
                  <v-spacer></v-spacer>
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="검색"
                    hide-details
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="auto" align-self="end">
                  <v-spacer></v-spacer>
                  <v-btn color="primary" dark class="mb-2" @click="showDialog">
                    <v-icon left>
                      mdi-plus-thick
                    </v-icon>
                    그룹생성
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-title>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="arr_item"
          item-key="role_code"
          :search="search"
          class="elevation-1"
          loading="true"
        >
          <template v-slot:item.access_dt="{ item }">
            <v-simple-checkbox
              v-model="item.access_dt"
              color="primary"
              disabled
            ></v-simple-checkbox>
          </template>
          <template v-slot:item.access_ds="{ item }">
            <v-simple-checkbox
              v-model="item.access_ds"
              color="primary"
              disabled
            ></v-simple-checkbox>
          </template>
          <template v-slot:item.access_ctrl="{ item }">
            <v-simple-checkbox
              v-model="item.access_ctrl"
              color="primary"
              disabled
            ></v-simple-checkbox>
          </template>
          <template v-slot:item.access_mng="{ item }">
            <v-simple-checkbox
              v-model="item.access_mng"
              color="primary"
              disabled
            ></v-simple-checkbox>
          </template>
          <template v-slot:item.access_user="{ item }">
            <v-simple-checkbox
              v-model="item.access_user"
              color="primary"
              disabled
            ></v-simple-checkbox>
          </template>
          <template v-slot:item.access_permitmng="{ item }">
            <v-simple-checkbox
              v-model="item.access_permitmng"
              color="primary"
              disabled
            ></v-simple-checkbox>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
    <v-dialog v-model="dialog" max-width="500px" persistent>
      <v-card light>
        <v-card-title>
          <v-row justify="start">
            <v-col cols="auto">
              <v-avatar color="indigo">
                <v-icon dark>
                  mdi-shield-key
                </v-icon>
              </v-avatar>
            </v-col>

            <v-col cols="auto" align-self="center">
              <span class="text-h5">권한그룹 생성</span>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="1" align-self="center">
              <v-row align="end">
                <v-btn icon light @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-card-title>
        <p></p>
        <v-card-text>
          <v-row align="center">
            <v-col cols="12" md="3">
              <label for="role_name">그룹명</label>
            </v-col>

            <v-col cols="12" md="9">
              <v-text-field
                id="txt_role_name"
                v-model="editedItem.role_name"
                outlined
                dense
                placeholder="그룹명을 입력하세요"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
              <label for="role_code">그룹코드</label>
            </v-col>

            <v-col cols="12" md="9" align-self="center">
              <v-text-field
                id="txt_role_code"
                v-bind="editedItem.role_code"
                outlined
                dense
                disabled
                hide-details=""
                value="0002"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <label>접근권한 설정</label>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <v-list>
                <v-list-item>
                  <v-list-item-action>
                    <v-checkbox
                      v-model="editedItem.access_dt"
                      color="primary"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>디지털트윈</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-checkbox
                      v-model="editedItem.access_ds"
                      color="primary"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>대시보드</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-checkbox
                      v-model="editedItem.access_ctrl"
                      color="primary"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>장치제어</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-checkbox
                      v-model="editedItem.access_mng"
                      color="primary"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>관리자설정</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-checkbox
                      v-model="editedItem.access_user"
                      color="primary"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>사용자관리</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-checkbox
                      v-model="editedItem.access_permitmng"
                      color="primary"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>권한관리</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey light-1 white--text" @click="close">
            취소
          </v-btn>
          <v-btn color="blue light-1 white--text" @click="save">
            저장
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card light>
        <v-toolbar color="light red" class="text-h6 white--text"
          ><v-row
            ><v-col cols="1" align-self="center"
              ><v-icon dark>mdi-alert-circle</v-icon></v-col
            ><v-col cols="11" align-self="center">삭제확인</v-col>
          </v-row></v-toolbar
        >
        <v-card-title class="text-h6 blue--text"
          >정말로 해당 권한그룹을 삭제하시겠습니까?
        </v-card-title>
        <v-card-text class="text-h7">
          <v-row align="center" justify="center"
            ><v-col cols="auto" class="text-h6 black--text"
              >그룹명 : {{ this.editedItem.role_name }}</v-col
            >
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" class="mr-4" outlined @click="closeDelete"
            >취소</v-btn
          >
          <v-btn color="error" class="my-2" outlined @click="deleteItemConfirm"
            >삭제</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  name: "RoleMng",

  components: {},

  directives: {},

  data() {
    return {
      dialog: false,
      dialogDelete: false,
      search: "",
      selected: "",
      actiontype: "",
      array_permit: [
        "access_dt",
        "access_ds",
        "access_mng",
        "access_ctrl",
        "access_user",
        "access_permitmng",
      ],
      headers: [
        { text: "그룹명", align: "center", value: "role_name" },
        {
          text: "그룹코드",
          value: "role_code",
          align: "center",
        },
        {
          text: "디지털트윈",
          value: "access_dt",
          align: "center",
        },
        {
          text: "대시보드",
          value: "access_ds",
          align: "center",
        },
        {
          text: "장치제어",
          value: "access_ctrl",
          align: "center",
        },
        {
          text: "관리자설정",
          value: "access_mng",
          align: "center",
        },
        {
          text: "사용자관리",
          value: "access_user",
          align: "center",
        },
        {
          text: "권한관리",
          value: "access_permitmng",
          align: "center",
        },
        {
          text: "변경/삭제",
          value: "actions",
          sortable: false,
          align: "center",
        },
      ],

      arr_item: [],
      editedIndex: -1,
      editedItem: {
        role_code: "",
        role_name: "",
        access_dt: "",
        access_ds: "",
        access_ctrl: "",
        access_mng: "",
        access_user: "",
        access_permitmng: "",
      },
      defaultItem: {
        role_code: "",
        role_name: "",
        access_dt: "",
        access_ds: "",
        access_ctrl: "",
        access_mng: "",
        access_user: "",
        access_permitmng: "",
      },
    };
  },

  computed: {},

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  mounted() {
    this.getGrantList();
  },

  methods: {
    showDialog() {
      this.dialog = true;
    },
    getGrantList() {
      const vm = this;
      axios
        .post("http://localhost:8090/api/grant/list", {
          id: vm.id,
          password: vm.password,
          grantinfo: "",
        })
        .then(function(response) {
          //console.log(response);
          if (response.status === 200) {
            vm.arr_item = response.data;
            //console.info(str_json);
            //this.arr_item = str_json;
            //vm.$router.push({ name: "mainview" });7
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
    editItem(item) {
      this.editedIndex = this.arr_item.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.actiontype = "update";
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.arr_item.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.arr_item.splice(this.editedIndex, 1);
      this.actiontype = "delete";
      this.dialogDelete = false;
      this.deleteUser();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      var result;
      if (this.actiontype !== "update") {
        this.actiontype = "create";
      }
      //alert(this.actiontype);
      if (this.actiontype === "update") {
        result = this.updateUser();
      } else if (this.actiontype === "create") {
        result = this.createUser();
      }

      if (result == true) {
        if (this.editedIndex > -1) {
          Object.assign(this.arr_item[this.editedIndex], this.editedItem);
        } else {
          this.arr_item.push(this.editedItem);
        }
      }
      this.close();
    },
    updateUser() {
      console.info(JSON.stringify(this.editedItem));
      const vm = this;
      var edit_info = JSON.stringify(this.editedItem);
      const axiosConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post("http://localhost:8090/api/user/update", edit_info, axiosConfig)
        .then(function(response) {
          //console.log(response);
          if (response.status === 200) {
            vm.arr_item = response.data;
            return true;
          } else {
            vm.result =
              "서버에러가 발생하였습니다. 코드 : " + response.status.toString();
            vm.showResult = true;
            return false;
          }
        })
        .catch(function(error) {
          console.log(error);
          return false;
        });
    },
    createUser() {
      console.info(JSON.stringify(this.editedItem));
      const vm = this;
      var edit_info = JSON.stringify(this.editedItem);

      const axiosConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .post("http://localhost:8090/api/user/create", edit_info, axiosConfig)
        .then(function(response) {
          //console.log(response);
          if (response.status === 200) {
            vm.arr_item = response.data;
            return true;
          } else {
            vm.result =
              "서버에러가 발생하였습니다. 코드 : " + response.status.toString();
            vm.showResult = true;
            return false;
          }
        })
        .catch(function(error) {
          console.log(error);
          return false;
        });
    },
    deleteUser() {
      console.info(JSON.stringify(this.editedItem));
      const vm = this;
      var edit_info = JSON.stringify(this.editedItem);
      const axiosConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post("http://localhost:8090/api/grant/delete", edit_info, axiosConfig)
        .then(function(response) {
          //console.log(response);
          if (response.status === 200) {
            vm.arr_item = response.data;
            return true;
          } else {
            vm.result =
              "서버에러가 발생하였습니다. 코드 : " + response.status.toString();
            vm.showResult = true;
            return false;
          }
        })
        .catch(function(error) {
          console.log(error);
          return false;
        });
    },
    // changed_ext: function() {
    //   if (this.switch_extinguisher == false) {
    //     this.dialog_ext = true;
    //   } else {
    //     this.status_onoff_ext = "OFF";
    //   }
    // },
  },
};
</script>

<style lang="scss">
.theme--light.v-icon.v-icon.v-icon--disabled {
  color: #2196f3 !important;
}
</style>
