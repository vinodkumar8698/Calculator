let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    window.navigator.vibrate(300);

    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value=screenValue ;
      
    }
    else if(buttonText=="C"){
      screenValue= "";
      screen.value =screenValue ;


    }
    else if (buttonText == "◀"){
      screen.value = screen.value.substr(0,screen.value.length-1);
      screenValue =screen.value;

    }
    else if (buttonText == "=") {
      screen.value= eval(screen.value);
      screenValue =screen.value;
    }
    
    
  else {
    screenValue += buttonText;
    screen.value=screenValue ;
  }

  

  })
}


