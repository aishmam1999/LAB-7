function init(){
//add your javascrip between these two lines of code


  var input = document.getElementById('entryinput');
  var button = document.getElementById('entrybutton');
  
  button.addEventListener('click', function() {
   alert('Alif Ishmam: ' +input.value);
   document.getElementById('textoutput').innerHTML = input.value;});
}
window.addEventListener('load', init);