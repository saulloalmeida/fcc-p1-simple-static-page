import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Page from './Page'
import './index.css'

const page = (
  <div className="bg-slate-500">
    <h1 className="text-5xl">My awesome website in React</h1>
    <h3 className="text-3xl">My awesome website in React-Reasons I love React</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
)


function App() {
  return (
    <>
      <Header/>
      <Page />
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))