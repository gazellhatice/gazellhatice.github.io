data = [{
    "projectName":"Kuaförüm Elimde",
    "date": "(06/2022) <br>",
    "details": "   Kuaförleri arayıp randevu saati beklemek yerine anında telefondan nerede, hangi kuaförün boş olduğunu öğrenebileceğiz. <br>" +
                "-Bu sayede hem zamandan kazanıp hem de en iyi ve en yakın kuaförü kolaylıkla öğrenebileceğiz."
    
},


{
    "projectName":"     ",
    "date": "     ",
    "details": "     ",

},
{
    "projectName":"KİDSİ",
    "date": "(04/2022) <br>",
    "details": "   Çocuklar telefona girdiği anda onun ebeveyn olmadığını anlayıp gezintisini yönetebilecek yapay zeka tabanlı, akıllı kişisel asistan <br> " +
                "-KİDSİ Dijital Ebeveyn"
    
}]


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });

    //projects script
    for (let i = 0; i < data.length; i++) {
        const f = data[i];
        var tblRow = "<tr>" + "<td>" + f.projectName + "</td>" + 
                "<td>" + f.date + "</td>" + "<td>" + f.details + "</td></tr>" 
                $(tblRow).appendTo("#userdata tbody");
    }

});

// slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});

// typing animation script
var typed = new Typed(".typing", {
    strings: ["Software Engineer","Developer","Designer","Entrepreneur"],
    typeSpeed: 100,
    backSpeed:60,
    loop: true
});

