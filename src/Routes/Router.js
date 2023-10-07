import { Routes, Route, BrowserRouter , Navigate } from "react-router-dom";
import Dashboard from "../Views/Class/Class/index";
import Subjects from "../Views/Subject/Subjects/index";
import Students from "../Views/Student/Students/index";
import AddClass from "../Views/Class/AddClass/index";
import AddSubjects from "../Views/Subject/AddSubject/index";
import AddStudents from "../Views/Student/AddStudent/index";
import EditClass from "../Views/Class/EditClass/index";
import EditSubject from "../Views/Subject/EditSubject/index";
import EditStudents from "../Views/Student/EditStudent/index"
import Login from "../Views/LoginPage/index"
import Register from "../Views/RegisterPage/index"

import Teacher from "../Views/Teacher/Teacher/index"
import AddTeacher from "../Views/Teacher/AddTeacher/index"
import EditTeacher from "../Views/Teacher/EditTeacher/index"
import CreateUser from "../Views/CreateUser";
import EditAccounts from "../Views/Accounts/EditAccount";
import AddAccounts from "../Views/Accounts/AddAccount";
import Accounts from "../Views/Accounts/Accounts";





function AppRouter() {
  return (
    <BrowserRouter>
      <Routes className="App">
        <Route path="*" element={<Navigate to='/login'/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={< Login/>} />
        <Route path="/" element={<Navigate to='/login'/>} />


        <Route path="/register" element={< Register/>} />
        <Route path="/register" element={<Navigate to='/register'/>} />


        <Route path="/createuser" element={< CreateUser/>} />


        <Route path="/class" element={<Navigate to='/class/list'/>} />
        <Route path="/class/list" element={<Dashboard />} />
       <Route path="/class/add" element={<AddClass />} />
        <Route path="/class/edit/:id" element={<EditClass />} />
        <Route path="/class/edit" element={<EditClass />} />

        <Route path="/subjects" element={<Subjects />} />
        <Route path="/subjects/add" element={<AddSubjects />} />
        <Route path="/subjects/edit" element={<EditSubject />} />
        <Route path="/subjects/edit/:id" element={<EditSubject />} />
        
        <Route path="/students" element={<Students />} />
        <Route path="/students/add" element={<AddStudents />} />
        <Route path="/students/edit/:id" element={<EditStudents />} />
        <Route path="/students/edit" element={<EditStudents />} />

        <Route path="/teachers" element={<Teacher/>} />
        <Route path="/teacher/add" element={<AddTeacher />} />
        <Route path="/teacher/edit/:id" element={<EditTeacher />} />
        <Route path="/teacher/edit" element={<EditTeacher />} />

        <Route path="/accounts" element={<Accounts/>} />
        <Route path="/accounts/add" element={<AddAccounts/>} />
        <Route path="/accounts/edit/:id" element={<EditAccounts/>} />
        <Route path="/accounts/edit" element={<EditAccounts/>} />

      
      </Routes>
    </BrowserRouter>






  );
}

export default AppRouter;
