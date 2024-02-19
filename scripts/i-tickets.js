

function scrollToBooking(section){
    const toBooking = document.querySelector(section);
    if(toBooking){
        toBooking.scrollIntoView({behavior : "smooth"});
    }
}

const seats = document.querySelectorAll(".bus-seats");
for(let index = 0; index < seats.length; index++){
    const seat = seats[index];
    seat.addEventListener("click" , function(){
        const seatCount = document.getElementById('selected-seats');
        const seatCountElement = seatCount.innerText;
        const seatCountNumber = parseInt(seatCountElement);


    if( seat.classList.contains('updated-seat')){
        return;
    }
    else if (seatCountNumber >= 4){
        return;
    }
    else{

        deductAvailableSeats();
        updateSelectedSeats();
        changeBackgroundColor(seat);

    const seatNumber = seat.innerText;
    let showSelectedSeats = document.getElementById('seat-info');
    let ticketDetails = document.createElement('div');
    const s = document.createElement('p');
    s.innerText = seatNumber;
    const c = document.createElement('p');
    c.textContent = "Economy";
    const p = document.createElement('p');
    p.textContent = "550";
    ticketDetails.appendChild(s);
    ticketDetails.appendChild(c);
    ticketDetails.appendChild(p);

    ticketDetails.classList.add('ticket-details');
    showSelectedSeats.appendChild(ticketDetails);
    updateTotalPrice();
    updateGrandTotal();
        }
    
    });
}

