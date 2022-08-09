import React from 'react';
import { useState, useEffect } from 'react';

// import components
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';


const App = () => {

  const Monster_API = 'https://jsonplaceholder.typicode.com/users';

  // initializing state with useState
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    // here we are fetching the data from the monsters API
    fetch(Monster_API)
    // taking the response and turning it into JSON
    .then((res) => res.json())
    // setting the monsters state array with the data from monsters API
    .then(users => setMonsters(users));
  }, [])

  // function to grab the value of the user's input in the search box - input field
  const handleChange = (evt) => {
    const searchFieldText = evt.target.value.toLocaleLowerCase();
    // set the user's value to the state of searchField
    setSearchField(searchFieldText);
  }

  const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });


  return(
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={handleChange}
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
