document.querySelectorAll(".show-modal").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("hidden-modal").classList.remove("hidden");
    document.getElementById("overlay-hidden").classList.remove("hidden");
  });
});

// document.querySelectorAll(".close-modal").forEach((button) => {
//   button.addEventListener("click", () => {
//     document.getElementById("hidden-modal").classList.add("hidden");
//     document.getElementById("overlay-hidden").classList.add("hidden");

//     window.addEventListener("click", () => {
//         document.getElementById("hidden-modal").classList.add("hidden");
//     });
//   });
// });

const closeModal = () => {
  document.getElementById("hidden-modal").classList.add("hidden");
  document.getElementById("overlay-hidden").classList.add("hidden");
};

document
  .querySelectorAll(".close-modal, #overlay-hidden")
  .forEach((element) => element.addEventListener("click", closeModal));

document
  .getElementById("hidden-modal")
  .addEventListener("click", (event) => event.stopPropagation());

document.addEventListener(
  "keydown",
  (event) => event.key === "Escape" && closeModal()
);
