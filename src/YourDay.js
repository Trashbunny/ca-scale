import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";


function YourDay({show, addCaValue}) {
    const [dayText, setDayText] = useState('');
    const onNext = () => {
        addCaValue(dayText.split(' ').length > 4 ? -20 : 20);
    }
    return (
        <div className={show ? "block" : "hidden"}>
            <Stack direction="column" gap={2}>
                <p>Tell me about your day!</p>
                <TextField 
                    fullWidth
                    rows={4}
                    multiline
                    value={dayText}
                    onChange={(e) => {setDayText(e.target.value)}}
                />
                <Button variant="contained" onClick={onNext}>Next</Button>
            </Stack>
        </div>
    )
}

export default YourDay;