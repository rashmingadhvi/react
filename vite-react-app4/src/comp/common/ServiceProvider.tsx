import { createContext, useContext } from "react";

const DepsContext = createContext({});

function useDeps() {
  return useContext(DepsContext);
}

function ServiceProvider({ children, ...services }) {
  return (
    <>
      <DepsContext.Provider value={services}>{children}</DepsContext.Provider>
    </>
  );
}

export { useDeps, ServiceProvider };
