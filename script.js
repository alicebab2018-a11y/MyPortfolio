// ==========================================
// MOBILE NAVBAR
// ==========================================

const toggle = document.querySelector(".mobile-toggle");
const menu = document.querySelector(".menu");

if (toggle && menu) {

    toggle.addEventListener("click", function () {

        const open = menu.classList.toggle("active");

        toggle.setAttribute("aria-expanded", open);

        toggle.innerHTML = open
            ? '<i class="fas fa-xmark"></i>'
            : '<i class="fas fa-bars"></i>';

    });


    // Close menu when a link is clicked

    document.querySelectorAll(".menu a").forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("active");

            toggle.setAttribute("aria-expanded", "false");

            toggle.innerHTML =
                '<i class="fas fa-bars"></i>';

        });

    });

}



// ==========================================
// HIRE ME FORM
// ==========================================

const hireForm = document.getElementById("hireForm");
const formMessage = document.getElementById("formMessage");


if (hireForm && formMessage) {

    hireForm.addEventListener("submit", async function (event) {

        // STOP normal page reload
        event.preventDefault();


        const button = hireForm.querySelector("button");


        // Show sending status

        button.disabled = true;

        button.innerHTML =
            'Sending... <i class="fas fa-spinner fa-spin"></i>';

        formMessage.classList.remove("show");



        // Collect form data

        const formData = new FormData(hireForm);


        try {

            const response = await fetch(
                hireForm.action,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );


            if (response.ok) {

                // SUCCESS

                formMessage.textContent =
                    "Your project request has been sent successfully! I'll get back to you soon.";

                formMessage.classList.add("show");

                hireForm.reset();


            } else {

                throw new Error("Form submission failed");

            }


        } catch (error) {

            // ERROR

            formMessage.textContent =
                "Something went wrong. Please check your email address and try again.";

            formMessage.classList.add("show");

        }


        // Restore button

        button.disabled = false;

        button.innerHTML =
            'Send Project Request <i class="fas fa-paper-plane"></i>';

    });

}
// =========================================
// RED NAVBAR ON SCROLL
// =========================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 20) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});
