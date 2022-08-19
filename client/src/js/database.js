// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () => {
    openDB("contentDB", 1, {
        upgrade(db) {
            if(db.objectStoreNames.contains("contentDB")){
                console.log("contentDB already exists");
                return;
            }
            db.createObjectStore("content", {keyPath: "id", autoIncrement: true});
            console.log("content object store created");
        }
    });
};


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
    const contentDB = await openDB("contentDB");
    const tx = contentDB.transaction("content","readwrite");
    const store = tx.objectStore("content");
    const request = store.add({name, home, cell, email});
    const result = await request;
    console.log(result + "added to db");
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
    const contentDB = await openDB("contentDB");
    const tx = contentDB.transaction("content","readonly");
    const store = tx.objectStore("content");
    const request = store.getAll();
    const result = await request;
    console.log(result + "added to db");
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
    const contentDB = await openDB("contentDB");
    const tx = contentDB.transaction("content","readwrite");
    const store = tx.objectStore("content");
    const request = store.delete(id);
    const result = await request;
    console.log(result + "added to db");
};

initdb();
