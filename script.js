let button = document.getElementsByClassName('button')[0];

button.addEventListener('click', () => {
    const heightInput = document.getElementById('height_input');
    const weightInput = document.getElementById('weight_input');
    const heightError = document.getElementById('height_error');
    const weightError = document.getElementById('weight_error');
    const result = document.getElementById('output');

    let height_status = false;
    let weight_status = false;

    result.innerHTML = '';
    heightError.innerHTML = '';
    weightError.innerHTML = '';
    heightInput.style.border = '';
    weightInput.style.border = '';

   
    const height = heightInput.value.trim();
    if (height === '') {
        heightError.innerHTML = '';
        height_status = false; 
    } else if (parseInt(height) <= 0) {
        heightError.innerHTML = 'Height cannot be negative or zero';
        heightInput.style.border = '2px solid red';
        height_status = false;
    } else {
        heightInput.style.border = '2px solid green';
        heightError.innerHTML = '';
        height_status = true;
    }

    
    const weight = weightInput.value.trim();
    if (weight === '') {
        weightError.innerHTML = '';
        weight_status = false; 
    } else if (parseInt(weight) <= 0) {
        weightError.innerHTML = 'Weight cannot be negative or zero';
        weightInput.style.border = '2px solid red';
        weight_status = false;
    } else {
        weightInput.style.border = '2px solid green';
        weightError.innerHTML = '';
        weight_status = true;
    }

    if (height === '' || weight === '') {
        alert('Please fill in all required fields.');
    }

    if (height_status && weight_status) {
        const bmi = (parseInt(weight) / ((parseInt(height) * parseInt(height)) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `Underweight: ${bmi}`;
            document.getElementById("butt").addEventListener("click",function(e){
                e.preventDefault()
                window.location.href="c.html"
                })
            
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal: ${bmi}`;
            document.getElementById("butt").addEventListener("click",function(e){
                e.preventDefault()
                window.location.href="d.html"
                })
        } else {
            result.innerHTML = `Overweight: ${bmi}`;
            document.getElementById("butt").addEventListener("click",function(e){
                e.preventDefault()
                window.location.href="e.html"
                })
        }
        document.getElementById("butt").style.display="block";
 
 }
});