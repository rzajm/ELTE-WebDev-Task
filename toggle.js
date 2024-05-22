function toggleStylesheet() {
  const lightStyle = document.getElementById("light-style");
  const darkStyle = document.getElementById("dark-style");

  if (lightStyle.disabled) {
    lightStyle.disabled = false;
    darkStyle.disabled = true;
  } else {
    lightStyle.disabled = true;
    darkStyle.disabled = false;
  }
}
