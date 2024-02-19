

function deductAvailableSeats(){
    const availableSeat = document.getElementById('available-seats');
    const availableSeatElement = availableSeat.innerText;
    const currentSeat = parseInt(availableSeatElement);
    const updatedSeat = currentSeat - 1;
    availableSeat.innerText = updatedSeat;
}

function updateSelectedSeats(){
    const selectedSeats = document.getElementById('selected-seats');
    const selectedSeatsElement = selectedSeats.innerText;
    const currentSeat = parseInt(selectedSeatsElement);
    const updatedSeat = currentSeat + 1;
    selectedSeats.innerText = updatedSeat;
}

function changeBackgroundColor(elementId){
    const seat = elementId;
    seat.classList.remove('bus-seats');
    seat.classList.add('updated-seat');
}
