import { useState } from "react";

function GoalsRating({username, goals, onChange}) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    return (
        <div className="app-block">
            <span>Perfect, {username}. We are almost done!</span>

            <p>
                You have entered your goals, but very likely the accomplishment of one goal is more important for you than the accomplishment of another, so let's rate them! 
            </p>

            <p>
                Please specify a priority for each of your goals, from <b>1</b> (lowest priority) to <b>5</b> (highest priority). 
                Feel free to repeat the same rating more than once (e.g. all 5 if they are all super-important for you).
            </p>

            <div className="app-rating">
                <table>
                    <thead>
                        <tr>
                            <th>Goal</th>
                            <th className="rating-column">Rating</th>
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
        </div>
    );
}

export default GoalsRating;
