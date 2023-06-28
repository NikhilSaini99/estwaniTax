import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Paper, Box, Table, TableBody, Dialog, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Slide, DialogTitle, Button, Stack } from '@mui/material';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import CustomTextField from '@/components/CustomTextField';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import CustomButton from '@/components/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useFetch } from '@/constants/useFetch';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const UserDetails = () => {
    const RTRformData = useSelector((state) => state.rtrForm);
    const { data: formdata, fetchAPI } = useFetch('put', `/rtr/update_rtr_status/${RTRformData.rtr_id}`)
    const [openAccept, setOpenAccept] = useState(false);
    const [openReject, setOpenReject] = useState(false);
    const router = useRouter()
    const userDetails = router.query;
    const formRef = useRef(null);


    const { handleSubmit, control, watch, formState: { errors } } = useForm({

        defaultValues: {
            dateFrom: dayjs(RTRformData.from_date),
            dateTo: dayjs(RTRformData.to),
            companyName: RTRformData.company_name,
            tin: RTRformData.tin,
            email: RTRformData.email_id,
            cellPhone: RTRformData.cell_phone_number,
            designation: RTRformData.designation,
            fullName: RTRformData.first_name,
            admin_comments: RTRformData.admin_comments || "",
            approval_status: RTRformData.approval_status,
            total_levy_payable: RTRformData.total_levy_payable
        }
    })

    const onsubmit = async (data) => {
        console.log('hello')
         fetchAPI({
            email_id: RTRformData.email_id, admin_comments: data.admin_comments,
            approval_status: 2
        })
        setOpenAccept(false);
        setOpenReject(false);
        router.push('/Admin/ShopList')
    }

    const onsubmit2 = async (data) => {
        console.log('hello')
         fetchAPI({
            email_id: RTRformData.email_id, admin_comments: data.admin_comments,
            approval_status: 3
        })
        setOpenAccept(false);
        setOpenReject(false);
        router.push('/Admin/ShopList')
    }
