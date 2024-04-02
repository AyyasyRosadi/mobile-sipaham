import React, { createContext, useContext, useState } from 'react';

const TriggerContext = createContext();

export const TriggerProvider = ({ children }) => {
  const [triggerValue, setTriggerValue] = useState(false);

  const triggerEffect = () => {
    setTriggerValue(!triggerValue);
  };

  return (
    <TriggerContext.Provider value={{ triggerValue, triggerEffect }}>
      {children}
    </TriggerContext.Provider>
  );
};

export const useTrigger = () => {
  return useContext(TriggerContext);
};
