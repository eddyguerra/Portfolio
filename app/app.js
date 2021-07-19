const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const header = document.querySelector('header ul');
    

    burger.addEventListener('click', () =>{
        header.classList.toggle('nav-active');
        burger.classList.toggle('menu');
        burger.classList.toggle('list');
      
        
    
        });



    

}

navSlide();



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    } else {
    document.getElementById("navbar").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
}





window.addEventListener('scroll',function(event){
    var scroll = this.scrollY;
    console.log(scroll);
    if(scroll>400){
        document.getElementById("anchorTab").classList.add('fixed');
    }
    else{
        document.getElementById("anchorTab").classList.remove('fixed');
    }


});

