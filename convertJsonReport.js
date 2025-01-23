const fs = require('fs');
const xml2js = require('xml2js');

// Leer el archivo JSON de Cucumber
fs.readFile('reports/cucumber-report.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error leyendo el archivo JSON:', err);
    return;
  }

  const cucumberReport = JSON.parse(data);
  const testsuite = {
    testsuite: {
      $: {
        name: 'cucumber-js',
        tests: cucumberReport.reduce((total, feature) => total + feature.elements.length, 0),
        failures: 0,
        skipped: 0,
        time:
          cucumberReport.reduce(
            (total, feature) =>
              total +
              feature.elements.reduce(
                (sum, scenario) =>
                  sum + scenario.steps.reduce((s, step) => s + (step.result.duration || 0), 0),
                0,
              ),
            0,
          ) / 1e9,
      },
      testcase: [],
    },
  };

  cucumberReport.forEach((feature) => {
    feature.elements.forEach((scenario) => {
      const scenarioDuration =
        scenario.steps.reduce((sum, step) => sum + (step.result.duration || 0), 0) / 1e9;

      // Filtrar solo tags que contengan IDs de prueba (ej: @DP-123)
      let testProperties = scenario.tags
        .filter((tag) => /^@DP-\d+/.test(tag.name)) // Filtrar por patrón "@DP-"
        .map((tag) => ({
          property: { $: { name: 'test_key', value: tag.name.replace('@', '') } },
        }));

      // Solo agregar el bloque 'properties' si se encuentran tags @DP-xxx
      const testcase = {
        $: {
          classname: feature.name,
          name: scenario.name,
          time: scenarioDuration.toFixed(3),
        },
        // Solo agregar properties si se encontró un test_key
        ...(testProperties.length > 0 && {
          properties: testProperties,
        }),
        'system-out': {
          _: scenario.steps.map((s) => `${s.keyword} ${s.name}... ${s.result.status}`).join('\n'),
        },
      };

      testsuite.testsuite.testcase.push(testcase);
    });
  });

  const builder = new xml2js.Builder();
  const xml = builder.buildObject(testsuite);

  fs.writeFile('reports/cucumber-report.xml', xml, (err) => {
    if (err) {
      console.error('Error escribiendo el archivo XML:', err);
      return;
    }
    console.log('Reporte XML con test_key generado correctamente.');
  });
});
