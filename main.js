let i = 1
while (i <= 10) {
    console.log(i);
    i += 1;
}


for (let i = 2; i <= 20; i += 1) {//той самий приклад який ми робили на практиці 
    if (i % 2 !== 0) {// ділибо без остачі, якщо при діленні остачі не має, тобто ценепарне чисто то його пропускаємо
        continue;
    }
    console.log(i);
}



for (let i = 1; i <= 10; i += 1) {
    console.log(`7 x ${i} = ${7 * i}`);// пів години возився з цими верхніми рисочками XD.
}
//вчителька на заміні говорила зо наступна тема є про масиви та ітерацію, тому 4  завдання не робити



let totalSum = 0; // змінна для збереження загальної суми
while (true) {
    let input = prompt("Введіть число:");
    if (input === null) {//null відповідає за cancel
        break;
    }
    if (isNaN(input)) {//якщо не є число інпут(або з правильною логікою якщо інпут не є число)то викликати  alert 
        alert('Було написано не число, спробуйте ще раз');
    } else {//інакше додати це число до суми
        totalSum += totalSum + input;
    }
}
alert(`Загальна сума чисел дорівнює ${totalSum}`);//йой як то тєжко



while (i <= 20) {
    if (i % 3 === 0) {
        i += 1;
        continue;
    }
    console.log(i);
    i += 1;
}
//P.S 