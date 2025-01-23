@Register
Feature: Login

  @TEST_SCRUM-90
  Scenario: Registro Exitoso
    When Ingresa a la pagina principal
    Then Se dirige a registrar un usuario
    When Crea un usuario nuevo
    Then Se visuzaliza el mensaje 'Registration is successful'
