import { SelectChangeEvent } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { getIconComponent } from '../../helpers/getIconComponent';
import { StyledField } from '../../theme/styles/StyledField';
import { EnumIcons } from '../../types';

export const Time: FC<IPropTypes> = ({ control, name, placeholder, color }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <StyledField color={color}>
            <TimePicker
              {...field}
              views={['hours', 'minutes']}
              value={field.value || null}
              onChange={value => field.onChange(value)}
              slotProps={{
                textField: {
                  placeholder,
                },
              }}
              slots={{
                openPickerIcon: () => getIconComponent(EnumIcons.clock),
              }}
              ampm={false}
            />
          </StyledField>
        )}
      />
    </LocalizationProvider>
  );
};

interface IPropTypes {
  name: string;
  color?: string;
  placeholder?: string;
  control: Control<FieldValues, any>;
  onChange?: (event: SelectChangeEvent) => void;
  error?: {
    message?: string;
  };
}
