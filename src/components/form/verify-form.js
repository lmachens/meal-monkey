import { createElement } from "../../utils/createElement";

function createOTPInputElement() {
  const input = createElement("input", {
    className: "input",
    placeholder: "*",
    type: "password",
  });
  return input;
}

function createPasswordContainerElement() {
  const otpOne = createOTPInputElement();
  const otpTwo = createOTPInputElement();
  const otpThree = createOTPInputElement();
  const otpFour = createOTPInputElement();
  const passwordContainer = createElement("div", {
    className: "form__otp",
    children: [otpOne, otpTwo, otpThree, otpFour],
  });

  return passwordContainer;
}

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  const text = document.createElement("p");
  text.innerText =
    "Please check your mobile number 071*****12 continue to reset your password";

  const passwordContainer = createPasswordContainerElement();

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn";

  const hint = document.createElement("p");
  hint.innerText = "Didn't Receive?";
  hint.className = "form__hint";

  const resendLink = document.createElement("a");
  resendLink.innerText = "Click Here";
  resendLink.href = "#";

  hint.append(resendLink);

  form.append(title, text, passwordContainer, button, hint);
  return form;
}
