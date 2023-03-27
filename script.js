// Display today's date at the top of the calendar
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Assign saveBtn click listener for user input and time stamp
$(".saveBtn").on("click", function () {
  // Get nearby values of the description in JQuery
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // Save text in local storage
  localStorage.setItem(time, text);
});

function colorCodeTimeblocks() {
  // Get current number of hours
  var currentHour = moment().hours();

  // Loop over time blocks
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Check if we've moved past this time
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

// Load saved data from LocalStorage - do this on page load
function renderTasks() {
  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var task = localStorage.getItem(id);

    if (task !== null) {
      $(this).children(".description").val(task);
    }
  });
}

function init() {
  colorCodeTimeblocks();

  // Call renderTasks here
  renderTasks();

  // Set up interval to check if we need to update the color coding
  setInterval(colorCodeTimeblocks, 1000 * 60 * 10);

  // Start the app by color coding the time blocks
  colorCodeTimeblocks();

  // Set up event listeners for the save buttons
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });
}

// Call init() function to start the app
init();




