import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { updateLoginState, adminLogin } from "@/features/formSlice"
import CustomButton from "@/components/Button"
import CustomTextField from '@/components/CustomTextField'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import bgImg from "../../../public/assets/background3.jpg"
import Navbar from '@/components/Navbar'
import { useFetch } from '@/constants/useFetch'
import { signIn, signOut, useSession, getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { encryptParams } from '@/utils/encryption'
import useAuth  from '@/utils/useAuth'

export const bgImgStyling = {
    background: `url(${bgImg.src})`,
    zIndex: '-1',
    backgroundSize: 'cover', position: 'absolute', width: '100%', height: '100%'
}

const LoginForm = ({ session, status }) => {

    // useAuth('/Signup/Signup');

    const baseURl = process.env.NEXT_PUBLIC_API_URL

    // const {data,status} = useSession()
    console.log(session, status)
    const router = useRouter()
    const loginFormValue = useSelector((state) => state.loginForm)
    const dispatch = useDispatch()
    const { control,
        watch,
        handleSubmit,
        reset,
        formState: { errors } } = useForm({
            defaultValues: {
                password: "",
                email_id: "",
            },
        })


    useEffect(() => {

    }, [loginFormValue])

    useEffect(() => {
        dispatch(updateLoginState({ adminLogin: null, userLogin: null, loginuserData: null }))
    }, [])

    async function onSubmit(data) {
        //-------------------------------------------
        // try {
        //     const status = signIn("credentials", {
        //         email_id: data.email_id,
        //         password: data.password,
        //         callbackUrl: '/Admin/ShopList',
        //         // redirect:false
        //     })

        //     if (status.error) {
        //         throw new Error("Something went wrong");
        //     }

        //     if (status.ok) {
        //         dispatch(updateLoginState({
        //             email_id: data.email_id,
        //             password: data.password
        //         }))

        //         async function check() {


        //             if (loginFormValue.email_id === "eeaadmin" && loginFormValue.password === "123456") {
        //                 router.push('/Admin/ShopList')
        //             }
        //             else {
        //                 router.push('/RTR/RTRform')
        //             }
        //         }



        //         check();

        //     }
        // } catch (error) {
        //     alert("UnAuthorize User")
        //     reset();
        // }

        // console.log(loginFormValue)

        try {
            const res = await fetch(`${baseURl}/user/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    email_id: data.email_id,
                    password: data.password
                })
            })

            const user = await res.json();
            const userDetailObj = user.result.list
            // const encryptedParam = encryptParams({user_id:user.result.list.user_id})

            if (user.result.list.user_type === 1) {
                dispatch(updateLoginState({ adminLogin: true, userLogin: false, loginuserData: userDetailObj }))
                router.push('/Admin/ShopList')
            }
            else if (user.result.list.user_type === 2) {
                dispatch(updateLoginState({ adminLogin: false, userLogin: true, loginuserData: userDetailObj }))
                router.push({
                    pathname: '/RTR/UserRTRlist',
                    query: { user_id: user.result.list.user_id },
                },
                    undefined,
                    { shallow: true }
                )
            }
        } catch (e) {
            const error = new Error("Un-AuthorizeUser or Recheck Email Id or Password")
            alert(error)
            reset()
        }



        // -------------------------------------------------


        //   if (userType === 1) {
        //     router.push("/Admin/ShopList"); // Redirect to Admin/ShopList
        //   } else if (userType === 2) {
        //     router.push("/Signup/Signup"); // Redirect to Signup/Signup Page
        //   } else {
        //     throw new Error("Invalid user type");
        //   }
        // }

        // if(status.ok){
        //     router.push('/Admin/ShopList')
        // }

        // if (status?.ok) {  
        //       const userType = status?.user?.user_type;
        //       console.log(userType)

        //     if (userType === 1) {
        //       router.push('/Admin/ShopList');
        //     } else if (userType === 2) {
        //       router.push("/Signup/Signup");
        //     } else {
        //       throw new Error("Invalid user type");
        //     }
        //   } else {
        //     throw new Error("Something went wrong");
        //   }
    }



    const formParentStyling = {
        width: { xs: '98%', lg: '40%' },
        margin: '0 auto',
        p: { xs: '0.5rem', lg: '2rem' },
        borderRadius: '20px',
        position: 'relative',
        top: '0',
    }

    return (
        <>

            <Head>
                <title>Eswatini Environment Authority</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />
            <Box sx={{ ...formParentStyling }}>
                <Box className='flex flex-col gap-4 bg-white shadow-2xl p-4 rounded-xl  w-full sm:w-3/4 lg:w-full'
                    component='form' onSubmit={handleSubmit(onSubmit)}
                >
                    <Box sx={{ marginBottom: '2rem' }}>
                        <Typography variant='h1' sx={{ fontSize: { xs: '1.5rem', md: '2rem', lg: '3rem' }, color: '#2C306F' }}>
                            Get Started Now
                        </Typography>
                    </Box>
                    <Controller
                        control={control}
                        name="email_id"

                        // rules={{ required: 'Email is required' }}
                        render={({ field }) => <CustomTextField field={field} inputType='text'
                            fieldLabel='Enter Email' errorDetail='email_id' errors={errors}
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
                        <CustomButton type='submit' text='Login In' bgColor='#1f892a' />
                    </Box>
                    {/* <Box className="flex justify-center">
                        <Link href='/Signup/Signup'><CustomButton text="New User?" bgColor='#2C306F' /></Link>
                    </Box> */}
                </Box>
            </Box>
        </>
    )
}

export default LoginForm

// const crypto = require('crypto');

// const generateSecretKey = () => {
//   const randomBytes = crypto.randomBytes(32);
//   const secretKey = randomBytes.toString('hex');
//   return secretKey;
// };

// const secretKey = generateSecretKey();
// console.log('Secret Key:', secretKey);