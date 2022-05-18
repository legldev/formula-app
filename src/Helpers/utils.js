export const formatDate = (date) => new Date(date).toLocaleDateString("en-US");

export const handleResponse = (response) => {
    if (response.results) {
        return response.results;
    }

    if (response.data) {
        return response.data;
    }

    return response;
};

export const handleError = (error) => {
    if (error.data) {
        return error.data;
    }

    return error;
};

export const BASE_URL = "https://api-formula-1.p.rapidapi.com"