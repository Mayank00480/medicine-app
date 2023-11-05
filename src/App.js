
import './App.css';
import DisplayItems from './component/DisplayItems/DisplayItems';
import UserForm from './component/UserForm/UserForm';
import ContextProvider from './component/store/ContextProvider';
function App() {
  return (
    <ContextProvider>
     <UserForm/>
     <DisplayItems/>
    </ContextProvider>
  );
}

export default App;
