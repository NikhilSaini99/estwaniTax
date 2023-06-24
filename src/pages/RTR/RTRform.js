import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { rtrData } from '@/features/RTRformslice';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { Box, Typography } from '@mui/material';
import CustomButton from '@/components/Button';
import CustomTextField from '@/components/CustomTextField';
import bg from "../../../public/assets/background3.jpg"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material';


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
    width: { xs: '98%', md: '98%', lg: '95%' },
    margin: '0 auto',
    p: { xs: '0.5rem', lg: '2rem' },
    borderRadius: '20px',
    position: 'relative',
    top: '0',
    minHeight: { xs: '100vh', }
  }
  return (
    <>
      {RTRformData && console.log(RTRformData)}
      <Box sx={{ background: `url(${bg.src})`, backgroundSize: 'cover' }}>
        <Box sx={{ ...formParentStyling }}>
          <Box component='form' className='grid grid-cols-2 gap-4 bg-white shadow-2xl p-4 rounded-xl'
            onSubmit={handleSubmit(onsubmit)}>
            <Typography className='col-span-full' variant='h1' sx={{ marginBottom: "2rem", fontSize: { xs: '1.5rem', md: '2rem', lg: '3rem' }, color: '#2C306F' }}>
              Plastic Levy Return!
            </Typography>
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
            <Box className='col-span-full'>
              <TableContainer >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell>Opening Stock (Qty)</TableCell>
                      <TableCell>Purchases(+) (Qty)</TableCell>
                      <TableCell>Sales(-) (Qty)</TableCell>
                      <TableCell>Rate</TableCell>
                      <TableCell>Levy(E)</TableCell>
                      <TableCell>Closing Stock
                      <br></br>(OP + P – S) (Qty)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>+30 microns plastics</TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" value='0.35' disabled />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>-30 microns plastics</TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" value='0.20' disabled />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Refuse bags</TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" value='0.35' disabled />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                      <TableCell>
                        <TextField type="text" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        TOTAL LEVY PAYABLE
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Box className="col-span-full flex justify-center">
                <CustomButton text="Calculate" bgColor='#2C306F' />
              </Box>
            </Box>

            <Controller
              control={control}
              name="fullName"
              rules={{ required: 'FullName is required' }}
              render={({ field }) => <CustomTextField field={field} inputType='text'
                fieldLabel='Full Name' errorDetail='fullName' errors={errors}
              />}
            />
            <Controller
              control={control}
              name="designation"
              rules={{ required: 'Desgination is required' }}
              render={({ field }) => <CustomTextField field={field} inputType='text'
                fieldLabel='Desgination' errorDetail='designation' errors={errors}
              />}
            />

          


            <FormGroup className="col-span-full flex justify-center">
              <FormControlLabel required control={<Checkbox />} label="Certified to the best of my knowledge as true, correct, and complete" />
            </FormGroup>

            <Box className="col-span-full flex justify-center">
              <CustomButton text='Submit' bgColor='#2C306F' type='submit' />
            </Box>


          </Box>
        </Box>

      </Box>


    </>
  )
}

export default RTRform
