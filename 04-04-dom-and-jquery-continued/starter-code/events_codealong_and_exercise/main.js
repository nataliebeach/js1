var $listItem = $('#fav-list li');
var $thingList = $('#fav-list');

$(function() {
  var $button = $('#new-thing-button');
  $button.on('click', function(event) {
    event.preventDefault();
    MyApp.addToList($thingList);
  });
});

$thingList.on("mouseenter mouseleave", "li", function(event){
  if (event.type == "mouseenter"){
    $(this).removeClass("inactive")
    $(this).siblings().addClass("inactive")
  } else if (event.type == "mouseleave") {
    $(this).siblings().removeClass("inactive")
  } 
})

$listItem.append(" <a href ='#' class='markComplete'>Complete task</a> <a href='#' class='markDelete'>Delete task</a>")

var MyApp = {};

MyApp.addToList = function(list) {
  var $newLi = $('<li>');
  var $newItemText = $('#new-thing');
  $newLi.html($newItemText.val());
  $newItemText.val('');
  if ($newLi.html() !== '') {
    list.append($newLi);
    $newLi.append(" <a href ='#' class='markComplete'>Complete task</a> <a href='#' class='markDelete'>Delete task</a>")
  }
}
$thingList.on("click", ".markComplete",function(e){
  e.preventDefault()
  console.log("clicked")
  $(this).parent().addClass("complete");
})

$thingList.on("click", ".markDelete", function(e){
  e.preventDefault()
  console.log("delete")
  $(this).parent().hide();
})

$thingList.on("dblclick", "li", function(e){
  e.preventDefault()
  $(this).html("<input type='text' value = ' '>")
})