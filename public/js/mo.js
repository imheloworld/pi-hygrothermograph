$(function(){

 var chart = new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'container',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { datatime: '2016-01-01 00:00:00', temperature: 20, humidity:23 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'datatime',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['temperature','humidity'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['气温','湿度']
  });
  //setTimeout()函数只运行一次
  // setTimeout(
  //   function(){
  //     getData();
  //   },200);

//setInterval函数会定时运行
  setInterval(function(){
    getData();
  },3000);
  function getData(){
    $.ajax({
      type: "GET",
      dataType: 'json',
      //get the data from sqllite
      url:'./dbservice/data'
      //url: "./morris/data" // This is the URL to the API
      //data: { year: 7 } // Passing a parameter to the API to specify number of days
    })
    .done(function( data ) {
      // console.log(data,"this is the data")
      // When the response to the AJAX request comes back render the chart with new data
      chart.setData(data);
    })
    .fail(function() {
      // If there is no communication between the server, show an error
      alert( "error occured" );
    });
  }
});


// $(function() {

//   // Create a Bar Chart with Morris
//   var chart = Morris.Line({
//     // ID of the element in which to draw the chart.
//     element: 'container',
//     data: [0], // Set initial data (ideally you would provide an array of default data)
//     xkey: 'year', // Set the key for X-axis
//     ykeys: ['value'], // Set the key for Y-axis
//     labels: ['Value'] // Set the label when bar is rolled over
//   });

//   // Fire off an AJAX request to load the data
//   $.ajax({
//       type: "GET",
//       dataType: 'json',
//       url: "./morris/data" // This is the URL to the API
//       //data: { year: 7 } // Passing a parameter to the API to specify number of days
//     })
//     .done(function( data ) {
//       console.log(data,"this is the data")
//       // When the response to the AJAX request comes back render the chart with new data
//       chart.setData(data);
//     })
//     .fail(function() {
//       // If there is no communication between the server, show an error
//       alert( "error occured" );
//     });
// });