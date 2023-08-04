import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { appStore } from './redux/store.ts'
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={appStore} >
    <App/>
  
    
    
    </Provider>
    
  
)
