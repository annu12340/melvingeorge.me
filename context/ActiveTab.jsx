import React, { useReducer } from "react";

const initalTab = { tab: "" };

const ActiveTabContext = React.createContext(initalTab);
const SetActiveTabContext = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "":
      return { tab: "" };
    case "blog":
      return { tab: "blog" };
    case "projects":
      return { tab: "projects" };
    case "about":
      return { tab: "about" };
    default:
      return;
  }
};

const ActiveTabProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalTab);
  return (
    <ActiveTabContext.Provider value={state}>
      <SetActiveTabContext.Provider value={dispatch}>
        {children}
      </SetActiveTabContext.Provider>
    </ActiveTabContext.Provider>
  );
};

export { ActiveTabProvider, ActiveTabContext, SetActiveTabContext };
