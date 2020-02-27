//Gradient Heading Animation
var colors = new Array(
    [69, 170, 242],
    [75, 123, 236],
    [43, 203, 186],
    [45, 152, 218],
    [56, 103, 214],
    [15, 185, 177]);

var step = 0;
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

    // -webkit-background-clip: text;
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

$("#contactMeLink").on('click', function () {
    $('html, body').animate({ scrollTop: $('#contactMe').position().top }, 4500);
});

$("#skillsLink").on('click', function () {
    $('html, body').animate({ scrollTop: $('#skills').position().top }, 4000);
});

$("#portfolioLink").on('click', function () {
    $('html, body').animate({ scrollTop: $('#portfolio').position().top }, 2000);
});

$("#top-button").on("click", function () {
    $('html, body').animate({ scrollTop: $('#mainContent').offset().top }, 3000);
});

// Navigation Bar Scroll Effects

$("#footerAboutMeLink").on("click", function () {
    $('html, body').animate({ scrollTop: $('#mainContent').offset().top }, 4000);
});

$("#footerPortfolioLink").on("click", function () {
    $('html, body').animate({ scrollTop: $('#portfolio').offset().top }, 3000);
});

$("#footerSkillsLink").on("click", function () {
    $('html, body').animate({ scrollTop: $('#skills').position().top }, 2000);
});

// On Page Load Effect 
$( document ).ready(function() {
    $("#mainContent").css("display", "none");
    loadSkills();
});

// Skills progress bar Effect
function loadSkills() {
    /*for each progress bar in the skill section, 
    set the percent loaded to the data-percent attribute */
    $('.determinate').each(function() {
      $(this).width($(this).data('percent') + '%');
    });
  }
  

// Scroll Fade in effects using Intersection Observer API
const cards = document.querySelectorAll('.module');

ob = new IntersectionObserver(obCallback)
cards.forEach(card => {
    ob.observe(card);
});

function obCallback(card) {
    card.forEach(item => {
        const cardItem = item.target;
        if (item.intersectionRatio > 0) {
            cardItem.classList.remove('hide-card');
            cardItem.classList.add('module');

        } else {
            cardItem.classList.add('hide-card');
            cardItem.classList.remove('module');

        }
    })
}

//Scroll to top of page button

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

const searchButton = document.querySelector('#search');

searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    const selectValue = document.querySelector('#tech').value;    
    const projectArray = Array.from(document.querySelectorAll('.project'));
    projectArray.forEach(function(project) {
        if (!project.getAttribute('data-tech').includes(selectValue)) {
            project.classList.add('hidden');
        }
        else {
            project.classList.remove('hidden')
        }
    })
    console.log(selectValue)
    console.log(projectArray)
})

//Lottie Animation OnClick Events
const svgContainer1 = document.getElementById('svgContainer1');
const svgContainer2 = document.getElementById('svgContainer2');
const svgContainer3 = document.getElementById('svgContainer3');
const svgContainer4 = document.getElementById('svgContainer4');

const animationButton1 = document.querySelector('.animation-button1');
const animationButton2 = document.querySelector('.animation-button2');
const animationButton3 = document.querySelector('.animation-button3');
const animationButton4 = document.querySelector('.animation-button4');


const pop = bodymovin.loadAnimation({
    wrapper: svgContainer1,
    renderer: 'svg',
    loop: 1,
    path: 'https://assets5.lottiefiles.com/packages/lf20_8Psf5B.json'
});

const confirm = bodymovin.loadAnimation({
    wrapper: svgContainer2,
    renderer: 'svg',
    loop: 1,
    path: 'https://assets1.lottiefiles.com/packages/lf20_QKHsU2.json'
});

const lines = bodymovin.loadAnimation({
    wrapper: svgContainer3,
    renderer: 'svg',
    loop: 1,
    path: 'https://assets10.lottiefiles.com/packages/lf20_OANf6P.json'
});

const clicky = bodymovin.loadAnimation({
    wrapper: svgContainer4,
    renderer: 'svg',
    loop: 1,
    path: 'https://assets5.lottiefiles.com/datafiles/xagAVK6Z2hhaURL/data.json'
});


function startAnimation(anim) {
    console.log('clicked')
	anim.setDirection(1);
	anim.goToAndStop(1);
    anim.play();	
}

animationButton1.addEventListener('click', function() {
    startAnimation(pop)
})

svgContainer2.style.opacity = 0;
animationButton2.addEventListener('click', function() {
        svgContainer2.style.opacity = 1;
        startAnimation(confirm)
        setTimeout(() => {
            svgContainer2.animate([
                {opacity: 1},
                {opacity: 0},
            ], {
                duration: 500
            })
            svgContainer2.style.opacity = 0;
        }, 2000);  
})

animationButton3.addEventListener('click', function() {
    startAnimation(lines)
})

svgContainer4.style.opacity = 0;
animationButton4.addEventListener('click', function() {
        svgContainer4.style.opacity = 1;
        startAnimation(clicky)
        setTimeout(() => {
            svgContainer4.animate([
                {opacity: 1},
                {opacity: 0},
            ], {
                duration: 500
            })
            svgContainer4.style.opacity = 0;
        }, 1500);  
})
