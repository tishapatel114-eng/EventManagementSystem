// =====================================================
// CREATE EVENT
// =====================================================

document
    .getElementById("eventForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const eventName =
            document.getElementById("eventName").value.trim();

        const eventDate =
            document.getElementById("eventDate").value;

        const eventLocation =
            document.getElementById("eventLocation").value.trim();

        const eventType =
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
// VENDOR CATEGORY
// =====================================================

document
    .getElementById("vendorCategory")
    .addEventListener("change", function () {

        const category = this.value;

        const vendorDropdown =
            document.getElementById("vendorName");


        vendorDropdown.innerHTML =
            '<option value="">Select Vendor</option>';


        if (category === "") {
            return;
        }


        vendors[category].forEach(function (vendor) {

            const option =
                document.createElement("option");

            option.value = vendor;

            option.textContent = vendor;

            vendorDropdown.appendChild(option);

        });

    });



// =====================================================
// BOOK VENDOR
// =====================================================

document
    .getElementById("bookVendorButton")
    .addEventListener("click", function () {

        const category =
            document.getElementById("vendorCategory").value;

        const vendor =
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

    });



// =====================================================
// FOOD MANAGEMENT
// =====================================================

document
    .getElementById("foodForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const foodCategory =
            document.getElementById("foodCategory").value;

        const foodGuests =
            document.getElementById("foodGuests").value;

        const mealType =
            document.getElementById("mealType").value;


        if (foodCategory === "") {

            alert("Please select Food Category");

            return;
        }


        if (
            foodGuests === "" ||
            Number(foodGuests) <= 0
        ) {

            alert("Please enter valid Number of Guests");

            return;
        }


        if (mealType === "") {

            alert("Please select Meal Type");

            return;
        }


        document.getElementById("foodResult").innerHTML = `

            <h3>Food Plan Added Successfully!</h3>

            <p>
                <strong>Food Category:</strong>
                ${foodCategory}
            </p>

            <p>
                <strong>Number of Guests:</strong>
                ${foodGuests}
            </p>

            <p>
                <strong>Meal Type:</strong>
                ${mealType}
            </p>

        `;

        document
            .getElementById("foodForm")
            .reset();

    });



// =====================================================
// DECORATION
// =====================================================

document
    .getElementById("decorationForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const decorationType =
            document.getElementById("decorationType").value;

        const decorationArea =
            document.getElementById("decorationArea").value;


        if (decorationType === "") {

            alert("Please select Decoration Type");

            return;
        }


        if (decorationArea === "") {

            alert("Please select Decoration Area");

            return;
        }


        document.getElementById("decorationResult").innerHTML = `

            <h3>Decoration Added Successfully!</h3>

            <p>
                <strong>Decoration Type:</strong>
                ${decorationType}
            </p>

            <p>
                <strong>Decoration Area:</strong>
                ${decorationArea}
            </p>

        `;

        document
            .getElementById("decorationForm")
            .reset();

    });



// =====================================================
// GUEST LIST
// =====================================================

document
    .getElementById("guestForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const guestCategory =
            document.getElementById("guestCategory").value;

        const guestCount =
            document.getElementById("guestCount").value;

        const invitationStatus =
            document.getElementById("invitationStatus").value;

        const rsvpStatus =
            document.getElementById("rsvpStatus").value;


        if (guestCategory === "") {

            alert("Please select Guest Category");

            return;
        }


        if (
            guestCount === "" ||
            Number(guestCount) <= 0
        ) {

            alert("Please enter valid Number of Guests");

            return;
        }


        if (invitationStatus === "") {

            alert("Please select Invitation Status");

            return;
        }


        if (rsvpStatus === "") {

            alert("Please select RSVP Status");

            return;
        }


        document.getElementById("guestResult").innerHTML = `

            <h3>Guest Group Added Successfully!</h3>

            <p>
                <strong>Guest Category:</strong>
                ${guestCategory}
            </p>

            <p>
                <strong>Number of Guests:</strong>
                ${guestCount}
            </p>

            <p>
                <strong>Invitation Status:</strong>
                ${invitationStatus}
            </p>

            <p>
                <strong>RSVP Status:</strong>
                ${rsvpStatus}
            </p>

        `;


        document
            .getElementById("guestForm")
            .reset();

    });