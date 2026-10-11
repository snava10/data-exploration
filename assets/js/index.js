function setPublishedDate(fixedDate) {
  document.getElementById("current-date").textContent =
    fixedDate.toLocaleDateString();
}
