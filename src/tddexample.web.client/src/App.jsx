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
                <input id="first-name-input" {...register("firstName", {required: "First Name is required"})} />
                {errors.firstName && errors.firstName.type === "required" && (
                    <div className="text-danger">First Name is required</div>
                )}
            </div>
            <div>
                <label htmlFor="last-name-input">Last Name</label>
                <input id="last-name-input" {...register("lastName", {required: "Last Name is required"})} />
                {errors.lastName && errors.lastName.type === "required" && (
                    <div className="text-danger">Last Name is required</div>
                )}
            </div>
            <button>Submit</button>
        </form>
    )
}

export default App;