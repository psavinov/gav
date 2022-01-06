import AppContext from "./AppContext";
import AppBlockWithLanguageSelector from "./LanguageSelector";
import { useContext } from "react";

function Description({username}) {
    const context = useContext(AppContext);

    return (
        <AppBlockWithLanguageSelector>
            <span>{context.getString("hello")}, {username}!</span>
            <p>
                {context.getString("years.ago.published")}&nbsp;
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/posts/pavel-savinov_goals-for-2019-are-they-in-line-with-your-activity-6483990814627368960-Zum2">{context.getString("this.post")}</a>
                &nbsp;{context.getString("on.linkedin.tried")}
            </p>
            <p>
                {context.getString("got.feedback")}
            </p>
            <p>
                {context.getString("most.difficult.part")}
            </p>
            <p>
                {context.getString("reference.point")}
            </p>
            <p className="disclaimer">
                {context.getString("price.disclaimer")}
            </p>
            <div>
                {context.getString("source.code")} <a target="_blank" href="https://www.github.com/psavinov/gav" rel="noreferrer">{context.getString("here")}</a>.
            </div>
        </AppBlockWithLanguageSelector>
    );
}

export default Description;
