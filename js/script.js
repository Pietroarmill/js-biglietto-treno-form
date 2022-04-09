const generateBtn = document.getElementById("generate-btn");
console.log(generateBtn);
const cancelBtn = document.getElementById("cancel-btn");
console.log(cancelBtn);






generateBtn.addEventListener("click",
    function() {

        //prendo i dati dell'utente
        const userName = document.getElementById("user-name").value;

        const userKm = document.getElementById("user-km").value;

        const userAge = document.getElementById("user-age");

        const under18 = document.getElementById("under-18");

        const over65 = document.getElementById("over-65");
        console.log(userName, userKm, userAge, under18, over65);

        //qui faccio apparire il ticket
        const seeTicket = document.getElementById("ticket-section");
        console.log(seeTicket);
        seeTicket.classList.add("active");

        //qui il nome di chi ha acquistato il ticket
        document.getElementById('full-name').innerHTML = `${userName}`;

        //calcolo il costo del biglietto

        
        
        const ticketPrice = userKm * 0.21
        console.log(ticketPrice);
        
        let tripPrice;

        if (userAge == "Minorenne") {
            tripPrice = ticketPrice - (ticketPrice * 20 / 100);
        }   else if (userAge == over65) {
            tripPrice = ticketPrice - (ticketPrice * 40 / 100);
        }   else {
            tripPrice = ticketPrice;
        }
        
        console.log(tripPrice);
        const tripPriceformatted = tripPrice.toFixed(2) + " €";


        document.getElementById('price').innerHTML = `${tripPriceformatted} €`;




        document.getElementById("carrozza").innerHTML =
        Math.floor(Math.random() * 10) + 1;
        
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (9999 - 9000)) + 9000;
        }
        document.getElementById('cod-cp').innerHTML = getRndInteger(0,10);
    }
)













cancelBtn.addEventListener("click",
    function() {
        const seeTicket = document.getElementById("ticket-section");
        console.log(seeTicket);
        seeTicket.classList.remove("active");

    }
)

