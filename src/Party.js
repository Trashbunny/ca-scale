import { ButtonGroup, Button, Stack } from "@mui/material";

import PartyMeme from "./images/party.jpg";

function Party({show, addCaValue}) {
    const onDecision = (value) => {
        addCaValue(value);
    }
    return (
        <div className={show ? "block" : "hidden"}>
            <Stack direction="column" gap={2}>
                <div className="flex justify-center">
                    <img className="w-2/3" src={PartyMeme}/>
                </div>
                <p>You magically appear in a party, what do you do?</p>
                <Stack direction='column' gap={1} className="border mx-8 p-4">
                    <Button variant="contained" onClick={() => onDecision(-20)}>Talk and get to know new people</Button>
                    <Button variant="contained" onClick={() => onDecision(20)}>Find familiar people to talk to</Button>
                    <Button variant="contained" onClick={() => onDecision(10)}>Sit in the corner</Button>
                    <Button variant="contained" onClick={() => onDecision(30)}>Quietly start mixing drinks for people</Button>
                    <Button variant="contained" onClick={() => onDecision(-30)}>What is a party?</Button>
                </Stack>
            </Stack>
        </div>
    )
}

export default Party;