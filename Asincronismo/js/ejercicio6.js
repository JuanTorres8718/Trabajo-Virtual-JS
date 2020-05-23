'use strict';


const removeMsg = () => {
    const msg = document.querySelector('div');
    msg.classList.remove('time');
    msg.innerHTML = `
    <div class="message">
    <p>su sesión ha expirado, no pudo completar el ritual</p>        
    </div>`;
  }
  
  setTimeout(removeMsg, 15000);