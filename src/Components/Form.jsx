import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 


export const Form = ({ setTasks }) => {
    const [user, setUser] = useState({})
    const firebaseConfig = {
        apiKey: "AIzaSyAc9gAsbzp2fmfrORs1JAVVhpK8lTMb6zc",
        authDomain: "appt-87839.firebaseapp.com",
        projectId: "appt-87839",
        storageBucket: "appt-87839.appspot.com",
        messagingSenderId: "428320751924",
        appId: "1:428320751924:web:4c6b4ed0c860d1c5146561"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


    const handleSubmit = (event) => {
        event.preventDefault();

        const docRef = await addDoc(collection(db, "users"), {

        });
        setTasks(prev => {
            return [...prev, { ...user, }]})
            console.log(user);
    }

    const handleInput = (event) => {
        setUser(prev => {
            return {...prev,[event.target.name]: event.target.value}})}

    return (
        <div>
            <form onClick={handleSubmit}>

                <div>
                    <label>LastName: </label>
                    <input type='text' name='LastName' id='LastName' onChange={handleInput} placeholder='lastname' />
                </div>

                <div>
                    <label>Name: </label>
                    <input type='text' name='name' id='name' onChange={handleInput} placeholder='name' />
                </div>

                <div>
                    <label>email: </label>
                    <input type='email' name='email' id='email' onChange={handleInput} placeholder='email@outlook.es' />
                </div>

                <div>
                    <label>Number: </label>
                    <input type='tel' name='tel' id='tel' onChange={handleInput} placeholder='689-367-547' />
                </div>

                <div>
                    <input type='submit' value='Send' />
                </div>

            </form>
        </div>
    )
}
