Feature: Pruebas

Scenario: Pruebas
  When se abre la pagina principal de open cart
  Then se da clic en la opcion My Account
  Then se selecciona la opcion de registrar
  Given se completa el formulario de registro
  Then se comprueba el correcto registro