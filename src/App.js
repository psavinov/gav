import "./App.css";
import Description from "./Description";
import Introduction, {DEFAULT_USERNAME} from "./Introduction";
import { useState, useMemo, useContext } from "react";
import Values from "./Values";
import Goals from "./Goals";
import ValuesRating from "./ValuesRating";
import GoalsRating from "./GoalsRating";
import Results from "./Results";
import ShareRow from "./ShareRow";
import AppContext from "./AppContext";
import { getString } from "./strings";

const LOCAL_STORAGE_ITEM = "gav_state";

function App() {
  const localState = useMemo(() => JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_ITEM)) || {}, []);

  const [username, setUsername] = useState(localState.username || DEFAULT_USERNAME);
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(localState.values || []);
  const [valueRatings, setValueRatings] = useState(localState.valueRatings || {});
  const [goals, setGoals] = useState(localState.goals || []);

  const [language, setLanguage] = useState(localState.language || "en");
  const context = useMemo(
    () => ({ 
      language, 
      setLanguage: (newLanguage) => {
        setLanguage(newLanguage);
        localState.language = newLanguage;
        updateLocalStorage(localState);
      },  
      getString: (key) => getString(language, key)
    }), 
    [language, localState]
  );

  return (
    <AppContext.Provider value={context}>
      <div className="App">
        <header>
          {context.getString("header")}
        </header>

        {step === 0 && (
          <>
            <Description username={username} />

            <button className="app-button" autoFocus={true} onClick={() => setStep(1)}>
              {context.getString("start.btn")}
            </button>
          </>
        )}

        {step === 1 && (
          <StepOne 
            username={username}
            localState={localState}
            step={step}
            setUsername={setUsername}
            setStep={setStep}
          />
        )}

        {step === 2 && (
          <StepTwo
            username={username}
            values={values}
            localState={localState}
            step={step}
            setValues={setValues}
            setStep={setStep}
          />
        )}

        {step === 3 && (
          <StepThree
            username={username}
            values={values}
            valueRatings={valueRatings}
            step={step}
            localState={localState}
            setValueRatings={setValueRatings}
            setStep={setStep}
          />
        )}

        {step === 4 && (
          <StepFour
            username={username}
            values={values}
            goals={goals}
            step={step}
            localState={localState}
            setGoals={setGoals}
            setStep={setStep}
          />
        )}

        {step === 5 && (
          <StepFive
            username={username}
            goals={goals}
            step={step}
            localState={localState}
            setGoals={setGoals}
            setStep={setStep}
          />
        )}

        {step === 6 && (
          <StepSix
            username={username}
            goals={goals}
            values={values}
            valueRatings={valueRatings}
            step={step}
            localState={localState}
            setStep={setStep}
          />
        )}

      </div>
    </AppContext.Provider>
  );
}

function StepOne({username, localState, step, setUsername, setStep}) {
  const nextStep = () => {
    localState.username = username;
    updateLocalStorage(localState);

    setStep(++step);
  };

  const context = useContext(AppContext);

  return (
    <>
      <Introduction 
        username={username || DEFAULT_USERNAME} 
        onChange={(newUsername) => setUsername(newUsername)}
        returning={localState && localState.returning}
        onKeyPress={(keyCode) => {
          if (keyCode === "Enter") {
            nextStep();
          }
        }}
      />

      <BackButton step={step} setStep={setStep} />

      <button className="app-button" onClick={() => nextStep()}>
        {context.getString("continue.btn")}
      </button>
    </>
  );
}

function StepTwo({username, values, localState, step, setValues, setStep}) {
  const context = useContext(AppContext);

  return (
    <>
      <Values 
        username={username || DEFAULT_USERNAME}
        values={values}
        onAddValue={(valueToAdd) => setValues([...values, ...valueToAdd])}
        onRemoveValue={(valuesToRemove) => setValues(values.filter(value => valuesToRemove.indexOf(value) === -1))}
        returning={localState && localState.returning}
      />

      <BackButton step={step} setStep={setStep} />

      <button className="app-button" onClick={() => {
            localState.values = values;
            updateLocalStorage(localState);

            if (values.length >= 3 || 
                (values.length === 2 &&
                window.confirm(context.getString("proceed.2.vals")))
            ) {
              setStep(++step);
            } else {
              window.alert(context.getString("less.2.vals"));
            }
          }
        }>
        {context.getString("continue.btn")}
      </button>
    </>
  );
}

