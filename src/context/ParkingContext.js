import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { parkingReducer, initialState } from '../reducers/parkingReducer';
import { parkingApi } from '../services/api';

const ParkingContext = createContext();

export const ParkingProvider = ({ children }) => {
    const [state, dispatch] = useReducer(parkingReducer, initialState);

    useEffect(() => {
        const fetchInitialStatus = async () => {
            try {
                const status = await parkingApi.getParkingStatus();
                dispatch({ type: 'SET_STATUS', payload: status });
            } catch (error) {
                console.error('Error fetching parking status:', error);
            }
        };
        fetchInitialStatus();
    }, []);

    return (
        <ParkingContext.Provider value={{ state, dispatch }}>
            {children}
        </ParkingContext.Provider>
    );
};

export const useParkingContext = () => useContext(ParkingContext);