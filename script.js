const emoteInput = document.getElementById("emote-input");
const badgeInput = document.getElementById("badge-input");
const emotes = Array.from(document.getElementsByClassName("emote"));
const badge = document.getElementById("badge");

const imageMimeType = /image\/.*/;

emoteInput.addEventListener("change", (e) => {
  const reader = new FileReader();
  const file = e.target.files[0];

  reader.addEventListener("load", () => {
    if (file.type.match(imageMimeType)) {
      emotes.forEach((el) => {
        el.src = reader.result;
        el.classList.add("visible");
      });
    }
  });

  reader.readAsDataURL(file);
});

badgeInput.addEventListener("change", (e) => {
  const reader = new FileReader();
  const file = e.target.files[0];

  reader.addEventListener("load", () => {
    if (file.type.match(imageMimeType)) {
      badge.src = reader.result;
    }
  });

  reader.readAsDataURL(file);
});
