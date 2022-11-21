import { Grid ,Typography,Button} from "@mui/material"
import HeaderAddMoney from "../../components/AddMoney/HeaderAddMoney";
import FormAddMoney from "../../components/AddMoney/FormAddMoney";
const AddMoney=():JSX.Element=>{
    return (
        <Grid>
            <HeaderAddMoney/>
            <FormAddMoney/>
        </Grid>

    )
}
export default AddMoney