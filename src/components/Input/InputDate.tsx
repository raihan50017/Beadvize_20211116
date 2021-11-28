import fr from 'date-fns/locale/fr';
import * as React from 'react';
import { registerLocale } from  'react-datepicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
registerLocale('fr', fr)

interface ILocationInputProps {
  dateFormat?: string;
  edit: boolean;
  name: string;
  placeholderText?:string;
  value?: Date | null;
  id?: string;
  minDate?: Date | null,
  maxDate?: Date | null 
  handleDateChange: (date: Date, id: any , name: any) => void;
  showMonthYearPicker?: boolean;
}

export const DateInput: React.SFC<ILocationInputProps> = ({
  edit,
  name,
  handleDateChange,
  placeholderText,
  value,
  id,
  minDate,
  maxDate,
  showMonthYearPicker,
  dateFormat,
}) => (
  <DatePicker
    id={id}
    placeholderText={placeholderText}
    locale='fr'
    className='form-control'
    name={name}
    dateFormat={dateFormat}
    disabled={!edit}
    minDate={minDate}
    maxDate={maxDate}
    selected={value}
    onChange={(date : Date) => handleDateChange(date , id , name)}
    showMonthYearPicker={showMonthYearPicker}
  />
);
