chrome.contextMenus.create({
    id: "extract-deadline",/*unique id for the menu item*/
    title: "Extract Deadline",/*title of the menu item*/
    contexts:["selection"], /*contextType*/
});

console.log("Background script loaded");

//Regex patterns for date and time extraction

let reMonths = /\b(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\b/gi;

let reDays = /\b(Monday|Mon|Tuesday|Tue|Wednesday|Wed|Thursday|Thu|Friday|Fri|Saturday|Sat|Sunday|Sun)\b/gi

let reDaysNum = /\b(1st|2nd|3rd|4th|5th|6th|7th|8th|9th|10th|11th|12th|13th|14th|15th|16th|17th|18th|19th|20th|21st|22nd|23rd|24th|25th|26th|27th|28th|29th|30st|31st)\b/

let reYears = /\b(2026|2027|2028|2029|2030)\b/g;

let reTimes = /\b(1:00 AM|2:00 AM|3:00 AM|4:00 AM|5:00 AM|6:00 AM|7:00 AM|8:00 AM|9:00 AM|10:00 AM|11:00 AM|12:00 PM|1:00 PM|2:00 PM|3:00 PM|4:00 PM|5:00 PM|6:00 PM|7:00 PM|8:00 PM|9:00 PM|10:00 PM|11:00 PM|12:00 AM)\b/gi;


