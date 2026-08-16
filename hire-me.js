const hireForm = document.getElementById("hireForm");
const formMessage = document.getElementById("formMessage");

if (hireForm) {

    hireForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const button = hireForm.querySelector("button");

        button.innerHTML =
            'Sending... <i class="fas fa-spinner fa-spin"></i>';

        button.disabled = true;


        const formData = new FormData(hireForm);


        try {

            const response = await fetch(
                hireForm.action.replace(
                    "https://formsubmit.co/",
                    "https://formsubmit.co/ajax/"
                ),
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );


            if (response.ok) {

                formMessage.textContent =
                    "Your project request has been sent successfully! I'll get back to you soon.";

                formMessage.classList.add("show");

                hireForm.reset();

                button.innerHTML =
                    'Send Project Request <i class="fas fa-paper-plane"></i>';

                button.disabled = false;

            } else {

                throw new Error("Submission failed");

            }

        } catch (error) {

            formMessage.textContent =
                "Something went wrong. Please try again.";

            formMessage.classList.add("show");

            button.innerHTML =
                'Send Project Request <i class="fas fa-paper-plane"></i>';

            button.disabled = false;

        }

    });

}x
