$(document).on('ready', function() {
  var productHTML = $('.product').html();

  var template = Handlebars.compile(productHTML);
});