// function openPopup() {
//     document.getElementById("enquiryPopup").style.display = "flex";
// }
// function closePopup() {
//     document.getElementById("enquiryPopup").style.display = "none";
// }


// document.getElementById("phone").addEventListener("input", function (e) {
//     this.value = this.value.replace(/[^0-9]/g, ""); // Only numbers

//     // Restrict to 10 digits
//     if (this.value.length > 10) {
//       this.value = this.value.slice(0, 10);
//     }
// });

// document.getElementById("phone").addEventListener("blur", function () {
//     if (this.value.length !== 10) {
//       alert("Phone number must be exactly 10 digits!");
//       this.value = ""; // Clear input if not 10 digits
//     }
// });

// const form = document.getElementById("form");
// const result = document.getElementById("result");

// form.addEventListener("submit", function (e) {
// const formData = new FormData(form);
// e.preventDefault();
// var object = {};
// formData.forEach((value, key) => {
//     object[key] = value;
// });
// var json = JSON.stringify(object);
// result.innerHTML = "Please wait...";

// fetch("https://api.web3forms.com/submit", {
//     method: "POST",
//     headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json"
//     },
//     body: json
// })
//     .then(async (response) => {
//     let json = await response.json();
//     if (response.status == 200) {
//         result.innerHTML = json.message;
//         result.classList.remove("text-gray-500");
//         result.classList.add("text-green-500");
//     } else {
//         console.log(response);
//         result.innerHTML = json.message;
//         result.classList.remove("text-gray-500");
//         result.classList.add("text-red-500");
//     }
//     })
//     .catch((error) => {
//     console.log(error);
//     result.innerHTML = "Something went wrong!";
//     })
//     .then(function () {
//     form.reset();
//     setTimeout(() => {
//         result.style.display = "none";
//     }, 5000);
//     });
// });




// ✅ Open & Close Popup
function openPopup() {
    let popup = document.getElementById("enquiryPopup");
    if (popup) popup.style.display = "flex";
}

function closePopup() {
    let popup = document.getElementById("enquiryPopup");
    if (popup) popup.style.display = "none";
}

// ✅ Phone Number Validation
const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, ""); // Allow only numbers
    if (this.value.length > 10) this.value = this.value.slice(0, 10); // Restrict to 10 digits
});

phoneInput.addEventListener("paste", function (e) {
    e.preventDefault(); // Block pasting non-numeric values
});

phoneInput.addEventListener("blur", function () {
    if (this.value.length !== 10) {
        alert("Phone number must be exactly 10 digits!");
        this.value = ""; // Clear input if invalid
    }
});

// ✅ Form Submission Handling
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Check if phone number is exactly 10 digits before submission
    if (phoneInput.value.length !== 10) {
        alert("Phone number must be exactly 10 digits!");
        return;
    }

    // Validate "I'm not a robot" checkbox
    const robotCheck = document.getElementById("robotCheck");
    if (!robotCheck.checked) {
        alert("Please confirm that you are not a robot!");
        return;
    }

    // ✅ Prepare Data for Web3Forms API
    const formData = new FormData(form);
    let object = {};
    formData.forEach((value, key) => { object[key] = value; });
    let json = JSON.stringify(object);

    // ✅ Display "Please wait..." Message
    result.innerHTML = "Please wait...";
    result.style.display = "block";

    // ✅ Send Request to Web3Forms
    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.innerHTML = json.message;
            result.classList.replace("text-gray-500", "text-green-500");

            // ✅ Auto-close popup after 2 seconds
            setTimeout(() => {
                closePopup();
            }, 2000);
        } else {
            console.log(response);
            result.innerHTML = json.message;
            result.classList.replace("text-gray-500", "text-red-500");
        }
    })
    .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
        result.classList.replace("text-gray-500", "text-red-500");
    })
    .finally(() => {
        form.reset();
        setTimeout(() => { result.style.display = "none"; }, 5000);
    });
});
