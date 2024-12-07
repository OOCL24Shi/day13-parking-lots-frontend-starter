import axios from 'axios';

const BASE_URL = 'http://localhost:8080/parking';

export const parkingApi = {
    parkCar: async (strategy, plateNumber) => {
        const response = await axios.post(`${BASE_URL}/park`, null, {
            params: { strategy, plateNumber }
        });
        return response.data;
    },

    fetchCar: async (plateNumber) => {
        const response = await axios.post(`${BASE_URL}/fetch`, null, {
            params: { plateNumber }
        });
        return response.data;
    },

    getParkingStatus: async () => {
        const response = await axios.get(`${BASE_URL}/status`);
        return response.data;
    }
};