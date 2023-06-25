import { useCallback, useReducer } from 'react'
import axios from 'axios'
const baseURl = process.env.NEXT_PUBLIC_API_URL

function reducerFunc(state, action) {
    if (action.type === "success") {
        // console.log(action.data.data)
        return {
            ...state, data: action.data.data
        }
    }
}

export const useFetch = (method, path) => {

    const [state, dispatch] = useReducer(reducerFunc, { data: null })

    const fetchAPI = useCallback(async (databody) => {
        try {
            if (method === 'post') {
                const response = await axios({
                    method: method,
                    url: `${baseURl}${url}`,
                    data: databody
                })

               
                dispatch({ type: 'success', data: response })

            }
            else if (method === "get") {
                const response = await axios({
                    method: method,
                    url: `${baseURl}${path}`,
                })
                dispatch({ type: 'success', data: response })
            }
        } catch (err) {
            return err
        }

    }, [method, path])


        // const fetchAPI = async() =>{
        //         const userList = await axios({
        //             method:method,
        //             url:path
        //         }).then((res)=>{
        //             console.log(res.data)
        //         })
                
        // }

        // fetchAPI();

    return {data:state.data , fetchAPI}
}


