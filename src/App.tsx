import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleGet = () => {
    fetch('api/getList?search=green&name=lisa').then(response => {
      const result = response.json()
      result.then(res => {
        console.log('res: ', res);
      })
    }).catch(e => {
      console.log(e);
    })
  }
  const handlePost = () => {
    fetch('api/postTest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({name: 'lisa'})
    }).then(response => {
      const result = response.json()
      result.then(res => {
        console.log('res: ', res);
      })
    }).catch(e => {
      console.log(e);
    })
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header> */}
      <button onClick={handleGet}>get</button>
      <button onClick={handlePost}>post</button>
    </div>
  )
}

export default App
