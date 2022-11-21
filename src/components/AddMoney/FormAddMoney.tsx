import {Grid, Button, TextField} from "@mui/material"
import React, {useEffect, useState} from "react";
import {MoneyType, options} from "../Model/Model";
import {useDispatch, useSelector} from "react-redux";
import {addmoney, updatemoney} from "../../redux/slice/MoneySlice";
import {useNavigate} from "react-router";
import {useParams} from "react-router-dom";
import Snackbar from "../SnackBar/Snackbar";

const FormAddMoney = (): JSX.Element => {
    const {Id} = useParams()
    const [Open, setOpen] = useState<boolean>(false)
    const [Form, setForm] = useState<MoneyType>({
        id: Math.floor(Math.random() * 1000),
        type: 'expense',
        title: '',
        price: 0
    })
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const handleSubmit = () => {
        if (state === 'افزودن') {
            dispatch(addmoney(Form))
            setOpen(true);
            Navigate('/')
        } else if (state === 'ویرایش') {
            dispatch(updatemoney(Form))
            Navigate('/')
        }
    }
    const [state, setstate] = useState('افزودن')
    const [disabled, setdisabled] = useState<boolean>(true)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...Form, [event.target.name]: event.target.value})
    }
    const moneyarray = useSelector((state: { money: MoneyType[] }) => state.money)
    useEffect(() => {
        setdisabled(Form.title === '' || Form.price === 0)
    }, [Form])
    useEffect(() => {
        const a = moneyarray.filter(item => item.id === Number(Id))[0]
        if (a) {
            setForm(a);
            setstate('ویرایش')
        }
    }, [])
    return (
        <Grid container item xs={12} justifyContent={'center'}>
            <Grid container item xs={12}>
                <Grid item xs={12} md={4} p={1}>
                    <TextField select name={'type'} value={Form.type} fullWidth label={'هزینه یا درآمد'}
                               onChange={handleChange} SelectProps={{native: true}}>
                        {options.map(item => (
                            <option key={item.id} value={item.value}>
                                {item.title}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={4} p={1}>
                    <TextField fullWidth label={'موضوع'} value={Form.title} onChange={handleChange}
                               name={'title'}></TextField>
                </Grid>
                <Grid item xs={12} md={4} p={1}>
                    <TextField fullWidth label={'مبلغ'} value={Form.price} onChange={handleChange} type={'number'}
                               name={'price'}></TextField>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth variant={'contained'} disabled={disabled}
                        sx={{bgcolor: Form.type === 'income' ? '#942b57' : '#942b2f'}} onClick={handleSubmit}>
                    {Form.type === 'expense' ? `${state} هزینه ` : `${state} درآمد `}
                </Button>
            </Grid>
            <Snackbar Open={Open} /*setOpen={setOpen}*//>
        </Grid>
    )
}
export default FormAddMoney