$(function(){
	tabs('#tabs');
	


	
})
function tabs(parent){
	$(parent).prepend('<ul class="tabnav"></ul>');
	$(parent+' .tabcontent > div').each(function(index, value){
		if(index === 0){
			$(this).addClass('active');
		}
		console.log($(this).attr('id'));
     $(parent+' .tabnav').append('<li><a href="#'+$(this).attr('id')+'">'+$(this).data('nav')+'</a></li>');
		$(parent+' .tabnav > li > a').on('click',function(e){
		e.preventDefault();
		var selectTab = $(this).attr('href');
		console.log(selectTab);
		if($(selectTab).hasClass('active')){
			//do nothing
		} else{
			$(parent+' > .tabcontent > div').removeClass('active')
			$(selectTab).addClass('active');
		}
	})
	})

	}