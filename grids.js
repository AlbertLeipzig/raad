const parent = document.querySelector(".section__use-case-scenarios__grid");


const line = (direction) => {
  console.log(12341234);
  const element = document.createElement("div");
  element.className = `${direction}-line`;

  return element;
};

const gridMobile = () => {
  Array.from({ length: 1000 }).forEach((_, i) => {
    parent.appendChild(line("vertical"));
    parent.appendChild(line("horizontal"));
  });
};

const gridDesktop = () => {};

export const grid = {
  mobile: gridMobile,
  desktop: gridDesktop,
};
