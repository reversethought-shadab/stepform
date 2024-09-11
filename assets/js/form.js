document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last-name');
    const continueBtn1 = document.getElementById('continue-btn-1');
    const continueBtn2 = document.getElementById('continue-btn-2');
    const continueBtn3 = document.getElementById('continue-btn-3');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.querySelector('.close-btn');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateName = (name) => {
        return name.trim().length > 0;
    };

    const showStep = (step) => {
        gsap.to('.step', { duration: 0.5, opacity: 1 });
        gsap.to(`.step-${step}`, { duration: 0.5, opacity: 1, display: 'block' });
    };

    const showSuccessModal = () => {
        gsap.to(successModal, { duration: 0.5, opacity: 1, display: 'flex' });
    };

    continueBtn1.addEventListener('click', () => {
        if (validateEmail(emailInput.value)) {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
            continueBtn1.style.backgroundColor = 'green';
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
            continueBtn2.style.backgroundColor = 'green';
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
            continueBtn3.style.backgroundColor = 'green';
            showSuccessModal();
        } else {
            lastNameInput.classList.add('is-invalid');
            document.querySelector('.step-3 .invalid-feedback').style.display = 'block';
        }
    });

    closeModalBtn.addEventListener('click', () => {
        gsap.to(successModal, { duration: 0.5, opacity: 0 });
    });
});