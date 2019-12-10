// YOUR CODE HERE!
// Make sure you have a column for date/time, city, state, country, shape, and comment

// let sightDateTime = data.map(sight => sight.datetime);
// let sightCity = data.map(sight => sight.city);
// let sightState = data.map(sight => sight.state);
// let sightCountry = data.map(sight => sight.country);
// let sightShape = data.map(sight => sight.shape);
// let sightComments = data.map(sight => sight.comments);

// console.log(sightCountry);
// console.log(sightShape);


// Variable Declaration
let tbody = d3.select("tbody");
// From data.js
var tableData = data;

// Function to build the table
function buildTable(data) {
    // Start By Clearing Existing Data
    tbody.html("");
    // Loop Through `data` 
    data.forEach((dataRow) => {
        // Append Table Row `tr` to the Table Body `tbody`
        let row = tbody.append("tr");
        // `Object.values` & `forEach` to Iterate Through Values
        Object.values(dataRow).forEach((val) => {
            // Append a Cell to the Row for Each Value
            let cell = row.append("td");
            cell.text(val);
        });
    })
}


// Event that Triggers a Function When the Button is Clicked
function handleClick() {
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check if a Date was Entered & Filter Data Using that Date;
    if (date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build the table with the filtered data
    buildTable(filterData);
}


// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);