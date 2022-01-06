import { useState, useContext } from "react";
import AppContext from "./AppContext";
import { AVAILABLE_VALUES } from "./availableValues";
import AppBlockWithLanguageSelector from "./LanguageSelector";

function ValuesRating({username, values, valueRatings, onChange}) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const context = useContext(AppContext);

    return (
        <AppBlockWithLanguageSelector>
            <span>{context.getString("thanks")}, {username}!</span>

            <p>
                {context.getString("you.selected.vals.rate")} 
            </p>

            <p>
                {context.getString("please.spec.prior.vals")} <b>1</b> ({context.getString("lowest.pr")}) {context.getString("to.val")} <b>5</b> ({context.getString("highest.pr")}).
            </p>

            <p>
                {context.getString("repeat.same.rating.vals")}
            </p>

            <div className="app-rating">
                <table>
                    <thead>
                        <tr>
                            <th>{context.getString("value")}</th>
                            <th className="rating-column">{context.getString("rating")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {values.map((value, index) => (
                            <tr key={index}>
                                <td className={selectedIndex === index ? "rating-selected" : ""}>{AVAILABLE_VALUES[context.language].find(item => item.id === value)?.label || value}</td>
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
        </AppBlockWithLanguageSelector>
    );
}

export default ValuesRating;
