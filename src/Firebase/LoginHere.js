import React from 'react';

const LoginHere =({email, setEmail, 
    password, setPassword, 
    handleLogin, handleSignup, 
    hasAccount, setHasAccount, 
    emailError, passwordError}) => {
    
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input 
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button className="sweet" onClick={handleLogin}> Sign In</button>
                        <p>Don't have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                    </>
                    ) : (
                        <>
                        <button className="sweet" onClick={handleSignup}>Sign Up</button>
                        <p>Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>
                    )
                }
                </div>
            </div>
        </section>
    );
}

export default LoginHere;