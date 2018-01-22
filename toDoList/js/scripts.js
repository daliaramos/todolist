function Tasks(items) {
  this.items = items
}
$(document).ready(function() {
  $("form#taskInput").submit(function(event) {
    event.preventDefault();
    //var string = "input#tasks"
    //var result = str.strike();
    var task = $("input#tasks").val();


  

    $("ul#task").append("<li><span class= 'task'>" + task + "</span></li>")

    $("input#tasks").val("");
    $(".task").click(function() {
      $("#show-contact").show();



    });
    //$(".btn").click(function(){
      //  $("#taskInput").append("<b>" + task + "</b>");
    });

  });
//});
