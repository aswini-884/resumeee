function toggleProjects() {
  const section = document.getElementById("projects");
  section.style.display =
    section.style.display === "none" ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects").style.display = "block"; // or "none" by default
});
