"use strict";
/* --- Types --- */
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Che",
    bankAccount: bankAccount,
    hobbies: ["Cooking", "Reading"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
