const seatNumber = document.getElementById('seatSelected');
let ticket = parseInt(seatNumber.innerText);
const soldTicketName = document.getElementById('soldTicket');
const seatDecrease = document.getElementById('seatRemaining');
let ticketRemainings = parseInt(seatDecrease.innerText);
const seatTaken = document.getElementById('seatSelectedByPassenger');
let ticketTaken = parseInt(seatTaken.innerText);

function seatName(button){
  if(ticket===4){
    alert('You can not buy more than four seats ');
    return;
  }

  if(button.getAttribute('data-clicked')==='true'){
      alert('This seat has already been booked');
      return;
  }

  ticketRemainings--;
  seatDecrease.innerText= ticketRemainings;
  
  ticketTaken++;
  seatTaken.innerText =ticketTaken;

  let paragraph = document.createElement('p')
  paragraph.innerText=button.id;
  soldTicketName.appendChild(paragraph);
  
  let paragraphTwo= document.createElement('p')
  paragraphTwo.innerText='Economy';
  soldTicketName.appendChild(paragraphTwo);

  let paragraphThree = document.createElement('p')
  paragraphThree.innerText=550;
  soldTicketName.appendChild(paragraphThree);

  button.setAttribute('data-clicked','true')

  ticket++;
  seatNumber.innerText=ticket;
  button.style.backgroundColor ='#1dd100';
  document.getElementById ('totalCost').innerText= 550*ticket;
  document.getElementById ('totalGrandCost').innerText= 550*ticket;
  
}