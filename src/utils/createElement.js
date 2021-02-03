export function createElement(tagName, props) {
  const element = document.createElement(tagName);
  const { children, ...other } = props;
  Object.assign(element, other);

  if (children) {
    element.append(...children);
  }
  /*
  props is a completely freely assignable name, it could also be named fische
  
  Object.assign(element, props) replaces this chunk of code:
  element.placeholder = placeholder;
  element.type = type;
  element.innerText = innerText;
  element.className = className;
  element.href = href;
  */

  return element;
}
