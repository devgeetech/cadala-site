import React from 'react';

export default React.createContext({
    langs : ['en-US', 'hi', 'ta'],
    currLang: 0,
    currLangTxt: '',
    updateLang: langno => {}
});
