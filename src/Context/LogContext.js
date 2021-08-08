import React, { useState, createContext, useContext } from "react";

const LogContext = createContext();
const ToggleContext = createContext();

export function useLog() {
  return useContext(LogContext);
}
export function useToggle() {
  return useContext(ToggleContext);
}

export function LogProvider({ children }) {
  const [logButts, setLogButts] = useState(true);

  const toggleLog = () => {
    setLogButts(!logButts);
  };

  return (
    <LogContext.Provider value={logButts}>
      <ToggleContext.Provider value={toggleLog}>
        {children}
      </ToggleContext.Provider>
    </LogContext.Provider>
  );
}
