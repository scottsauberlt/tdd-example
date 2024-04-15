import {useForm} from "react-hook-form"
import {useState} from "react";


function App() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [message, setMessage] = useState('');
    
    const onSubmit = (data) => {
        setMessage('Submitted successfully')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {message && (<div className="alert alert-success">{message}</div>)}
            <div>
                <label htmlFor="first-name-input">First Name</label>
                <input id="first-name-input" {...register("firstName")} />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default App;