import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signUp } from '../../api/authAPI';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({ email: '', password: '', username: '' })



    const onSubmit = (data) => {
        fetch(' http://localhost:4000/login ',
            {
                method: ' POST ',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => console.log(data.user))
    }

    const signUpForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email của bạn</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        {...register('email')}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        {...register('password')}
                    />
                </div>
                <button className="btn btn-primary">Đăng ký</button>
            </form>
        )
    }
    return (
        <>
            {signUpForm()}
        </>
    )
}

export default SignUp
