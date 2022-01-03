import "./App.css";
import Description from "./Description";
import Introduction, {DEFAULT_USERNAME} from "./Introduction";
import { useState } from "react";
import Values from "./Values";
import Goals from "./Goals";
import ValuesRating from "./ValuesRating";
import GoalsRating from "./GoalsRating";
import Results from "./Results";
import ShareRow from "./ShareRow";

const LOCAL_STORAGE_ITEM = "gav_state";

function App() {
  const localState = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_ITEM)) || {};

  const [username, setUsername] = useState(localState.username || DEFAULT_USERNAME);
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(localState.values || []);
  const [valueRatings, setValueRatings] = useState(localState.valueRatings || {});
  const [goals, setGoals] = useState(localState.goals || []);

  return (
    <div className="App">
      <header>
        Goals & Values analyzer
      </header>

      {step === 0 && (
        <>
          <Description username={username} />

          <button className="app-button" autoFocus={true} onClick={() => setStep(1)}>
            Let's start!
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
  );
}

function StepOne({username, localState, step, setUsername, setStep}) {
  const nextStep = () => {
    localState.username = username;
    updateLocalStorage(localState);

    setStep(++step);
  };

  return (
    <>
      <Introduction 
        username={username || DEFAULT_USERNAME} 
        onChange={(newUsername) => setUsername(newUsername)}
        returning={localState && localState.returning}
        onKeyPress={(keyCode) => {
          console.log(keyCode);
          if (keyCode === "Enter") {
            nextStep();
          }
        }}
      />

      <button className="app-button" onClick={() => nextStep()}>
        Continue
      </button>
    </>
  );
}

function StepTwo({username, values, localState, step, setValues, setStep}) {
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
                window.confirm("I recommend to add at least 3 values to get more accurate results. Are you sure you want to proceed with 2 values?"))
            ) {
              setStep(++step);
            } else {
              window.alert("It makes no sense to proceed with less than 2 values, please select some that fit you best.");
            }
          }
        }>
        Continue
      </button>
    </>
  );
}

function StepThree({username, values, valueRatings, step, localState, setValueRatings, setStep}) {
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
              window.alert("Please make sure that all your values have corresponding rating assigned.");
            } else {
              setStep(++step);
            }
          }
        }>
        Continue
      </button>
    </>
  );
}

function StepFour({username, goals, values, step, localState, setGoals, setStep}) {
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
          window.alert("Please make sure you entered at least 1 goal.");
        } else if (
          (goals.length < values.length &&
          window.confirm(`Please confirm that all your goals are in place. Are you sure you want to continue?`)) ||
          goals.length >= values.length
        ) {
          setStep(++step);
        } 
      }}>
        Continue
      </button>
    </>
  );
}

function StepFive({username, goals, step, localState, setGoals, setStep}) {
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
              window.alert("Please make sure that all your goals have corresponding rating assigned.");
            } else {
              setStep(++step);
            }
          }
        }>
        Continue
      </button>
    </>
  );
}

function StepSix({username, goals, values, valueRatings, localState}) {
  return (
    <>
      <Results
        username={username}
        values={values}
        goals={goals}
        valueRatings={valueRatings}
      />

      <ShareRow />

      <div className="final-info">
        <p>
          This app is using your browser's local storage to keep your data, so you don't have to start from scratch every time.
          If you have any concerns about this data being store in your browser storage please click "Close &amp; Reset" button.
        </p>

        <p>
          Click corresponding social network share button above if you liked the idea of this app and want to share it with your friends.
        </p>

        <p>
          If you found this app useful and want to thank me for it click "Send me a gift" button ;). 
        </p>
      </div>


      <button className="app-button reset-button" onClick={() => {
        window.localStorage.removeItem(LOCAL_STORAGE_ITEM);
        window.location.reload();
      }}>
        Close &amp; Reset
      </button>
      <button className="app-button" onClick={() => window.location.reload()}>
        Close
      </button>
      <button className="app-button gift-button" onClick={() => {
        window.open("https://www.amazon.es/hz/wishlist/ls/1ECD8Z1UVQ0O1");
      }}>
        Send me a gift
      </button>

    </>
  );
}

function BackButton({step, setStep}) {
  return (
    <button className="app-button back-button" onClick={() => {
      if (step > 1) {
        setStep(--step);
      }
    }}>
      Back
    </button>
  );
}

function updateLocalStorage(localState) {
  window.localStorage.setItem(LOCAL_STORAGE_ITEM, JSON.stringify(localState));
}


export default App;
