import { useCallback, useReducer } from 'react'
import fetching from './fetching'

function reducerFunc(state, action) {
    if (action.type === "success") {

        return {
            ...state, data: action.data,
            error: false
        }
    }
    else if (action.type === "existing") {
        // alert(action.errorMessage)
        return {
            ...state,
            error:true,
            errorMessage: action.errorMessage
        }
    }
    else if (action.type === "error") {
        return {
            ...state,
            error: action.error,

        }
    }
}

export const useFetch = (method, path) => {

    const [state, dispatch] = useReducer(reducerFunc, { data: null, error: null, errorMessage: '' })

    const fetchAPI = useCallback((databody) => {

        fetching(method, path, databody).then((response) => {

            // console.log(response.response.data.result.mes)
            if (response.response.status === 402) {
                dispatch({ type: 'existing', errorMessage: response.response.data.result.mes })
            }else{
                dispatch({ type: 'success', data: response.data })
            }
            
        }).catch((e) => {
            dispatch({ type: 'error', err: e });
        });




    }, [method, path])


    return {
        data: state.data,
        error: state.error,
        errorMessage: state.errorMessage,
        fetchAPI
    }
}


