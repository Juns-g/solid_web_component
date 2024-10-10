import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import './App.css'
import './components/MyButton'
import { Buttons } from './components/Buttons'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <a
        href='https://solidjs.com'
        target='_blank'
        class='flex items-center justify-center'
      >
        <img
          src={solidLogo}
          class='logo solid'
          alt='Solid logo'
        />
      </a>
      <div class='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count()}
        </button>
      </div>
      <Buttons />
    </>
  )
}

export default App
