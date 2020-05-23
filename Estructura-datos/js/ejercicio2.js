const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Gregory Goyle', time: 56}
  ];

const [, ,a,b,c,] = users;
const {name:nombreA, time:tiempoA}=a;
const {name:nombreB, time:tiempoB}=b;
const {name:nombreC, time:tiempoC}=c;

console.log(`En el primer puesto esta: ${nombreC} con un tiempo de: ${tiempoC}, En el segundo puesto esta: ${nombreB} con un tiempo de: ${tiempoB}, En el tercer puesto esta: ${nombreA} con un tiempo de: ${tiempoA}`);