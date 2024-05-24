// Redux-inspired store implementation/REDUX-INSPIRED STORE FOR A TALLY APP

// Initial state
let state = {
    count: 0
  };
  
  // Action types
  const ACTIONS = {
    ADD: "ADD",
    SUBTRACT: "SUBTRACT",
    RESET: "RESET"
  };

   // State management functions
   const getState = () => {
    return state;
  };
  
  const dispatch = (action) => {
    switch (action.type) {
      case ACTIONS.ADD:
        state.count += 1;
        break;
      case ACTIONS.SUBTRACT:
        state.count -= 1;
        break;
      case ACTIONS.RESET:
        state.count = 0;
        break;
      default:
        console.log("Invalid action");
    }
    
    console.log("State after dispatch:", state);
  };

  const subscribe = (callback) => {
    // callback immediately after subscription
    callback(state);
  };

  // Test scenarios
  console.log("Scenario 1:");
  console.log("Initial State Verification");
  subscribe((currentState) => {
    console.log("Current State:", currentState);
  });

  // Scenario 2: Incrementing the Counter
  console.log("\nScenario 2:");
  console.log("Incrementing the Counter");
  dispatch({ type: ACTIONS.ADD });
  dispatch({ type: ACTIONS.ADD });

  // Scenario 3: Decrementing the Counter
  console.log("\nScenario 3:");
  console.log("Decrementing the Counter");
  dispatch({ type: ACTIONS.SUBTRACT });