import { RecoilRoot } from 'recoil';
import { Home } from './components/Home';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Home />
      </div>
    </RecoilRoot>
  );
}

export default App;
