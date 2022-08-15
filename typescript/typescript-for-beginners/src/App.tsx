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
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User3 } from './components/context/User3';
import { MutableRef } from './components/ref/MutableRef';
import { DomRef } from './components/ref/DomRef';
import { Counter2 } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';

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
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User3 />
      </UserContextProvider> */}
      {/* <MutableRef /> */}
      {/* <Counter2 message="The count value is" /> */}
      {/* <Private isLoggedIn={true} Component={Profile} /> */}
      {/* <List
        items={['차범근', '박지성', '손흥민']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne',
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent',
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana',
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <RandomNumber value={10} isPositive /> */}
      <Toast position="center" />
    </div>
  );
}

export default App;
