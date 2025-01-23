@Register
Feature: Login

  @SmokeTest @DP-2
  Scenario: Login Temp
    When Ingresa a la pagina principal
    Then Ingresa las credenciales de login
    Then Se visuzaliza el nombre de usuario