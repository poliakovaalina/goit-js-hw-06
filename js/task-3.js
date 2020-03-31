import users from './users.js';


const getUsersWithGender = (users, gender) => users.filter(user => {
  if (user.gender === gender) {
    return user.name
// console.log(user.name())
}
});
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
  // getUsersWithGender(users, 'male')
  // console.log(getUsersWithGender)