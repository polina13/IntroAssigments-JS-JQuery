function BankAccount (accountName, balance, firstDeposit) {
  this.accountName = accountName;
  this.balance = balance;
  this.firstDeposit = firstDeposit;
}

BankAccount.prototype.deposit = function(amount){
  this.balance += amount;
  return this.balance;
}

BankAccount.prototype.withDraw = function(amount) {
  this.balance -= amount;
  return this.balance;
}

$(document).ready(function() {
  var account;
  $('form#new-account').submit(function(event){
    event.preventDefault();
    var inputtedAccountName = $('input#name').val();
    var inputtedDeposit = parseInt($("input#initial-deposit").val());

    var newAccount = new BankAccount(inputtedAccountName, 0, inputtedDeposit);

    account = newAccount;

    $("form#bank-account").show();
    $("form#new-account").hide();
    $("#balance1").text(newAccount.deposit(inputtedDeposit));
    $("#account-name").text(newAccount.accountName);
  });

  $('form#bank-account').submit(function(event){
    event.preventDefault();
    var inputtedDeposit = parseInt($("input#initial-deposit").val());
    var inputtedWithDrawal = parseInt($("input#withdrawal").val());

    if(inputtedWithDrawal > 0) {
      $("#balance1").text(account.withDraw(inputtedWithDrawal));
    }
    if(inputtedDeposit > 0) {
      $("#balance1").text(account.deposit(inputtedDeposit));
    }
  });
});
