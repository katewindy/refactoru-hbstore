$(document).on('ready', function() {
  var productHTML = $('#products').html();
  console.log(productHTML);

  var template = Handlebars.compile(productHTML);
  console.log(template);

  for (var i = 0; i < productsData.productsList.length; i++){

	  var productOutput = template(productsData.productsList[i]);
	  console.log("i: ", i);
	  console.log('productOutput: ', productOutput);
	  $('#product-container').append(productOutput);
	} 

	var wishlistHTML = $('#wishlistitem').html();
	console.log(wishlistHTML);
	var wishTemplate = Handlebars.compile(wishlistHTML);

	$(document).on('click', '.add', function () {
		var title = $(this).siblings('h3').text();
		console.log(title);
		var addWish = {'title': title};
		var wishOutput = wishTemplate(addWish);
		console.log(wishOutput);
		$('#wishlist').append(wishOutput);
	});

	$(document).on('click', '.delete', function(){
		$(this).closest('.wishItem').remove();
	});
});