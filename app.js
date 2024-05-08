let inputValue = (document.getElementById("date-input"))
inputValue.max = new Date().toISOString().split("T")[0];

function birthDayDetails() {
    let birthDate = new Date(inputValue.value);
    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();
    let today = new Date();
let result=document.getElementById("result");
    let dayTwo = today.getDate();
    let MonthTwo = today.getMonth() + 1;
    let yearTwo = today.getFullYear();

    let dayGap, monthGap, yearGap;
    yearGap = yearTwo - birthYear;

    if (MonthTwo >= birthMonth) {
        monthGap = MonthTwo - birthMonth;
    } else {
        yearGap--;
        monthGap = 12 + MonthTwo - birthMonth;
    }
    if (dayTwo >= birthDay) {
        dayGap = dayTwo - birthDay;
    } else {
        monthGap--;
        dayGap = getDaysInMonth(birthYear, birthMonth) + dayTwo - birthDay;
    }
    if (monthGap < 0) {
        monthGap = 11;
        yearGap--;
    }
result.innerHTML = `you are ${yearGap} Years, ${monthGap} Months and ${dayGap} Days`;
}
function getDaysInMonth(year,month) {
    return new Date(year,month,0).getDate();
}