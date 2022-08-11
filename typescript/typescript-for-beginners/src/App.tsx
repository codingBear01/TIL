import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { User2 } from './components/state/User2';
import { Counter } from './components/state/Counter';

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
      {/* <Greet name="kang" isLogin={true} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status="loading" /> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar> */}
      {/* <Button handleClick={(e, id) => console.log('button clicked!', e, id)} /> */}
      {/* <Input value="" handleChange={(e) => console.log(e)} /> */}
      {/* <Container
        styles={{
          border: '1px solid black',
          padding: '1rem',
          background: 'aqua',
        }}
      /> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <User2 /> */}
      <Counter />
    </div>
  );
}

export default App;
