import React from 'react';
import { useState, useEffect, ChangeEvent } from 'react';

// import components
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';
import { getData } from './utils/fetch-utils';


export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {

  const Monster_API = 'https://jsonplaceholder.typicode.com/users';

  // initializing state with useState
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(Monster_API);
      setMonsters(users);
    }
    fetchUsers();
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  // function to grab the value of the user's input in the search box - input field
  const onSearchChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldText = evt.target.value.toLocaleLowerCase();
    // set the user's value to the state of searchField
    setSearchField(searchFieldText);
  }


  return(
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'
      />

      <CardList monsters={filteredMonsters} />

    </div>
  )
}

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }

//   componentDidMount() {
//     // here we are fetching the data from the monsters API
//     fetch(Monster_API)
//       // taking the response and turning it into JSON
//       .then((res) => (res.json()))
//       // setting the monsters state array with the data from monsters API
//       .then(users => this.setState(() => {
//         return { monsters: users }
//       }))
//   }

  

//   render() {
//     // destructure state
//     const {searchField, monsters} = this.state;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox
//           onChangeHandler={this.handleChange}
//           placeholder='search monsters'
//           className='monsters-search-box'
//         />

//         <CardList monsters={filteredMonsters} />

//       </div>
//     );
//   }


export default App;
