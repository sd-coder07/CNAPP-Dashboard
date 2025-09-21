import { Provider } from 'react-redux'
import './App.css'
import AddWidgetModal from './components/AddWidgetModal'
import Dashboard from './components/Dashboard'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
        <AddWidgetModal />
      </div>
    </Provider>
  )
}

export default App
