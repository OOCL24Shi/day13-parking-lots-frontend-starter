export const initialState = {
    parkingLots: {
        'Plaza Park': Array(9).fill(null),
        'City Mall Garage': Array(12).fill(null),
        'Office Tower Parking': Array(9).fill(null)
    },
    error: null,
    loading: true
};

export const parkingReducer = (state, action) => {
    switch (action.type) {
        case 'SET_STATUS':
            return {
                ...state,
                parkingLots: parseParkingStatus(action.payload),
                error: null
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
    try {
        const lots = {};
        if (!status) return initialState.parkingLots;

        status.split('\n').forEach(lotStatus => {
            const [name, carsStr] = lotStatus.split(': ');
            const carsArray = carsStr
                .replace('[', '')
                .replace(']', '')
                .split(',')
                .map(plate => plate.trim())
                .filter(plate => plate.length > 0);

            const size = name === 'City Mall Garage' ? 12 : 9;
            lots[name] = Array(9).fill(null).map((_, i) => carsArray[i] || null);
        });
        return lots;
    } catch (error) {
        console.error('Error parsing parking status:', error);
        return initialState.parkingLots;
    }
};