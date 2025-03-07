let intervalId;

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

function setupIframe() {
    const urlInput = document.getElementById("urlInput").value.trim();
    const timeInput = parseInt(document.getElementById("timeInput").value.trim(), 10);
    const iframe = document.getElementById("iframeView");
    
    if (!isValidUrl(urlInput)) {
        alert("Please enter a valid URL.");
        return;
    }
    
    if (isNaN(timeInput) || timeInput <= 0) {
        alert("Please enter a valid time in seconds.");
        return;
    }
    
    iframe.src = urlInput;
    
    if (intervalId) {
        clearInterval(intervalId);
    }
    
    intervalId = setInterval(() => {
        iframe.src = urlInput;
    }, timeInput * 1000);
}
