//display deadline function
chrome.storage.local.get(["deadline"]).then((result) => {
    console.log(result.deadline);
    let popUp = document.querySelector(".content .deadline-date");
    popUp.textContent = result.deadline;
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

//add to calendar function
const button = document.querySelector(".add-to-calendar");

button.addEventListener("click", () => {
  console.log("clicked");
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 1);
  
  const start =
    startDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const end =
    endDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";


  const title = "My Event";
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}`;

  chrome.tabs.create({ url });
});

