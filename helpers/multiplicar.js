const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar, hasta = 10) => {
  try {
    let salida,
      consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${5 * i}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${5 * i}\n`;
    }

    if (listar) {
      console.log("==================================".green);
      console.log(
        `            ${colors.green("Tabla del")} ${colors.blue(base)}`
      );
      console.log("==================================".green);
      console.log(consola);
    }
    // console.log(salida);

    fs.writeFileSync(`./output/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivo };
