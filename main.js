var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');

function handleBlur(event) {
    var expectedLength = parseInt(event.target.getAttribute('data-length'));
    if (event.target.value.length === expectedLength) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
    } else {
        event.target.classList.remove('valid');
        event.target.classList.add('invalid');
    }
}

input1.addEventListener('blur', handleBlur);
input2.addEventListener('blur', handleBlur);
input3.addEventListener('blur', handleBlur);