'use strict';
let money,time;

function start(){
    money = +prompt("Ваш бюджет на месяц?","в рублях");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while( isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?","в рублях");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: true
};

function chooseExpenses() {
    for(let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяцев:", ""),
            b = +prompt("Во сколько обойдется?", "");
    
        if( (typeof(a)) === 'string'&& (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
                console.log("Done");
                appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed(1);
    alert(appData.moneyPerDay);
}

function detectLevel() {                                                // Расчет уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Ошибочка...!");
    }
}
detectLevel();

function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?", "в рубляx"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses(){
    for(let i = 1; i < 4; i++){
        let opt = +prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = opt;
    }
}
chooseOptExpenses();
 