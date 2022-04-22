
let textArea = document.querySelector("textarea");

let upperBtn = document.getElementById("upper-case");
upperBtn.addEventListener("click",function() {
    textArea.value = textArea.value.toUpperCase();
});

let lowerBtn = document.getElementById("lower-case");
lowerBtn.addEventListener("click",function() {
    textArea.value = textArea.value.toLowerCase();
});

let properBtn = document.getElementById("proper-case");
properBtn.addEventListener("click",function() {
    textArea.value = textArea.value.toLowerCase();
    let textAreaSplit = textArea.value.split(' ');
    for (let i = 0; i<textAreaSplit.length; i++) {
        textAreaSplit[i] = textAreaSplit[i].charAt(0).toUpperCase() + textAreaSplit[i].slice(1);
    }
    textArea.value = textAreaSplit.join(' ');
});

let sentenceBtn = document.getElementById("sentence-case");
sentenceBtn.addEventListener("click",function() {
    textArea.value = textArea.value.toLowerCase();
    let textAreaSplit = textArea.value.split('.');
    for (let i = 0; i<textAreaSplit.length; i++) {
        console.log(textAreaSplit[i].trim());
        let sentence = textAreaSplit[i].trim();
        textAreaSplit[i] = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
    textArea.value = textAreaSplit.join('. ').trim();
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

let addTextToFileBtn = document.getElementById("save-text-file");
addTextToFileBtn.addEventListener("click",function(){
    download("text.txt",textArea.value);
});