import React, { useCallback, useState } from 'react';
import MainContent from './MainContent';
import ThemeContext from './ThemeContext';

function DarkOrLight() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = useCallback(() => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContent />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;
