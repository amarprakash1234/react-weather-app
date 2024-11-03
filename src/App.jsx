// import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import WeatherApp from "./WeatherApp";

function App() {
  function handleClick() {
    console.log("Button was clicked!");
  }

  return (
    <>
      <WeatherApp />
    </>
  )
}

export default App
