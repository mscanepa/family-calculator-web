import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8001',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getRelationships = async (cm) => {
    try {
        const response = await api.get(`/api/v1/relationships?cm=${cm}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching relationships:', error);
        throw error;
    }
};

export const calculateRelationships = async (data) => {
    try {
        const response = await api.post('/api/v1/analyze', {
            cm: data.cm,
            generacion: data.generacion,
            sexo: data.sexo,
            x_inheritance: data.x_inheritance,
            segments: data.segments,
            largest_segment: data.largest_segment,
            endogamia: data.endogamia
        });
        return response.data;
    } catch (error) {
        console.error('Error calculating relationships:', error);
        throw error;
    }
};
