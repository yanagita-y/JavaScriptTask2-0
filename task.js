const task = () => {
    let input = "";
    while(input !== "東京") {
        input = prompt("日本の首都は？");
        if(input === "東京") {
            alert("正解です！");
        }else{
            alert("不正解です！");  
        }
    }
}