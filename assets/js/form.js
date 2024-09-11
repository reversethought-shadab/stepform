document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last-name');
    const continueBtn1 = document.getElementById('continue-btn-1');
    const continueBtn2 = document.getElementById('continue-btn-2');
    const continueBtn3 = document.getElementById('continue-btn-3');
    const successModal = document.getElementById('success-modal');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateName = (name) => {
        return name.trim().length > 0;
    };

    const showStep = (step) => {
        gsap.to('.step', { duration: 0.5 });
        gsap.to(`.step-${step}`, { duration: 0.5, opacity: 1, display: 'block' });
    };

    const showSuccessModal = () => {
        Swal.fire({
            title: "Good job!",
            text: "You've successfully completed the form!",
            icon: "success"
        }).then(() => {
            window.location.href = "https://nerasoft.in";
        });
    };

    const replaceIconWithCheck = (stepNumber) => {
        const rightArrow = document.querySelector(`.step-${stepNumber} .arrow-right`);
        rightArrow.innerHTML = '<i class="fa fa-check"></i>';
    };

    continueBtn1.addEventListener('click', () => {
        if (validateEmail(emailInput.value)) {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
            document.querySelector('.step-1 .invalid-feedback').style.display = 'none'; // Hide invalid feedback
            replaceIconWithCheck(1);
            gsap.to(continueBtn1, { duration: 0.5, display: 'none' });
            showStep(2);
        } else {
            emailInput.classList.add('is-invalid');
            document.querySelector('.step-1 .invalid-feedback').style.display = 'block';
        }
    });

    continueBtn2.addEventListener('click', () => {
        if (validateName(nameInput.value)) {
            nameInput.classList.remove('is-invalid');
            nameInput.classList.add('is-valid');
            document.querySelector('.step-2 .invalid-feedback').style.display = 'none'; // Hide invalid feedback
            replaceIconWithCheck(2);
            gsap.to(continueBtn2, { duration: 0.5, display: 'none' });
            showStep(3);
        } else {
            nameInput.classList.add('is-invalid');
            document.querySelector('.step-2 .invalid-feedback').style.display = 'block';
        }
    });

    continueBtn3.addEventListener('click', () => {
        if (validateName(lastNameInput.value)) {
            lastNameInput.classList.remove('is-invalid');
            lastNameInput.classList.add('is-valid');
            document.querySelector('.step-3 .invalid-feedback').style.display = 'none'; // Hide invalid feedback
            replaceIconWithCheck(3);
            gsap.to(continueBtn3, { duration: 0.5, display: 'none' });
            showSuccessModal();
        } else {
            lastNameInput.classList.add('is-invalid');
            document.querySelector('.step-3 .invalid-feedback').style.display = 'block';
        }
    });
});