// =====================================================
// CREATE EVENT
// =====================================================

document
    .getElementById("eventForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let eventName =
            document.getElementById("eventName").value.trim();

        let eventDate =
            document.getElementById("eventDate").value;

        let eventLocation =
            document.getElementById("eventLocation").value.trim();

        let eventType =
            document.getElementById("eventType").value;


        if (eventName === "") {
            alert("Please enter Event Name");
            return;
        }

        if (eventDate === "") {
            alert("Please select Event Date");
            return;
        }

        if (eventLocation === "") {
            alert("Please enter Event Location");
            return;
        }

        if (eventType === "") {
            alert("Please select Event Type");
            return;
        }


        document.getElementById("eventResult").innerHTML = `

            <h3>Event Created Successfully!</h3>

            <p>
                <strong>Event Name:</strong>
                ${eventName}
            </p>

            <p>
                <strong>Event Date:</strong>
                ${eventDate}
            </p>

            <p>
                <strong>Event Location:</strong>
                ${eventLocation}
            </p>

            <p>
                <strong>Event Type:</strong>
                ${eventType}
            </p>

        `;

    });



// =====================================================
// VENDOR DATA
// =====================================================

const vendors = {

    "Decoration": [
        "Royal Decorators",
        "Dream Decoration",
        "Elegant Events Decoration"
    ],

    "Food Catering": [
        "Taste Catering",
        "Royal Food Caterers",
        "Gujarati Food House"
    ],

    "Photography": [
        "Pixel Photography",
        "Dream Clicks",
        "Moments Photography"
    ],

    "DJ": [
        "DJ Rock",
        "DJ Beats",
        "DJ Night"
    ],

    "Makeup Artist": [
        "Beauty Glow",
        "Makeup Studio",
        "Bridal Beauty"
    ]

};



// =====================================================
// SHOW VENDORS
// =====================================================

document
    .getElementById("vendorCategory")
    .addEventListener("change", function() {

        let category = this.value;

        let vendorDropdown =
            document.getElementById("vendorName");

        vendorDropdown.innerHTML = `
            <option value="">
                Select Vendor
            </option>
        `;


        if (category !== "") {

            vendors[category].forEach(function(vendor) {

                let option =
                    document.createElement("option");

                option.value = vendor;

                option.textContent = vendor;

                vendorDropdown.appendChild(option);

            });

        }

    });



// =====================================================
// BOOK VENDOR
// =====================================================

function bookVendor() {

    let category =
        document.getElementById("vendorCategory").value;

    let vendor =
        document.getElementById("vendorName").value;


    if (category === "") {

        alert("Please select Vendor Category");

        return;
    }

    if (vendor === "") {

        alert("Please select a Vendor");

        return;
    }


    document.getElementById("vendorResult").innerHTML = `

        <h3>Vendor Booked Successfully!</h3>

        <p>
            <strong>Category:</strong>
            ${category}
        </p>

        <p>
            <strong>Vendor:</strong>
            ${vendor}
        </p>

    `;

}



// =====================================================
// FOOD MANAGEMENT
// =====================================================

function selectFood() {

    let food =
        document.getElementById("foodCategory").value;

    let guests =
        document.getElementById("foodGuests").value;


    if (food === "") {

        alert("Please select Food Category");

        return;
    }


    if (guests === "" || guests <= 0) {

        alert("Please enter number of guests");

        return;
    }


    document.getElementById("foodResult").innerHTML = `

        <h3>Food Selected Successfully!</h3>

        <p>
            <strong>Food Category:</strong>
            ${food}
        </p>

        <p>
            <strong>Number of Guests:</strong>
            ${guests}
        </p>

    `;

}



// =====================================================
// DECORATION
// =====================================================

function selectDecoration() {

    let decoration =
        document.getElementById("decorationType").value;


    if (decoration === "") {

        alert("Please select Decoration Type");

        return;
    }


    document.getElementById("decorationResult").innerHTML = `

        <h3>Decoration Selected Successfully!</h3>

        <p>
            <strong>Decoration:</strong>
            ${decoration}
        </p>

    `;

}