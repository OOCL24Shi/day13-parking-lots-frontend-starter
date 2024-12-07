import React, { useState } from 'react';
import { parkingApi } from '../services/api';
import { useParkingContext } from '../context/ParkingContext';
import '../styles/ParkingControl.css';

const ParkingControl = () => {
    const [plateNumber, setPlateNumber] = useState('');
    const [strategy, setStrategy] = useState('STANDARD');
    const { dispatch } = useParkingContext();

    const handlePark = async () => {
        try {
            dispatch({ type: 'SET_LOADING', payload: true });
            await parkingApi.parkCar(strategy, plateNumber);
            const status = await parkingApi.getParkingStatus();
            dispatch({ type: 'SET_STATUS', payload: status });
            setPlateNumber('');
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error.message });
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
        }
    };

    const handleFetch = async () => {
        try {
            dispatch({ type: 'SET_LOADING', payload: true });
            await parkingApi.fetchCar(plateNumber);
            const status = await parkingApi.getParkingStatus();
            dispatch({ type: 'SET_STATUS', payload: status });
            setPlateNumber('');
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error.message });
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
        }
    };

    return (
        <div className="parking-control">
            <input
                type="text"
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value)}
                placeholder="Enter plate number"
                className="plate-input"
            />
            <select
                value={strategy}
                onChange={(e) => setStrategy(e.target.value)}
                className="strategy-select"
            >
                <option value="STANDARD">Standard</option>
                <option value="SMART">Smart</option>
                <option value="SUPER">SuperSmart</option>
            </select>
            <button onClick={handlePark} className="control-button park">Park</button>
            <button onClick={handleFetch} className="control-button fetch">Fetch</button>
        </div>
    );
};

export default ParkingControl;