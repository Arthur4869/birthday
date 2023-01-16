var cake = document.getElementById("cake");
var gate1 = document.getElementById("rot");
var gate2 = document.getElementById("gate2");
var volatile = document.getElementById("volatile");
var form = document.getElementById("form");
var btn = document.getElementById("btn");
var input = document.getElementById("input");
var image = document.getElementById("imgWish");
image.style.height = document.body.offsetHeight - 16 + 'px';
var count = 0;

function alignCake(){
    let coords = document.body.getBoundingClientRect();
    cake.style.left = document.body.offsetWidth/2 - cake.offsetWidth/2 + 'px';
    cake.style.top = document.body.offsetHeight/2 + 'px'; 
}
function alignform(){
    let coords = document.body.getBoundingClientRect();
    form.style.left = document.body.offsetWidth/2 - form.offsetWidth/2 + 'px';
    form.style.top = document.body.offsetHeight/2 - form.offsetHeight/2  + 'px'; 
}

alignCake();
alignform();
form.style.display = "none";

cake.addEventListener("click", function(){
    form.style.display="flex";
    cake.style.display = "none";
});

btn.addEventListener('click', function(event){
    event.preventDefault();
    if(input.value == "0302"){
        form.style.display = "none";
        setTimeout(function(){
                volatile.style.display="none";
            },300)
            setTimeout(function(){
                volatile.style.display="none";
            },300)
            
            gate1.style.animation = "rotRight 0.5s ease-in-out";
            gate2.style.animation = "rotLeft 0.5s ease-in-out";
    }
    else if(count == 0){
        alert("Invalid Password");
        count++;
    }
    else if(count == 1){
        alert("Invalid Password, what's the date today?");
        count++;
    }
    else{
         alert("Invalid Password, Date and Month BAKA -_-");
        count++;
    }

})

