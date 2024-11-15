import './App.css'
import Header from "./components/Header/Header";

function App() {

  const name = "Company Name";

  return (
    <div className="App">
      <Header company = {name} title="fixed links" />
    </div>
  )
}

export default App
