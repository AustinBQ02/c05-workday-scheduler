// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  $(".time-block").each(function rowClass () {
    // get current hour from dayjs
    const currentHour = dayjs().hour();
    // get hour-id from current block and remove "hour-"
    const blockNum = +($(this).attr("id")).slice(5);

    // compare current hour to current block number and style appropriately
    if (currentHour === blockNum ) {
      $(this).attr("class", "row time-block present");
    } else if (currentHour < blockNum) {
      $(this).attr("class", "row time-block future");
    } else  {
      $(this).attr("class", "row time-block past");
    }
    


    console.log(currentHour);
    console.log(blockNum);


  }
  )
  

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // Display the current date in the header of the page.
    
    function displayDate() {
      const currentDayEl = $("#currentDay");
      const today = dayjs().format('dddd, MMMM D');
      currentDayEl.text(today);
    }
  
    // calls displayDate on page load, then every second
    displayDate();
    setInterval(displayDate, 1000);
});
