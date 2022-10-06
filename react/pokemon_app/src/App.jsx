import { MainSearchBox } from './components';

const appStyle = {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
};

function App() {
  return (
    <div className="App" style={appStyle}>
      <MainSearchBox />
    </div>
  );
}

export default App;
