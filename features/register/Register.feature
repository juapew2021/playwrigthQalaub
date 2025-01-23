@Register
Feature: Login

  @SmokeTest @DP-1
  Scenario: Login
    When Ingresa a la pagina principal
    Then Se dirige a registrar un usuario
    When Crea un usuario nuevo
    Then Se visuzaliza el mensaje 'Registration is successful'