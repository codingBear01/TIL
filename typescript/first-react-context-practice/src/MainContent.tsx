import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function MainContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                padding: '1.5rem',
                backgroundColor: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white',
                transition: '0.3s',
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트입니다.</p>
            <button onClick={toggleTheme}>
                {theme === 'light' ? '다크 테마' : '라이트 테마'}
            </button>
        </div>
    );
}

export default MainContent;
