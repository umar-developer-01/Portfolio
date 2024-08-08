import React, {  useRef, useContext } from "react";

const AppContext = React.createContext();
AppContext.displayName = "AppContext";

function AppContextProvider(props) {


  const componentRefs = useRef({});

  // Step 2: Function to assign refs dynamically
  const setRef = (key, element) => {
    if (element) {
      componentRefs.current[key] = element;
    }
  };

  // Step 3: Function to scroll to a particular component
  const scrollToComponent = (key) => {
    const component = componentRefs.current[key];
    if (component) {
      component.scrollIntoView({ behavior: "smooth" });
    }
  };

  const value = { setRef, scrollToComponent };


  return (
    <>
      <AppContext.Provider value={value} {...props} />
    </>
  );
}

function useAuth() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AppContext`);
  }
  return context;
}

export { AppContextProvider, useAuth };
