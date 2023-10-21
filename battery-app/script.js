function updateBatteryStatus() {
    const batteryStatus = document.getElementById("status");
    const batteryLevel = document.getElementById("level");
    const charging = document.getElementById("charging");

    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            batteryLevel.textContent = (battery.level * 100).toFixed(2) + '%';
            batteryStatus.textContent = battery.charging ? 'Yes' : 'No';
        });
    } else {
        batteryStatus.innerHTML = "Battery status not supported.";
    }
}

updateBatteryStatus(); // Call the function when the page loads

// Update the battery status every 5 seconds
setInterval(updateBatteryStatus, 5000);
