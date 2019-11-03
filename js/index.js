import {foo,bar} from "./export";
import data from '../json/data.json';
import icon from "../img/icon.png";
import xmlData from '../xml/data.xml';
import '../css/index.css';
import printMe from "./print";
document.write('使用webpack打包');
document.write("<br>"+foo(3));
document.write("<br>"+bar(6));
document.write(JSON.stringify(data) + '<br/>')

function readerImg(){
    var elem = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHTML = "click me and check the console!";
    btn.onclick = printMe;
    elem.appendChild(btn);
    elem.style.width = '200px';
    elem.style.height = '200px';
    var img = new Image();
    img.src = icon;
    elem.appendChild(img);
    return elem;
}
document.body.appendChild(readerImg());
console.log(xmlData);