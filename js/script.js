$(document).ready(() => {
	let mod = $(".modal");
	$("#modal-open").click((e) => {
		e.preventDefault();
		mod.css("display","block");
	});
	$("#close").click((e) => {
		e.preventDefault();
		mod.css("display","none");	
	});
	$("#done").click((e)=>{
		e.preventDefault();
		mod.css("display","none");
	});
	$("i").click((e)=>{
		e.preventDefault();
		mod.css("display","none");
	});
	$(window).click((event) => {
		if(event.target.className == mod.attr("class"))
		{
			mod.css("display","none");
		}
	});

});