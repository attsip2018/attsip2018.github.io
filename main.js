$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show(1000);
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide(1000);
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide(1000);
    });
});