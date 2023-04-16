"use client";
import { useState } from "react";


export const InputShowHidePassword = () => {
    const [ password, setPassword ] = useState( true );

    return <div className = "form-group">
        <label htmlFor = "password" className = "form-label">Show/Hide Password</label>
        <div className = "input-group input-group-merge">
            <input type = { password ? "password" : "text" }
                   id = "password"
                   className = "form-control"
                   placeholder = "Enter your password"/>
            <div className = "input-group-text"
                 onClick = { () => setPassword( !password ) }
                 style = { {
                     cursor : "pointer"
                 } }>
                <i data-feather = "eye"></i>
            </div>
        </div>
    </div>
}
