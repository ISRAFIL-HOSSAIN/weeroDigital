import React,{FC} from 'react'

interface pageProps{
  params? : any;
}
const page: FC<pageProps> = ({params}) => {
  console.log("SHow case page ")
  return (
    <div>{` SingleShowcase Page `}</div>
  )
}

export default page