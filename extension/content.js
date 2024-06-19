chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'generateResume') {
        const pageContent = document.body.innerText;
        chrome.runtime.sendMessage({ action: 'processPageContent', pageContent });
    }
});
