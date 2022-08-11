import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';

function App() {
  // const personName = {
  //   first: 'David',
  //   last: 'Beckham',
  // };

  // const nameList = [
  //   { first: 'Mariano', last: 'Rivera' },
  //   { first: 'Greg', last: 'Madux' },
  //   { first: 'Otani', last: 'Shohei' },
  // ];

  return (
    <div className="App">
      <Greet name="kang" isLogin={true} />
      {/* <Person name={personName} />
      <PersonList names={nameList} /> */}
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
