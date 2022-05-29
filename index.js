function srcollHeader() {
  document
    .getElementById("header")
    .classList.toggle("scroll-header", window.scrollY > 0);
}
window.onscroll = srcollHeader;

function playvideo () {
  document.getElementById("small-dialog").style.display="block";
  document.getElementById("icon").style.display="none";
}

function projectOpen(e) {
  document.getElementById("project-one").classList.remove("active");
  document.getElementById("project-two").classList.remove("active");
  document.getElementById("project-three").classList.remove("active");
 
  e.target.classList.toggle("active");

  var activeTab = e.target.getAttribute("data-target");
  document.getElementById(activeTab).classList.toggle("active");
}  