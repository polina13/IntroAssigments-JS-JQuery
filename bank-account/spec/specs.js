describe('BankAccount', function(){
  it('will create a new BankAccount based on given properties', function() {
    var newAccount = new BankAccount("Eddie", 0, 500);
    expect(newAccount.accountName).to.equal("Eddie");
    expect(newAccount.balance).to.equal(0);
    expect(newAccount.firstDeposit).to.equal(500);
  });

  it('adds a deposit method to the BankAccount', function(){
    var newAccount = new BankAccount("Eddie", 0, 0);
    var inputtedDeposit = 500;
    expect(newAccount.deposit(inputtedDeposit)).to.equal(500);
  });

  it('adds a withDrawal method to the BankAccout', function(){
    var newAccount = new BankAccount("Eddie", 500, 0);
    var inputtedWithDrawal = 500;
    expect(newAccount.withDraw(inputtedWithDrawal)).to.equal(0);
  });
});
