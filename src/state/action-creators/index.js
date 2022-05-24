export const depositMoney= (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdorawMoney= (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'withdoraw',
            payload: amount
        })
    }
}