
//registration form validation
function data(){
    var a = document.getElementById("Username").value;
    var b = document.getElementById("Email").value;
    var c = document.getElementById("date").value;
    var d = document.getElementById("Mobile").value;
    var e = document.getElementById("Password").value;
    var f = document.getElementById("confirmPassword").value;
    if(a==""||b==""||c==""||d==""||e==""||f==""){
        alert("All Fields are mendatory");
        return false;
    }
    else if(d.length<10 ||d.length>10){
        alert("Number Should of 10 Digit ! Please Enter Valid Number");
        return false;
    }
    
    else if(isNaN(d)){
        alert("Only numbers are allowed ! Please Enter Valid Number");
        return false;
    }
    
    else if(e!=f){
        alert("! Please Enter Same Password");
        return false;
    }
    else{
        true;
    }
    }

let slideImages = document.querySelectorAll('img');
//access the next and previous buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
//acess the indicators
// let dots = document.querySelectorAll('.dot');

var counter = 0;
// code for next button 
next.addEventListener('click',slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;
    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
}
// code for prev button 
prev.addEventListener('click',slideprev);
function slideprev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
}
// code for review
// Select all star elements
const stars = document.querySelectorAll('span#star');
let selectedRating = 0;

// Function to handle star mouseover
stars.forEach(star => {
    star.addEventListener('mouseover', () => {
        resetStarColors();
        const currentStarValue = star.getAttribute('data-value');
        highlightStars(currentStarValue);
    });

    star.addEventListener('mouseout', () => {
        resetStarColors();
        highlightStars(selectedRating);
    });

    star.addEventListener('click', () => {
        selectedRating = star.getAttribute('data-value');
        resetStarColors();
        highlightStars(selectedRating);
    });

    
    

});

// Function to highlight stars 
function highlightStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) { 
            star.style.color= 'gold';
        }
    });
}

// Function to reset star colors
function resetStarColors() {
    stars.forEach(star => {
        star.style.color = 'white'; // Default color
    });
}

