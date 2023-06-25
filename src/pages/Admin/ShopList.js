import React, { useEffect, useState } from 'react'
import { Paper, Box, Table, TableBody, ButtonGroup, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useFetch } from '@/constants/useFetch';
import CustomButton from '@/components/Button';
import Navbar from '@/components/Navbar';



const ShopList = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [userList, setUserList] = useState([])

    const { data: check, fetchAPI } = useFetch('get', '/rtr/list');

    useEffect(() => {
        fetchAPI();
    }, [fetchAPI])

    useEffect(() => {

        if (check !== null) {
            setUserList(check.result.list);
        }
    }, [fetchAPI, check])

    return (
        <>
            <Navbar />
            <Paper elevation={20} sx={{width:'98%', margin: '8rem auto 0 auto', overflowX: 'auto' }}>
                <Stack spacing={4} direction='column'>
                    <Typography variant='h1' sx={{ width: '95%', margin: '0 auto', fontSize: '3rem', color: '#2C306F', }}>Shop RTR List</Typography>
                    <TableContainer>
                        <Table sx={{ width: '95%', margin: '0 auto' }}>
                            <TableHead sx={{ ' & th': { px: '5px' } }}>
                                <TableRow sx={{ '&>*': { textAlign: 'center' } }}>
                                    <TableCell >Business Name</TableCell>
                                    <TableCell>Tin</TableCell>
                                    <TableCell>Full Name</TableCell>
                                    <TableCell>Designation</TableCell>
                                    <TableCell>Email Id</TableCell>
                                    <TableCell>Total Levy Payable</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Approvers Comment</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ ' & td': { px: '5px' } }}>
                                {userList.map((item, index) => (
                                    <TableRow key={index} sx={{ '&>*': { textAlign: 'center' } }}>
                                        <TableCell>{item.company_name}</TableCell>
                                        <TableCell>{item.tin}</TableCell>
                                        <TableCell>{item.first_name}</TableCell>
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

                                            <CustomButton text="Details" bgColor="#2e7d32" handleClick={() => { console.log('hello') }} />

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