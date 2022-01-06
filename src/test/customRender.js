import { render } from '@testing-library/react';
import { getString } from "../strings";
import AppContext from '../AppContext';

export const customRender = (ui, renderOptions) => {
    const language = "en";

    const providerOptions = { 
        language, 
        setLanguage: () => {},  
        getString: (key) => getString(language, key)
    };

    return render(
      <AppContext.Provider value = {providerOptions}>
          {ui}
      </AppContext.Provider>,
      renderOptions,
    )
}