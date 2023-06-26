import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Paper, Box, Table, TableBody, ButtonGroup, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Stack, Typography, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import CustomTextField from '@/components/CustomTextField';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import CustomButton from '@/components/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


const UserDetails = () => {
    const router = useRouter()
    const userDetails = router.query;


    const RTRformData = useSelector((state) => state.rtrForm);

    const { handleSubmit, control, watch, formState: { errors } } = useForm({
        defaultValues: {
            dateFrom: dayjs(RTRformData.from_date),
            dateTo: dayjs(RTRformData.to),
            companyName: RTRformData.company_name,
            tin: RTRformData.tin,
            email: RTRformData.email_id,
            cellPhone: RTRformData.cell_phone_number,
            designation: RTRformData.designation,
            fullName: RTRformData.first_name
        }
    })

    const onsubmit = (data) => {
        const watchedData = watch();
    }


    const formParentStyling = {
        width: { xs: '98%', md: '98%', lg: '98%' },
        margin: '0 auto',
        p: { xs: '0.5rem', lg: '2rem' },
        borderRadius: '20px',
        position: 'relative',
        top: '0',
        minHeight: {
            xs: '100vh',
            mt: '15rem'
        }
    }



    return (
        <>
            {RTRformData && console.log(RTRformData)}
            <Navbar />
            <Box sx={{ ...formParentStyling }}>
                <Box component='form' className='grid grid-cols-2 gap-4 bg-white shadow-2xl p-4 rounded-xl mt-24'
                    onSubmit={handleSubmit(onsubmit)}>
                    <Typography className='col-span-full' variant='h1' sx={{ marginBottom: "2rem", fontSize: { xs: '1.5rem', md: '2rem', lg: '3rem' }, color: '#2C306F' }}>
                        Plastic Levy Return!
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Controller
                            control={control}
                            name="dateFrom"
                            rules={{ required: 'Date is required' }}
                            render={({ field }) => <DatePicker disabled={true} label="From" slotProps={{ textField: { variant: 'outlined', disabled: true } }}
                                {...field} />}
                        >
                        </Controller>

                        <Controller
                            control={control}
                            name="dateTo"
                            rules={{ required: 'Date is required' }}
                            render={({ field }) => <DatePicker disabled={true} label="To" slotProps={{ textField: { variant: 'outlined', disabled: true } }}
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
                            disabled={true}
                        />}
                    />

                    <Controller
                        control={control}
                        name="tin"
                        rules={{ required: 'TIN is required' }}
                        render={({ field }) => <CustomTextField field={field} inputType='number'
                            fieldLabel='TIN' errorDetail='tin' errors={errors} disabled={true}
                        />}
                    />

                    <Controller
                        control={control}
                        name="email"
                        rules={{ required: 'Email Address is required' }}
                        render={({ field }) => <CustomTextField field={field} inputType='email'
                            fieldLabel='Enter Email' errorDetail='email' errors={errors} disabled={true}
                        />}
                    />

                    <Controller
                        control={control}
                        name="cellPhone"
                        rules={{ required: 'Cell Phone Number is required' }}
                        render={({ field }) => <CustomTextField field={field} inputType='number'
                            fieldLabel='Cell Phone Number' errorDetail='cellPhone' errors={errors} disabled={true}
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
                                            <TextField type="number" sx={{ fontWeight: 'bold' }} value={RTRformData.pmp_opening_stock} disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.pmp_purchases} disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.pmp_sales} disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.pmp_rate} disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.pmp_levy} disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.pmp_closing_stock} disabled />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>-30 microns plastics</TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.mmp_opening_stock} disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.mmp_purchases
                                            } disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.mmp_sales} disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.mmp_rate} disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.mmp_levy} disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.mmp_closing_stock} disabled />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Refuse bags</TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.refuse_bags_opening_stock
                                            } disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.refuse_bags_purchases} disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.refuse_bags_sales} disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.refuse_bags_rate
                                            } disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.refuse_bags_levy} disabled />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.refuse_bags_closing_stock
                                            } disabled />
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
                    </Box>

                    <Controller
                        control={control}
                        name="fullName"
                        rules={{ required: 'FullName is required' }}
                        render={({ field }) => <CustomTextField field={field} inputType='text'
                            fieldLabel='Full Name' errorDetail='fullName' errors={errors} disabled={true}
                        />}
                    />
                    <Controller
                        control={control}
                        name="designation"
                        rules={{ required: 'Desgination is required' }}
                        render={({ field }) => <CustomTextField field={field} inputType='text'
                            fieldLabel='Desgination' errorDetail='designation' errors={errors} disabled={true}
                        />}
                    />


                    <Box className="col-span-full flex justify-center">
                        <CustomButton text='Accept' bgColor='green' type='submit'
                        //   btnDisable={!handleCheck}
                        />
                    </Box>
                    <Box className="col-span-full flex justify-center">
                        <CustomButton text='Reject' bgColor='red' type='submit'
                        //   btnDisable={!handleCheck}
                        />
                    </Box>

                </Box>
            </Box>



        </>
    )
}

export default UserDetails
