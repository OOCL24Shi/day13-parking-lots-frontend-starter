import React from 'react';
import { ParkingProvider } from './context/ParkingContext';
import ParkingControl from './components/ParkingControl';
import ParkingDisplay from './components/ParkingDisplay';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
    return (
        <ErrorBoundary>
            <ParkingProvider>
                <div className="App">
                    <ParkingControl />
                    <ParkingDisplay />
                </div>
            </ParkingProvider>
        </ErrorBoundary>
    );
}

export default App;