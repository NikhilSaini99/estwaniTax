import { TextField } from '@mui/material'
import React from 'react'

const CustomTextField = ({ inputType, fieldLabel, field, errorDetail, errors }) => {
    return (
        <TextField fullWidth InputLabelProps={{
            style: {
                color: '#2C306F',
            }
        }}
            InputProps={{
                style: {
                    background: 'white'
                }
            }}
            sx={{ borderRadius: '5px', }}
            variant='outlined'
            type={inputType} label={fieldLabel} error={!!errors[errorDetail]} helperText={errors[errorDetail]?.message}
            {...field} />
    )
}

export default CustomTextField
