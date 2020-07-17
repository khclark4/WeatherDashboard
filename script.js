
$.ajax({
    url:"http://api.openweathermap.org/data/2.5/weather?q=Phoenix&appid=62f831e5b6dcadd1f786d6d211a4abc3&units=imperial",
    method: "GET",
    dataType: "json" 
}).then(function(response){
    console.log(response);
})

$.ajax({
    url:"http://api.openweathermap.org/data/2.5/uvi?appid=62f831e5b6dcadd1f786d6d211a4abc3&lat={lat}&lon={lon}",
    method: "GET",
    dataType: "json" 
}).then(function(response){
    console.log(response);
})

$.ajax({
    url:"api.openweathermap.org/data/2.5/forecast?q={city name}&appid=62f831e5b6dcadd1f786d6d211a4abc3",
    method: "GET",
    dataType: "json" 
}).then(function(response){
    console.log(response);
})