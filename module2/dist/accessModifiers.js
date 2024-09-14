"use strict";
{
    class BankAccount {
        constructor(id, balance, name) {
            this._id = id;
            this._balance = balance;
            this.name = name;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    class SavingsAccount extends BankAccount {
        test() {
            this.addDeposit(1000);
        }
    }
    const savingsAccount = new SavingsAccount(1, 1000, 'harry');
    savingsAccount.test();
    console.log(savingsAccount.getBalance());
}
