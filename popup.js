chrome.storage.local.get(["deadline"]).then((result) => {
    console.log(result.deadline);
    let popUp = document.querySelector(".content .deadline-date");
    popUp.textContent = result.deadline;
});


let copyButton = document.querySelector(".copy").addEventListener("click", () => {
    chrome.storage.local.get(["deadline"]).then((result) => {
        navigator.clipboard.writeText(result.deadline);
        setTimeout(() => {
            let copied = document.querySelector(".copy");
            copied.textContent = "Copied";
        }, 400);
    });
});


