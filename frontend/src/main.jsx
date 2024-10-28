import ReactDOM from 'react-dom/client';
import App from './App';
import EmployeeList from './components/ListOfEmp';
import AddEmployee from './components/EmpAdd';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <EmployeeList/>
    <AddEmployee/>
  </>
);
