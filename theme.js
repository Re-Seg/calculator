var body = document.querySelector('body');
var flied = document.querySelector('#t-flied');
var button = document.querySelector('#bnt');
var number = document.querySelector('#t-number');
var tOne = document.querySelector('#t-one');
var tTwo = document.querySelector('#t-two');
var tThree = document.querySelector('#t-three');
var partTwo = document.querySelector('.part2');
var partThree = document.querySelector('.part3');
var key = document.querySelectorAll('.button');
var reset = document.querySelector('#reset');
var del = document.querySelector('#del');
var equals = document.querySelector('#equals');
var e = 1;
var a = 0;
var r = false;
var keys = Array.from(key);
button.addEventListener('click', theme);
flied.addEventListener('click', theme);
function theme() {
    if(e<2){
        button.style.oTransform = 'translateX(12.5px)';
        button.style.mozTransform = 'translateX(12.5px)';
        button.style.webkitTransform = 'translateX(12.5px)';
        button.style.msTransform = 'translateX(12.5px)';
        button.style.transform = 'translateX(12.5px)';
        body.style.backgroundColor = 'hsl(0, 0%, 90%)';
        body.style.color = 'hsl(60, 10%, 19%)';
        flied.style.background = 'hsl(0, 5%, 81%)';
        button.style.background = 'hsl(25, 98%, 40%)';
        button.addEventListener('mousemove',but1);
        function but1() {
            button.style.background = 'hsl(25, 98%, 60%)';
        }
        button.addEventListener('mouseout',but2);
        function but2() {
            button.style.background = 'hsl(25, 98%, 40%)';
        }
        partTwo.style.background = 'hsl(0, 0%, 93%)';
        partThree.style.background = 'hsl(0, 5%, 81%)';
        while (a<15) {
            keys[a].style.boxShadow = '1px 3px 0.5px hsl(35, 11%, 61%)';
            keys[a].style.backgroundColor = 'hsl(45, 7%, 89%)';
            keys[a].style.color = 'hsl(60, 10%, 19%)';
            keys[a].addEventListener('mousemove',keys1);
            function keys1() {
                this.style.backgroundColor = 'hsl(45, 7%, 99%)';
            } 
            keys[a].addEventListener('mouseout',keys2);
            function keys2 () {
                this.style.backgroundColor = 'hsl(45, 7%, 89%)';
            }
            a++;
        }
        a=0;
        equals.style.background = 'hsl(25, 98%, 40%)';
        equals.style.boxShadow = '1px 3px 0.5px hsl(25, 99%, 27%)';
        equals.style.color = 'hsl(0, 0%, 100%)';
        equals.style.color = 'hsl(0, 0%, 100%)';
        equals.addEventListener('mousemove',equal1);
        function equal1() {
            equals.style.background = 'hsl(25, 98%, 60%)';
        }
        equals.addEventListener('mouseout',equal2);
        function equal2() {
            equals.style.background = 'hsl(25, 98%, 40%)';
        }
        del.style.background = 'hsl(185, 42%, 37%)';
        del.style.boxShadow = '1px 3px 0.5px hsl(185, 58%, 25%)';
        del.style.color = 'hsl(0, 0%, 100%)';
        del.addEventListener('mousemove',Del1);
        function Del1(){
            del.style.background = 'hsl(185, 42%, 57%)';
        }
        del.addEventListener('mouseout',Del2);
        function Del2() {
            del.style.background = 'hsl(185, 42%, 37%)';
        }
        reset.style.background = 'hsl(185, 42%, 37%)';
        reset.style.boxShadow = '1px 3px 0.5px hsl(185, 58%, 25%)';
        reset.style.color = 'hsl(0, 0%, 100%)';
        reset.addEventListener('mousemove',reset1);
        function reset1(){
            reset.style.background = 'hsl(185, 42%, 57%)';
        }
        reset.addEventListener('mouseout',reset2);
        function reset2() {
            reset.style.background = 'hsl(185, 42%, 37%)';
        }
        if (r==false) {
            e=2; 
        }else{
            e=3
        }
    }else if(e<3) {
        button.style.oTransform = 'translateX(25px)';
        button.style.mozTransform = 'translateX(25px)';
        button.style.webkitTransform = 'translateX(25px)';
        button.style.msTransform = 'translateX(25px)';
        button.style.transform = 'translateX(25px)';
        body.style.backgroundColor = 'hsl(268, 75%, 9%)';
        body.style.color = 'hsl(52, 100%, 62%)';
        flied.style.background = 'hsl(268, 71%, 12%)';
        button.style.background = 'hsl(176, 100%, 44%)';
        button.addEventListener('mousemove',but1);
        function but1() {
            button.style.background = 'hsl(176, 100%, 64%)';
        }
        button.addEventListener('mouseout',but2);
        function but2() {
            button.style.background = 'hsl(176, 100%, 44%)';
        }
        partTwo.style.background = 'hsl(268, 71%, 12%)';
        partThree.style.background = 'hsl(268, 71%, 12%)';
        while (a<15) {
            keys[a].style.boxShadow = '1px 3px 0.5px hsl(290, 70%, 36%)';
            keys[a].style.backgroundColor = 'hsl(268, 47%, 21%)';
            keys[a].style.color = 'inherit'; 
            keys[a].addEventListener('mousemove',keys1);
            function keys1() {
                this.style.backgroundColor = 'hsl(268, 47%, 41%)';
            } 
            keys[a].addEventListener('mouseout',keys2);
            function keys2 () {
                this.style.backgroundColor = 'hsl(268, 47%, 21%)';
            }
            a++;
        }
        a=0;
        equals.style.background = 'hsl(176, 100%, 44%)';
        equals.style.boxShadow = '1px 3px 0.5px hsl(177, 92%, 70%)';
        equals.style.color = 'hsl(198, 20%, 13%)';
        equals.addEventListener('mousemove', equal1);
        function equal1() {
            equals.style.background = 'hsl(176, 100%, 64%)';
        }
        equals.addEventListener('mouseout', equal2);
        function equal2() {
            equals.style.background = 'hsl(176, 100%, 44%)';
        }
        del.style.background = 'hsl(281, 89%, 26%)';
        del.style.boxShadow = '1px 3px 0.5px hsl(285, 91%, 52%)';
        del.style.color = 'hsl(0, 0%, 100%)';
        del.addEventListener('mousemove', Del1);
        function Del1(){
            del.style.background = 'hsl(281, 89%, 46%)';
        }
        del.addEventListener('mouseout', Del2);
        function Del2() {
            del.style.background = 'hsl(281, 89%, 26%)';
        }
        reset.style.background = 'hsl(281, 89%, 26%)';
        reset.style.boxShadow = '1px 3px 0.5px hsl(285, 91%, 52%)';
        reset.style.color = 'hsl(0, 0%, 100%)';
        reset.addEventListener('mousemove', reset1);
        function reset1(){
            reset.style.background = 'hsl(281, 89%, 46%)';
        }
        reset.addEventListener('mouseout', reset2);
        function reset2() {
            reset.style.background = 'hsl(281, 89%, 26%)';
        }
        e=1;
        r=true;
    }else {
        button.style.oTransform = 'translateX(0px)';
        button.style.mozTransform = 'translateX(0px)';
        button.style.webkitTransform = 'translateX(0px)';
        button.style.msTransform = 'translateX(0px)';
        button.style.transform = 'translateX(0px)';
        body.style.backgroundColor = 'hsl(222, 26%, 31%)';
        body.style.color = 'hsl(0, 0%, 100%)';
        flied.style.background = 'hsl(223, 31%, 20%)';
        button.style.background = 'hsl(6, 63%, 50%)';
        button.addEventListener('mousemove',but1);
        function but1() {
            button.style.background = 'hsl(6, 63%, 70%)';
        }
        button.addEventListener('mouseout',but2);
        function but2() {
            button.style.background = 'hsl(6, 63%, 50%)';
        }
        partTwo.style.background = 'hsl(224, 36%, 15%)';
        partThree.style.background = 'hsl(223, 31%, 20%)';
        while (a<15) {
            keys[a].style.boxShadow = '1px 3px 0.5px hsl(28, 16%, 65%)';
            keys[a].style.backgroundColor = 'hsl(30, 25%, 89%)';
            keys[a].style.color = 'hsl(221, 14%, 31%)';
            keys[a].addEventListener('mousemove',keys1);
            function keys1 () {
                this.style.backgroundColor = 'hsl(30, 25%, 100%)';
            } 
            keys[a].addEventListener('mouseout',keys2);
            function keys2 () {
                this.style.backgroundColor = 'hsl(30, 25%, 89%)';
            }
            a++;
        }
        a=0;
        equals.style.background = 'hsl(6, 63%, 50%)';
        equals.style.boxShadow = '1px 3px 0.5px hsl(6, 70%, 34%)';
        equals.style.color = 'hsl(0, 0%, 100%)';
        equals.addEventListener('mousemove',equal1);
        function equal1() {
            equals.style.background = 'hsl(6, 63%, 70%)';
        }
        equals.addEventListener('mouseout',equal2);
        function equal2() {
            equals.style.background = 'hsl(6, 63%, 50%)';
        }
        del.style.background = 'hsl(222, 26%, 40%)';
        del.style.boxShadow = '1px 3px 0.5px hsl(221, 14%, 31%)';
        del.style.color = 'hsl(0, 0%, 100%)';
        del.addEventListener('mousemove',Del1);
        function Del1(){
            del.style.background = 'hsl(225, 21%, 49%)';
        }
        del.addEventListener('mouseout',Del2);
        function Del2() {
            del.style.background = 'hsl(222, 26%, 40%)';
        }
        reset.style.background = 'hsl(222, 26%, 40%)';
        reset.style.boxShadow = '1px 3px 0.5px hsl(221, 14%, 31%)';
        reset.style.color = 'hsl(0, 0%, 100%)';
        reset.addEventListener('mousemove',reset1);
        function reset1(){
            reset.style.background = 'hsl(225, 21%, 49%)';
        }
        reset.addEventListener('mouseout',reset2);
        function reset2() {
            reset.style.background = 'hsl(222, 26%, 40%)';
        }
        e=1;
        r=false;
    }
}
tOne.addEventListener('click', Tone);
function Tone() {
    e=3;
    theme();
}
tTwo.addEventListener('click', Ttwo);
function Ttwo() {
    e=1;
    theme();
}
tThree.addEventListener('click', Tthree);
function Tthree() {
    e=2;
    theme();
}