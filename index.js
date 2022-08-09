/*--------------------------------------
  print the people who like coding, 
  using map and filter methods.

  I want to go through an array of people and their interests.

  -------------------------------*/

// a variable containing data

let people = [
  { id: '1', name: 'ford ', interest: 'coding' },

  { id: '2', name: 'xavier ', interest: 'coding' },

  { id: '3', name: 'frey!!! ', interest: 'dancing' },

  { id: '4', name: 'yara ', interest: 'dancing' },

  { id: '5', name: 'mac ', interest: 'dancing' },
]

// filters and maps to find people who have interest in coding
let coders = people

  .filter(function (people) {
    return people.interest === 'coding'
  })
  .map(function (people) {
    return people.name
  })

// filters and maps to find people who have interest in dancing
let dancers = people
  .filter(function (people) {
    return people.interest === 'dancing'
  })
  .map(function (people) {
    return people.name
  })

console.log('coders are: ' + coders)
console.log('dancers are: ' + dancers)
