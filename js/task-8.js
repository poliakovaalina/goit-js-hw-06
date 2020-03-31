import users from './users.js';

const getUsersWithFriend = (users, friendName) => users.filter(function(user){
return user.friends.includes(friendName) 
})

  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
