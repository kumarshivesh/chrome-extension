// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    // Inject content script into the updated tab
    chrome.tabs.executeScript(tabId, { file: 'scrpit.js' });
  }
});