const body = document.querySelector("body");
const sectionClaim = document.querySelector(".section__claim");
const icon1 = document.querySelector("#first-icon");

const bodyRect = document.body.getBoundingClientRect();
const sectionRect = sectionClaim.getBoundingClientRect();
const offset = (bodyRect.top - sectionRect.top) * -1;
icon1.style.display = "none";

const icon1Animation = () => {
  const scrollPosition = window.scrollY;
  let topPosition = (offset - scrollPosition) / 10;
  /* const sectionPosition = sectionClaim.position; */

  /* icon1.style.display : none; */
  /* console.log({ scrollPosition });
  console.log({ offset }); */
  if (topPosition < -10) {
    topPosition = -10;
    console.log(`${topPosition}vh`);
    return;
  } else if (topPosition > 10) {
    topPosition = 10;
    console.log(`${topPosition}vh`);
    return;
  } else if (scrollPosition > offset - 300) {
    icon1.style.display = "block";
    topPosition = scrollPosition - offset;
    console.log(`${topPosition}vh`);
    return;
  } else {
    icon1.style.display = "none";
  }

  /* icon1.style.display : block; */

  /* if (scrollPosition > 700) {
    return (topPosition = -10);
  } */
  /* topPosition = 570 - scrollPosition; */

  /* console.log(topPosition); */
  icon1.style.inset = `${topPosition}vh auto auto 10vw`;
};

window.addEventListener("scroll", icon1Animation);
icon1Animation();
