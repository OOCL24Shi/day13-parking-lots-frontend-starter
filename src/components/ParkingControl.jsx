import React, { useState } from 'react';
import { parkingApi } from '../services/api';
import { useParkingContext } from '../context/ParkingContext';
import '../styles/ParkingControl.css';

const ParkingControl = () => {
    const [plateNumber, setPlateNumber] = useState('');
    const [strategy, setStrategy] = useState('STANDARD');
    const { dispatch } = useParkingContext();
    const [error, setError] = useState('');

    const validatePlateNumber = (number) => {
        const plateRegex = /^[A-Z]{2}-\d{4}$/;
        return plateRegex.test(number);
    };

    const handlePark = async () => {
        if (!validatePlateNumber(plateNumber)) {
            setError('Invalid plate number format. Use format: XX-1234');
            return;
        }
        setError('');

        try {
            dispatch({ type: 'SET_LOADING', payload: true });
            await parkingApi.parkCar(strategy, plateNumber);
            const status = await parkingApi.getParkingStatus();
            dispatch({ type: 'SET_STATUS', payload: status });
            setPlateNumber('');
        } catch (error) {
            setError(error.response?.data || 'Failed to park car');
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
        }
    };

    const handleFetch = async () => {
        if (!validatePlateNumber(plateNumber)) {
            setError('Invalid plate number format. Use format: XX-1234');
            return;
        }
        setError('');

        try {
            dispatch({ type: 'SET_LOADING', payload: true });
            await parkingApi.fetchCar(plateNumber);
            const status = await parkingApi.getParkingStatus();
            dispatch({ type: 'SET_STATUS', payload: status });
            setPlateNumber('');
        } catch (error) {
            setError(error.response?.data || 'Failed to fetch car');
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
        }
    };

    return (
        <div className="parking-control-container">
            <div className="parking-control">
                <input
                    type="text"
                    value={plateNumber}
                    onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
                    placeholder="Enter plate number (XX-1234)"
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
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default ParkingControl;