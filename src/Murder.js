import { ButtonGroup, Button, Stack } from "@mui/material";


function Murder({show, addCaValue}) {
    const onDecision = (value) => {
        addCaValue(value);
    }
    return (
        <div className={show ? "block" : "hidden"}>
            <Stack direction="column" gap={2}>
                <p>Are you the kinda person...</p>
                <Stack direction='column' gap={1} className="border mx-8 p-4">
                    <Button variant="contained" onClick={() => onDecision(-20)}>who'd assist your friend execute a murder</Button>
                    <Button variant="contained" onClick={() => onDecision(20)}>who'd just help hide the body</Button>
                </Stack>
            </Stack>
        </div>
    )
}

export default Murder;