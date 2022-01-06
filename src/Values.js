import { DEFAULT_USERNAME } from "./Introduction";
import { AVAILABLE_VALUES } from "./availableValues";
import AppBlockWithLanguageSelector from "./LanguageSelector";
import AppContext from "./AppContext";

import { useState, useEffect, useCallback, useContext } from "react";
import { isMobile } from "react-device-detect";

function Values({username, values, onAddValue, onRemoveValue, returning}) {
    const context = useContext(AppContext);
    const [filter, setFilter] = useState("");
    const [availableValues, setAvailableValues] = useState(AVAILABLE_VALUES[context.language]);
    const [filteredValues, setFilteredValues] = useState(availableValues);
    const [selectedAvailable, setSelectedAvailable] = useState([]);
    const [selectedCurrent, setSelectedCurrent] = useState(isMobile ? values : []);

    const addSelected = useCallback(() => {
        const optionsToAdd = selectedAvailable.filter(option => values.indexOf(option.id) === -1).map(option => option.id);

        if ((isMobile || !optionsToAdd.length) && filter) {
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
        setFilteredValues(availableValues.filter(value => filter.length < 2 || value.label.toLowerCase().indexOf(filter.toLowerCase()) !== -1));
        setSelectedAvailable([]);
    }, [availableValues, filter]);

    useEffect(() => {
        setAvailableValues(AVAILABLE_VALUES[context.language]);
    }, [context.language]);

    return (
        <AppBlockWithLanguageSelector>
            <span>{context.getString("hey")}, {username}!</span>

            {username !== DEFAULT_USERNAME && !returning && (
                <p>{context.getString("thanks.intro")}</p>
            )}

            {returning ? (
                <p>{context.getString("not.first.time.reminder")}</p>
            ) : (
                <p>{context.getString("first.time.explain")}</p>
            )}

            <p>
                {context.getString("please.choose.values")}
            </p>
            <p>
                {context.getString("click.plus.value")} 
            </p>

            <p>{context.getString("if.you.on.mobile")}</p>

            <div className="app-values-block">
                <div className="app-values-column">
                    <b>{context.getString("available.vals")}</b>
                    <div className="app-values-filter">
                            <input 
                                className="app-text-input" 
                                type="text" 
                                placeholder={isMobile ? context.getString("placeholder.add") : context.getString("placeholder.filter")}
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
                            ).map(option => availableValues.find(item => item.id === option.value)))
                        }
                        onDoubleClick={() => addSelected()}
                        size={5}
                        value={selectedAvailable.map(item => item.id)}
                    >
                        {filteredValues.map(value => (
                                <option value={value.id} key={value.id}>{AVAILABLE_VALUES[context.language].find(item => item.id === value.id).label}</option>
                            ))}
                    </select>
                </div>

                <div className="app-values-column app-values-column-selected">
                    <b>{context.getString("selected.vals")}</b><br/>
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
                                <option value={value} key={value}>{AVAILABLE_VALUES[context.language].find(item => item.id === value)?.label || value}</option>
                            ))}
                        </select>
                        <button className={`minus-button${isMobile ? " hide" : ""}`} onClick={()=>removeSelected()}>
                            &#8211;
                        </button>
                    </div>
                </div>

            </div>
        </AppBlockWithLanguageSelector>
    );
}

export default Values;
