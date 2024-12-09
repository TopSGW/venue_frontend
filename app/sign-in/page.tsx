'use client';

import { useState } from 'react';

export default function SignIn(){
    const [showPassword, setShowPassword] = useState(false);
    const handleShowChange = () => {
        setShowPassword(!showPassword);
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError('Email is required');
            return false;
        } else if (!re.test(email)) {
            setEmailError('Invalid email format');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validatePassword = (password: string) => {
        if (!password) {
            setPasswordError('Password is required');
            return false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            return false;
        }
        setPasswordError('');
        return true;
    };

    return(
        <div className="min-h-[100vh] bg-[#f4f6fa] min-w-full flex flex-col">
            <div className="flex-1 w-full mx-auto px-4 py-8 h-auto">
                <div className="flex justify-center items-center">

                    <div className="bg-white max-w-[600px] w-full p-6 max-sm:p-4 rounded-md shadow-[0_.125rem_.25rem_rgba(0,0,0,0.075)]">
                        <div className="text-2xl text-black font-bold text-center">Sign In</div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}