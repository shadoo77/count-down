import React, { createContext, useState, useCallback } from 'react';

export interface TimeLeft {
  id: number;
  name: string;
}

export interface IState {
  date: string;
  startCountDown: boolean;
}

interface ITimerContext extends IState {
  stateUpdater: React.Dispatch<Partial<IState>>;
  resetState: React.DispatchWithoutAction;
}

const initialState: IState = {
  date: '',
  startCountDown: false,
};

const TimerContext = createContext<ITimerContext | undefined>(
  undefined
);

interface IProviderProps {
  children: React.ReactElement;
}

export function TimerProvider({ children }: IProviderProps) {
  const [state, setState] = useState(initialState);

  const stateUpdater = useCallback((obj: Partial<IState>) => {
    setState((prevState: IState) => ({
      ...prevState,
      ...obj
    }));
  }, []);

  const resetState = useCallback(() => {
    setState(initialState);
  }, []);

  return (
    <TimerContext.Provider
      value={{
        ...state,
        stateUpdater,
        resetState
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = React.useContext(TimerContext);
  if (context === undefined) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
}
