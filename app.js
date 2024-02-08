const argv = require("./config/yargs");
require("colors");
const { crearArchivo } = require("./helpers/multiplicar");

console.clear();

// console.log(argv);
// console.log("base yargs", argv.b);

// const base = 4;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
