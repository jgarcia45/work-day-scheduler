// Variable Definitions
var todayDate = $('#currentDay');
var currentTime = moment().hour(); // Gets the hour of the day

// Displays the Date in the Header
todayDate.text(moment().format('dddd, MMMM Do'));

// Save the time block
$('.saveBtn').on('click', function () {

});

// Indicate whether it is in the past, present, or future
var auditTask = function () {

    $('.time-block').each(function () {
        // Grabs the ID from HTML and parse it into an integer and stores the value in the variable
        var timeBlock = parseInt($(this).attr('id'));

        // Compares the time to set the class attribute to the right color.
        if (timeBlock > currentTime) {
            console.log("Time: " + timeBlock);
            console.log("Current: " + currentTime);
            $(this).addClass('future');
        } else if (timeBlock === currentTime) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
};

// audits the time block every 30 minutes
setInterval(function () {
    auditTask();
}, 1800000);

auditTask();