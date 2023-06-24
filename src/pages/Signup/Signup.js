import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { signupData } from '@/features/SignupSlice'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import CustomTextField from '@/components/CustomTextField'
import { bgImgStyling } from '../Login/LoginForm'
import CustomButton from '@/components/Button'



const Signup = () => {
    const dispatch = useDispatch()
    const signUpFormValue = useSelector((state) => state.SignupForm);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            businessName: signUpFormValue.businessName,
            address: signUpFormValue.address,
            tin: signUpFormValue.tin,
            primaryContact: signUpFormValue.primaryContact,
            designation: signUpFormValue.designation,
            teleNo: signUpFormValue.teleNo,
            cellNo: signUpFormValue.cellNo,
            email: signUpFormValue.email,
            password: signUpFormValue.password,
            rePassword: signUpFormValue.rePassword,
        }
    })

    const onsubmit = (data) => {

        if (data.password === data.rePassword) {
            dispatch(signupData(data));
            console.log(data)
            console.log(signUpFormValue)
        }
        else {
            alert("Password didn't Match")
        }

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
            <Head>
                <title>Eswatini Environment Authority</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Box sx={{ ...bgImgStyling }}>
            </Box>

            <Box sx={{ ...formParentStyling }}>
                <Box className='grid grid-cols-2 gap-4 bg-white shadow-2xl p-4 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-3/4 lg:w-full'
                    component='form' onSubmit={handleSubmit(onsubmit)}>
                    <Typography className='col-span-full' variant='h1' sx={{ marginBottom: "2rem", fontSize: { xs: '1.5rem', md: '2rem', lg: '3rem' }, color: '#2C306F' }}>
                        Sign Up Now!!
                    </Typography>
                    <Controller
                        control={control}
                        name='businessName'
                        rules={{ required: 'BusinessName is required' }}
                        render={({ field }) =>
                            <CustomTextField
                                inputType='text' fieldLabel='Enter BusinessName' field={field} errorDetail='businessName'
                                errors={errors}
                            />}
                    >
                    </Controller>
                    <Controller
                        control={control}
                        name='address'
                        rules={{ required: 'Address is required' }}
                        render={({ field }) =>
                            <CustomTextField
                                inputType='text' fieldLabel='Enter Address' field={field} errorDetail='address'
                                errors={errors}
                            />}
                    >
                    </Controller>
                    <Controller
                        control={control}
                        name='tin'
                        rules={{ required: 'Tin is required' }}
                        render={({ field }) =>
                            <CustomTextField
                                inputType='number' fieldLabel='Enter Tin' field={field} errorDetail='tin'
                                errors={errors}
                            />}
                    >
                    </Controller>
                    <Controller
                        control={control}
                        name='primaryContact'
                        rules={{ required: 'PrimaryContact is required' }}
                        render={({ field }) =>
                            <CustomTextField
                                inputType='text' fieldLabel='Enter Full Name' field={field} errorDetail='primaryContact'
                                errors={errors}
                            />}
                    >
                    </Controller>
                    <Controller
                        control={control}
                        name='designation'
                        rules={{ required: 'Designation is required' }}
                        render={({ field }) =>
                            <CustomTextField
                                inputType='text' fieldLabel='Enter Designation' field={field} errorDetail='designation'
                                errors={errors}
                            />}
                    >
                    </Controller>
                    <Controller
                        control={control}
                        name='teleNo'
                        rules={{ required: 'TeleNo is required' }}
                        render={({ field }) =>
                            <CustomTextField
                                inputType='number' fieldLabel='Enter Telephone Number' field={field} errorDetail='teleNo'
                                errors={errors}
                            />}
                    >
                    </Controller>
                    <Controller
                        control={control}
                        name='cellNo'
                        rules={{ required: 'CellNo is required' }}
                        render={({ field }) =>
                            <CustomTextField
                                inputType='number' fieldLabel='Enter Celephone Number' field={field} errorDetail='cellNo'
                                errors={errors}
                            />}
                    >
                    </Controller>
                    <Controller
                        control={control}
                        name='email'
                        rules={{ required: 'Email is required' }}
                        render={({ field }) =>
                            <CustomTextField
                                inputType='email' fieldLabel='Enter Email' field={field} errorDetail='email'
                                errors={errors}
                            />}
                    >
                    </Controller>
                    <Controller
                        control={control}
                        name='password'
                        rules={{ required: 'Password is required' }}
                        render={({ field }) =>
                            <CustomTextField
                                inputType='password' fieldLabel='Enter Password' field={field} errorDetail='password'
                                errors={errors}
                            />}
                    >
                    </Controller>
                    <Controller
                        control={control}
                        name='rePassword'
                        rules={{ required: 'Password is required' }}
                        render={({ field }) =>
                            <CustomTextField
                            name="repassword"
                                inputType='password' fieldLabel='Re-Type-Password' field={field} errorDetail='rePassword'
                                errors={errors}
                            />}
                    >
                    </Controller>
                    <Box className="col-span-full flex justify-center">
                        <CustomButton type='submit' text='Register' bgColor='#2C306F' />
                    </Box>
                </Box>
            </Box>
        </>

    )
}

export default Signup