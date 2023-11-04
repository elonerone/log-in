let inputname = document.querySelector('#container__child--input-nameid')
let inputpassword = document.querySelector('#container__child--input-passwordid')
let modal =document.querySelector('.modal')
function check(){
  let inputnamevalue = inputname.value;
  let inputpasswordvalue =inputpassword.value;
if(inputnamevalue.length<12 || inputpasswordvalue.length<8){
    modal.style.display= 'flex'
}
else{
    modal.style.display= "flex"
    modal.style.backgroundColor="#00C853"
    modal.style.alignItems="center"
    modal.style.justifyContent="center"
    modal.innerHTML="welcome"
    
}
modal.style.animationName="fade"
modal.style.animationDuration="8000ms"

setTimeout(function(){
  modal.style.display= 'none'
}, 7900);
}
