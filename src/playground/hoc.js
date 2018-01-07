import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>This info is: {props.info} </p>
    </div>
);

const withAdminWarning=(WrappedComponent)=> {
    return (props) =>(
        <div>
            {props.isAdmin && <p>This is private info</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication=(WrappedComponent)=> {
    return (props) =>(
        <div>
            {props.isAuthenticated ? 
            (<WrappedComponent {...props} />) : 
            (<p>login to view info</p>)}
        </div>
    );
};
{/* const AdminInfo=withAdminWarning(Info);
ReactDOM.render(<AdminInfo isAdmin={true} info="Tere naam hmne kia hai"/>,document.getElementById('app')); */}
const AuthenticationInfo=requireAuthentication(Info);
ReactDOM.render(<AuthenticationInfo isAuthenticated={false} info="Tere naam hmne kia hai"/>,document.getElementById('app'));