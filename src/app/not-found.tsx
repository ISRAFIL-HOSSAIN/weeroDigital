import Link from 'next/link'
import { headers } from 'next/headers'
import { notfound } from './assets'
import Image from 'next/image'
 
export default async function NotFound() {
  const headersList = headers()
//   const domain = headersList.get('host')
//   const data = await getSiteData(domain)
  return (
    <div className="w-full flex flex-col justify-center items-center h-[100vh] m-0 p-0">
        <div className="w-96 h-96 ">
            <Image src={notfound} alt="notfound" width={600} height={600} />
        </div>
      <h3>Could not find requested resource</h3>
     
      <Link href="/"><u>Go to Home</u></Link>
    
    </div>
  )
}