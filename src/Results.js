import ReactTooltip from "react-tooltip";
import { useContext } from "react";
import AppContext from "./AppContext";
import AppBlockWithLanguageSelector from "./LanguageSelector";
import { AVAILABLE_VALUES } from "./availableValues";

function Results({goals, values, valueRatings}) {
    const context = useContext(AppContext);

    const valuesWithoutGoals = getValuesWithoutGoals(values, goals);
    const goalWithoutValues = getGoalsWithoutValues(goals);
    const highPriorityGoals = getHighPriorityGoals(goals);
    const lowPriorityValues = getLowPriorityValues(values, valueRatings);
    const lowPriorityGoals = getLowPriorityGoals(goals);
    const valueScores = getValueScores(values, valueRatings, goals);
    const averageGoalScores = getAverageGoalScores(values, goals);

    return (
        <AppBlockWithLanguageSelector>
            <span>{context.getString("we.are.done")}</span>

            <p>{context.getString("thanks.contact")} <a href="https://www.linkedin.com/in/pavel-savinov" target="_blank" rel="noreferrer">{context.getString("let.me.know")}</a>.</p>

            <h4>{context.getString("here.results")}:</h4>
            <ol className="results-list">
            {valuesWithoutGoals.length > 0 && (
                <li>
                    <p>{context.getString("values.no.goals")}:</p>
                    <ul>
                        {valuesWithoutGoals.map((value, index) => (
                            <li key={index}>{AVAILABLE_VALUES[context.language].find(item => item.id === value)?.label || value}</li>
                        ))}
                    </ul>
                    <p>{context.getString("values.no.goals.desc1")}</p>
                    <p>{context.getString("values.no.goals.desc2")}</p>
                </li>
            )}

            {goalWithoutValues.length > 0 && (
                <li>
                    <p>{context.getString("goals.no.values")}:</p>
                    <ul>
                        {goalWithoutValues.map((goal, index) => (
                            <li key={index}>{goal.name}</li>
                        ))}
                    </ul>
                    <p>
                        {context.getString("goals.no.values.desc1")}
                    </p>
                    <p>
                        {context.getString("goals.no.values.desc2")}
                    </p>
                </li>
            )}

            {highPriorityGoals.length > 0 && highPriorityGoals.length >= Math.ceil(goals.length / 2) && (
                <li>
                    <p>{context.getString("half.high.pr.goals")}</p>
                    <p>{context.getString("half.high.pr.goals.desc1")}</p>
                    <p>{context.getString("half.high.pr.goals.desc2")}</p>
                </li>
            )}

            {lowPriorityValues.length > 0 && lowPriorityValues.length >= Math.ceil(values.length * 0.75) && (
                <li>
                    <p>{context.getString("low.pr.values")}</p>
                    <p>{context.getString("low.pr.values.desc1")}</p>
                    <p>{context.getString("low.pr.values.desc2")}</p>
                </li>
            )}

            {lowPriorityGoals.length > 0 && lowPriorityGoals.length >= Math.ceil(goals.length * 0.75) && (
                <li>
                    <p>{context.getString("low.pr.goals")}</p>
                    <p>{context.getString("low.pr.goals.desc")}</p>
                </li>
            )}

                <li>
                    <h5>{context.getString("final.scores")}:</h5>
                    <table className="scores-table">
                        <thead>
                            <tr>
                                <th>{context.getString("value")}</th>
                                <th className="rating-column">{context.getString("score")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(valueScores).map((value, index) => {
                                let valueScoreClass = "value-green";
                                let hintText = context.getString("everything.ok");
                                let hintType = "success";

                                if (valueScores[value] > 0 && valueScores[value] < 3) {
                                    valueScoreClass = "value-orange";
                                    hintType = "warning";
                                } else if (valueScores[value] >= 3) {
                                    valueScoreClass = "value-red";
                                    hintType = "error";
                                }

                                if (valueScores[value] !== 0 && averageGoalScores[value] > valueRatings[value]) {
                                    hintText = context.getString("too.much.effort");
                                } else if (valueScores[value] !== 0 && averageGoalScores[value] < valueRatings[value]) {
                                    hintText = context.getString("not.enough.goals");
                                }

                                return (
                                    <tr key={index}>
                                        <td>{AVAILABLE_VALUES[context.language].find(item => item.id === value)?.label || value}</td>
                                        <td className={`rating-column value-score ${valueScoreClass}`}>
                                            {valueScores[value]}
                                            &nbsp;
                                            <span className="value-hint" data-tip={hintText} data-type={hintType} onClick={()=>{}}>&#63;</span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    
                    {!valuesWithoutGoals.length && Object.keys(valueScores).reduce((sum, item) => sum + item, 0) === 0 && (
                        <p>{context.getString("congrats.all.ok")} {values.length} {context.getString("values")}.</p>
                    )}

                    <p>{context.getString("scores.mean")}</p>

                    <div className="value-description"><span className="value-green">{context.getString("green")}</span> - {context.getString("green.desc")}</div>
                    <div className="value-description"><span className="value-orange">{context.getString("orange")}</span> - {context.getString("orange.desc")}</div>
                    <div className="value-description"><span className="value-red">{context.getString("red")}</span> - {context.getString("red.desc")}</div>
                    
                    <p>{context.getString("send.gift.btn")}</p>
                </li>
            </ol>

            <ReactTooltip place="bottom" className="value-hint-popup"/>
        </AppBlockWithLanguageSelector>
    );
}

function getGoalsWithoutValues(goals) {
    return goals.filter(goal => !goal.value);
}

function getValuesWithoutGoals(values, goals) {
    return values.filter(value => !goals.find(goal => goal.value === value));
}

function getHighPriorityGoals(goals) {
    return goals.filter(goal => goal.rating >= 4);
}

function getLowPriorityGoals(goals) {
    return goals.filter(goal => goal.rating <= 2);
}

function getLowPriorityValues(values, valueRatings) {
    return values.filter(value => valueRatings[value] <= 2);
}

function getAverageGoalScores(values, goals) {
    const scores = {};

    values.forEach(value => {
        const valueGoalsRatings = goals.filter(goal => goal.value === value).map(goal => goal.rating);

        if (valueGoalsRatings.length) {
            const avgGoalsRating = valueGoalsRatings.reduce((sum, item) => sum + item, 0) / valueGoalsRatings.length;

            scores[value] = avgGoalsRating;
        }
    });

    return scores;
}

function getValueScores(values, valueRatings, goals) {
    const scores = {};

    values.forEach(value => {
        const valueRating = valueRatings[value];
        const valueGoalsRatings = goals.filter(goal => goal.value === value).map(goal => goal.rating);

        if (valueGoalsRatings.length) {
            const avgGoalsRating = valueGoalsRatings.reduce((sum, item) => sum + item, 0) / valueGoalsRatings.length;

            scores[value] = Math.abs(valueRating - avgGoalsRating);
        }
    });

    return scores;
}

export default Results;
