import React from 'react';

const Blog = () => {
    return (
        <div className='w-75 mx-auto bg-dark text-white p-4 my-5'>
            <h2 className='fw-bold text-center'>Blog Section</h2>
            <div className='mb-4'>
                <h4>Answer to the Question No: 1</h4>
                <p><strong>CORS is: </strong>CORS stands for Cross-Origin Resource Sharing .
                It allows us to relax the security applied to an API. 
                This is done by bypassing the Access-Control-Allow-Origin headers, 
                which specify which origins can access the API. Cross-Origin Resource Sharing CORS is 
                an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, 
                or port other than its own from which a browser should permit loading resources. </p>
            </div>
            <div className='mb-3'>
                <h4>Answer to the Question No: 2</h4>
                <p><strong>Firebase using: </strong>Firebase is great for quick projects: 
                it's easy to set up, fast, in many cases requires only front-end logic.
                 It lets you focus on your app instead of implementing custom authentication, 
                web sockets or database connections. </p>
                <p><strong>Implement Authentication: </strong>Usually, authentication by a 
                server entails the use of a user name and password. Other ways to authenticate can 
                be through cards, retina scans, voice recognition, and fingerprints. </p>
                <p><strong>Some Options: </strong><br />
                    <small>1. Two-Factor Authentication (2FA) ...</small><br />
                    <small>2. Single Sign-On (SSO) ...</small><br />
                    <small>3. Multi-Factor Authentication (MFA) ...</small><br />
                    <small>4. Password Authentication Protocol (PAP) ...</small><br />
                    <small>5. Challenge Handshake Authentication Protocol (CHAP) ...</small><br />
                    <small>6. Extensible Authentication Protocol (EAP)</small><br />
                    <small>7. Single-Factor/Primary Authentication. ...</small><br />
                </p>  
            </div>
            <div className='mb-4'>
                <h4>Answer to the Question No: 3</h4>
                <p><strong>Private Route Works: </strong>The private route component is used to protect 
                selected pages in a React app from unauthenticated users. The private route component is similar 
                to the public route, the only change is that redirect URL and authenticate condition. 
                If the user is not authenticated he will be redirected to the login page and 
                the user can only access the authenticated routes If he is authenticated (Logged in). </p>
            </div>
            <div className='mb-4'>
                <h4>Answer to the Question No: 4</h4>
                <p><strong>Node is: </strong>It is used for server-side programming, 
                and primarily deployed for non-blocking, event-driven servers, such as traditional web 
                sites and back-end API services, but was originally designed with real-time, push-based 
                architectures in mind. Every browser has its own version of a JS engine, and node. </p>
                <p><strong>Node Works: </strong>It is a used as backend service where javascript works on 
                the server-side of the application. This way javascript is used on both frontend and backend. 
                Node. js runs on chrome v8 engine which converts javascript code into machine code, 
                it is highly scalable, lightweight, fast, and data-intensive. </p>
            </div>
        </div>
    );
};

export default Blog;