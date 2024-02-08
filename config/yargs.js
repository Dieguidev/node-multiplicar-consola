const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar", // descripcion del comando.
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false, // si no se especifica, por defecto es false.
    demandOption: true, // si no se especifica, por defecto es false.
    describe: "Muestra la tabla en consola", // descripcion del comando.
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    demandOption: true,
    describe: "Hasta que numero quieres la tabla", // descripcion del comando.
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true; // si todo esta bien, retorna true. Si no, retorna un error.
  }).argv;

module.exports = argv;
