import {LocalStorageFormHandler} from '../Database';

const db = new LocalStorageFormHandler('accountss');

export const getAllAccount = (id) => {
    if(id){
        return db.getData(id);
    }
    return db.getAllData();
}

export const addAccount = (data) => {
    return db.saveData(data)
}

export const editAccount = (id, data) => {
    return  db.editData(id, data)
}


export const deleteAccount = (id) => {
    return db.deleteData(id)
}