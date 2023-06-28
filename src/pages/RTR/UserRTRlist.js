import React, { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useFetch } from '@/constants/useFetch';
import CustomButton from '@/components/Button';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { existingData } from '@/features/RTRformslice';
import { useSession } from 'next-auth/react';
import { decryptParams } from '@/utils/encryption';


const ShopList = () => {
    const { data: session, status } = useSession()
    // console.log(session,status)
    const router = useRouter()
    // const decryptedParams = decryptParams(Number(router.query.user_id))
    const user_id = Number(router.query.user_id)


    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [rtrFilledList, setRTRFilledList] = useState([])
    const dispatch = useDispatch()
    const loginStatus = useSelector((state) => state.loginForm)
    const { data: check, fetchAPI } = useFetch('get', `/rtr/list/${loginStatus?.loginuserData?.user_id}`);
    const [adminLoginState, setAdminLoginState] = useState(false)
    console.log(router.query.user_id)
    useEffect(() => {
        fetchAPI();
    }, [fetchAPI])

    useEffect(() => {
        if (check !== null) {
            setRTRFilledList(check.result.list)
        }
    }, [fetchAPI, check, dispatch])

    useFetch(() => {
        setAdminLoginState(true)
    }, [loginStatus])

    console.log(loginStatus.adminLogin)

    return (
        <>

            <Navbar />
            <Paper elevation={20} sx={{ width: '98%', mx: 'auto', my: '5rem', overflowX: 'auto' }}>
                <Stack spacing={4} direction='column'>
                    <Typography variant='h1' sx={{ width: '95%', margin: '2.55rem auto', fontSize: '3rem', color: '#2C306F', }}>
                        Filled RTR List</Typography>
                    <TableContainer>
                        <Table sx={{ width: '95%', margin: '0 auto' }}>
                            <TableHead sx={{ ' & th': { px: '5px' } }}>
                                <TableRow sx={{ '&>*': { textAlign: 'center' } }}>
                                    <TableCell >Company Name</TableCell>
                                    <TableCell>Tin</TableCell>
                                    <TableCell>Designation</TableCell>
                                    <TableCell>Email Id</TableCell>
                                    <TableCell>Total Levy Payable</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Approvers Comment</TableCell>
                                    <TableCell>Action</TableCell>
                                    <TableCell>Form Detail</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ ' & td': { px: '5px' } }}>
                                {rtrFilledList.map((item, index) => (
                                    <TableRow key={index} sx={{ '&>*': { textAlign: 'center' } }}>
                                        <TableCell>{item.company_name}</TableCell>
                                        <TableCell>{item.tin}</TableCell>
                                        <TableCell>{item.designation}</TableCell>
                                        <TableCell>{item.email_id}</TableCell>
                                        <TableCell>{item.total_levy_payable}</TableCell>
                                        <TableCell> {item.approval_status === 1
                                            ? "Pending"
                                            : item.approval_status === 2
                                                ? "Approved"
                                                : item.approval_status === 3
                                                    ? "Rejected"
                                                    : ""}</TableCell>
                                        <TableCell>{item.admin_comments}</TableCell>
                                        <TableCell>
                                            {/* <CustomButton text="Details" bgColor="#2e7d32" handleClick={() => { console.log(item) }} /> */}
                                            {/* <Button variant='contained' sx={{ background: "#2e7d32 !important" }} component='a' onClick={()=>sendProps(item)}>Details</Button> */}
                                            {/* <Button variant='contained' sx={{ background: "#2e7d32 !important" }} component='a' onClick={()=>router.push('/Admin/RTRDetails/Rtr')}>Details</Button> */}
                                            <Button variant='contained' sx={{ background: "#2e7d32 !important" }}
                                                onClick={() => { dispatch(existingData(item)); router.push(`/RTR/RTRform`) }} disabled={item.approval_status === 1 || item.approval_status === 2}>Edit/Update</Button>
                                        </TableCell>
                                        <TableCell><Button variant='contained' sx={{ background: "#2e7d32 !important" }}
                                            onClick={() => { dispatch(existingData(item)); router.push(`/Admin/RTRDetails/${item.rtr_id}`) }}>View Details</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Paper>
        </>
    )
}

export default ShopList


/*   useEffect(() => {
        async function checking() {
            try {
                // const response = await axios({
                //     method: 'get',
                //     url: `${process.env.NEXT_PUBLIC_API_URL}/rtr/list`
                // })
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rtr/list`);

                const data = await response.json();
                setUserList(data.result.list)
            } catch (err) {
                console.log(err)
            }
        }
        checking();

    }, [])
 */