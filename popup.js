chrome.storage.local.get(["deadline"]).then((result) => {
    console.log(result.deadline);
    let popUp = document.querySelector(".content p");
    popUp.textContent = "Deadline: " + result.deadline;
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


