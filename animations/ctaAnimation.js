const parent = document.querySelector(".section__cta-carousel");
console.log(parent);

const carouselData = [
  "hurricane",
  "earthquake",
  "freeze",
  "extreme-heat",
  "wildfire",
];

const svg = (value) => {
  const svg = document.createElement("svg");
  svg.setAttribute("width", "40");
  svg.setAttribute("height", "40");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const polygon = document.createElement("polygon");
  polygon.setAttribute("points", "50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5");
  polygon.setAttribute("fill", "none");
  polygon.setAttribute("stroke", "hsla(0,  0%, 0%, .1)");
  polygon.setAttribute("stroke-width", "3");

  svg.appendChild(polygon);

  const icon = document.createElementNS("http://www.w3.org/2000/svg", "image");
  icon.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "href",
    `./assets/icons/${value}.png`
  );
  icon.setAttribute("x", "0");
  icon.setAttribute("y", "0");
  icon.setAttribute("width", "40");
  icon.setAttribute("height", "40");

  svg.appendChild(icon);

  return svg;
};

export const carouselItem = (value) => {
  const carouselItem = document.createElement("div");
  carouselItem.className = "section__cta-carousel-single";
  const iconContainer = document.createElement("div");
  iconContainer.appendChild(svg(value));
  const carouselItemName = document.createElement("p");
  carouselItemName.innerText = value.toUpperCase();
  carouselItem.appendChild(carouselItemName);
  return carouselItem;
};

const carousel = () => {
  const _carouselData = carouselData;
  const element = document.createElement("div");
  element.className = "section__cta-carousel";
  carouselData.forEach((item) => element.appendChild(carouselItem(item)));
};

export const ctaAnimation = () => {};
