#!/usr/bin/env node
import inquirer from "inquirer";

let yourBalance = 20000; // account total amount

let Pin = 28271; // account pin
async function repeatTask() {
  let accountPin = await inquirer.prompt(
    [
      {
        
        message: "Enter Your Account Pin",
        name: "password",
        type: "number",
      }
    ]
  )
  //conditional statement
  if (accountPin.password === Pin) {
    console.log("Login succesfull"); //if user enter write pin it login else it give "you enter wrong pin"

    let operationAns = await inquirer.prompt(
      [
        {
          message: "What you want to do",
          name: "operation",
          type: "list",
          choices: ["Withdraw","DepositMoney", "checkBalance", "FastCash", "MoneyTransfer"], 
        }
      ]
    )
    if (operationAns.operation === "Withdraw") {
      let amountAns = await inquirer.prompt(
        [
          {
          message: "Enter your amount Here",
          name: "withdrawcash",
          type: "number",
          }
        ]
      )
       
      if (amountAns.withdrawcash > yourBalance) { //if user entered amount is greater than user balance
        console.log("You Have insufficiant Balance"); //it print your balance is insufficiant
        console.log(`Your Current amount is:${yourBalance}$`);
      } else if (amountAns.withdrawcash<0) {
        console.log("You Entered Invalid amount");
      } else {
        console.log("Thank You For Using Our ATM");
        console.log(`Your remaining balance is:${yourBalance - amountAns.withdrawcash}$`);
        
      }
    } else if (operationAns.operation === "checkBalance") {
      console.log(`Your Current Balance Is: ${yourBalance}$`); //for checkbalance you may select one option from above choices
    } else if (operationAns.operation === "FastCash") {
      //for fastcash you select fastcash option from above choices
      let fastcash1 = await inquirer.prompt(
        [
          {
            message: "How Much Cash You want to fast cash",
            type: "list",
            name: "fastcash",
            choices: [500, 1000, 5000, 10000, 20000, 50000],
          }
        ]
      )
      if (fastcash1.fastcash <= yourBalance) {
        console.log("Thank You For Using Our ATM");
        console.log(`Your Remaning amount is :${yourBalance - fastcash1.fastcash}$`);
      } else {
        console.log("You Have incufficiant Balance");
        console.log(`Your Current amount is:${yourBalance}$`);
      }
    } else if (operationAns.operation === "MoneyTransfer") {
      await inquirer.prompt(
        [
          {
            message:"Enter account number",
            name:"useraccount",
            type:"number"
          }
        ]
      )
      let moneytransfer1 = await inquirer.prompt(
        [
          {
            message: "How much cash you want to transfer.(write Amount)",
          name: "cashtransfer",
          type: "number",
      
          }
        ]
      )   
      if (moneytransfer1.cashtransfer > yourBalance) {
        console.log("you have incufficiant Balance");
        console.log(`your current balance is:${yourBalance}$`);
      } else if (moneytransfer1.cashtransfer<0) {
        console.log("You Entered Invalid amount");
      } else {
        console.log("Thank You For Using Our ATM");

        console.log(`Your Remaining balance is:${yourBalance - moneytransfer1.cashtransfer}$`);
      }
    }
    else if(operationAns.operation==="DepositMoney"){
      
      let depositmoney=await inquirer.prompt
      (
          [
              { 
                name:"cashdeposit",
                message:"How Much Money You Want To Deposit.(Write Amount)",
                type:"number"  
              }
          ]
      )
            if(depositmoney.cashdeposit<0){
            console.log("Please Enter Valid Amount");
           }
           else{
            console.log("your money is successfully Deposit");
            console.log(`Your Current Amount Is:${yourBalance+=depositmoney.cashdeposit}$`); 
           }
        }
  
  } else {
    console.log("You Enter Invalid Pin");
    return repeatTask();
  }
}
repeatTask();
