document.getElementById("miBtnCv").addEventListener("click", function () {
  window.open("curriculum.pdf", "_blank");
});
document.getElementById("miBtnLn").addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/doris-condori-limachi/", "_blank");
});
document.getElementById("btnDemo").addEventListener("click", function () {
  window.open("https://vanile-web.fixa.pe/", "_blank");
});
document.getElementById("btnDemo2").addEventListener("click", function () {
  window.open("https://doris-product-list.netlify.app/", "_blank");
});
document.getElementById("btnDemo3").addEventListener("click", function () {
  window.open("https://hemolab.pe/", "_blank");
});
document.getElementById("year").textContent = new Date().getFullYear();
