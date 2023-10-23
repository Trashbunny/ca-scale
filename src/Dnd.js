import { ButtonGroup, Button, Stack } from "@mui/material";


function Dnd({show, addCaValue}) {
    const onDecision = (value) => {
        addCaValue(value);
    }
    return (
        <div className={show ? "block" : "hidden"}>
            <Stack direction="column" gap={2}>
                <p>Pick a DnD class!</p>
                <Stack direction='column' gap={1} className="border mx-8 p-4">
                    <Button variant="contained" onClick={() => onDecision(-20)}>Barbarian</Button>
                    <Button variant="contained" onClick={() => onDecision(-5)}>Bard</Button>
                    <Button variant="contained" onClick={() => onDecision(15)}>Cleric</Button>
                    <Button variant="contained" onClick={() => onDecision(20)}>Wizard</Button>
                    <Button variant="contained" onClick={() => onDecision(-10)}>Druid</Button>
                    <Button variant="contained" onClick={() => onDecision(5)}>Paladin</Button>
                </Stack>
            </Stack>
        </div>
    )
}

export default Dnd;