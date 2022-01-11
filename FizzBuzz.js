const FizzBuzz = (fizzNum, buzzNum) => {
    let outputtext = '';
    const htmlout = document.getElementById("htmlout");
    outputtext = checkfizzbuzzInput(fizzNum);
    if(outputtext !== ''){
        htmlout.innerHTML = `fizzNumには${outputtext}`;
        return;
    }
    outputtext = checkfizzbuzzInput(buzzNum);
    if(outputtext !== ''){
        htmlout.innerHTML = `buzzNumには${outputtext}`;
        return;
    }
    let i = Math.min(fizzNum,buzzNum);
    htmlout.innerHTML = "表示したい文字列";
        for(i; i<=99; i++){
            if(i % fizzNum === 0 && i% buzzNum === 0){
                outputtext += `FizzBuzz ${i}<br>`;
            }
            else if(i % fizzNum === 0){
                outputtext += `Fizz ${i}<br>`;
            }
            else if(i % buzzNum === 0){
                outputtext += `Buzz ${i}<br>`;
            }
        }
    htmlout.innerHTML = outputtext;
}

let checkfizzbuzzInput = (value) => {
//入力値のチェック
    if(value === ''){
        return '空白が入力されています。';
    }
    if(Number.isInteger(Number(value)) === false){
        return '整数値を入力してください。';
    }
    return '';
}