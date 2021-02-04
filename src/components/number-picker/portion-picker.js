import { createElement } from "../../utils/createElement";

export function createPortionPicker() {
  const subtractButton = createElement("button", {
    innerText: "-",
    onclick: function () {
      if (portionInput.value >= 1) {
        portionInput.value = Number(portionInput.value) - 1;
      }
      //portionInput.value = Math.max(0, +portionInput.value - 1);
    },
  });

  const portionInput = createElement("input", {
    type: "number",
    value: "1",
    min: 0,
  });

  const addButton = createElement("button", {
    innerText: "+",
    onclick: function () {
      portionInput.value = Number(portionInput.value) + 1;
    },
  });

  return createElement("div", {
    className: "portionPicker",
    children: [
      createElement("p", {
        innerText: "Number of Portions",
      }),
      subtractButton,
      portionInput,
      addButton,
    ],
  });
}

/*
<div>
<p>Number of Portions</p>
<button></button>
<input></input>
<button></button>
</div>
*/
