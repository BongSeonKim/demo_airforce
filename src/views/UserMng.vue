<template>
  <v-main>
    <v-container class="pa-1" fluid style="height: 100%; width: 100%">
      <v-app id="inspire">
        <v-card outlined light style="height: 100%; width: 100%">
          <v-card-title>
            <v-row justify="center">
              <v-col cols="6">
                <v-row align="start" dense>
                  <v-col cols="auto">
                    <v-avatar color="indigo">
                      <v-icon dark>
                        mdi-account-multiple
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col cols="auto" class="text-h5" align-self="center">
                    사용자 관리
                  </v-col>
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
                    <v-dialog v-model="dialog" width="500px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="primary"
                          dark
                          class="mb-2"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon left>
                            mdi-plus-thick
                          </v-icon>
                          신규등록
                        </v-btn>
                      </template>
                      <v-card light width="500px">
                        <v-card-title>
                          <v-row justify="center">
                            <v-col cols="6">
                              <v-row justify="start">
                                <v-col cols="auto">
                                  <v-avatar color="indigo">
                                    <v-icon dark>
                                      mdi-account
                                    </v-icon>
                                  </v-avatar>
                                </v-col>

                                <v-col cols="auto" align-self="center">
                                  <span class="text-h5">{{ formTitle }}</span>
                                </v-col>
                              </v-row>
                            </v-col>

                            <v-col cols="6">
                              <v-row justify="end">
                                <v-col cols="auto">
                                  <v-btn icon light @click="dialog = false">
                                    <v-icon>mdi-close</v-icon>
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-card-title>
                        <p></p>
                        <v-card-text>
                          <v-row align="center">
                            <v-col cols="12" md="3">
                              <label for="name">성명</label>
                            </v-col>

                            <v-col cols="12" md="9">
                              <v-text-field
                                id="txt_name"
                                v-model="editedItem.name"
                                outlined
                                dense
                                placeholder="성명"
                                hide-details
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                              <label for="id">ID</label>
                            </v-col>

                            <v-col cols="12" md="9">
                              <v-text-field
                                id="txt_id"
                                v-model="editedItem.id"
                                outlined
                                dense
                                placeholder="ID"
                                hide-details
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                              <label for="password">Password</label>
                            </v-col>

                            <v-col cols="12" md="9">
                              <v-text-field
                                id="txt_password"
                                v-model="editedItem.password"
                                type="password"
                                outlined
                                dense
                                placeholder="Password"
                                hide-details
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                              <label for="rank">계급</label>
                            </v-col>

                            <v-col cols="12" md="9">
                              <v-text-field
                                id="txt_rank"
                                v-model="editedItem.rank"
                                outlined
                                dense
                                placeholder="계급"
                                hide-details
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                              <label for="team">소속</label>
                            </v-col>

                            <v-col cols="12" md="9">
                              <v-text-field
                                id="txt_team"
                                v-model="editedItem.team"
                                outlined
                                dense
                                placeholder="소속"
                                hide-details
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3">
                              <label for="role_code">권한그릅</label>
                            </v-col>
                            <v-col cols="12" md="9">
                              <v-text-field
                                id="txt_role"
                                v-model="editedItem.role_code"
                                outlined
                                dense
                                placeholder="권한그룹"
                                hide-details
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                              <label for="email">EMAIL</label>
                            </v-col>

                            <v-col cols="12" md="9">
                              <v-text-field
                                id="txt_email"
                                v-model="editedItem.email"
                                outlined
                                dense
                                placeholder="Email"
                                hide-details
                              ></v-text-field>
                            </v-col>

                            <v-col offset-md="3" cols="12"> </v-col>
                          </v-row>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="grey light-1 white--text"
                            @click="close"
                          >
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
                        <v-toolbar color="primary" class="text-h6 white--text"
                          ><v-row
                            ><v-col cols="1" align-self="center"
                              ><v-icon dark>mdi-alert-circle</v-icon></v-col
                            ><v-col cols="11" align-self="center"
                              >삭제확인</v-col
                            >
                          </v-row></v-toolbar
                        >
                        <v-card-title class="text-h6 blue--text"
                          >정말로 해당 사용자를 삭제하시겠습니까?
                        </v-card-title>
                        <v-card-text class="text-h7">
                          <v-row align="center" justify="center"
                            ><v-col cols="4">
                              ID : {{ this.editedItem.id }} </v-col
                            ><v-col cols="4"
                              >사용자명 : {{ this.editedItem.name }}</v-col
                            >
                          </v-row>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            class="mr-4"
                            outlined
                            @click="closeDelete"
                            >취소</v-btn
                          >
                          <v-btn
                            color="error"
                            class="my-2"
                            outlined
                            @click="deleteItemConfirm"
                            >삭제</v-btn
                          >
                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="arr_item"
            item-key="id"
            :search="search"
            class="elevation-1"
            loading="true"
          >
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
      </v-app>
    </v-container>
  </v-main>
</template>

<script>
//import { mdiFireExtinguisher } from "@mdi/js";
import axios from "axios";

export default {
  name: "UserMng",

  components: {},

  directives: {},

  data() {
    return {
      dialog: false,
      dialogDelete: false,
      search: "",
      selected: "",
      actiontype: "",

      headers: [
        { text: "ID", align: "center", value: "id" },
        {
          text: "사용자명",
          value: "name",
          align: "center",
        },
        {
          text: "계급",
          value: "rank",
          align: "center",
        },
        {
          text: "소속",
          value: "team",
          align: "center",
        },
        {
          text: "권한그룹",
          value: "role_code",
          align: "center",
        },
        {
          text: "E-mail",
          value: "email",
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
        id: "",
        name: "",
        rank: "",
        team: "",
        email: "",
        password: "",
        role_code: "",
      },
      defaultItem: {
        id: "",
        name: "",
        rank: "",
        team: "",
        email: "",
        password: "",
        role_code: "",
      },
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "신규 등록" : "정보 변경";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  mounted() {
    this.arr_item = [];
    this.getUserList();
  },

  methods: {
    getUserList() {
      const vm = this;
      axios
        .post("http://localhost:8090/api/user/list", {
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
        .post("http://localhost:8090/api/user/delete", edit_info, axiosConfig)
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

<style lang="scss"></style>
