let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let firstAnsw = prompt("Введите обязательную статью расходов в этом месяце");
let secondAnsw = prompt("Во сколько обойдется?");

let appDate = {
    money,
    timeData: time,
    expenses:{
        firstAnsw : secondAnsw
    },
    optionlExpenses:{},
    income: [],
    savings: false
}

alert(money/30);

console.log(appDate);