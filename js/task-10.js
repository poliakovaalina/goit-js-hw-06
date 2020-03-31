import users from './users.js';

const getSortedUniqueSkills = users => 
users.reduce(function(allSkills, user) {
    allSkills.push(...user.skills)
    return allSkills
  },[])
.reduce(function(acc, allSkill){
      // console.log(allSkill) 
return acc.includes(allSkill) ? acc : [...acc, allSkill]
      },[])
.sort();
   
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Это раскрытая версия, которая также работает. То что описано выше, это чейнинг



  // import users from './users.js';

  // const getSortedUniqueSkills = users => 
  // users.reduce(function(allSkills, user) {
  //     allSkills.push(...user.skills)
  //     return allSkills
  //   },[])

//   const a = getSortedUniqueSkills(users).reduce(function(acc, allSkill){
//     // console.log(allSkill) 
// return acc.includes(allSkill) ? acc : [...acc, allSkill]
//     },[])
   

//     a.sort();
 

// console.log(getSortedUniqueSkills(users));
// console.log(a)
// // console.log(a)
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

