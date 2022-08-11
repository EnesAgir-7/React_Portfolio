import { Sidebar } from '../component/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='grid grid-cols-12 gap-6 p-4 px-5 text-center lg:px-48 my-14'>
      <div className='col-span-12 bg-white lg:col-span-3 rounded-2x1'>
        <Sidebar/>
      </div>
      <div className='col-span-12 bg-white lg:col-span-9 rounded-2x1'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
