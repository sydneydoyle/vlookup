import $ from "https://cdn.skypack.dev/jquery@3.6.0";
import * as bootstrap from "https://cdn.skypack.dev/bootstrap@5.1.3";
import fontAwesome from "https://cdn.skypack.dev/font-awesome@4.7.0";
import bootstrapjs from "https://cdn.skypack.dev/bootstrapjs@2.0.0";

function init() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", init, false);
