import "./number-picker.css";
import { createPortionPicker } from "./portion-picker";

export default {
  title: "Components/Number Picker",
  parameters: { layout: "centered" },
};

export const portionPicker = () => createPortionPicker();
