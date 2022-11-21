import {Grid,Typography,IconButton,styled} from "@mui/material"
import React, {ReactNode} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {useDispatch, useSelector} from "react-redux";
import {MoneyType} from "../Model/Model";
import {deletemoney} from "../../redux/slice/MoneySlice";
import {useNavigate} from "react-router";
interface CostIncomeCardProps{
    backgroundColor:string,
    Title:string,
    icon:ReactNode,
    type:string
}
const CostIncomeCard=({backgroundColor,Title,icon,type}:CostIncomeCardProps):JSX.Element=>{
    const moneyarray=useSelector((state:{money:MoneyType[]})=>state.money)
    const IconButtonCustom=styled(IconButton)({
        color:'#01331e'
    })
    const dispatch=useDispatch()
    const handleDelete=(id:number)=>{
        dispatch(deletemoney(id))
    }
    const navigate=useNavigate()
    const GoForUpdate=(id:number)=>{
        navigate(`/UpdateMoney/${id}`)
    }
    return (
        <Grid container item xs={12} md={4} my={1} borderRadius={2} p={1} bgcolor={backgroundColor}>
            <Grid item xs={6}>
                <Typography>
                    {Title}
                </Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
                {icon}
            </Grid>
            {moneyarray.filter(money=>money.type===type).map(item=>(
                <Grid container key={item.id}>

                    <Grid container item xs={12} alignItems={'center'}>
                        <Grid item xs={4}>
                            <Typography>
                                {item.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                {item.price} تومان
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButtonCustom onClick={()=>handleDelete(item.id)}>
                                <DeleteIcon/>
                            </IconButtonCustom>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButtonCustom onClick={()=>GoForUpdate(item.id)}>
                                <ModeEditIcon/>
                            </IconButtonCustom>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}
export default CostIncomeCard