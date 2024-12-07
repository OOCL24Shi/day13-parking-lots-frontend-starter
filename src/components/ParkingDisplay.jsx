import React from 'react';
import ParkingLot from './ParkingLot';
import { useParkingContext } from '../context/ParkingContext';
import '../styles/ParkingDisplay.css';

const ParkingDisplay = () => {
    const { state } = useParkingContext();

    return (
        <div className="parking-display">
            {Object.entries(state.parkingLots).map(([name, spots]) => (
                <ParkingLot key={name} name={name} spots={spots} />
            ))}
        </div>
    );
};

export default ParkingDisplay;