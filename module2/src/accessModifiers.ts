{
    class BankAccount {
        private _id:number;
        protected _balance:number;
        public name:string;

        constructor(id:number,balance:number,name:string){
            this._id = id;
            this._balance = balance;
            this.name = name;
        }

        protected addDeposit (amount:number){
            this._balance = this._balance + amount;
        }
        public getBalance(){
            return this._balance;
        }
    }

    class SavingsAccount extends BankAccount {
      test(){
        this.addDeposit(1000);
      }
    }

    const savingsAccount = new SavingsAccount(1,1000,'harry');
    savingsAccount.test();
    console.log(savingsAccount.getBalance());
}