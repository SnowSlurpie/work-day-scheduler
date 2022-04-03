var now = moment().format("MMMM DD, YYYY");
var time = moment().hours();
console.log(time);
$('#currentDay').text(now);

//save tasks to local storage
$(".saveBtn").on("click", function () {
    var task = $(this).siblings(".task").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, task);
})
//display each task depending oh hour
$("#9 .task").val(localStorage.getItem("9"));
$("#10 .task").val(localStorage.getItem("10"));
$("#11 .task").val(localStorage.getItem("11"));
$("#12 .task").val(localStorage.getItem("12"));
$("#13 .task").val(localStorage.getItem("13"));
$("#14 .task").val(localStorage.getItem("14"));
$("#15 .task").val(localStorage.getItem("15"));
$("#16 .task").val(localStorage.getItem("16"));
$("#17 .task").val(localStorage.getItem("17"));