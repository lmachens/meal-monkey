import "./input.css";
import inputEmpty from "./input-empty.html";
import inputEmail from "./input-email.html";

export default {
  title: "Components/Input",
  parameters: { layout: "centered" },
};

export const empty = () => inputEmpty;
export const email = () => inputEmail;
