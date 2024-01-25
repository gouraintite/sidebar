import { Home, Star, User, Menu, DatabaseScript, LogOut} from 'iconoir-react'
import { AnimatePresence, motion } from 'framer-motion';
import {useState} from 'react'
import Account from '@/components/myspace/compte';
import Annonces from '@/components/myspace/annonces';
import { useRouter } from 'next/router';
import MyFavs from '../components/myspace/favoris';

const compte = () => {

  const router = useRouter()
  const [collapse, setCollapse] = useState(false)
  const [navItems, setNavItems] = useState([
    {
      id: 0,
      active: false,
      logo: <Home />,
      text: "Go home",
      func: ()=> {
        router.push('/')
      }
    },
    {
      id: 1,
      active: true,
      logo: <User />,
      text: "My account",
      func: ()=> {
        setStep(1)
      }
    },
    {
      id: 2,
      active: false,
      logo: <Star />,
      text: "Most appreciated",
      func: ()=> {
        setStep(2)
      }
    },
    {
      id: 3,
      active: false,
      logo: <DatabaseScript />,
      text: "Publications",
      func: ()=> {
        setStep(3)
      }
    }
  ])

  const [step, setStep] = useState(1);

  const updateValue = (itemId) => {
    setNavItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, active: true} : { ...item, active: false}
      )
    );
  };

  const toCollapse = ()=>{
    if (collapse) {
      return 250
    } else {
      return 100
    }
  }


  return (
    <div className='flex flex-grow justify-start'>
        <AnimatePresence>
          <motion.div
                layout
                initial={{ opacity:0, width:30, }}
                animate={{ opacity:1, width:toCollapse() }}
                transition={{
                  delay:0.1, 
                  duration:0.3}}
                className={` h-screen static flex flex-grow flex-col justify-around item-start ps-8 bg-gradient-to-r from-primary/80 0% from 50% to-primary 10% text-white text-xl py-6`}>
            <div className='flex-none '>
              <Menu 
                className='cursor-pointer'
                onClick={()=>{
                  setCollapse(prev=>!prev)
                }} />
            </div>
            <div className={`grow flex flex-col justify-center text-lg items-start space-y-12`}>
              {navItems.map(({id, logo, text, func})=>(
              <motion.div
                  {...framerIcon}
                  key={id}
                  onClick={()=>{
                    updateValue(id)
                    func()
                  }}
                 className={`flex justify-start cursor-pointer hover:duration-300 hover:delay-75 rounded-xl space-x-2 hover:border hover:border-red-600 hover:bg-white/10 p-2 ${navItems[id].active ? 'border border-red-600 bg-white/10' : 'ease-in border border-transparent'}`}>
                  <div className='w-auto'>
                    {logo}
                  </div>
                  {collapse && 
                  <motion.p {...framerText(1)}>
                    {text}
                  </motion.p>
                  }
              </motion.div>

              ))}
            </div>
            <div className={`item-start`}>
              <motion.div
                    {...framerIcon}
                  className='flex justify-start'>
                  <div className='w-12'>
                    <LogOut />
                  </div>
                  {collapse && 
                  <motion.p {...framerText(1)}>
                    Déconnexion
                  </motion.p>}
                </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <div className='w-[97%]'>  
            {
              step === 1 && <motion.div
                              {...framerStep}>
                              <Account />
                            </motion.div>
            }
            {
              step === 2 &&  <motion.div
                              {...framerStep}>
                              <MyFavs />
                            </motion.div>
            }
            {
              step === 3 &&   <motion.div
                                {...framerStep}>
                                  <Annonces />
                              </motion.div>
            }
          </div>      
        </AnimatePresence> 
    </div>
  )
}

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    damping: 3,
    stiffness: 50,
    restDelta: 0.001
  },
}

const framerStep = {
  exit:{ opacity:0, x:40 },
  initial:{ opacity:0, x:-40 },
  animate:{ opacity:1, x:0 },
  transition:{x: 30}
}

const framerText = delay => {
  return {
    initial: { opacity: 0, x: 3, height:10 },
    animate: { opacity: 1, x: -1 },
    transition: {
      delay: 0.5 + delay / 10,
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.5,
      duration:0.3
    },
  }
}
export default compte