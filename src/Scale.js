import { Stack, Slider, Card, CardMedia, CardContent, Typography, CardHeader } from "@mui/material";
import Adiel from "./images/Adiel.png";
import Chance from "./images/Chance.png";

function ACSlider({show, value}) {
    const css = `
        .my-slider {
            height: 16px;
        }
    `
    return (
        <div className={show ? "block" : "hidden"}>
            <Stack direction='column' spacing={2}>
                <div className="w-full flex justify-center">
                    <Card sx={{maxWidth: 300}}>
                        <CardHeader
                            title={value >=50 ? "Adiel" : "Chance"}
                        />
                        <CardMedia 
                            component='img'
                            height='160'
                            image={value >= 50 ? Adiel : Chance}
                        />
                        <CardContent>
                            <Typography variant="body">
                                You are {value >= 50 ? value : 100 - value}% {value >=50 ? "Adiel" : "Chance"}!
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <Stack spacing={2} direction="row" alignItems="center" >
                    <style type="text/css">{css}</style>
                    <div className="w-[80px] sm:w-[160px]">
                        <img
                            src={Chance}
                        />
                    </div>
                    <Slider
                        value={value}
                        slotProps={{
                            root: { className: "my-slider" }
                        }}
                        track={false}
                    />  
                    <div className="w-[80px] sm:w-[160px]">
                        <img
                            src={Adiel}
                        />
                    </div>
                </Stack>
            </Stack>
        </div>
    );
}

export default ACSlider;