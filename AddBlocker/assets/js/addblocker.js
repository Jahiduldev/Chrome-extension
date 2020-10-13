const defaultFilters = [
	"*://*.w3schools.com/*",
	"*://*.facebook.com/*",
	"*://*.youtube.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)