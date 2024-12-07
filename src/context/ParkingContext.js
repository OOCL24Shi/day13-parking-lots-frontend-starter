import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { parkingReducer, initialState } from '../reducers/parkingReducer';
import { parkingApi } from '../services/api';

const ParkingContext = createContext(null);

export const ParkingProvider = ({ children }) => {
    const [state, dispatch] = useReducer(parkingReducer, initialState);

    useEffect(() => {
        let mounted = true;

        const fetchInitialStatus = async () => {
            try {
                dispatch({ type: 'SET_LOADING', payload: true });
                const status = await parkingApi.getParkingStatus();
                if (mounted) {
                    dispatch({ type: 'SET_STATUS', payload: status });
                }
            } catch (error) {
                console.error('Error fetching parking status:', error);
                if (mounted) {
                    dispatch({ type: 'SET_ERROR', payload: 'Failed to load parking status' });
                }
            } finally {
                if (mounted) {
                    dispatch({ type: 'SET_LOADING', payload: false });
                }
            }
        };

        fetchInitialStatus();

        return () => {
            mounted = false;
        };
    }, []);

    const value = React.useMemo(() => ({ state, dispatch }), [state]);

    return (
        <ParkingContext.Provider value={value}>
            {state.error ? (
                <div className="error-message">Error: {state.error}</div>
            ) : state.loading ? (
                <div className="loading-message">Loading...</div>
            ) : (
                children
            )}
        </ParkingContext.Provider>
    );
};

export const useParkingContext = () => {
    const context = useContext(ParkingContext);
    if (!context) {
        throw new Error('useParkingContext must be used within a ParkingProvider');
    }
    return context;
};