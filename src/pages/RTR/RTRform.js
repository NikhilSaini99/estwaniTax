import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { rtrData } from '@/features/RTRformslice';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { Box } from '@mui/material';
import CustomButton from '@/components/Button';
import CustomTextField from '@/components/CustomTextField';

const RTRform = () => {
  const dispatch = useDispatch()
  const RTRformData = useSelector((state) => state.rtrForm);
  const [selectedDates, setSelectedDates] = useState({
    from: null,
    to: null
  })
  //Destructing values from use State(selectedDates)
  const { from, to } = selectedDates


  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      dateFrom: null,
      dateTo: null,
      companyName: '',
      tin: '',
      email: '',
      cellPhone: ''
    }
  })

  const onsubmit = (data) => {
    setSelectedDates({
      ...selectedDates, from: data.dateFrom.toISOString(),
      to: data.dateTo.toISOString()
    })
    dispatch(rtrData({ ...data, dateFrom: from, dateTo: to }));
  }
  const formParentStyling = {
    width: { xs: '98%', lg: '50%' },
    margin: '0 auto',
    p: { xs: '0.5rem', lg: '2rem' },
    borderRadius: '20px',
    position: 'relative',
    top: '0',
    minHeight: { xs: '100vh', lg: '800px' }
  }
  return (
    <>
      {RTRformData && console.log(RTRformData)}
      <Box sx={{ ...formParentStyling }}>
        <Box component='form' className='grid grid-cols-2 gap-4 bg-white shadow-2xl p-4 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-3/4 lg:w-full'
          onSubmit={handleSubmit(onsubmit)}>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              control={control}
              name="dateFrom"
              rules={{ required: 'Date is required' }}
              render={({ field }) => <DatePicker label="From" slotProps={{ textField: { variant: 'outlined', helperText: 'MM/DD/YYYY', } }}
                // onChange={(date) => setfromDate(date.toISOString())}
                {...field} />}
            >
            </Controller>

            <Controller
              control={control}
              name="dateTo"
              rules={{ required: 'Date is required' }}
              render={({ field }) => <DatePicker label="To" slotProps={{ textField: { variant: 'outlined', helperText: 'MM/DD/YYYY', } }}
                // onChange={(date) => settoDate(date.toISOString())}
                {...field} />}
            >
            </Controller>
          </LocalizationProvider>

          <Controller
            control={control}
            name="companyName"
            rules={{ required: 'Name of the Company is required' }}
            render={({ field }) => <CustomTextField field={field} inputType='text'
              fieldLabel='Company Name' errorDetail='companyName' errors={errors}
            />}
          />



          <Controller
            control={control}
            name="tin"
            rules={{ required: 'TIN is required' }}
            render={({ field }) => <CustomTextField field={field} inputType='text'
              fieldLabel='TIN' errorDetail='tin' errors={errors}
            />}
          />



          <Controller
            control={control}
            name="email"
            rules={{ required: 'Email Address is required' }}
            render={({ field }) => <CustomTextField field={field} inputType='email'
              fieldLabel='Enter Email' errorDetail='email' errors={errors}
            />}
          />



          <Controller
            control={control}
            name="cellPhone"
            rules={{ required: 'Cell Phone Number is required' }}
            render={({ field }) => <CustomTextField field={field} inputType='number'
              fieldLabel='Cell Phone Number' errorDetail='cellPhone' errors={errors}
            />}
          />

          <Box className="col-span-full flex justify-center">
            <CustomButton text='Submit' bgColor='#2C306F' type='submit' />
          </Box>
        </Box>
      </Box>



    </>
  )
}

export default RTRform
