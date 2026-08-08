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
        "Elegant Events"
    ],

    "Food Catering": [
        "Royal Food Caterers",
        "Taste Catering",
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
        "Bridal Beauty",
        "Makeup Studio"
    ]

};



// =====================================================
// SHOW VENDORS ACCORDING TO CATEGORY
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


        if (category === "") {
            return;
        }


        vendors[category].forEach(function(vendor) {

            let option =
                document.createElement("option");

            option.value = vendor;

            option.textContent = vendor;

            vendorDropdown.appendChild(option);

        });

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

        alert("Please select Vendor");

        return;
    }


    document.getElementById("vendorResult").innerHTML = `

        <h3>Vendor Booked Successfully!</h3>

        <p>
            <strong>Vendor Category:</strong>
            ${category}
        </p>

        <p>
            <strong>Vendor:</strong>
            ${vendor}
        </p>

    `;

}