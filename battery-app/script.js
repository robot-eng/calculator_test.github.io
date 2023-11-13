function updateBatteryStatus() {
    const batteryStatus = document.getElementById("status");
    const batteryLevel = document.getElementById("level");
    const batteryFill = document.getElementById("battery-fill");

    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            const percentage = (battery.level * 100).toFixed(2);
            batteryLevel.textContent = percentage + '%';

            // Update the battery status element based on charging state
            batteryStatus.textContent = battery.charging ? 'Yes' : 'No';

            // Update the battery indicator based on the battery level
            batteryFill.style.width = percentage + '%';

            // Add or remove the class for color indication
            batteryFill.className = battery.level > 0 ? 'green' : 'gray';
        });
    } else {
        batteryStatus.innerHTML = "Battery status not supported.";
    }
}

updateBatteryStatus();
setInterval(updateBatteryStatus, 5000);
