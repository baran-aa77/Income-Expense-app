import { Grid ,Typography,Button} from "@mui/material"
import {Link} from 'react-router-dom'
import moneyimg from '../../image/money.png'
const HeaderHome=():JSX.Element=>{
    return (
        <Grid container item xs={12} bgcolor={'primary.light'} sx={{borderRadius:2,p:2,alignItems:'center',justifyContent:'space-between'}} >
            <Grid container item xs={6}>
            <Grid item xs={6}>
                <Typography>
                    درآمد و هزینه
                </Typography>
            </Grid>
            <Grid item>
                <Link to={'/AddMoney'}>
                <Button variant={'contained'} sx={{'&:hover':{bgcolor:'primary.main',color:'white'}}}>
                <Typography>
                    افزودن
                </Typography>
                </Button>
                    </Link>
            </Grid>
            </Grid>
            <Grid container item xs={6} justifyContent={'flex-end'}>
                <img src={moneyimg} width={'200px'}/>
            </Grid>
        </Grid>
    )
}
export default HeaderHome