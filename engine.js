var partTwo = document.querySelector('.part2');
var reset = document.querySelector('#reset');
var del = document.querySelector('#del');
var equals = document.querySelector('#equals');
var seven =  document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six =  document.querySelector("#six");
var plus =  document.querySelector("#plus");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var minus = document.querySelector("#minus");
var comma = document.querySelector("#comma");
var zero = document.querySelector("#zero");
var divided = document.querySelector("#divided");
var times = document.querySelector("#times");
var tab = [];
var fus = '';
var e = false;

zero.addEventListener('click', bntZero);
function bntZero() {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.textContent = partTwo.textContent + zero.textContent;
    tab.push(zero.value);
}
one.addEventListener('click', bntOne);
function bntOne () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.textContent = partTwo.textContent + one.textContent;
    tab.push(one.textContent);
}
two.addEventListener('click', bntTwo);
function bntTwo () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.textContent = partTwo.textContent + two.textContent;
    tab.push(two.textContent);
}
three.addEventListener('click', bntThree);
function bntThree () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.textContent = partTwo.textContent + three.textContent;
    tab.push(three.textContent);
}
five.addEventListener('click', bntFive);
function bntFive () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.textContent = partTwo.textContent + five.textContent;
    tab.push(five.textContent);
}
four.addEventListener('click', bntFour);
function bntFour () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.textContent = partTwo.textContent + four.textContent;
    tab.push(four.textContent);
}
six.addEventListener('click', bntSix);
function bntSix () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.textContent = partTwo.textContent + six.textContent;
    tab.push(six.textContent);
}
seven.addEventListener('click', bntSeven);
function bntSeven () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.textContent = partTwo.textContent + seven.textContent;
    tab.push(seven.textContent);
}
eight.addEventListener('click', bntEight);
function bntEight () {
    if (e) {
    partTwo.innerHTML = '';
    e=false;
    }
    partTwo.textContent = partTwo.textContent + eight.textContent;
    tab.push(eight.textContent);
}
nine.addEventListener('click', bntNine);
function bntNine () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.textContent = partTwo.textContent + nine.textContent;
    tab.push(nine.textContent);
}
plus.addEventListener('click', bntPlus);
function bntPlus () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.textContent = partTwo.textContent + plus.textContent;
    tab.push(plus.textContent);
}
comma.addEventListener('click', bntComma);
function bntComma () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.appendChild(document.createTextNode("."));
    tab.push('.');
    alert('tab');
}
minus.addEventListener('click', bntMinus);
function bntMinus () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.textContent = partTwo.textContent + minus.textContent;
    tab.push(minus.textContent);
}
times.addEventListener('click', bntTimes);
function bntTimes () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.textContent = partTwo.textContent + times.textContent;
    tab.push('*');
}
divided.addEventListener('click', bntDivided);
function bntDivided () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.textContent = partTwo.textContent + divided.textContent;
    tab.push(divided.textContent);
}
del.addEventListener('click', bntDel);
function bntDel () {
    if (e) {
        partTwo.innerHTML = '';
        e=false;
    }
    partTwo.innerHTML = partTwo.textContent.slice(0,-1);
    tab.pop();
}
equals.addEventListener('click',bntEquals);
function bntEquals() {
    var test1 = /[0-9](?=[+.x\/-])/;
    var test2 =/^[0-9]/;
    var test3 =/[0-9]$/;
    var test4 =/^[-]/;
    var test5 = /[+.x\/-](?=[0-9])/;
    var test6 = /^[0](?![0-9])/;
    if (test1.test(partTwo.textContent)==true && test3.test(partTwo.textContent)==true && test5.test(partTwo.textContent)==true && (test2.test(partTwo.textContent)==true || test6.test(partTwo.textContent)==true || test4.test(partTwo.textContent)==true)) {
        partTwo.innerHTML = eval(tab.join(''));
    }else{
        partTwo.innerHTML = 'error';
    }
    e=true;
    tab = [];
}
reset.addEventListener('click',bntRest);
function bntRest() {
    partTwo.innerHTML = '';
    tab = [];
}