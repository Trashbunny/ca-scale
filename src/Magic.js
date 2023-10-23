import { Button, Stack } from "@mui/material";

export default function Magic({show, addCaValue}) {
    const onDecision = (value) => {
        addCaValue(value);
    }
    return (
        <div className={show ? "block" : "hidden"}>
            <Stack direction="column" gap={2}>
                <p>If you had magic, what type would you be proficient at?</p>
                <Stack direction='column' gap={1} className="border mx-8 p-4">
                    <Button variant="contained" onClick={() => onDecision(-10)}>Transfiguration</Button>
                    <Button variant="contained" onClick={() => onDecision(20)}>Healing</Button>
                    <Button variant="contained" onClick={() => onDecision(10)}>Elemental</Button>
                    <Button variant="contained" onClick={() => onDecision(-20)}>Awoo</Button>
                </Stack>
            </Stack>
        </div>
    )
}