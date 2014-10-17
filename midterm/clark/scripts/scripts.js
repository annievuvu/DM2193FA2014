// 
// Fetch all things with the .item
// Assign a Click event to the items

$('.item').on('mouseenter', function(){

    var $item = $(this);

    $item.parent().animate({
    	'padding': '20px',
    }, 'slow')

    // alert('some text');

    // "Give me the thing I just clicked"
    // $(this)

    // console.log($(this).text());
    console.log('MOUSE ENTER', $.trim($item.text()));

    // Get the Text contents out of the DOM element
    // $item.text();

    // Get the HTML contents out of the DOM element
    // $item.html();

}).on('mouseleave', function(){

    console.log('MOUSE LEAVE', $.trim($(this).text()));
    var $item = $(this);
    $item.parent().animate({
    	'padding': '10px',
    }, 'slow')

}).on('click', function(){

    var $item = $(this);

    // $item.addClass('collapse');
    // $item.removeClass('collapse');
    $item.toggleClass('collapse');

});
// jQuery best practice
// Always assign $(this) to a variable
// "Caching"

// mousedown
// mouseup 
// mouseenter
// mouseleave

// dragstart
// dragstop


//$(window).on('mousemove', function(){
	//var container_html = $('#container_1').html();
	//$('body').prepend(container_html);
//});




