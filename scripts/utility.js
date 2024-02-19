

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

function disableButton(elementName){
    const disableBtn = elementName;
    disableBtn.disabled = true; 
}


function updateTotalPrice(){
    const totalPrice = document.getElementById('total-price');
    const totalPriceElement = totalPrice.innerText;
    const convetPrice = parseInt(totalPriceElement);
    const updatePrice = convetPrice + 550;
    totalPrice.innerText = updatePrice;

}

function updateGrandTotal(){
    const grandTotalPrice = document.getElementById('grand-total');
    const grandtotalPriceElement = grandTotalPrice.innerText;
    const convetPrice = parseInt(grandtotalPriceElement);
    const updatePrice = convetPrice + 550;
    grandTotalPrice.innerText = updatePrice;

}

function reloadPage(){
    window.location.reload();
}