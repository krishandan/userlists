import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import addUserClasses from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState(null);

    const addUserHandler = (event) =>{
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({title:'Invalid input!', message:'Please enter a name or age'});
            return;
        };
        if (+enteredAge < 1) {
            setError({title:'Invalid input!', message:'Enter a > 1 value'});
            return;
        };

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredAge('');
        setEnteredUsername('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);

    };

    const errorHandler = () => {
        setError(null);
    }; 

    return (
        <div>
        {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/> }
        <Card className={addUserClasses.input}>
        <form onSubmit = {addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
                type="text" 
                id="username" 
                className={addUserClasses.input} 
                onChange={usernameChangeHandler} 
                value={enteredUsername}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
                type="number" 
                id="age" 
                className={addUserClasses.input} 
                onChange={ageChangeHandler}
                value={enteredAge}
            />
            <Button>Add User</Button>
        </form>
        </Card>
        </div>
    );
};

export default AddUser;