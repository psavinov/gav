import { DEFAULT_USERNAME } from "./Introduction";
import { AVAILABLE_VALUES } from "./availableValues";

import { useState, useEffect, useCallback } from "react";
import { isMobile } from "react-device-detect";

function Values({username, values, onAddValue, onRemoveValue, returning}) {
    const [filter, setFilter] = useState("");
    const [filteredValues, setFilteredValues] = useState(AVAILABLE_VALUES);
    const [selectedAvailable, setSelectedAvailable] = useState([]);
    const [selectedCurrent, setSelectedCurrent] = useState(isMobile ? values : []);

    const addSelected = useCallback(() => {
        const optionsToAdd = selectedAvailable.filter(option => values.indexOf(option) === -1);

        if (isMobile && filter) {
            optionsToAdd.push(filter);
        }

        onAddValue(optionsToAdd);
        setFilter("");
    }, [values, filter, onAddValue, selectedAvailable]);

    useEffect(() => {
        if (isMobile && selectedAvailable.length) {
            addSelected();
            setSelectedAvailable([]);
        }
    }, [selectedAvailable, addSelected]);

    useEffect(() => {
        if (isMobile && selectedCurrent.length !== values.length) {
            setSelectedCurrent(values);
        }
    }, [values, selectedCurrent.length]);

    const removeSelected = () => {
        onRemoveValue(selectedCurrent.filter(option => values.indexOf(option) !== -1));
    };

    useEffect(() => {
        setFilteredValues(AVAILABLE_VALUES.filter(value => filter.length < 2 || value.toLowerCase().indexOf(filter.toLowerCase()) !== -1));
        setSelectedAvailable([]);
    }, [filter]);

    return (
        <div className="app-block">
            <span>Hey, {username}!</span>

            {username !== DEFAULT_USERNAME && !returning && (
                <p>Thank you for the introduction, it is always much better to know who you're talking to!</p>
            )}

            {returning ? (
                <p>Since it is not your first time here, you're probably familiar with the idea, but just in case here is the reminder.</p>
            ) : (
                <p>Since it is your first time here, let me explain you how it works.</p>
            )}

            <p>
                Please choose some (I recommend to start with 3 - 5 if it is your first time) core values which resonate the most with your current state of mind. Use the filter field to fid the one you want.
            </p>
            <p>
                Click Plus button or double-click on the list option to add a value. If you haven't found the right one please use the Plus button to add your own from the filter field. Use the Minus button to remove any selected value from the list. 
            </p>

            <p>If you are on mobile you can just mark the checkboxes for the values you want to add.</p>

            <div className="app-values-block">
                <div className="app-values-column">
                    <b>Available values</b>
                    <div className="app-values-filter">
                            <input 
                                className="app-text-input" 
                                type="text" 
                                placeholder={isMobile ? "Enter your value..." : "Start typing to find a value..."}
                                autoFocus={!isMobile}
                                onChange={(event) => setFilter(event.target.value)}
                            />
                            <button className="plus-button" onClick={()=>addSelected()}>
                                +
                            </button>
                    </div>
                    <select 
                        className="app-select-multiple app-values-available" 
                        multiple={true} 
                        onChange={(event) => 
                            setSelectedAvailable([...event.target.options].filter(
                                option => option.selected
                            ).map(option => option.value))
                        }
                        onDoubleClick={() => addSelected()}
                        size={5}
                        value={selectedAvailable}
                    >
                        {filteredValues.map(value => (
                                <option value={value} key={value}>{value}</option>
                            ))}
                    </select>
                </div>

                <div className="app-values-column app-values-column-selected">
                    <b>Selected values</b><br/>
                    <div className="app-values-selected">
                        <select 
                            className="app-select-multiple" 
                            multiple={true}
                            onChange={(event) => {
                                const selectedOptions = [...event.target.options].filter(option => option.selected).map(option => option.value)
                                if (isMobile) {
                                    onRemoveValue(values.filter(option => selectedOptions.indexOf(option) === -1));
                                } else {
                                    setSelectedCurrent(selectedOptions);
                                }
                            }}
                            size={6}
                            value={selectedCurrent}
                        >   
                            {values.map(value => (
                                <option value={value} key={value}>{value}</option>
                            ))}
                        </select>
                        <button className={`minus-button${isMobile ? " hide" : ""}`} onClick={()=>removeSelected()}>
                            &#8211;
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Values;
