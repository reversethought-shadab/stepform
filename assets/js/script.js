const container = document.getElementById('cube-container');

function addCubes(number) {
    for (let i = 0; i < number; i++) {
        const cube = document.createElement('div');
        cube.className = 'cube';

        // Add faces to the cube
        const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
        faces.forEach(face => {
            const faceDiv = document.createElement('div');
            faceDiv.className = face;
            cube.appendChild(faceDiv);
        });

        container.appendChild(cube);
    }
}

addCubes(10);

    // const emailInput = document.getElementById('email');
    // const continueBtn = document.getElementById('continueBtn');
    // const step1 = document.getElementById('step1');
    // const step2 = document.getElementById('step2');

    // // Email validation
    // emailInput.addEventListener('input', function () {
    //     const email = emailInput.value;
    //     const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    //     if (isValidEmail) {
    //         continueBtn.classList.add('active');
    //         continueBtn.disabled = false;
    //     } else {
    //         continueBtn.classList.remove('active');
    //         continueBtn.disabled = true;
    //     }
    // });

    // // Move to step 2 after clicking continue
    // continueBtn.addEventListener('click', function () {
    //     if (!continueBtn.disabled) {
    //         step1.classList.add('hidden');
    //         step2.classList.remove('hidden');
    //     }
    // });
