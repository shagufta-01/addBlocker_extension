// This function is called when the content script is injected into a page.
function onInjected() {
    // Get the element that contains the ads.
    var ad_element = document.querySelector(".ad");
  
    // If the element exists, remove it from the page.
    if (ad_element) {
      ad_element.remove();
    }
  }
  
  // This function is called when the page is loaded.
  function onLoad() {
    // Inject the content script into all pages.
    chrome.tabs.executeScript(null, {
      file: "contentscript.js"
    });
  }
  
  // Register the event listeners.
  chrome.webNavigation.onCommitted.addListener(onInjected);
  chrome.webNavigation.onCommitted.addListener(onLoad);