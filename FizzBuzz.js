const FizzBuzz = (fizzNum, buzzNum) => {
    let outputtext = '';
    const output = document.getElementById("output");
    output.textContent = null;
    outputtext = checkfizzbuzzInput(fizzNum);
    if(outputtext !== ''){
        const p = document.createElement('p');
        p.textContent = `fizzNumには${outputtext}`
        output.appendChild(p);
        return;
    }
    outputtext = checkfizzbuzzInput(buzzNum);
    if(outputtext !== ''){
        const p = document.createElement('p');
        p.textContent = `buzzNumには${outputtext}`
        output.appendChild(p);
        return;
    }
    const ul = document.createElement('ul');
    output.appendChild(ul);
    for( let i = 1 ; i<=99 ; i++ ) {
        const li = document.createElement('li');
        if(i % fizzNum === 0 && i % buzzNum === 0) {
            li.textContent = `FizzBuzz ${i}`;
            ul.appendChild(li);
        }
        else if(i % fizzNum === 0){
            li.textContent = `Fizz ${i}`;
            ul.appendChild(li);
        }
        else if(i % buzzNum === 0){
            li.textContent = `Buzz ${i}`;
            ul.appendChild(li);
        }
    }
}

const checkfizzbuzzInput = (value) => {
    value = value.trim();
    if(value === ''){
        return '空白が入力されています。';
    }
    if(Number.isInteger(Number(value)) === false) {
        return '整数値を入力してください。';
    }
    return '';
}