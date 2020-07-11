import React, { useState } from 'react';

import LangContext from './langContext';

const GlobalState = props => {
  const langs = ['en-US', 'hi', 'ta']

  const [currLang, setLang] = useState(0);
  const [currLangTxt, setLangTxt] = useState('en-US');

  const updateLang = (langno) => {
      setLang(langno);  
      setLangTxt(langs[langno])
  }

  return (
    <LangContext.Provider
      value={{
          currLang: currLang,
          currLangTxt: currLangTxt,
          updateLang: updateLang
      }}
    >
      {props.children}
    </LangContext.Provider>
  );
};

export default GlobalState;