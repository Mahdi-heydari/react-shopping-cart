import getAllData from "../data/getAllData"


const loadData=()=> dispatch=> {
    getAllData().then(data=> {
        dispatch({ type: 'SET_DATA', payload: data })
    })
}

export {
    loadData
}