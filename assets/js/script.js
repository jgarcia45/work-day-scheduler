// Variable Definitions
var todayDate = $('#currentDay');
var currentTime = moment().hours(); // Gets the hour of the day

// Displays the Date in the Header
todayDate.text(moment().format('dddd, MMMM Do'));

// Save the time block
$('.saveBtn').on('click', function () {
    var timeofDay = $(this).siblings('.hour').text();
    var descriptionBlock = $(this).siblings('.description').val();

    localStorage.setItem(timeofDay, descriptionBlock);
});

// Refreshing the Page
var userRefresh = function () {
    $('.hour').each(function () {
        if ($(this).text() !== null) {
            $(this).siblings('.description').val(localStorage.getItem($(this).text()));
        }
    });
};

// Indicate whether it is in the past, present, or future
var auditTask = function () {

    $('.time-block').each(function () {
        // Grabs the ID from HTML and parse it into an integer and stores the value in the variable
        var timeBlock = parseInt($(this).attr('id'));

        // Compares the time to set the class attribute to the right color.
        if (timeBlock > currentTime) {
            $(this).addClass('future');
        } else if (timeBlock === currentTime) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    });
};

// Refreshes the Page every 30 Minutes
setInterval(function () {
    $('.hour').each(function () {
        auditTask();
    });
}, 1800000);

auditTask();
userRefresh();