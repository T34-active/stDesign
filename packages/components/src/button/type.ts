import { ExtractPropTypes } from "vue";
export interface ButtonProps {
  disabled?: boolean;
  type: string;
}

import UiButton from "./index.vue";

export type UiButtonProps = ExtractPropTypes<typeof UiButton>;
