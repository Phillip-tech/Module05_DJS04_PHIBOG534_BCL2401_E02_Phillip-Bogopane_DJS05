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