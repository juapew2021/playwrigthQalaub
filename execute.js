const { exec } = require('child_process');

// Ejecuta cucumber-js
exec('cucumber-js', (error, stdout, stderr) => {
  console.log(stdout);
  if (stderr) {
    console.error(stderr);
  }

  // Luego de que termine cucumber-js (con éxito o fallo), ejecuta convertJsonReport.js
  exec('node convertJsonReport.js', (err, out, err2) => {
    if (err2) {
      console.error(`Error al ejecutar convertJsonReport.js: ${err2}`);
    } else {
      console.log(out);
    }
  });
});
