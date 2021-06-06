// var input = document.querySelector("#theInput");
// input.addEventListener("keyup", function(){ alert("Hello World!"); }) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.querySelector("#theButton").click();
//   }
// };
var input = document.querySelector("#theInput");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#theButton").click();
  }
});
