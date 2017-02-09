//quand le document est prêt (à la fin du chargement de la page)
$(document).ready(function () {
    centrerButton();
    centrerFormulaire();
    $("body").css("visibility", "visible");
});

$(window).resize(function () {
    centrerButton();
});

//quand on clique sur le bouton
$("button").click(function () {
    $(this).fadeOut(600, function () {
        $("#selection").fadeIn(600);
    });
});

/**
 * fontion qui centre le bouton
 * @returns {undefined}
 */

function centrerButton() {
    //on récupère les dimensions de la fenêtre
    var w = $(window).width();
    var h = $(window).height();
    //on récupère les dimensions du bouton
    var buttonw = $("button").width();
    var buttonh = $("button").height();
    //on calcule la position du bouton afin qu'il soit au centre
    var top = (h - $("button").height()) / 2;
    var left = (w - $("button").width()) / 2;
    //on affecte les nouvelles positions calculées
    $("button").css({
        "left": left + "px",
        "top": top + "px"
    });
}
    
function centrerFormulaire() {
    //on récupère les dimensions de la fenêtre
    var w = $(window).width();
    var h = $(window).height();
    //on récupère les dimensions du bouton
    var buttonw = $("#selection").width();
    var buttonh = $("#selection").height();
    //on calcule la position du bouton afin qu'il soit au centre
    var top = (h - $("#selection").height()) / 2;
    var left = (w - $("#selection").width()) / 2;
    //on affecte les nouvelles positions calculées
    $("#selection").css({
        "left": left + "px",
        "top": top + "px"
    });
}