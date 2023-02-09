// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  
  // Add a listener for click events on the save button. 
  $(".saveBtn").on("click", function (event) {
    const targetParentID = $(this).parent().attr("id");
    console.log(`Save button was pressed at ${targetParentID}`)
  });


  // Update the css class of each hour row based on current time
  $(".time-block").each(function rowClass() {
    // get current hour from dayjs
    const currentHour = dayjs().hour();
    // get hour-id from current block and remove "hour-"
    const blockNum = +$(this).attr("id").slice(5);

    // compare current hour to current block number and style appropriately
    if (currentHour === blockNum) {
      $(this).attr("class", "row time-block present");
    } else if (currentHour < blockNum) {
      $(this).attr("class", "row time-block future");
    } else {
      $(this).attr("class", "row time-block past");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Display the current date in the header of the page.
  function displayDate() {
    const currentDayEl = $("#currentDay");
    const today = dayjs().format("dddd, MMMM D");
    currentDayEl.text(today);
  }

  displayDate();
  setInterval(displayDate, 1000);
});
