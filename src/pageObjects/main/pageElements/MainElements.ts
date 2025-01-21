import PageElement from '../../../support/types/PageElement';

class MainElements {
    public static elements: Record<string, PageElement> = {
    btnLogin: { selector: 'Inicia sesión', find: 'text' },
  };
}

export default MainElements;
