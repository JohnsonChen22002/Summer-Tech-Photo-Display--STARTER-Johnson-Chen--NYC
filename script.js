var image_array = [
'https://tinyurl.com/38s2m6v7','https://tinyurl.com/ywd6bxrd','https://tinyurl.com/583hmy8d','https://tinyurl.com/6nhz6rpn','https://tinyurl.com/5dj859vs','https://tinyurl.com/entbu9xr','https://tinyurl.com/ywvj5sp6','https://tinyurl.com/ev33sd39','https://tinyurl.com/ew62ewb7','https://tinyurl.com/yb5kc5wc','https://tinyurl.com/9ed4a9hn','https://tinyurl.com/56etha7w','https://tinyurl.com/yppxj7vy','https://tinyurl.com/kb8xwxhe','https://tinyurl.com/xmejsz6b','https://tinyurl.com/45cbajf6','https://tinyurl.com/ucdhwpc8','https://tinyurl.com/h2aa39xe','https://tinyurl.com/4et66at5'
];

var caption_array = [
'Great game','Nice game','Fun game','Interesting game','Fantastic game','Remarkable game', 'Terrific game','Impressive game','Outstanding game','Wonderful game','Cool game','Magnificent game','Excellent game','Extraordinary game','Unbelievable game','Prodigious game','Astonishing game','Intense game','Splended game','Superb game'
];

var border_array = [
'10px solid red','10px solid blue','10px solid yellow','10px dashed red','10px dashed blue','10px dashed yellow','10px dotted red','10px dotted blue','10px dotted yellow','10px double red','10px double blue','10px double yellow','10px groove red','10px groove blue','10px groove yellow'
];

$(".no-like").click(function() {
	$(".like").show(); 
    $(".no-like").hide();
});

$(".like").click(function() {
	$(".like").hide(); 
	$(".no-like").show();
});

$(".caption-button").click(function() {
	var random_index = Math.floor(Math.random() * caption_array.length);
	var selected_caption = caption_array[random_index]; 
	$(".caption").text(selected_caption);
});

$(".image-button").click(function() {
    var random_index = Math.floor(Math.random() * image_array.length);
 	var selected_image = image_array[random_index];
  	$("#initial_image").attr("src", selected_image);
    $(".like").hide(); 
    $(".no-like").show();
    $(".caption").text("");
});

$(".border-button").click(function() {
	var random_index = Math.floor(Math.random() * border_array.length);
	var selected_border = border_array[random_index];
	$("#inner_container").css("border", selected_border);
});

$(".reset").click(function() {
   location.reload(); 
});