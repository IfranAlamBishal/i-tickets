

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
      
    deductAvailableSeats();
    updateSelectedSeats();
    changeBackgroundColor(seat);
    });
}

