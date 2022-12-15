import React from 'react';

const ThemeContext = React.createContext({
    theme: '',
    toggleTheme: () => {},
});

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
