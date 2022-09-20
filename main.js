const check1 = document.querySelector('#chk1');
const check2 = document.querySelector('#chk2');
const check3 = document.querySelector('#chk3');
const reset = document.querySelector('.reset');

// chỉ được click chọn 1 lần
check1.onclick = () => {
    if (check1.checked === true) {
        check1.disabled = 'true';
    }
}
check2.onclick = () => {
    if (check2.checked === true) {
        check2.disabled = 'true';
    }
}
check3.onclick = () => {
    if (check3.checked === true) {
        check3.disabled = 'true';
    }
}

// reset
reset.onclick = () => {
    check1.disabled = false;
    check1.checked = false;

    check2.disabled = false;
    check2.checked = false;

    check3.disabled = false;
    check3.checked = false;
}