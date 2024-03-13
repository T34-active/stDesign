import type { App } from "vue";
import stButton from "./button/index.vue";
import stNotes from "./nodes/index.vue";
import "../assets/less/index.css";
export default {
  install(app: App) {
    app.component("StButton", stButton);
    app.component("StNotes", stNotes);
  },
};

export { stButton, stNotes };
