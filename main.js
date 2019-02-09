$(document).ready(function () {



    /**
     * scroll to the section target on click
     */
    $('a[href*="#"]').on('click', function (e) {

        if ($(e.target.hash).length) {

            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 2000, 'linear');
            e.preventDefault();

        }

    });
   

    // toggle the nav bar button to show cross when active
    $("#nav-toggler").click(function () {
        $(".icon").toggleClass("close");
    });


    // show elements
    function scaleYOne(elem) {
        elem.css("transform", "scaleY(1)");
    }

    // hide elements
    function scaleYZero(elem) {
        elem.css("transform", "scaleY(0)");
    }


    /**
     * animation to show elements on scroll
     */
    function onScrollAmination(){

        // section number
        var numsArr = ['two', 'three', 'four', 'five', 'six'];

        for (var i = 0; i < numsArr.length; i++) {

            // detect the current section
            var offset = $('#section-' + numsArr[i]).offset();

            // show elements when the scroll position is on current section
            if (offset.top <= $(window).scrollTop() + window.innerHeight / 1.3) {
                $('.section-' + numsArr[i] + '-slide').each(function () {
                    scaleYOne($(this));
                });

                // reset the elements when the scroll position is above the target section
            } else {
                $('.section-' + numsArr[i] + '-slide').each(function () {
                    scaleYZero($(this));
                });
            }

        }
    }

    $(window).scroll(function () {
        onScrollAmination();
      
    });




});