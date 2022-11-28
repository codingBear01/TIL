/* Components */
import { FetchingUserButton, Messages, UserList } from './components';

function App() {
    return (
        <div className="flex items-center justify-center flex-col	m-auto w-80">
            <FetchingUserButton />
            <Messages />
            <UserList />
        </div>
    );
}

export default App;
