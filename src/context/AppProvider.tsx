import React, { createContext, useState } from "react";

interface IUser {
  age: number;
  setAge: (age: number) => void;
}

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<IUser>({
  age: 0,
  setAge: () => null,
});

const AppProvider = ({ children }: Props) => {
  const [age, setAge] = useState<number>(0);
  return (
    <AppContext.Provider value={{ age, setAge }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;