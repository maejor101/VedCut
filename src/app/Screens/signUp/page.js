'use client';

import Image from 'next/image';
import logo2 from '../assets/logo2.png';
import Link from 'next/link';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        email: '',
        password: '',
        confirmPassword: '',
        sources: [], // Track selected sources
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false); 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validateName = (name) => /^[A-Za-z\s]+$/.test(name);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            const updatedSources = checked
                ? [...prevData.sources, value] // Add source if checked
                : prevData.sources.filter((source) => source !== value); // Remove if unchecked
            return { ...prevData, sources: updatedSources };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.firstName.trim() || !validateName(formData.firstName)) {
            newErrors.firstName = 'First name must contain only letters.';
        }

        if (!formData.secondName.trim() || !validateName(formData.secondName)) {
            newErrors.secondName = 'Second name must contain only letters.';
        }

        if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
        }

        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <main className="form-container">
            <section className="secondary-container">
                <nav>
                    <Image
                        src={logo2}
                        alt="App Logo"
                        width={50}
                        height={50}
                        style={{ margin: '20px' }}
                    />
                </nav>

                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <h2>
                        Or{' '}
                        <Link href="/Screens/signIn" style={{ color: '#3B82F6' }}>
                            Sign In
                        </Link>
                    </h2>

                    <section className="input-section">
                        <input
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        {errors.firstName && <p className="error-text">{errors.firstName}</p>}

                        <input
                            placeholder="Second Name"
                            type="text"
                            name="secondName"
                            value={formData.secondName}
                            onChange={handleChange}
                            required
                        />
                        {errors.secondName && <p className="error-text">{errors.secondName}</p>}

                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}

                        <div className="password-container">
                            <input
                                placeholder="Password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="eye-button"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </button>
                        </div>
                        {errors.password && <p className="error-text">{errors.password}</p>}

                        <div className="password-container">
                            <input
                                placeholder="Confirm Password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="eye-button"
                            >
                                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                            </button>
                        </div>
                        {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

                        <h1 style={{fontWeight:'bold', fontSize:'1.2rem'}}>Where did you hear about us?</h1>
                        <div className="checkbox-container">
                            {['Facebook', 'LinkedIn', 'Twitter', 'Instagram'].map((source) => (
                                <label key={source} className="custom-checkbox">
                                    <input
                                        type="checkbox"
                                        value={source}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className="checkmark"></span>
                                    {source}
                                </label>
                            ))}
                        </div>

                        <button type="submit" className="main-button">
                            Sign Up
                        </button>
                    </section>
                </form>
            </section>
        </main>
    );
}
