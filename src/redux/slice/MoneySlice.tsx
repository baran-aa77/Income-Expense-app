import {createSlice} from "@reduxjs/toolkit"
import {MoneyType} from "../../components/Model/Model";
const initialState:MoneyType[]=[
    {id:1,type:'income',price:87000,title:'درآمد ماه مهر'},
    {id:2,type:'expense',price:36000,title:'خرید پرتغال'},
    {id:3,type:'income',price:786000,title:'درآمد ماه آذر'},
    {id:4,type:'expense',price:90000,title:'خرید لوازم تحریر'}
]
const MoneySlice=createSlice({
    name:'Money',
    initialState,
    reducers:{
        addmoney:(state,action)=>{
            state.push(action.payload)
        },
        deletemoney:(state,action)=>{
            const payload=action.payload
            const index=state.findIndex(item=>item.id===payload)
            state.splice(index,1)
        },
        updatemoney:(state,action)=>{
            const payload=action.payload
            const index=state.findIndex(item=>item.id===payload.id)
            state[index]=payload
        }

    }
})
export const{addmoney,deletemoney,updatemoney}=MoneySlice.actions
export default MoneySlice.reducer