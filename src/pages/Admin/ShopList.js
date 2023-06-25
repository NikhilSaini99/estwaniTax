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
    }, [])
    
    useEffect(() => {
        if (check !== null) {
            setUserList(check.result.list);
        }
    }, [check]);


    return (
        <><Navbar/>
        <Paper elevation={20} sx={{margin: '8rem auto 0 auto', overflowX: 'auto' }}>
            <Stack spacing={4} direction='column'>
                <Typography variant='h1' sx={{width:'95%',margin:'0 auto', fontSize: '3rem', color: '#2C306F',  }}>Shop RTR List</Typography>
                <TableContainer>
                    <Table sx={{width:'95%',margin:'0 auto'}}>
                        <TableHead sx={{ ' & th': { px: '5px' } }}>
                            <TableRow sx={{ '&>*': { textAlign: 'center' } }}>
                                <TableCell >Business Name</TableCell>
                                <TableCell>Tin</TableCell>
                                <TableCell>Full Name</TableCell>
                                <TableCell>Designation</TableCell>
                                <TableCell>Email Id</TableCell>
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
                                    <TableCell> {item.approval_status === 1
                                        ? "Pending"
                                        : item.approval_status === 2
                                            ? "Approved"
                                            : item.approval_status === 3
                                                ? "Rejected"
                                                : ""}</TableCell>
                                    <TableCell>{item.admin_comments}</TableCell>
                                    <TableCell>
                                        <ButtonGroup variant='contained'>
                                            <CustomButton text="Accept" bgColor="#2e7d32" handleClick={() => { console.log('hello') }} />
                                            <CustomButton text="Reject" bgColor="#d50000" handleClick={() => { console.log('hello2') }} />
                                        </ButtonGroup>
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
