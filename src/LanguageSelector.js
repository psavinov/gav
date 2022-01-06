import AppContext from "./AppContext";

function LanguageSelector() {
    return (
        <AppContext.Consumer>
            {({language, setLanguage}) => (
                <div className="language-selector">
                    <img 
                        className={`language-selector-image${language === "en" ? " selected" : ""}`}
                        src="/gav/en.png" 
                        alt="Switch to English" 
                        onClick={() => setLanguage("en")}
                    />
                    <img 
                        className={`language-selector-image${language === "ru" ? " selected" : ""}`}
                        src="/gav/ru.png" 
                        alt="Switch to Russian"                         
                        onClick={() => setLanguage("ru")}
                        />
                </div>
            )}
        </AppContext.Consumer>
    );
}

function AppBlockWithLanguageSelector({children}) {
    return (
        <div className="app-block">
            <LanguageSelector />
            {children}
        </div>
    );
}

export default AppBlockWithLanguageSelector;
