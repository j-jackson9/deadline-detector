chrome.contextMenus.create({
    id: "extract-deadline",/*unique id for the menu item*/
    title: "Extract Deadline",/*title of the menu item*/
    contexts:["selection"], /*contextType*/
});

console.log("Background script loaded");