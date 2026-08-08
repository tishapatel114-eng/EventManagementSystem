let eventDetails = {};
let guests = [];

function saveEvent() {

    eventDetails.name =
        document.getElementById("eventName").value;

    eventDetails.date =
        document.getElementById("eventDate").value;

    eventDetails.location =
        document.getElementById("eventLocation").value;

    eventDetails.type =
        document.getElementById("eventType").value;

    eventDetails.vendor =
        document.getElementById("vendor").value;

    eventDetails.food =
        document.getElementById("food").value;

    eventDetails.decoration =
        document.getElementById("decoration").value;

    let guestName =
        document.getElementById("guestName").value;

    let guestPhone =
        document.getElementById("guestPhone").value;

    guests.push({
        name: guestName,
        phone: guestPhone
    });

    alert("Event Saved Successfully");
}

function showEvent() {

    let output = "";

    output += "<h2>Event Details</h2>";

    output += "Event: " + eventDetails.name + "<br>";
    output += "Date: " + eventDetails.date + "<br>";
    output += "Location: " + eventDetails.location + "<br>";
    output += "Type: " + eventDetails.type + "<br>";
    output += "Vendor: " + eventDetails.vendor + "<br>";
    output += "Food: " + eventDetails.food + "<br>";
    output += "Decoration: " + eventDetails.decoration + "<br>";

    output += "<h3>Guest List</h3>";

    guests.forEach(function(guest) {

        output += guest.name + " - "
                + guest.phone + "<br>";

    });

    document.getElementById("output").innerHTML = output;
}

function searchGuest() {

    let name = prompt("Enter Guest Name");

    let guest = guests.find(function(g) {

        return g.name.toLowerCase() === name.toLowerCase();

    });

    if (guest) {

        alert(
            "Guest Found: " +
            guest.name +
            " (" +
            guest.phone +
            ")"
        );

    } else {

        alert("Guest Not Found");

    }
}

function deleteGuest() {

    let name = prompt("Enter Guest Name to Delete");

    guests = guests.filter(function(g) {

        return g.name.toLowerCase() !== name.toLowerCase();

    });

    alert("Guest Deleted");
}