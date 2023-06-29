import React, { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Stack, Typography, Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useFetch } from '@/constants/useFetch';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { existingData } from '@/features/RTRformslice';
import { useSession } from 'next-auth/react';
import fetching from '@/constants/fetching';

const ShopList = ({checkss}) => {
    // console.log(checkss);
    const { data: session, status } = useSession()
    const router = useRouter()
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [userList, setUserList] = useState([])
    const dispatch = useDispatch()
    const loginStatus = useSelector((state) => state.loginForm)
    const { data: check, loading, fetchAPI } = useFetch('get', '/admin/pending_user_list');
    const [adminLoginState, setAdminLoginState] = useState(false)

    useEffect(() => {
        fetchAPI();
    }, [fetchAPI])
    useEffect(() => {
        if (check !== null) {
            setUserList(check.result.list)
        }
    }, [check, dispatch])

    useFetch(() => {
        setAdminLoginState(true)
    }, [loginStatus])
    

    return (
        <>
            <Navbar />
            <Paper elevation={20} sx={{ width: '98%', mx: 'auto', my: '5rem', overflowX: 'auto' }}>
                <Stack spacing={4} direction='column'>
                    <Box sx={{ display: 'flex', alignItems:'center'}} >
                        <Typography variant='h1' sx={{ margin: '2.55rem auto', fontSize: '3rem', color: '#2C306F', }}>Pending User List</Typography>
                        <Box sx={{width:{xs:'20%',md:'20%',lg:'15%'}}}>
                        <Button variant='contained' sx={{ background: '#2e7d32 !important' }} onClick={() => router.push('/Admin/Approveduserlist')}>Approved User list</Button>
                        </Box>
                    </Box>
                    <TableContainer>
                        <Table sx={{ width: '95%', margin: '0 auto' }}>
                            <TableHead sx={{ ' & th': { px: '5px' } }}>
                                <TableRow sx={{ '&>*': { textAlign: 'center' } }}>
                                    <TableCell >Business Name</TableCell>
                                    <TableCell>Tin</TableCell>
                                    <TableCell>Full Name</TableCell>
                                    <TableCell>Designation</TableCell>
                                    <TableCell>Email Id</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ ' & td': { px: '5px' } }}>
                                {userList.map((item, index) => (
                                    <TableRow key={index} sx={{ '&>*': { textAlign: 'center' } }}>
                                        <TableCell>{item.name_of_business}</TableCell>
                                        <TableCell>{item.tin}</TableCell>
                                        <TableCell>{item.first_name}</TableCell>
                                        <TableCell>{item.designation}</TableCell>
                                        <TableCell>{item.email_id}</TableCell>
                                        <TableCell> {item.approval_status === 1
                                            ? "Pending"
                                            : item.approval_status === 2
                                                ? "Approved"
                                                : item.approval_status === 3
                                                    ? "Rejected"
                                                    : ""}</TableCell>
                                        <TableCell>

                                            {/* <CustomButton text="Details" bgColor="#2e7d32" handleClick={() => { console.log(item) }} /> */}
                                            {/* <Button variant='contained' sx={{ background: "#2e7d32 !important" }} component='a' onClick={()=>sendProps(item)}>Details</Button> */}
                                            {/* <Button variant='contained' sx={{ background: "#2e7d32 !important" }} component='a' onClick={()=>router.push('/Admin/RTRDetails/Rtr')}>Details</Button> */}
                                            <Button variant='contained' sx={{ background: "#2e7d32 !important" }}
                                                onClick={() => { router.push(`/Admin/ApprovalCheck/${item.user_id}`) }}>Details</Button>

                                        </TableCell>
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

