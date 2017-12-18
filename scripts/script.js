// States dropdown
var i = 0;
$(function() {
  $('.dropdown ul li').on('click', function() {
    var label = $(this).parent().parent().children('label');
    label.attr('data-value', $(this).attr('data-value'));
    label.html($(this).html());

    $(this).parent().children('.selected').removeClass('selected');
    $(this).addClass('selected');
    while (i<1) {
      document.getElementById("statedrop").classList.toggle('chosen');
      i=5;
    }
  });
  
  $('.dropdown').on('click', function() {
    $(this).toggleClass('open');
  });
});

// Upper dropdown on mobile
function change() {
	document.getElementById("mob-dropdown1").classList.toggle('hidden');
	document.getElementById("mob-dropdown2").classList.toggle('hidden');
}

// Show global error
function globError() {
  document.getElementById("error-block").classList.toggle('error');
}

var form  = document.getElementsByTagName('form')[0];
var field = document.querySelectorAll('input[name="req-field"]');
var error = document.querySelectorAll('.loc-error');

form.addEventListener("submit", function (event) {
  for (var i=0; i < 3; i++) {
    if (field[i].value == 0) {
      error[i].className = "loc-error active";
      event.preventDefault();
    } 
  }

}, false);

// Show and hide text on service page

function more(num) {
  if (num == 1) {
    var text = document.getElementsByClassName("more")[0].innerHTML;
    document.getElementsByClassName("hidden-text")[0].classList.toggle("show");
    if (text == "More...") {
      document.getElementsByClassName("more")[0].innerHTML = "Less...";
    } else {
      document.getElementsByClassName("more")[0].innerHTML = "More...";
    }
  }
  else if (num == 2) {
    var text = document.getElementsByClassName("more")[1].innerHTML;
    document.getElementsByClassName("hidden-text")[1].classList.toggle("show");
    if (text == "More...") {
      document.getElementsByClassName("more")[1].innerHTML = "Less...";
    } else {
      document.getElementsByClassName("more")[1].innerHTML = "More...";
    }
  }
}

function details(num) {
  if (num == 1) {document.getElementsByTagName("ul")[1].classList.toggle("show");} 
  else if (num == 2) {document.getElementsByTagName("ul")[2].classList.toggle("show");}
  else if (num == 3) {document.getElementsByTagName("ul")[3].classList.toggle("show");}
}

function hideform() {
  document.getElementsByClassName("cardpart")[0].classList.toggle("hidden");
}
function showform() {
  document.getElementsByClassName("cardpart")[0].classList.toggle("hidden");
}

function chek(something) {
  if (something == 0) {
    document.getElementsByClassName("add-content")[0].classList.toggle("active");
  } else if (something == 1) {
    document.getElementsByClassName("add-content")[1].classList.toggle("active");
  }
  else if (something == 2) {
    document.getElementsByClassName("add-content")[2].classList.toggle("active");
  }
}