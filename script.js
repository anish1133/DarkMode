const toggle = document.getElementById('toggle');
toggle.onclick =  function(){
    console.log("Anish");
    toggle.classList.toggle('active');
    wrapper.classList.toggle('active');
}


const wrapper = document.querySelector('.wrapper');  