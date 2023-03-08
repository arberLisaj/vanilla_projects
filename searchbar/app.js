const inputBox = document.querySelector("#inputBox");
const elements = document.querySelectorAll(".searchTarget");

inputBox.addEventListener("input", () => {
  var lowerCaseInput = inputBox.value.toLowerCase(  );
  for (let i = 0; i < elements.length; i++) {
    if (!elements[i].innerHTML.toLowerCase().includes(lowerCaseInput)) {
      elements[i].style.display = "none";
    } else {
      elements[i].style.display = "block";
    }
  }
});
