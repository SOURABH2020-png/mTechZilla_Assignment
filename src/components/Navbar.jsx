import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';

export default function Navbar() {

    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

    return (
        <>
            <div className='mt-3 d-flex justify-content-end'>
                {
                    isAuthenticated ?
                        <Button className='btn primary-bg border-0 box-shadow pt-1 px-3' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
                        :
                        <Button className='btn primary-bg border-0 box-shadow pt-1 px-3' onClick={() => loginWithRedirect()}>Log In</Button>
                }
            </div>
            <div>
                {
                    isAuthenticated && (
                        <div className='d-flex gap-3'>
                            <img src={user.picture} alt={user.name} width='60' height='60' />
                            <div>
                                <h5>{user.name}</h5>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}