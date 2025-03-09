function getData() {
    var destination = document.getElementById("destination").value;
    var arrival = document.getElementById("arrival").value;
    var services = [];
    var checkboxes = document.querySelectorAll("#services input[type='checkbox']:checked")
    checkboxes.forEach((checkbox) => {
        services.push(checkbox.value);
    });

    var reservationData = {
        destination: destination,
        arrival: arrival,
        services: services
    };

    var reservations = JSON.parse(localStorage.getItem("reservations")) || [];

    reservations.push(reservationData);
    localStorage.setItem("reservations", JSON.stringify(reservations));

    document.getElementById("destination").value = "";
    document.getElementById("arrival").value = "";
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
}


function loadData() {
    var sessionDiv = document.getElementById("sessiondata");
    sessionDiv.innerHTML = "";
    var reservations = JSON.parse(localStorage.getItem("reservations")) ||[];

    if (reservations.length === 0) {
        sessionDiv.innerHTML = "Not found";
        return;
    }

    for (var i = 0; i < reservations.length; i++) {
        var res = reservations[i];
        var resElement = document.createElement("div");
        resElement.innerHTML = "<p>Reservation " + (i + 1) + "<br>" +
        "Destination: " + res.destination + "<br>" + 
        "Arrival date: " + res.arrival + "<br>" +
        "Services: " + (res.services.length > 0 ? res.services.join(", ") : "None") + "</p>";

        sessionDiv.appendChild(resElement);
    }

}