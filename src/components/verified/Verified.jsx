import React from 'react'
import './Verified.scss'
export default function Verified() {
    return (
        <div className="verification-wrapper">
            <div className="text-wrapper">
                <h1>Account Verified</h1>
                <h3>Your account has been successfully verified</h3>
                <p>You can start using Newcastle organiser.</p>
                <a href="/login">Login</a>
            </div>
        </div>
    )
}
