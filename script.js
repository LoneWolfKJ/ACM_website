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

function getId(element)
{
    console.log("hello");
    location.href="./articleonclick.html";
}

// Get the modal
var modal = document.getElementById("myModal1");

// Get the button that opens the modal
var btn = document.getElementsByClassName("list-item");

// Get the <span> element that closes the modal
var span = document.getElementById("overlay");

// When the user clicks on the button, open the modal 
function on(x) {
  document.getElementById("overlay").style.display = "block";
  $('.pop-box').empty();
  $('#event-'+x).clone().appendTo('.pop-box');

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  document.getElementById("overlay").style.display = "none";
}

function showUser() {
    email = document.getElementById('emailSubscribe').value;
    name = document.getElementById('nameSubscribe').value;  
    if (email=="" || name=="") {
        document.getElementById("alertBox").innerHTML="";
        return;
    } 
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var data = new FormData();
    data.append('email', email);
    data.append('name', name);
    var params = "email="+email+"&name="+name;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            $("#alertBox").fadeTo(2000, 500).slideUp(500, function() {
            $("#alertBox").slideUp(500);
            document.getElementById("closeAlert").style.display="block";
            });
            document.getElementById("alertData").innerHTML = this.responseText;
            document.getElementById("closeAlert").style.display="block";
            if(this.responseText == "Already, subscribed") {
                document.getElementById("alertBox").className = "alert alert-warning";
            } else if (this.responseText == "Sucessfully subscribed") {
                document.getElementById("alertBox").className = "alert alert-success";
            } else if (this.responseText == "Invalid input") {
                document.getElementById("alertBox").className = "alert alert-danger";
            }
        }
    };
    //console.log(data);
    xmlhttp.open("POST","http://localhost/subscribe.php",true);
    xmlhttp.send(data);
}
