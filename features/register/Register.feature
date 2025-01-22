@DP-1
Feature: Register

  Scenario: Register
    When Ingresa a la pagina principal
    Then Se dirige a registrar un usuario
    When Crea un usuario nuevo
    Then Se visuzaliza el mensaje 'Registration is successful'