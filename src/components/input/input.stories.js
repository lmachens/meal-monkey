import "./input.css";
import inputEmpty from "./input-empty.html";
import inputEmail from "./input-email.html";
import inputPassword from "./input-password.html";
import inputNumber from "./input-number.html";

export default {
  title: "Components/Input",
  parameters: { layout: "centered" },
};

export const empty = () => inputEmpty;
export const email = () => inputEmail;
export const password = () => inputPassword;
export const number = () => inputNumber;
