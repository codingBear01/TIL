/* Libraries */
import { memo } from 'react';
/* Components */
import { FetchingUserButton, Messages, UserList } from './components';

const App = memo(() => {
    console.log('App rendering!');
    return (
        <div className="flex items-center justify-center flex-col	m-auto w-80">
            <FetchingUserButton />
            <Messages />
            <UserList />
        </div>
    );
});

export default App;
