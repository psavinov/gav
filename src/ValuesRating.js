import { useState } from "react";

function ValuesRating({username, values, valueRatings, onChange}) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    return (
        <div className="app-block">
            <span>Thanks, {username}!</span>

            <p>
                You have selected your core values, but one value can have higher priority than another one, so let's rate them! 
            </p>

            <p>
                Please specify a priority for each of your values, from <b>1</b> (lowest priority) to <b>5</b> (highest priority).
                Feel free to repeat the same rating more than once (e.g. all 5 if they are all super-important for you).
            </p>

            <div className="app-rating">
                <table>
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th className="rating-column">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {values.map((value, index) => (
                            <tr key={index}>
                                <td className={selectedIndex === index ? "rating-selected" : ""}>{value}</td>
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
                                        value={valueRatings[values[index]] || ""}
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

export default ValuesRating;
