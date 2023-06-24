
import { Inter } from 'next/font/google'
import LoginForm from './Login/LoginForm'
import Signup from './Signup/Signup'
import RTRform from './RTR/RTRform'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <LoginForm/>
    // <Signup/>
   <RTRform/>
  )
}
