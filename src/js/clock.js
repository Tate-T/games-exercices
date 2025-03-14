function updateClock() {
  const timezone = document.getElementById("timezone").value;
  const options = {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formatter = new Intl.DateTimeFormat("uk-UA", options);
  document.getElementById("clock").textContent = formatter.format(new Date());
}

function setHeight() {
  var selectElement = document.getElementById("timezone");
  selectElement.style.height = "320px";
}

setInterval(updateClock, 1000);
updateClock();
