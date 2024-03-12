import type { App } from "vue";
import UiButton from "./ui-button/UiButton.vue";
import UiTooltip from "./ui-tooltip/UiTooltip.vue";
import UiNotes from "./ui-nodes/UiNodes.vue";
import "./style/index.less";

export default {
  install(app: App) {
    app.component("UiButton", UiButton);
    app.component("UiTooltip", UiTooltip);
    app.component("UiNotes", UiNotes);
  },
};

export { UiButton, UiTooltip, UiNotes };
