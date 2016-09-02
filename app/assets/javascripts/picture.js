// Add your JavaScript here

$(function() {
  addFormEventHandler();
})

function addFormEventHandler() {
  $('.link').on('ajax:complete', function(e, request, status){
    $('#picture-' + request.responseJSON.id).html(request.responseJSON.content);
    $('.like-btn span#' + request.responseJSON.id).removeClass();
    $('.like-btn span#' + request.responseJSON.id).addClass(request.responseJSON.heart);
  })
}