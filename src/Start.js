import { ButtonGroup, Button, Stack, Typography } from "@mui/material";

import Cover from "./images/cover.jpg";

function Start({addCaValue}) {
    const onStart = () => {
        addCaValue(0);
    }
    return (
        <div className="relative">
            <img 
                className="rounded-lg shadow-lg"
                src={Cover}
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-around">
                <div className="rounded-lg p-8 bg-black/30 backdrop-opacity-30">
                    <Typography variant="h1" align="center" sx={{ fontWeight: 900 }} className="text-white">Chance To Adiel</Typography>
                </div>
                <Button variant="contained" size='large' sx={{minWidth: 200}} onClick={() => onStart()}>Start</Button>
            </div>
        </div>
    )
}

export default Start;