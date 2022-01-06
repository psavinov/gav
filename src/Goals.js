import AppBlockWithLanguageSelector from "./LanguageSelector";
import { useContext } from "react";
import AppContext from "./AppContext";
import { AVAILABLE_VALUES } from "./availableValues";

function Goals({username, values, goals, onAddGoal, onRemoveGoal, onUpdateGoal}) {
    const context = useContext(AppContext);

    return (
        <AppBlockWithLanguageSelector>
            <span>{context.getString("thanks")}, {username}!</span>

            <p>
                {context.getString("awesome.vals.rated")}
            </p>
            <p>
                {context.getString("any.number.of.goals")}
                {context.getString("goal.select.val")}
            </p>
            <p>
                {context.getString("dont.set.any.goals")}
            </p>
            <p>
                {context.getString("click.plus.add.goal")}
            </p>

            <div className="app-goals-block">
                <table className="goals-table">
                    <thead>
                        <tr>
                            <th>
                                {context.getString("goal")}
                            </th>
                            <th>
                                {context.getString("corresponding.val")}
                            </th>
                            <th>
                                <button className="plus-button" onClick={() => onAddGoal()}>
                                    +
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {goals.map((goal, index) => (
                            <tr key={index}>
                                <td>
                                    <input 
                                        className="app-text-input" 
                                        type="text" 
                                        value={goal.name}
                                        onChange={event => onUpdateGoal(index, { name: event.target.value })}
                                    />
                                </td>
                                <td>
                                    <select 
                                        className="app-text-input"
                                        onChange={event => onUpdateGoal(index, { value: event.target.options[event.target.options.selectedIndex].value})}
                                        value={goal.value}
                                    >
                                        <option value="">
                                            {context.getString("no.corresponding.val")}
                                        </option>
                                        {values.map((value, valueIndex) => (
                                            <option key={valueIndex} value={value}>
                                                {AVAILABLE_VALUES[context.language].find(item => item.id === value)?.label || value}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                <td>
                                <button className="minus-button" onClick={() => onRemoveGoal(index, 1)}>
                                    &#8211;
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppBlockWithLanguageSelector>
    );
}

export default Goals;
