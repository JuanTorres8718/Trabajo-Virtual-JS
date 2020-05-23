'use strict';

function logKey(e) {
    if(e.key == 'r'){
        document.querySelector('body').style.backgroundColor= "red";
    }else if(e.key == 'm'){
        document.querySelector('body').style.backgroundColor= "purple";
    }
  }

document.addEventListener('keydown', logKey);