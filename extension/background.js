// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'processPageContent') {
        fetch('http://localhost:3000/generate-resume', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pageContent: request.pageContent })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
    }
});
