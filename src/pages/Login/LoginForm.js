import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { updateLoginState } from "@/features/formSlice"
import CustomButton from "@/components/Button"
import CustomTextField from '@/components/CustomTextField'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import bgImg from "../../../public/assets/background3.jpg"
import Link from 'next/link'


export const bgImgStyling={
    background: `url(${bgImg.src})`,
     zIndex: '-1',
    backgroundSize: 'cover', position: 'absolute', width: '100%', height: '100%'
}

const LoginForm = () => {
    const dispatch = useDispatch()
    const loginFormValue = useSelector((state) => state.loginForm)

    const { register, control,
        handleSubmit,
        formState: { errors } } = useForm({
            defaultValues: {
                email: loginFormValue.email,
                password: loginFormValue.password,
            },
        })

    const onSubmit = (data) => {
        dispatch(updateLoginState(data))
        console.log(data)
        console.log('inside new estwani', loginFormValue);
    }
    

    const formParentStyling = {
        width: { xs: '98%', lg: '30%' },
        margin: '0 auto',
        p: { xs: '0.5rem', lg: '2rem' },
        borderRadius: '20px',
        position: 'relative',
        top: '0',
        minHeight: { xs: '100vh', lg: '50rem' }
    }

    return (
        <>
            <Head>
                <title>Eswatini Environment Authority</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

         
            <Box sx={{...bgImgStyling}}>
                </Box>

            <Box sx={{ ...formParentStyling }}>
                <Box className='flex flex-col gap-4 bg-white shadow-2xl p-4 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-3/4 lg:w-full'
                component='form' onSubmit={handleSubmit(onSubmit)}
                 >
                    <Box sx={{ marginBottom: '2rem' }}>
                        <Typography variant='h1' sx={{ fontSize: { xs: '1.5rem', md: '2rem', lg: '3rem' },color:'#2C306F' }}>
                            Get Started Now
                        </Typography>
                    </Box>
                    <Controller
                        control={control}
                        name="email"
                      
                        rules={{ required: 'Email is required' }}
                        render={({ field }) => <CustomTextField field={field} inputType='email'
                            fieldLabel='Enter Email' errorDetail='email' errors={errors}
                        />}>
                    </Controller>

                    <Controller
                        control={control}
                        name="password"
                        rules={{ required: 'Password is required' }}
                        render={({ field }) => <CustomTextField field={field} inputType='password'
                            fieldLabel='Enter Password' errorDetail='password' errors={errors}
                        />}>
                    </Controller>
                    <Box className="flex justify-center">
                        <CustomButton type='submit' text='Login In' bgColor='#2C306F' />
                    </Box>
                    <Box className="flex justify-center">
                    <Link href='/Signup/Signup'><CustomButton text="New User?" bgColor='#2C306F'/></Link>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default LoginForm

{/* <input type='email' defaultValue={loginFormValue.email}
                    {...register('email', { required: true })} />
                {errors.email && <p>This Field is required</p>} 

                 <input type='password' defaultValue={loginFormValue.password}
                    {...register('Password', { required: true })} />
                {errors.password && <p>This Field is required</p>} */}
{/* <button type="submit" className='rounded-full bg-black text-white px-5 py-1'>Login</button> */ }
