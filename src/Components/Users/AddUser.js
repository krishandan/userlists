import React, {useRef, useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import addUserClasses from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
// import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState(null);

    const enteredUsername = useRef();
    const enteredUserAge = useRef();

    const addUserHandler = (event) =>{
        event.preventDefault();

        if (enteredUsername.current.value.trim().length === 0 || enteredUserAge.current.value.trim().length === 0){
            setError({title:'Invalid input!', message:'Please enter a name or age'});
            return;
        };
        if (+enteredUserAge.current.value < 1) {
            setError({title:'Invalid input!', message:'Enter a > 1 value'});
            return;
        };

        props.onAddUser(enteredUsername.current.value, enteredUserAge.current.value);

        //using refs to manupulate the DOM
        enteredUserAge.current.value = '';
        enteredUsername.current.value= '';  

        // setEnteredAge('');
        // setEnteredUsername('');
    }
    // not needed as we are using REFs
    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);

    // };

    const errorHandler = () => {
        setError(null);
    }; 

    return (
        //React.fragment
        <> 
        {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/> }
        <Card className={addUserClasses.input}>
        <form onSubmit = {addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
                type="text" 
                id="username" 
                className={addUserClasses.input} 
                //onChange={usernameChangeHandler} 
                //value={enteredUsername}
                ref={enteredUsername}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
                type="number" 
                id="age" 
                className={addUserClasses.input} 
                //onChange={ageChangeHandler}
                //value={enteredAge}
                ref={enteredUserAge}
            />
            <Button>Add User</Button>
        </form>
        </Card>
        </>
    );
};

export default AddUser;