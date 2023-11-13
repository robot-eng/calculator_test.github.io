function updateBatteryStatus() {
    const batteryStatus = document.getElementById("status");
    const batteryLevel = document.getElementById("level");
    const batteryIndicator = document.getElementById("battery-indicator");

    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            const percentage = (battery.level * 100).toFixed(2);
            batteryLevel.textContent = percentage + '%';

            // Update the battery status element based on charging state
            batteryStatus.textContent = battery.charging ? 'Yes' : 'No';

            // Update the battery indicator based on the battery level
            batteryIndicator.style.width = percentage + '%';
        });
    } else {
        batteryStatus.innerHTML = "Battery status not supported.";
    }
}

updateBatteryStatus();
setInterval(updateBatteryStatus, 5000);
