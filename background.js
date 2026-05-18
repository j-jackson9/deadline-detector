
chrome.contextMenus.onClicked.addListener((info, tab) => {
    let selectedText = info.selectionText;

    console.log("Deadline: " + selectedText);

    chrome.storage.local.set({deadline: selectedText}).then(() => {
        console.log("Deadline: " + selectedText);
    })
});

chrome.contextMenus.create({
    id: "extract-deadline",
    title: "Extract Deadline",
    contexts:["selection"], 
});

