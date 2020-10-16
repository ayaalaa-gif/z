$(function() {
    // windowSize = $( window ).width()

    // if(windowSize <= 567) {
    //     $("#phone-view").css("display","flex")
    // }
    
    // about popup
    $('.about').click(function() {
        $('#myModal').show();
    })
    $("img.close,.modal").click(function() {
        $('#myModal').hide();
    })
    $(".modal-content").click(function(e) {
        e.stopPropagation()
    })
    $(".pen-link2").click(function(e) {
        $("#pen-popup").css("display","block")
        $("#pen-popup iframe").css("display", "block")

        e.preventDefault();
    })
    $("#pen-popup .close").click(function() {
        $("#pen-popup").css("display","none")
        $("#pen-popup iframe").css("display", "none")
    })
    $(".med-link1,.pen-link2").click(function(e) {
        e.preventDefault()
        $(".p-popup").css("display","block")
    })
    $(".med-close").click(function() {
        $(this).parent().css("display","none")
    })
})
