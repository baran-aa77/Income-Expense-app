import {Grid} from "@mui/material"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import HeaderHome from "../../components/Home/HeaderHome";
import Inventory from "../../components/Home/inventory";
import CostIncomeCard from "../../components/Home/Cost&Income-Card";

const Home=():JSX.Element=>{
    return (
        <Grid container p={1}>
            <HeaderHome></HeaderHome>
            <Inventory></Inventory>
            <CostIncomeCard backgroundColor={'#E4AEC5'} Title={'هزینه ها'} type={'expense'} icon={<TrendingUpIcon/>}></CostIncomeCard>
            <CostIncomeCard backgroundColor={'#FFC4DD'} Title={'درآمد ها'} type={'income'} icon={<TrendingDownIcon/>}></CostIncomeCard>

        </Grid>
    )
}
export default Home