export const DEFAULT_USERNAME = "Friend";

function Introduction({username, onChange, returning, onKeyPress}) {
    return (
        <>
            <div className="app-block">
                <span>Hello, {username}!</span>

                {(!returning || username === DEFAULT_USERNAME) && (
                    <>
                        <p>It seems that it is the first time you are using this app or just prefer the default user name.</p>
                        <p>Please type your name in the box below or keep it empty if you're OK with the default ;).</p>
                    </>
                )}

                {returning && username !== DEFAULT_USERNAME && (
                    <>
                        <p>Welcome back! Great to see you here again. If you're ok with your current user name feel free to skip this step.</p>
                        <p>If you're not {username} and prefer a different user name, please change it in the box below.</p>
                    </>
                )}

                <div className="app-text-input-label">
                    <label htmlFor="username">
                        <b>Preferred name&nbsp;</b>
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
            </div>
        </>

    );
}

export default Introduction;
