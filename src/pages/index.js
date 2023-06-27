
import { Inter } from 'next/font/google'
import LoginForm from './Login/LoginForm'
import Signup from './Signup/Signup'
import RTRform from './RTR/RTRform'
import ShopList from '@/pages/Admin/ShopList'
import Navbar from '@/components/Navbar'
import PageRoutes
  from '@/Routes'
import { useSession, getSession,signOut } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export function handleSignOut()
  {
    signOut() //no need to passanything this will remove all the values from cookies itself
  }

export default function Home() {

  //using this session i can display the userName or email
  const { data: session } = useSession()

  return (
    <>  
      {/* {session ? <LoginForm session={session} handleSignOut={handleSignOut}/>:<ShopList session={session}/>} */}
      {session&&<ShopList session={session}/>}
      {/* {session?LoginForm({session}):RTRform({session})} */}
      {/* <Navbar/>
         <PageRoutes/>
        <Signup/> 
        <RTRform/>
      <ShopList/>
  */}

    </>

  )
}


//for Protected Route

export async function getServerSideProps({ request }) {
  const session = await getSession({ request })  //this request object is going to return us cookies

  if (!session) {
    return {
      redirect: {
        destination: '/Login/LoginForm',
        permanent: false
      }
    }
  }
  return {
    props: { session }
  }
}