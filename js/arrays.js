/*
________________________________ЗАДАЧА 1:
Створіть масив arr з елементами 2, 5, 3, 9. Помножте перший елемент масиву на другий, а третій елемент на четвертий. 
Результати додайте і покладіть у змінну result. Виведіть на екран значення цієї змінної.
*/
let arr1 = [2, 5, 3, 9];

const mult01 = arr1[0] * arr1[1];
const mult23 = arr1[2] * arr1[3];
const result = mult01 + mult23;
console.log(result);



/*
________________________________ЗАДАЧА 2:
Створіть масив arr = ['a', 'b', 'c', 'd', 'e']. Зробіть з нього масив ['e', 'd', 'c', 'b', 'a'].
(Додаткових масивів створювати не можна. Тільки додаткову змінну buf, якщо потрібно.)
*/
let arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
//arr2 = arr2.reverse();
//console.log(arr2);

for (let q = 0; q < Math.floor(arr2.length / 2); q++) {
    let buf = arr2.length - 1 - q;
    arr2[q] = arr2.splice(buf, 1, arr2[q])[0];

}
console.log(arr2);


/*
________________________________ЗАДАЧА 3:
Створіть об'єкт pupil з ключами "who", "action", "notes" і їхніми значеннями відповідно "I", "learn", "JavaScript".
Вивести в консоль "I learn JavaScript" за допомогою об'єкта.
*/
let pupil = {
    who: "I",
    action: "learn",
    notes: "JavaScript",
}
console.log(pupil.who + " " + pupil.action + " " + pupil.notes)

let {
    who,
    action,
    notes,
} = pupil;
console.log(who + " " + action + " " + notes);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring



/*
________________________________ЗАДАЧА 4:
До об'єкту в попередній задачі додати ключ "goodMood".
Якщо значення "goodMood" true - вивести ключі "who", "action", "notes", якщо fale - "Life is an ashes".
*/
//let pupil = {
//    who: "I",
//    action: "learn",
//    notes: "JavaScript",
//}

pupil.goodMood = "good";
if (pupil.goodMood) {
    delete pupil.goodMood;
    for (let key in pupil) {
        console.log(pupil[key])
    }
} else {
    console.log("Life is an ashes");
}



/*
________________________________ЗАДАЧА 5:

Дано массив [3, 4, 1, 2, 7]. Відсортуйте його в прямому та зворотному порядку.
*/
let arr40 = [11, 4, 1, 8, 7, 5, 9, 6, 2, 3, 10, 0];
let arr42 = [];
let arr43 = [];

//ascending onder
let swapped = arr40.length - 1;
while (swapped) {
    for (let i = 1; i < arr40.length; i++) {
        if (arr40[i - 1] > arr40[i]) {
            arr40[i - 1] = arr40.splice(i, 1, arr40[i - 1])[0];
        }
    }
    swapped--
}
arr42 = arr40.slice();


//descending
swapped = arr40.length - 1;
while (swapped) {
    for (let i = 1; i < arr40.length; i++) {
        if (arr40[i - 1] < arr40[i]) {
            arr40[i - 1] = arr40.splice(i, 1, arr40[i - 1])[0];
        }
    }
    swapped--
}
arr43 = arr40.slice();


console.log(arr42);
console.log(arr43);

/*fastSort*/
let arrfs = [11, 4, 1, 8, 7, 5, 9, 6, 2, 3, 10, 0];

function fastSort(a, b) {
    return a - b
};
arrfs.sort(fastSort);
console.log(arrfs);
