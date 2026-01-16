chrome.storage.local.get(["deadline"]).then((result) => {
    console.log(result.deadline);
    let popUp = document.querySelector(".popup");
    popUp.textContent = "Deadline: " + result.deadline;
});

