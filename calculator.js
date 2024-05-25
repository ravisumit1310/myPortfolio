let answer = "";
const button = document.querySelectorAll('.keys');

Array.from(button).forEach((keys)=>{
    keys.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            answer = eval(answer);
            document.querySelector('input').value = answer;
        }else if(e.target.innerHTML== 'AC' || e.target.innerHTML == 'C'){
            answer = "";
            document.querySelector('input').value = answer;
        }else{
            console.log(e.target);
            answer = answer + e.target.innerHTML;
            document.querySelector('input').value = answer;
        }
    })
});