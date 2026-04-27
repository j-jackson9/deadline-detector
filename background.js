
chrome.contextMenus.onClicked.addListener((info, tab) => {
    let selectedText = info.selectionText;

    console.log("Deadline: " + selectedText);

    chrome.storage.local.set({deadline: selectedText}).then(() => {
        console.log("Deadline: " + selectedText);
    })
});

chrome.contextMenus.create({
    id: "extract-deadline",/*unique id for the menu item*/
    title: "Extract Deadline",/*title of the menu item*/
    contexts:["selection"], /*contextType*/
});

