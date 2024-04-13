import browser from 'webextension-polyfill';
import store, { initializeWrappedStore } from '../app/store';

initializeWrappedStore();

store.subscribe(() => {
  // access store state
  // const state = store.getState();
  // console.log('state', state);
});

// show welcome page on new install
browser.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === 'install') {
    //show the welcome page
    const url = browser.runtime.getURL('welcome/welcome.html');
    await browser.tabs.create({ url });
  }
});

let previousUrl: string | null = null;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab && changeInfo.status === 'complete' && tab.url) {
    // Check if the URL has changed from the previous one
    if (tab.url !== previousUrl) {
      previousUrl = tab.url; // Update the previous URL

      const regex = /^https:\/\/github\.com\/.*\/pull\/.*\/files$/;
      if (regex.test(tab.url)) {
        console.log(`updated: ${tab.url}`);
        // Reload the tab
        chrome.tabs.reload(tabId);
      }
    }
  }
});
