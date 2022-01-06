import { useState, useContext } from "react";
import AppContext from "./AppContext";
import AppBlockWithLanguageSelector from "./LanguageSelector";

function GoalsRating({username, goals, onChange}) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const context = useContext(AppContext);

    return (
        <AppBlockWithLanguageSelector>
            <span>{context.getString("perfect")}, {username}. {context.getString("almost.done")}</span>

            <p>
                {context.getString("lets.rate.goals")}
            </p>

            <p>
                {context.getString("please.rate.goals")} <b>1</b> ({context.getString("lowest.pr")}) to <b>5</b> ({context.getString("highest.pr")}). 
                {context.getString("repeat.more.goal")}
            </p>

            <div className="app-rating">
                <table>
                    <thead>
                        <tr>
                            <th>{context.getString("goal")}</th>
                            <th className="rating-column">{context.getString("rating")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {goals.map((goal, index) => (
                            <tr key={index}>
                                <td className={selectedIndex === index ? "rating-selected" : ""}>{goal.name}</td>
                                <td className="rating-column">
                                    <input 
                                        className="app-text-input" 
                                        type="number" 
                                        min="1" 
                                        max="5" 
                                        onFocus={() => setSelectedIndex(index)}
                                        onChange={event => {
                                                const rating = Number(event.target.value);

                                                if (!isNaN(rating) && rating > 0 && rating <= 5) {
                                                    onChange(index, rating)
                                                } else {
                                                    onChange(index, "")
                                                }
                                            }
                                        }
                                        value={goal.rating || ""}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppBlockWithLanguageSelector>
    );
}

export default GoalsRating;
