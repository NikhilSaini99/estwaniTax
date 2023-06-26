import React from "react";
import AvatarImg from '../../public/assets/logo.png'
import { Stack, Box, IconButton, Drawer, Paper, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from './Navbar.module.css'
import Link from "next/link";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navColor, setNavColor] = useState(false)


  function changeColor() {
    if (window.scrollY > 100) {
      setNavColor(true)
    }
    else {
      setNavColor(false)
    }
  }
 
  useEffect(() => {
    changeColor();
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    }
  }, [])


  function handleHamburger() {
    setIsOpen(!isOpen);
  }
  return (
    <Paper elevation={20} sx={{ zIndex: '999', position: "relative", top: '0', backgroundColor: 'transparent', }}>
      <Stack
        py={1.5}
        sx={{
          width:"100%",
          position: "relative", top: '0',
          flexDirection: { xs: "row", sm: "row", md: "row" },
          ...(navColor ? {
            backgroundColor:'#1f892a',
            transition: "background-color 0.5s ease",
          } : {
            backgroundColor:'#1f892aC5   ',
            transition: 'background-color 0.8s ease-out',
          }),
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: { md: "1rem" },
          px: { xs: "2rem", md: "5rem" },
        }}
      >
        <Box
          display="flex"
          sx={{
            "&:hover": {
              color: "#DE3163",
              transition: "color 0.5s",
            },
            cursor: "pointer",
            alignItems: "center",
            gap: { xs: "10px", sm: "20px" },
            py: { xs: "1rem", sm: "0.8rem", md: "0.2rem" },
            
          }}
        >
        <Box sx={{display:'flex',alignItems:'center',gap:'0.2rem'}}>
        <Link href={'/'}><Image
            src={AvatarImg}
            alt="Profile_image"
            style={{
              width: "100%",
              height: '100%',
              maxWidth: "10rem",
              borderRadius: "50%",
            }}
          /></Link>
        </Box>
         
        </Box>

        <Box fontWeight="bold">
          <ul className={styles.check}>
            <Link href={'/RTR/RTRform'}>RTR Form</Link>
            <Link href={'/Admin/ShopList'}>RTR List</Link>
          </ul>
          <Button sx={{ display: "none", color: 'black' }}
            onClick={handleHamburger}
            className={styles.hamburger}
            type="button"
            aria-label="menu"
            endIcon={<MenuIcon sx={{ fontSize: "12rem !important" }} />}></Button>

        </Box>
        <Drawer
          anchor="right"
          open={isOpen}
          variant="temporary"
          onClose={handleHamburger}
          className={styles.drawer}
          BackdropProps={{
            style: { backgroundColor: "transparent", opacity: 2 },
          }}
          PaperProps={{
            elevation: 5,
            sx: {
              paddingTop: "20px",
              // height: 320,
              width: "100%",
              backgroundColor: "#E9F1FA",
            },
          }}
        >

          <Box fontWeight="bold">
            <ul>
            <Link href={'/RTR/RTRform'}>RTR Form</Link>
            <Link href={'/Admin/ShopList'}>RTR List</Link>
            </ul>

            <IconButton
              onClick={handleHamburger}
              display="flex"
              sx={{ width: "100%", marginTop: "2.5rem" }}
              role="button"
            >

              <CloseIcon
                sx={{
                  fontSize: "2rem",
                  color: "black",
                  borderRadius: "50px",
                }}
              />
            </IconButton>
          </Box>
        </Drawer>
      </Stack>
     </Paper>
  );
};
export default Navbar;
