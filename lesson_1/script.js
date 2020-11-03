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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed(1);
        alert(appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Ошибочка...!");
        }
    },
    checkSavings: function() {
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?", "в рубляx"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i < 4; i++){
            let opt = +prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        for(let i = 0; i < 1; i++){
            let items = prompt("Что принесет дополнительный доход? (перечислить через запятую", "");
            if( (typeof(items) == 'string') && items != '' && (typeof(items) != null)){
                appData.income = items.split(', ');
                appData.income.push(prompt("Maybe smth else?"));
            } else{
                i--;
            }
        }
        alert("Ways to get some extra money:");
        appData.income.forEach( function(item, i) {
            alert(item + ' : ' + (i+1));
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}
 