function StepThree({username, values, valueRatings, step, localState, setValueRatings, setStep}) {
  const context = useContext(AppContext);

  return (
    <>
      <ValuesRating 
          username={username || DEFAULT_USERNAME}
          valueRatings={valueRatings}
          values={values}
          onChange={(index, rating) => setValueRatings({...valueRatings, [values[index]]: rating})}
      />

      <BackButton step={step} setStep={setStep} />

      <button className="app-button" onClick={() => {
            localState.valueRatings = valueRatings;
            updateLocalStorage(localState);

            const valueWithoutRating = values.find(value => !valueRatings[value]);

            if (valueWithoutRating) {
              window.alert(context.getString("vals.miss.rate"));
            } else {
              setStep(++step);
            }
          }
        }>
        {context.getString("continue.btn")}
      </button>
    </>
  );
}

function StepFour({username, goals, values, step, localState, setGoals, setStep}) {
  const context = useContext(AppContext);

  return (
    <>
      <Goals 
          username={username || DEFAULT_USERNAME}
          goals={goals}
          values={values}
          onAddGoal={() => setGoals([...goals, {name: "", value: "", rating: ""}])}
          onRemoveGoal={(removeIndex) => setGoals(goals.filter(goal => goal.name !== goals[removeIndex].name))}
          onUpdateGoal={(updateIndex, updateGoal) => {
            setGoals(goals.map((goal, index) => updateIndex !== index ? goal : {...goal, ...updateGoal}));
          }}
      />

      <BackButton step={step} setStep={setStep} />

      <button className="app-button" onClick={() => {
        localState.goals = goals;
        updateLocalStorage(localState);

        setGoals(goals.filter(goal => !!goal.name));
        if (!goals.length) {
          window.alert(context.getString("miss.goals"));
        } else if (
          (goals.length < values.length &&
          window.confirm(context.getString("confirm.all.goals"))) ||
          goals.length >= values.length
        ) {
          setStep(++step);
        } 
      }}>
        {context.getString("continue.btn")}
      </button>
    </>
  );
}

function StepFive({username, goals, step, localState, setGoals, setStep}) {
  const context = useContext(AppContext);

  return (
    <>
      <GoalsRating 
          username={username || DEFAULT_USERNAME}
          goals={goals}
          onChange={(updateIndex, rating) => setGoals(goals.map((goal, index) => {
            if (updateIndex === index) {
              return {
                ...goal,
                rating
              };
            } else {
              return goal;
            }
          }))}
      />

      <BackButton step={step} setStep={setStep} />

      <button className="app-button" onClick={() => {
            localState.goals = goals;
            updateLocalStorage(localState);

            const goalWithoutRating = goals.find(goal => !goal.rating);

            if (goalWithoutRating) {
              window.alert(context.getString("goals.miss.rate"));
            } else {
              setStep(++step);
            }
          }
        }>
        {context.getString("continue.btn")}
      </button>
    </>
  );
}

function StepSix({username, goals, values, valueRatings, localState}) {
  const context = useContext(AppContext);

  if (!localState.returning) {
    localState.returning = true;
    updateLocalStorage(localState);
  }

  return (
    <>
      <Results
        values={values}
        goals={goals}
        valueRatings={valueRatings}
      />

      <ShareRow />

      <div className="final-info">
        <p>
          {context.getString("app.use.localstorage")}
        </p>

        <p>
          {context.getString("share.social")}
        </p>

        <p>
          {context.getString("send.gift")}
        </p>
      </div>

      <button className="app-button reset-button" onClick={() => {
        window.localStorage.removeItem(LOCAL_STORAGE_ITEM);
        window.location.reload();
      }}>
        {context.getString("close.reset.btn")}
      </button>
      <button className="app-button" onClick={() => window.location.reload()}>
        {context.getString("close.btn")}
      </button>
      <button className="app-button gift-button" onClick={() => {
        window.open("https://www.amazon.es/hz/wishlist/ls/1ECD8Z1UVQ0O1");
      }}>
        {context.getString("send.gift.btn")}
      </button>

    </>
  );
}

function BackButton({step, setStep}) {
  const context = useContext(AppContext);
  return (
    <button className="app-button back-button" onClick={() => {
      if (step >= 1) {
        setStep(--step);
      }
    }}>
      {context.getString("back.btn")}
    </button>
  );
}

function updateLocalStorage(localState) {
  window.localStorage.setItem(LOCAL_STORAGE_ITEM, JSON.stringify(localState));
}


export default App;
