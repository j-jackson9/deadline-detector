//countdown function
function countDown(string) {
    string = string
        .replace(/(st|nd|rd|th)/g, "")
        .replace(/\b(CDT|CST|EST|PST|GMT|UTC)\b/gi, "")
        .replace(/\b(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),?\b/gi, "")
        .replace(/\bat\b/gi, "")
        .replace(/\s+/g, " ")
        .trim();

    let countDownDate = new Date(string).getTime();
    let daysLeft = document.querySelector(".countdown span");

    if (isNaN(countDownDate)) {
        daysLeft.textContent = "Invalid Date";
        return;
    }
    console.log(document.querySelector(".countdown span"));
    let second = setInterval(function() {
        let today = new Date().getTime();
        let distance = countDownDate - today;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysLeft.textContent = "Due in: " + days + " days ";
        if (distance < 0) {
            clearInterval(second);
            daysLeft.textContent = 'PAST DUE'
            daysLeft.style.color = 'red';
            daysLeft.style.fontWeight = 'bold';
            return;
        };
    });
};


//display deadline function
chrome.storage.local.get(["deadline"]).then((result) => {
    console.log(result.deadline);
    let popUp = document.querySelector(".content .deadline-date");
    popUp.textContent = result.deadline;
    countDown(result.deadline);
});

//copy button function
let copyButton = document.querySelector(".copy").addEventListener("click", () => {
    chrome.storage.local.get(["deadline"]).then((result) => {
        navigator.clipboard.writeText(result.deadline);
        setTimeout(() => {
            let copied = document.querySelector(".copy");
            copied.textContent = "Copied";
        }, 400);
    });
});


