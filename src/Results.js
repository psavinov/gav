import ReactTooltip from 'react-tooltip';

function Results({username, goals, values, valueRatings}) {
    const valuesWithoutGoals = getValuesWithoutGoals(values, goals);
    const goalWithoutValues = getGoalsWithoutValues(goals);
    const highPriorityGoals = getHighPriorityGoals(goals);
    const lowPriorityValues = getLowPriorityValues(values, valueRatings);
    const lowPriorityGoals = getLowPriorityGoals(goals);
    const valueScores = getValueScores(values, valueRatings, goals);
    const averageGoalScores = getAverageGoalScores(values, goals);

    return (
        <div className="app-block">
            <span>That is it!</span>

            <p>First of all, thank you for using this app, I hope the experience was smooth, but if you found anything you would like to improve - please <a href="https://www.linkedin.com/in/pavel-savinov" target="_blank" rel="noreferrer">let me know</a>.</p>

            <h4>Here are the results:</h4>
            <ol className="results-list">
            {valuesWithoutGoals.length > 0 && (
                <li>
                    <p>I see that you have some values without corresponding goals:</p>
                    <ul>
                        {valuesWithoutGoals.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                    <p>Proper planning could help you to contribute more to the things which are important for you (your core values).</p>
                    <p>Or the reason could be that those values are not really important and it's time to find something else?</p>
                </li>
            )}

            {goalWithoutValues.length > 0 && (
                <li>
                    <p>There are some goals without a corresponding value:</p>
                    <ul>
                        {goalWithoutValues.map((goal, index) => (
                            <li key={index}>{goal.name}</li>
                        ))}
                    </ul>
                    <p>
                        It seems that you're trying to accomplish some goals which don't contribute to any of your core values. 
                        Probably you're wasting your time and energy doing something that doesn't make you happy.
                    </p>
                    <p>
                        Maybe it is the right moment to reprioritize your goals and start doing something that will make you happy long-term?
                        If you are sure that these goals are important for you then maybe there is a new value to consider.
                    </p>
                </li>
            )}

            {highPriorityGoals.length > 0 && highPriorityGoals.length >= Math.ceil(goals.length / 2) && (
                <li>
                    <p>More than a half of your goals are high-priority goals.</p>
                    <p>I don't know how energetic and hardworking person you are, but just keep in mind that when chasing two rabbits at once there is a risk that both will escape.</p>
                    <p>Maybe it could be better to reprioritize your goals and focus on the contribution to the values which are more important for you?</p>
                </li>
            )}

            {lowPriorityValues.length > 0 && lowPriorityValues.length >= Math.ceil(values.length * 0.75) && (
                <li>
                    <p>More than 75% of your values are low-priority values, that looks a bit weird.</p>
                    <p>Maybe it makes sense to review your values list and think about something that really matters?</p>
                    <p>It could be difficult to identify your values, but this is a key part of the whole excercise, please make sure you have your values defined correctly.</p>
                </li>
            )}

            {lowPriorityGoals.length > 0 && lowPriorityGoals.length >= Math.ceil(goals.length * 0.75) && (
                <li>
                    <p>More than 75% of your goals are low-priority goals, that looks a bit weird. Typically your goals define your action items and I'm pretty sure you're doing a lot of important things everyday. Are those actions related to any of your goals?</p>
                    <p>Maybe it makes sense to review your goals list and change priorities or add new goal related to the actions you take day by day?</p>
                </li>
            )}

                <li>
                    <h5>Final scores:</h5>
                    <table className="scores-table">
                        <thead>
                            <tr>
                                <th>Value</th>
                                <th className="rating-column">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(valueScores).map((value, index) => {
                                let valueScoreClass = "value-green";
                                let hintText = "Everything is OK!"
                                let hintType = "success";

                                if (valueScores[value] > 0 && valueScores[value] < 3) {
                                    valueScoreClass = "value-orange";
                                    hintType = "warning";
                                } else if (valueScores[value] >= 3) {
                                    valueScoreClass = "value-red";
                                    hintType = "error";
                                }

                                if (valueScores[value] !== 0 && averageGoalScores[value] > valueRatings[value]) {
                                    hintText = "It seems that there is too much effort to reach the goal which is not super-important for you. Maybe you can start taking more actions contributing to something more important than this value.";
                                } else if (valueScores[value] !== 0 && averageGoalScores[value] < valueRatings[value]) {
                                    hintText = "It makes sense to prioritize more goals / action items you have related to this value. There is not enough keeping in mind the importance of the value.";
                                }

                                return (
                                    <tr key={index}>
                                        <td>{value}</td>
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
                        <p>Congratulations!  It looks like you are one of the few people who live in a complete internal agreement, at least within these {values.length} values.</p>
                    )}

                    <p>What these scores mean?</p>

                    <div className="value-description"><span className="value-green">Green</span> - Priorities of your goals match the priority of this value, you are doing great contribution to something which is really important for you. Keep going!</div>
                    <div className="value-description"><span className="value-orange">Orange</span> - There is a space for improvement for this value. Our values, from a certain standpoint, could be chaining us down, thus attempts to reach the goals related to this value can lead to frustration, internal struggle, and unnecessary stress.</div>
                    <div className="value-description"><span className="value-red">Red</span> - Something isn't right. You are most likely trying to reach the goals which won't make you happy since the related value is not important for you. Or you don't have enough prioritized goals/actions contributing to your core value. It is time for a good self-reflection, take a break, review what you're doing day by day and think about what important things you are missing.</div>
                    
                    <p>Hold the pointer (or tap, if you're on mobile) on the question mark near the score to get a hint.</p>
                </li>
            </ol>

            <ReactTooltip place="bottom" className="value-hint-popup"/>
        </div>
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
