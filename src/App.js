import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName = { "Gary" } 
      lastName = { "Snail" } 
      age = { 20 } 
      hairColor = { "Blue" } />
      <PersonCard 
      firstName = { "Wilbur" } 
      lastName = { "Wilburliams" } 
      age = { 26 } 
      hairColor = { "Black" } />
      <PersonCard 
      firstName = { "Silver" } 
      lastName = { "Goldilocks" } 
      age = { 23 } 
      hairColor = { "Blonde" } />
      <PersonCard 
      firstName = { "Arthur" } 
      lastName = { "Paul-Blarther" } 
      age = { 44 } 
      hairColor = { "Brown" } />
    </div>
  );
}

export default App;
