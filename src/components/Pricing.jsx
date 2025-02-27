
import { smallSphere, stars } from '../Assets/assets'
import Heading from './Heading'
import PricingList from './PricingList'
import {LeftLine , RightLine} from '../design/Pricing'
import Section from './Section'
const Pricing = () => {
  return (
    <Section className='container relative z-2'>
        <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
            <img
            src={smallSphere} className='relative z-1'
            width={255} height={255} alt='Sphere'
            />
            <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-y-1/2 pointer-events-none'>
                <img src={stars} className='w-full'
                width={950} height={400} alt='Stars'/>
            </div>

        </div>
        <Heading
        tag="Get started with Brianwave"
        title="Pat once,use forever"
        />

        <div className='relative'>
            <PricingList/>
            <LeftLine/>
            <RightLine/>
        </div>
        <div className='flex justify-center mt-10'>
          <a className='text-xs fond-code font-bold tracking-wider border-b
          border-n-6' href='/pricing'>See the full details</a>
        </div>
      
    </Section>
  )
}

export default Pricing
