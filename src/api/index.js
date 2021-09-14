export const url = "https://stag-api.nobi.az/api/v1.0"

export const setHeaders = () => {
    const headers = {
        headers: {
            "x-access-token" : localStorage.getItem("token")
        },
    };

    return headers;
};