import * as React from 'react';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DateAdapter from '@mui/lab/AdapterMoment';
import moment from 'moment';
import 'moment/locale/es'; 
moment.locale('es')

export default function DatePicker() {
  const [value, setValue] = React.useState(new Date(moment().format()));
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
        <DesktopDatePicker
          label="Fecha de ingreso del pesaje"
          inputFormat="DD/MM/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
  );
}