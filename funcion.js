(function () {
var checkBattery = document.querySelector("#check-battery"),
        batteryDisplay = document.querySelector("#battery-display");
    if (checkBattery && batteryDisplay) {
        checkBattery.onclick = function () {
            var battery = navigator.battery,
                batteryLevel = Math.round(battery.level * 100) + "%",
                charging = battery.charging,
                chargingTime = parseInt(battery.chargingTime / 60, 10),
                dischargingTime = parseInt(battery.dischargingTime / 60, 10),
                batteryInfo;
                

            batteryInfo = "<h4Tras comprobar la bateria></h4><strong>Carga:</strong> " + batteryLevel + "<br>";
            batteryInfo += "<strong>Cargando:</strong> " + charging + "<br>";
            batteryInfo += "<strong>Tiempo de carga:</strong> " + chargingTime + "<br>";
            batteryInfo += "<strong>Tiempo de descarga:</strong> " + dischargingTime;

            batteryDisplay.innerHTML = batteryInfo;
            batteryDisplay.style.display = "block";
        };
    }
}) ();