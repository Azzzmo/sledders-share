$(function() {
    var clicks = 0;
    $('button').on('click', function() {
        clicks++;
        var percent = Math.min(Math.round(clicks / 3 * 100), 100);
        $('.percent').width(percent + '%');
        $('.number').text(percent + '%');
    });
    
    
    $('.facebook').on('click', function() 
	{
            window.open('https://store.steampowered.com/app/2486740/Sledders');  
    });

	
    $('.twitter').on('click', function() 
	{            
            window.open('https://store.steampowered.com/app/2486740/Sledders');
    });
    
	
	
    $('.play').on('click', function() {
			window.open('https://store.steampowered.com/app/2486740/Sledders');
    });
    
});