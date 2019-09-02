import React, { Component } from 'react';
import { Paper,IconButton,Typography,Button} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

class ReservationDetailComponent extends Component {

    constructor(props) {
        super(props);
        
        this.setState({
            ...props
        });
    }

    render() {
        return (
           <>
           <div className="page-content header-clear-medium color-white">
            <Paper className="paper-content">
                <Grid>
                <Typography className="paper-title" variant="h6" gutterBottom >
                    {this.props.name}
                </Typography>
                </Grid>
                <Grid>
                 <Typography>
                    <Grid>

                    </Grid>
                </Typography>
                </Grid>
                <Grid className="reservation_grid">
                    <img className="qrcode_img" src="../img/qrcode.png" alt="qrocde"/>
                </Grid>
                <Grid className="grid-content">
                    <Button style={{float:'right'}}>back</Button>
                </Grid>
            </Paper>
           </div>
           </>
        );
    }
}

export default ReservationDetailComponent;