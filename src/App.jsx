
import './App.css'
import Counter from './components/Counter'
import MyEditor from './components/MyEditor'
import Todos from './components/Todos'
import TodosAction from './services/Action/TodosAction'


function App() {
 

  return (
    <>
      <div className='app'>
        {/* <h1>welcome to react redux</h1> */}
        {/* <Counter></Counter>
        <TodosAction></TodosAction> */}
        
        <MyEditor></MyEditor>
      </div>
    </>
  )
}

export default App
