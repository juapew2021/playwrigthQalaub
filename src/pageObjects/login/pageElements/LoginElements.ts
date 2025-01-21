import PageElement from '../../../support/types/PageElement';

class LoginElements {
  public static elements: Record<string, PageElement> = {
    inputEmail: { selector: 'ejemplo@gmail.com', find: 'placeholder' },
    inputPassword: { selector: 'Ingresa tu contraseña', find: 'placeholder' },
    btnLogin: { selector: 'Inicia sesión', find: 'text' },
  };
}

export default LoginElements;
