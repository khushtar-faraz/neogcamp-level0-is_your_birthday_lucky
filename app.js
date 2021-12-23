const dob = document.querySelector("#dateOfBirth");
const luckyNumber = document.querySelector("#luckyNumber");
const checkBtn = document.querySelector("#checkBtn");
const outputDiv = document.querySelector("#output");
checkBtn.addEventListener("click", () => {
    // console.log(dob.value);
    isBirthdayLucky(dob.value, luckyNumber.value);
})

function isBirthdayLucky(dateOfBirth, LuckyNo) {
    let sumOfDate = sum(dateOfBirth);
    let resultingOutput = compare(sumOfDate, LuckyNo);
    outputDiv.innerText = resultingOutput;
}

function sum(dateOfBirth) {
    dateOfBirth = dateOfBirth.replaceAll("-", "");
    let sum = 0;
    for (let element of dateOfBirth) {
        sum = sum + Number(element);
    }
    return sum;
}

function compare(sumOfDate, LuckyNo) {
    if (sumOfDate % LuckyNo === 0) {
        return "Yay! Your birthday is lucky";
    } else {
        return "Sorry! Your birthday is not so lucky";
    }
}