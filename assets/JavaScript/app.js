//Gradient Heading Animation
var colors = new Array(
    [69, 170, 242],
    [75, 123, 236],
    [43, 203, 186],
    [45, 152, 218],
    [56, 103, 214],
    [15, 185, 177]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {

    if ($ === undefined) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    $('.gradient').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });

    $('#gradientText').css({
        color: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
        color: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });

    //     -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}

setInterval(updateGradient, 5);

//Opening Page Down Arrow Scroll Effect

$("#sectionArrow").on('click', function () {
    $("#openingPage").slideUp(1200);
    $("#mainContent").fadeIn();
});

//Link Scroll Down Effects

$("#aboutMeLink").on('click', function () {
    $('html, body').animate({ scrollTop: $('#aboutMe').position().top }, 'slow');
});

$("#contactLink").on('click', function () {
    $('html, body').animate({ scrollTop: $('#contactMe').position().top }, 'slow');
});

$("#portfolioLink").on('click', function () {
    $('html, body').animate({ scrollTop: $('#portfolio').position().top }, 'slow');
});

// On Page Load Effect 
$( document ).ready(function() {
    $("#mainContent").css("display", "none");
});
