const mainHeading = document.querySelector('h1');
mainHeading.addEventListener('mouseenter', function(){
    mainHeading.textContent='Build something!';});
mainHeading.addEventListener('mouseleave', function(){
        mainHeading.textContent='Muhalat Landing Page';});

const done = document.getElementById('submit');
done.addEventListener('click', function(){
    document.getElementById('passwordalert').innerHTML='<span style="color:green">Submitted successfully!</span>'
    
})

const userName = document.getElementById