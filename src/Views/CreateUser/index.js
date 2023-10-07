import Topbar from "../../Components/Header/topbar";
import Button from 'react-bootstrap/Button';
import "./index.css"


function CreateUser() {


const onCreateTeacher = () => {
    window.location.href="/teacher/add"
}

const onCreateAccounts = () => {
    window.location.href="/accounts/add"
}

const onCreateStudent = () => {
    window.location.href="/students/add"
}




  return (
<div>
    <Topbar />

       
        <h2> Create User Role </h2>

      <Button variant="primary" className="createuser-button" type="submit" onClick= {onCreateTeacher}>
        Create Teacher
      </Button>


      <Button variant="primary"  className="createuser-button" type="submit" onClick={onCreateStudent}>
        Create Student
      </Button>


      <Button variant="primary"  className="createuser-button" type="submit" onClick={onCreateAccounts}>
        Create Accounts
      </Button>

  
    </div>
  );
}

export default CreateUser;