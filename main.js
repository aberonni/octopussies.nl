const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

document.addEventListener("DOMContentLoaded", function (e) {
    let blinking = false;

    function tick() {
        let currTime = new Date();
        let currMin;
        let currHour;
        blinking = !blinking;
        let timeSeparator = blinking ? ":" : " ";

        //leading zeroes
        if (String(currTime.getMinutes()).length == 1) {
            currMin = "0" + String(currTime.getMinutes());
        } else {
            currMin = String(currTime.getMinutes());
        }

        if (String(currTime.getHours()).length == 1) {
            currHour = "0" + String(currTime.getHours());
        } else {
            currHour = String(currTime.getHours());
        }

        document.getElementById("date").innerHTML =
            days[currTime.getDay()] +
            " " +
            months[currTime.getMonth()] +
            " " +
            currTime.getDate() +
            " " +
            currHour +
            timeSeparator +
            currMin;
    }

    tick();
    setInterval(tick, 650);

});
