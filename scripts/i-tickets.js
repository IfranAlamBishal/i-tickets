

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
        enableBtn();


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


    const applyBtn = document.getElementById('apply-btn');
    applyBtn.addEventListener("click" , function(){
    const couponCode = document.getElementById('coupon-input').value;
    const seatCountNumber = document.getElementById('selected-seats').innerText
    const totalSeatNumber = parseInt(seatCountNumber);
        

        if(totalSeatNumber === 4){
            if(couponCode === 'NEW15'){
                const discountElement = document.getElementById('discount');
                const grandTotalPrice = document.getElementById('grand-total');
                const grandtotalPriceElement = grandTotalPrice.innerText;
                const convetPrice = parseInt(grandtotalPriceElement);
                const discountAmount = convetPrice * 0.15;
                const discount = convetPrice - discountAmount ;
                discountElement.innerText = discountAmount.toFixed(2);
                grandTotalPrice.innerText = discount;
                showDiscount();
                hideInput();


            }
            else if(couponCode === 'Couple 20'){
                const discountElement = document.getElementById('discount');
                const grandTotalPrice = document.getElementById('grand-total');
                const grandtotalPriceElement = grandTotalPrice.innerText;
                const convetPrice = parseInt(grandtotalPriceElement);
                const discountAmount = convetPrice * 0.2;
                const discount = convetPrice - discountAmount;
                discountElement.innerText = discountAmount.toFixed(2);
                grandTotalPrice.innerText = discount;
                showDiscount();
                hideInput();
            }
            else{
                alert("Invalid Coupon Code.")
            }
        }
    });
