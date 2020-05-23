const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Gregory Goyle', time: 56}
  ];

const [, ,a,b,c,] = users;


console.log(`En el primer puesto esta: ${c.name} con un tiempo de: ${c.time}, En el segundo puesto esta: ${b.name} con un tiempo de: ${b.time}, En el tercer puesto esta: ${a.name} con un tiempo de: ${a.time}`);