import {LocalStorageFormHandler} from '../Database';

const db = new LocalStorageFormHandler('students');

export const getAllStudent = (id) => {
    if(id){
        return db.getData(id);
    }
    return db.getAllData();
}

export const addStudent = (data) => {
    return db.saveData(data)
}

export const editStudent = (id, data) => {
    return  db.editData(id, data)
}


export const deleteStudent = (id) => {
    return db.deleteData(id)
}