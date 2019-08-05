var preloader=document.getElementById('loading');
function myfunction(){
    setTimeout(function(){preloader.style.display= 'none'},1000);
}

//comment out this part to see the preloader
window.onload= myfunction();


var _CONTENT = [ 
	"Student chapter BIT Mesra", 
	"Technology   Innvovation   Creativity", 
];
console.log(screen.width);

var _PART = 0;

var _PART_INDEX = 0;

var _INTERVAL_VAL;

var _ELEMENT = document.querySelector("#text");

var _CURSOR = document.querySelector("#cursor");

function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	if(text === _CONTENT[_PART]) {
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

setTimeout(function(){_INTERVAL_VAL = setInterval(Type, 100);},3000);
var y=0;
const nav_slide = ()=>{
    // const nav_bar =document.querySelector(".bar");
    const burger = document.querySelector(".burger");
    const nav= document.querySelector(".nav-links");

    burger.addEventListener("click",()=>{
        // nav_bar.add("chback");
        y++;
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
}

nav_slide();
var x;
var f=screen.height;
f=f-150;
console.log(f);
$(window).on('scroll',function(){
    console.log($(window).scrollTop()); 
    console.log("sabhdgh" + f);  
    if(y%2==1)
    window.scrollTo(0,x);
    else{    
    if(($(window).scrollTop()-x)>0 && $(window).scrollTop()>=f)
    {
        // console.log("yes");
        $(".bar").addClass('x');
    }
    else
    $(".bar").removeClass('x'); 
    x=$(window).scrollTop();
    }
});
