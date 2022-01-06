import { createContext } from "react";

const AppContext = createContext({
    language: "en",
    setLanguage: () => {},
    getString: () => {}
});

export default AppContext;