import { useState } from 'react';


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const PasswordErrorMessage = () => {
    return (
        <p className='fieldError'>Password should be at least 8 characters</p>
    );
};

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");
    const getFormValid = () => {
        return (
            firstName &&
            validateEmail(email) &&
            password.value.length >= 8 &&
            role !== "role"
        );
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
        setRole("role");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    };

    return (
        <div className='w-4/5 h-full flex justify-center text-xl bg-orange-100'>
            <form onSubmit={handleSubmit} className='pt-8 border border-gray-300 bg-white p-20 w-full m-10 ml-60 mr-60'>
                <fieldset>
                    <h2 className='pb-6 pt-6 text-4xl font-bold'>Sign Up</h2>
                    <div className='field flex flex-col pb-6 gap-2'>
                        <label htmlFor='firstName'>First name <sup className='text-red-500'>*</sup></label>
                        <input 
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            placeholder="First name"
                            style={{ width: '100%'}}
                            className='border border-gray-300 rounded-md pl-2 p-1'
                        />
                    </div>
                    <div className='field flex flex-col pb-6 gap-2'>
                        <label htmlFor='lastName'>Last name</label>
                        <input 
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                            placeholder="Last name"
                            style={{ width: '100%'}}
                            className='border border-gray-300 rounded-md pl-2 p-1'
                        />
                    </div>
                    <div className='field flex flex-col pb-6 gap-2'>
                        <label htmlFor='email' >Email address<sup className='text-red-500'> *</sup></label>
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Email"
                            style={{ width: '100%'}}
                            className='border border-gray-300 rounded-md pl-2 p-1'
                        />
                    </div>
                    <div className='field flex flex-col pb-6 gap-2'>
                        <label htmlFor='password'>Password <sup className='text-red-500'>*</sup></label>
                        <input 
                            id="password"
                            name="password"
                            type="password"
                            value={password.value}
                            onChange={(e) => {
                                setPassword({ ...password, value: e.target.value });
                            }}
                            onBlur={() => {
                                setPassword({ ...password, isTouched: true });
                            }}
                            placeholder="Password"
                            style={{ width: '100%'}}
                            className='border border-gray-300 rounded-md pl-2 p-1'
                        />
                        { password.isTouched && password.value.length < 8 ? (
                            <PasswordErrorMessage />
                        ) : null }
                    </div>
                    <div className='field flex flex-col pb-10 gap-2'>
                        <label htmlFor='role'>Role <sup className='text-red-500'>*</sup></label>
                        <select 
                            id='role' 
                            name='role' 
                            value={role} 
                            onChange={(e) => setRole(e.target.value)}
                            style={{ width: '100%'}}
                            className='border border-gray-300 rounded-md pl-2 p-2'
                        >
                            <option value='role'>Role</option>
                            <option value='individual'>Individual</option>
                            <option value='business'>Business</option>
                        </select>
                    </div>
                    <button 
                        type="submit" 
                        disabled={!getFormValid} 
                        style={{ width: '360px'}}
                        className='bg-orange-950 text-gray-100 p-3 text-2xl font-sans border-none rounded-md shadow-sm shadow-blue-700 mt-6'
                    >
                        CREATE ACCOUNT
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default SignUp; 