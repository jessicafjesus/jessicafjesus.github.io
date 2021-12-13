import React, { useState ,useCallback, createContext } from 'react';

let logoutTimer: number;

interface TokenIF {
  isLoggedIn: boolean,
  login : ()=>void,
  logout : () => void
}

const TokenHandler: React.Context<TokenIF> = createContext<TokenIF>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const TokenHandlerProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);


  const logoutHandler = () => {
    setUserIsLoggedIn(false)
  }

  const loginHandler = () => {
    setUserIsLoggedIn(true)
  };

  const contextValue = {
    isLoggedIn: userIsLoggedIn as boolean,
    login: loginHandler as () => void,
    logout: logoutHandler as () => void,
  };

  return  (
    <TokenHandler.Provider value={contextValue}>
      {props.children}
    </TokenHandler.Provider>
  );
};

export default TokenHandler