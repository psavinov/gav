import AppBlockWithLanguageSelector from "./LanguageSelector";
import AppContext from "./AppContext";
import { useContext } from "react";


export const DEFAULT_USERNAME = "Friend";

function Introduction({username, onChange, returning, onKeyPress}) {
    const context = useContext(AppContext);

    return (
        <AppBlockWithLanguageSelector>
            <span>{context.getString("hello")}, {username}!</span>

            {(!returning || username === DEFAULT_USERNAME) && (
                <>
                    <p>{context.getString("default.name.first")}</p>
                    <p>{context.getString("type.your.name")}</p>
                </>
            )}

            {returning && username !== DEFAULT_USERNAME && (
                <>
                    <p>{context.getString("welcome.back")}</p>
                    <p>{context.getString("you.are.not")} {username} {context.getString("prefer.different")}</p>
                </>
            )}

            <div className="app-text-input-label">
                <label htmlFor="username">
                    <b>{context.getString("preferred.name")}&nbsp;</b>
                    <input
                        id="username"
                        className="app-text-input" 
                        type="text" 
                        onChange={(event) => onChange(event.target.value)}
                        onKeyPress={(event) => onKeyPress(event.key)}
                        placeholder={username}
                        autoFocus={true}
                    />
                </label>
            </div>
        </AppBlockWithLanguageSelector>
    );
}

export default Introduction;
