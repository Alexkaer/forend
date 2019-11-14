
let titles = [
    "这是我的第一招",
    "这是我的第二招",
    "这是我的第三招",
    "这是我的大招",
    "表演结束"
];

function addText(){
    let index = Math.floor(Math.random()*titles.length + 0);
    let div = document.createElement('div');
    let textNode = document.createTextNode(titles[index]);
    div.appendChild(textNode);
    div.style.color = "#FE7235";
    div.style.lineHeight = 2;
    let contentdiv = document.getElementById('con');
    contentdiv.appendChild(div);
}