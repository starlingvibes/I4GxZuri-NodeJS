// Using JavaScript, create a "date-matching" application that has the following features:

// Three lists containing names (Group A, Group B and Places), the list can be represented with Object or Array.
// The application should randomly match and produce 2 people at each refresh.
// The result produced should be in the format:
// Group A['name'] and Group B['name'] will be going on a dinner date at Places['name'].
// However, the program should go through the entire list in Group A before repeating names.

const groupA = ['Joan', 'Susan', 'Deborah', 'Olivia', 'Margaret'];
const groupB = ['Chidera', 'Sammy', 'Ferdinand', 'James', 'Peter'];
const places = [
  {
    id: 1,
    name: 'Circa Non Pareil',
  },
  {
    id: 2,
    name: 'Radisson Blu',
  },
  {
    id: 3,
    name: 'Shiro Restaurant and Bar',
  },
  {
    id: 4,
    name: 'The Yellow Chilli',
  },
  {
    id: 5,
    name: 'Sketch',
  },
];

const matcher = Math.round(Math.random() * (groupA.length - 1));

// if I understand the 'However...' part well :-)
for (i = 0; i < groupA.length; i++) {
  console.log(
    `${groupA[i]} and ${groupB[matcher]} will be going on a dinner date at ${places[i].name}`
  );
}
