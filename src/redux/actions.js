export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
const API_URL = "https://fakestoreapi.com/products";

export const getProducts = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: json
                })
            } else {
                console.log("Unable to fetch data")
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export const addProducts = (data) => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:{
                    data
                }
            });
            const json = await result.json();
            console.log(JSON.stringify(json))
            if (json) {
                dispatch({
                    type: ADD_PRODUCT,
                    payload: json
                })
            } else {
                console.log("Unable to post data")
            }
        }
    } catch (error) {
        console.log(error)
    }
}