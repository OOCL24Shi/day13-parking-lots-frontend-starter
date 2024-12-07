export const initialState = {
    parkingLots: {
        'Plaza Park': Array(9).fill(null),
        'City Mall Garage': Array(9).fill(null),
        'Office Tower Parking': Array(9).fill(null)
    },
    error: null,
    loading: false
};

export const parkingReducer = (state, action) => {
    switch (action.type) {
        case 'SET_STATUS':
            return {
                ...state,
                parkingLots: parseParkingStatus(action.payload)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
};

const parseParkingStatus = (status) => {
    const lots = {};
    status.split('\n').forEach(lotStatus => {
        const [name, carsStr] = lotStatus.split(': ');
        const cars = JSON.parse(carsStr);
        lots[name] = Array(9).fill(null).map((_, i) => cars[i] || null);
    });
    return lots;
};