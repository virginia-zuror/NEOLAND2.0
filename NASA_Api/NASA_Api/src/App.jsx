
import './App.css'
import APOD from './components/APOD/APOD'

function App() {
 

  return (
    <div className="App">
    <nav>
      <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA logo"/>
      <p>Photo of the Day</p>
    </nav>
    <main>
      <APOD/>
    </main>
    <footer>
    <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA logo"/> 
    <p>All rights reserved</p>
    </footer>
    </div>
  )
}

export default App
