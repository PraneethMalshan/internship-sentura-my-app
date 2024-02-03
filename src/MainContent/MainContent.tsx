import {Component} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export class MainContent extends Component {
    render() {
        return (
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >

                <div>
                    <TextField
                        id="outlined-password-input"
                        label="UID"
                        type="Uid"
                        // autoComplete="given_name"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Email"
                        type="email"
                        // autoComplete="given_name"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Given Name"
                        type="given_name"
                        // autoComplete="given_name"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Middle Name"
                        type="middle_name"
                        // autoComplete="given_name"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Name"
                        type="name"
                        // autoComplete="given_name"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Family Name"
                        type="family_name"
                        // autoComplete="given_name"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Nickname"
                        type="nickname"
                        // autoComplete="given_name"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Phone Number"
                        type="phone_number"
                        // autoComplete="given_name"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Comment"
                        type="comment"
                        // autoComplete="given_name"
                    />
                </div>

            </Box>
        );
    }
}