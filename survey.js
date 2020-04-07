const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`What's your name? `, (name) => {
  rl.question(`What's your SIN: `, (sin) => {
      rl.question(`How much did you earn last year: `, (earn) => {
        rl.question(`What's your credit card number: `, (visa) => {
          rl.question(`What's your secret: `, (secret) => {
            rl.question(`What's your password from Facebook: `, (password) => {
              console.log(`\n${name}'s SIN number is ${sin}. \n${name} earned $${earn} last year and his credit card number is ${visa}.\nHis secret is ${secret} and Facebook password is ${password}\n`);       
              rl.close();      
            });     
          });      
        });
      }); 
  });
});

