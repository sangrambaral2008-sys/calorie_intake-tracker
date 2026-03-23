$(document).ready(function(){ 
    $('.buttons').click(function(){ 
        $(this).addClass('active').siblings().removeClass('active'); 
        var filter = $(this).attr('data-filter') 
        if(filter == 'all'){ 
            $('.diet .box').show(400); 
        } 
        else{ 
            $('.diet .box').not('.'+ filter).hide(200); 
            $('.diet .box').filter('.'+ filter).show(400); 
        } 
    }); 
});

let total = 0;

// simple calorie data (per 100g)
let data = {
Rice:130,
Egg:155,
Apple:52,
Banana:89
};

function addFood(){

let meal = document.getElementById("meal").value;
let food = document.getElementById("food").value.toLowerCase().trim();
let qty = document.getElementById("qty").value;

if(!data[food]){
alert("Food not found 😅");
return;
}

if(qty == "" || qty <= 0){
alert("Enter quantity");
return;
}

let cal = (data[food] * qty) / 100;

total += cal;

// show log
document.getElementById("log").innerHTML += 
meal + " - " + food + " (" + qty + "g) = " + cal.toFixed(1) + " cal <br>";

// update total
document.getElementById("total").innerText = total.toFixed(1);

}
var swiper = new Swiper('.review-slider',{ 
    loop: true, 
    grabCursor: true, 
    spaceBetween: 20, 
    breakpoints:{ 
        0:{ 
            slidesPerView:1, 
        }, 
        640:{ 
            slidesPerView:2, 
        }, 
        768:{ 
            slidesPerView:3, 
        }, 
    }, 
});

