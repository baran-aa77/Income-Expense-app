import { Grid ,Typography,Button} from "@mui/material"
import {Link} from 'react-router-dom'
const HeaderAddMoney=():JSX.Element=>{
    return (
        <Grid container item xs={12} p={1}>
            <Grid item xs={6}>
                <Typography variant={'h2'}>
                    اضافه کردن هزینه ها
                </Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
                <Link to={'/'}>
                <Button variant={'contained'}>
                    <Typography variant={'h2'}>
                        بازگشت به صفحه قبل
                    </Typography>
                </Button>
                </Link>
            </Grid>
        </Grid>
    )
}
export default HeaderAddMoney