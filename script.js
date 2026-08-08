document
    .getElementById("eventForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let eventName =
            document.getElementById("eventName").value;

        let eventDate =
            document.getElementById("eventDate").value;

        let eventLocation =
            document.getElementById("eventLocation").value;

        let eventType =
            document.getElementById("eventType").value;


        if (eventName === "") {
            alert("Please enter event name");
            return;
        }

        if (eventDate === "") {
            alert("Please select event date");
            return;
        }

        if (eventLocation === "") {
            alert("Please enter event location");
            return;
        }

        if (eventType === "") {
            alert("Please select event type");
            return;
        }


        document.getElementById("eventResult").innerHTML = `

            <h3>Event Created Successfully!</h3>

            <p>
                Event Name: ${eventName}
            </p>

            <p>
                Event Date: ${eventDate}
            </p>

            <p>
                Event Location: ${eventLocation}
            </p>

            <p>
                Event Type: ${eventType}
            </p>

        `;

    });