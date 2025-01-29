/* import "./animations/animations.js"; */
const testParent = document.querySelector(".test-parent");

const testChild = () => {
  const element = document.createElement("div");
  element.className = "test-child";
  return element;
};

const line = (direction) => {
  const element = document.createElement("div");
  element.className = `test-${direction}-line`;

  return element;
};

Array.from({ length: 1000 }).forEach((_, i) => {
  testParent.appendChild(line("vertical"));
  testParent.appendChild(line("horizontal"));
});
