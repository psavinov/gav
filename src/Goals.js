function Goals({username, values, goals, onAddGoal, onRemoveGoal, onUpdateGoal}) {
    return (
        <div className="app-block">
            <span>Thanks, {username}!</span>

            <p>
                Awesome, values rated! Now it is time to set some goals.
            </p>
            <p>
                Here you can put any number of goals you  set for yourself. It can be one long-term goal or many short-term ones.
                If you feel that the accomplishment of this goal contributes to one of your values - please select corresponding value from the list, but it is not required.
            </p>
            <p>
                If you don't do any goals setting maybe it is the right time to start, you can use your day-by-day actions to formulate your goals.
            </p>
            <p>
                Click Plus button to add a new goal line, or click Minus button to remove any existing goal.
            </p>

            <div className="app-goals-block">
                <table className="goals-table">
                    <thead>
                        <tr>
                            <th>
                                Goal
                            </th>
                            <th>
                                Corresponding Value
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
                                            No corresponding value
                                        </option>
                                        {values.map((value, valueIndex) => (
                                            <option key={valueIndex} value={value}>
                                                {value}
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
        </div>
    );
}

export default Goals;
