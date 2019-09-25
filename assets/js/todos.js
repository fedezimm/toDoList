// Check Off Specific Todos by clicking
$("ul").on("click","li", function(){
	$(this).toggleClass("done");
});

// Delete todos by clicking X button
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
		if($("li").text()===""){
			$("input[type='text']").css("display","block");
		}
	});
	event.stopPropagation();
});

//Adding a new todo to the list
$("input[type='text']").on("keypress",function(event){
	if(event.which===13){
		//grabbing the text that the user input
		var todoText = $(this).val();
		//adding that new todo to the ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+todoText+" </li>");
		//clearing the input to be ready for adding another todo
		$(this).val("");
	}
});

//Plus icon 
$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
})