// console.log(RTRformData)

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

    const btnsStyling = {
        width: '10rem', p: '1rem',
        background: '#1F892A'
    }

    //Comment Opener
    const handleClickOpenAccept = () => {
        setOpenAccept(true);
    };
    const handleClickOpenReject = () => {
        setOpenReject(true);
    };

    const sendCommentandClose = () => {
        setOpenAccept(false);
    };
    const sendCommentandClose2 = () => {
        setOpenReject(false);
    };


    const disabledTextFieldStyling = { style: { fontWeight: 'bold' } }

    return (
        <>
            {/* {RTRformData && console.log(RTRformData)} */}
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
                            disabled={true} inputpropStyling={disabledTextFieldStyling}
                        />}
                    />

                    <Controller
                        control={control}
                        name="tin"
                        rules={{ required: 'TIN is required' }}
                        render={({ field }) => <CustomTextField field={field} inputType='text'
                            fieldLabel='TIN' errorDetail='tin' errors={errors} disabled={true}
                            inputpropStyling={disabledTextFieldStyling}
                        />}
                    />

                    <Controller
                        control={control}
                        name="email"
                        rules={{ required: 'Email Address is required' }}
                        render={({ field }) => <CustomTextField field={field} inputType='email'
                            fieldLabel='Enter Email' errorDetail='email' errors={errors} disabled={true}
                            inputpropStyling={disabledTextFieldStyling}
                        />}
                    />

                    <Controller
                        control={control}
                        name="cellPhone"
                        rules={{ required: 'Cell Phone Number is required' }}
                        render={({ field }) => <CustomTextField field={field} inputType='number'
                            fieldLabel='Cell Phone Number' errorDetail='cellPhone' errors={errors} disabled={true}
                            inputpropStyling={disabledTextFieldStyling}
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
                                            <TextField type="number" sx={{ fontWeight: 'bold' }} value={RTRformData.pmp_opening_stock} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.pmp_purchases} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.pmp_sales} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.pmp_rate} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.pmp_levy} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.pmp_closing_stock} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>-30 microns plastics</TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.mmp_opening_stock} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.mmp_purchases
                                            } disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.mmp_sales} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.mmp_rate} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.mmp_levy} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.mmp_closing_stock} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Refuse bags</TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.refuse_bags_opening_stock
                                            } disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.refuse_bags_purchases} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.refuse_bags_sales} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.refuse_bags_rate
                                            } disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.refuse_bags_levy} disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                        <TableCell>
                                            <TextField type="number" value={RTRformData.refuse_bags_closing_stock
                                            } disabled inputProps={disabledTextFieldStyling} />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box className="col-span-full flex flex-col gap-4 justify-center items-center my-6">
                            <Box className="flex items-center gap-4">
                                <Typography variant="body1" sx={{ fontWeight: "bold" }} > TOTAL LEVY PAYABLE</Typography>
                                <Controller
                                    control={control}
                                    name="total_levy_payable"
                                    render={({ field }) => (
                                        <TextField type="number" {...field} variant='standard' disabled={true} sx={{ width: '150px' }} inputProps={{ ...disabledTextFieldStyling }} />
                                    )}
                                />
                            </Box>

                        </Box>
                    </Box>

                    <Controller
                        control={control}
                        name="fullName"
                        rules={{ required: 'FullName is required' }}
                        render={({ field }) => <CustomTextField field={field} inputType='text'
                            fieldLabel='Full Name' errorDetail='fullName' errors={errors} disabled={true} inputpropStyling={disabledTextFieldStyling}
                        />}
                    />
                    <Controller
                        control={control}
                        name="designation"
                        rules={{ required: 'Desgination is required' }}
                        render={({ field }) => <CustomTextField field={field} inputType='text'
                            fieldLabel='Desgination' errorDetail='designation' errors={errors} disabled={true} inputpropStyling={disabledTextFieldStyling}
                        />}
                    />


                    <Box className="col-span-full gap-4 flex justify-center"  >
                        <CustomButton text='Accept' bgColor='green' handleClick={handleClickOpenAccept}
                        //   btnDisable={!handleCheck}
                        />
                        <CustomButton text='Reject' bgColor='red' handleClick={handleClickOpenReject}
                        //   btnDisable={!handleCheck}
                        />

                    </Box>

                    <Dialog
                        open={openAccept}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={sendCommentandClose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <Typography variant='h4' sx={{ fontSize: '1.2rem', background: '#1F892A', p: '2rem', color: 'white', textAlign: 'center' }}>Are you Sure you want to Accept the form?</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '550px', p: '2rem', gap: '2rem', alignItems: 'center' }}>

                            <Controller control={control}
                                name="admin_comments"
                                render={({ field }) => <TextField multiline={true} fullWidth inputProps={{ style: { height: '150px' } }} {...field} />}>
                            </Controller>

                            <Stack spacing={2} direction='row' justifyContent='flex-end'>
                                <Button onClick={sendCommentandClose} type="submit"  variant='contained' sx={btnsStyling}>Cancel</Button>
                                <Button onClick={handleSubmit(onsubmit)}  type="submit"  variant='contained' sx={btnsStyling}>Add Comment</Button>
                            </Stack>
                        </Box>

                    </Dialog>
                    <Dialog
                        open={openReject}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={sendCommentandClose2}
                        aria-describedby="alert-dialog-slide-description"

                    >
                        <Typography variant='h4' sx={{ fontSize: '1.2rem', background: '#ff0000', p: '2rem', color: 'white', textAlign: 'center' }}>Are you Sure you want to Reject the form?</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '550px', p: '2rem', gap: '2rem', alignItems: 'center' }}>
                            <Controller control={control}
                                name="admin_comments"
                                render={({ field }) => <TextField multiline={true} fullWidth inputProps={{ style: { height: '150px' } }} {...field} />}>
                            </Controller>
                            <Stack spacing={2} direction='row' justifyContent='flex-end'>
                                <Button onClick={sendCommentandClose2} type="submit" variant='contained' sx={{ ...btnsStyling, background: '#ff0000' }}>Cancel</Button>
                                <Button onClick={handleSubmit(onsubmit2)} type="submit" variant='contained' sx={{ ...btnsStyling, background: '#ff0000' }}>Add Comment</Button>
                            </Stack>
                        </Box>

                    </Dialog>
                </Box>
            </Box>



        </>
    )
}

export default UserDetails
