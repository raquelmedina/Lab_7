
//Execute when DOM is ready
$(function() {

    //what to do when li is clicked
    $('li a').click(function(){
        // $(this)
        // .css('background-color','purple')
        // .html('CLick');
        $(this).toggleClass('pink-background');

     });
 });

