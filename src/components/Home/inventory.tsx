import { Grid ,Typography,Button} from "@mui/material"
import {useMemo} from "react";
import {useSelector} from "react-redux";
import {MoneyType} from "../Model/Model";
const Inventory=():JSX.Element=>{
    const moneyarray=useSelector((state:{money:MoneyType[]})=>state.money)
    const income:number=useMemo(()=>moneyarray.filter(m=>m.type==='income').reduce((count,item)=>count=count+ +item.price,0),[moneyarray])
    const expense:number=useMemo(()=>moneyarray.filter(m=>m.type==='expense').reduce((count,item)=>count=count+ +item.price,0),[moneyarray])
    const total:number=income-expense
    return (
        <Grid container item xs={12} md={4} borderRadius={2} p={1} bgcolor={'lightpink'} my={1} alignItems={'center'}>
            <Grid item xs={6}>
<Typography>
    موجودی
</Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
<Typography>
    {total} تومان
</Typography>
            </Grid>
        </Grid>
    )
}
export default Inventory