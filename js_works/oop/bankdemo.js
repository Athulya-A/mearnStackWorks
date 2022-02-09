class Bank{
    createAccount(acno,pName,pan,branch,phone,bal){
        this.accountNumber=acno;
        this.personName=pName;
        this.pan=pan;
        this.branch=branch;
        this.phone=phone;
        this.bal=bal;
    }
    withdraw(amount){
        if(amount>this.bal){
            console.log(`transaction failed insufficient balance on ur${this.accountNumber}` );
        }
        else{
            this.bal-=amount
            console.log(`your account ${this.accountNumber} has been debited with amount${amount} you aval bal ${this.bal}`);
        }
    }
    deposit(amount){
        this.bal+=amount;
        console.log(`your account ${this.accountNumber} has been credited with amount${amount} you aval bal ${this.bal}`);
    }
    balanceEnquiry(){
        console.log(`your aval bal=${this.bal}`)
    }
}

var bank=new Bank();
bank.createAccount(1010,"arjun",1234,"kakkanad",789045,2000)
bank.deposit(3000)
bank.balanceEnquiry()
