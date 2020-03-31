import users from './users.js';

const calculateTotalBalance = users => users.reduce(function(total, user){
return total + user.balance
},0);

console.log(calculateTotalBalance(users)); // 20916