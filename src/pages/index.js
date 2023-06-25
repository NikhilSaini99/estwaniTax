
import { Inter } from 'next/font/google'
import LoginForm from './Login/LoginForm'
import Signup from './Signup/Signup'
import RTRform from './RTR/RTRform'
import ShopList from '@/pages/Admin/ShopList'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
 
  return (
  <>
 <Navbar/>
 <LoginForm/>
 {/*  
     <Signup/>
    <RTRform/>
   <ShopList/> */}
  </>
   
    
  )
}
