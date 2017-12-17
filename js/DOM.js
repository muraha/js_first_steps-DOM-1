/*************************
ЗАДАЧА 6 (DOM):
Створіть кнопку. При натисненні на неї виведіть вікно з текстом "УРА!"
*/
//let btn = document.querySelector('button');
let btn = document.getElementById('t67');
btn.addEventListener('click', function () {
    alert('Woohoo!!');
})


/*************************
ЗАДАЧА 7 (DOM):
Створіть кнопку і поле для вводу. При натисненні на кнопку записати у поле значення "Я текст в input".
*/
//let btn = document.querySelector('button');
let elem = document.getElementsByName('input');
btn.addEventListener('click', function () {
    elem["0"].childNodes["0"].textContent = "Я текст в textarea"
})


/*************************
ЗАДАЧА 8 (DOM):
Створіть кнопку і 2 поля для вводу. При натисненні на кнопку значення в першому полі записати у друге поле, а значення другого - у перше.
При цьому текст кнопки має стати "Натиснена".
*/
let btn8 = document.getElementById('t8');
let input81 = document.querySelector('div:nth-child(2) > input:first-of-type');
let input82 = document.querySelector('div:nth-child(2) > input:last-of-type');
btn8.addEventListener('click', function () {
    let a = input81.value;
    input81.value = input82.value;
    input82.value = a;
    btn8.childNodes["0"].nodeValue = "CLICKED";
})

/*************************
ЗАДАЧА 9 (DOM):
Створіть блок червоного кольору і чорною рамкою. При натисненні на нього змініть його колір на жовтий, а колір рамки на зелений.
*/
let block9 = document.querySelector('div:nth-child(3) > div');
block9.addEventListener('click', function () {
    block9.attributes["0"].textContent = "border:3px solid #0F0; background-color: #ff0; height: 20px"
})


/*************************
ЗАДАЧА 10 (DOM):
Задача в доданому відео.
Одна кнопка додає пункти в кінець списку, інша приберає пункти з кінця списку.
*/
let btn101 = document.querySelector('div:nth-child(4) > button:first-of-type');
let btn102 = document.querySelector('div:nth-child(4) > button:last-of-type');
let ul10 = document.querySelector('ul');
btn101.addEventListener('click', function () {
    let li = document.createElement('li');
    ul10.appendChild(li);

    let textnode = document.createTextNode("Point " + ul10.children.length);
    li.appendChild(textnode);
    /*
    line 60-61 can be rewritten in the next way. WHY is it working?)
    li.textContent = ("Point " + ul.children.length);
    */
})
btn102.addEventListener('click', function () {
    ul10.removeChild(ul10.children[ul10.children.length - 1])
})


/*************************
ЗАДАЧА 11 (DOM):
Задача у доданому відео.
Ускладнений варіант попередньої задачі.
Одна кнопка додає пункти в початок списку. При чому доданий пункт має номер 1, у всіх решти пунктів номери зсовуються.
Також для помічення доданих пунктів на початку вставляється зірочка.
Друга кнопка видаляє пункти з початку списку. При чому знову ж таки нумерація змінюється.
*/
let btn111 = document.querySelector('div:nth-child(5) > button:first-of-type');
let btn112 = document.querySelector('div:nth-child(5) > button:last-of-type');
let ul11 = document.querySelector('div:nth-child(5) > ul');
btn111.addEventListener('click', function () {
    let li = document.createElement('li');
    ul11.insertBefore(li, ul11.childNodes[0]);
    li.textContent = ("*Point " + 1);
    for (let i = 2; i <= ul11.children.length; i++) {
        if (ul11.children[i - 1].textContent.slice(0, 1) === "*") {
            ul11.children[i - 1].textContent = "*Point " + i
        } else {
            ul11.children[i - 1].textContent = "Point " + i
        }
    }
})
btn112.addEventListener('click', function () {
    ul11.removeChild(ul11.children[0])
    for (let i = 1; i <= ul11.children.length; i++) {
        if (ul11.children[i - 1].textContent.slice(0, 1) === "*") {
            ul11.children[i - 1].textContent = "*Point " + i
        } else {
            ul11.children[i - 1].textContent = "Point " + i
        }
    }
})
