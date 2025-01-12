import React from 'react';
import App from '../components/App';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to My Web App</h1>
            <p>This is the home page of the application.</p>
            <App />
        </div>
    );
};

export default Home;