const themeBtn = document.getElementById("themeToggle");
const body = document.body;
const theme = localStorage.getItem("theme");
if (theme) {
  body.classList.replace("light", theme);
}
themeBtn.onclick = () => {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  }
};
