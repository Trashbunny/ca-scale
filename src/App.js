import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';
import ACSlider from './Scale';
import { Typography } from '@mui/material';
import { useState } from 'react';
import Start from './Start';
import YourDay from './YourDay';
import Murder from './Murder';
import Magic from './Magic';
import Party from './Party';
import Dnd from './Dnd';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  
});


function App() {
  const [caValue, setCaValue] = useState(50);
  const [progress, setProgress] = useState(0);

  const addCaValue = (value) => {
    setCaValue(caValue + value);
    setProgress(progress + 1)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='h-screen flex justify-center items-center'>
        <div className='flex flex-col items-stretch gap-8 w-2/3 p-8'>
          <div className={`${progress === 0 ? 'block' : 'hidden'}`}>
            <Start addCaValue={(value) => addCaValue(value)}/>
          </div>
          <div className={progress > 0 ? 'block' : 'hidden'}>
            <Typography variant="h3" className="text-center">Chance To Adiel</Typography>
            <div className='h-[400px]'>
              <Murder show={progress === 1} addCaValue={(value) => addCaValue(value)} />
              <YourDay show={progress === 2} addCaValue={(value) => addCaValue(value)} />
              <Magic show={progress === 3} addCaValue={(value) => addCaValue(value)} />
              <Party show={progress === 4} addCaValue={(value) => addCaValue(value)} />
              <Dnd show={progress === 5} addCaValue={(value) => addCaValue(value)} />
              <ACSlider show={progress >= 6} value={caValue}/>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
