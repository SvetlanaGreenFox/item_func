import './App.css';
import Calendar from './components/Calendar';

function App() {
  const now = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
    day: new Date().getDay()
  }

  return (
    <Calendar date={now} />
  );
}

export default App;
