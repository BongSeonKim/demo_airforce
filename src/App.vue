<template>
  <v-app id="inspire">
    <navig @route="routeContent"></navig>
    <keep-alive>
      <component :is="routePath"> </component>
    </keep-alive>
    <!-- <router-view></router-view> -->
    <!-- <Contentlayout></Contentlayout> -->
    <div class="black"></div>
  </v-app>
</template>
<script>
import navig from "@/components/Navigation.vue";
//import Content from "@/views/Content.vue";
import Digitaltwin from "@/views/DigitalTwin.vue";
import IoT from "@/views/IoT.vue";
//import FireDetection from "@/views/FireDetection.vue";
import mqtt from "mqtt";

export default {
  name: "App",
  components: {
    navig: navig,
    //Content,
    Digitaltwin,
    IoT,
    //FireDetection,
    mqtt,
    //Contentlayout,
  },
  data() {
    return {
      routePath: Digitaltwin,

      //for mqtt
      connection: {
        host: "192.168.0.48",
        port: 8000,
        endpoint: "",
        clean: true, // Reserved session
        connectTimeout: 4000, // Time out
        reconnectPeriod: 4000, // Reconnection interval

        // Certification Information
        clientId: "mqttjs_rozeta",
        username: "test_user3",
        password: "rozeta5308!",
      },
      subscription: {
        topic: "iotdata",
        qos: 0,
      },
      publish: {
        topic: "dashboard",
        qos: 0,
        payload: '{ "msg": "Hello, I am browser." }',
      },
      receiveNews: "",
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 },
      ],
      client: {
        connected: false,
      },
      subscribeSuccess: false,
    };
  },
  methods: {
    routeContent(key) {
      if (key === "main") {
        this.routePath = Digitaltwin;
      } else if (key === "dt") {
        this.routePath = Digitaltwin;
      } else if (key === "iot") {
        this.routePath = IoT;
        // } else if (key === "fd") {
        //   this.routePath = FireDetection;
      }
    },
    createConnection() {
      const { host, port, endpoint, ...options } = this.connection;
      const connectUrl = `ws://${host}:${port}${endpoint}`;
      try {
        this.client = mqtt.connect(connectUrl, options);
      } catch (error) {
        console.log("mqtt.connect error", error);
      }

      this.client.on("connect", () => {
        console.log("Connection succeeded!");
        this.client.connected = true;
        if (this.subscribeSuccess === false) {
          this.oSubscribe();
        }
      });
      this.client.on("error", (error) => {
        console.log("Connection failed", error);
      });
      this.client.on("message", (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message);
        console.log(`Received message ${message} from topic ${topic}`);
        //alert(`Received message ${message} from topic ${topic}`);
      });
    },
    oSubscribe() {
      const { topic, qos } = this.subscription;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        console.log("Subscribe to topics res", res);
      });
    },
    doUnSubscribe() {
      const { topic } = this.subscription;
      this.client.unsubscribe(topic, (error) => {
        if (error) {
          console.log("Unsubscribe error", error);
        }
      });
    },
    doPublish() {
      const { topic, qos, payload } = this.publication;
      this.client.publish(topic, payload, qos, (error) => {
        if (error) {
          console.log("Publish error", error);
        }
      });
    },
    destroyConnection() {
      if (this.client.connected) {
        try {
          this.client.end();
          this.client = {
            connected: false,
          };
          console.log("Successfully disconnected!");
        } catch (error) {
          console.log("Disconnect failed", error.toString());
        }
      }
    },
  },
  mounted() {
    //alert("start Connecting to MQTT Server");
    // if (this.client.connected === false) {
    //   this.createConnection();
    // }
  },
};
</script>

<style></style>
