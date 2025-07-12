import React, { useState , useEffect} from 'react'
import Card from "./Card.jsx"
import InputBox from './InputBox'
import Loader from './Loader.jsx'



export default function Container() {

  const [loading, setLoading] = useState(false)
  const [emotionalData, setEmotionalData] = useState([])
  

  useEffect(() => {
    
    const data = JSON.parse(localStorage.getItem("emotionData"))

    if(data){
      setEmotionalData(data)
    }
  }, [])

  return (

    
    <div className='flex flex-col items-center h-screen gap-8 px-6 md:w-3xl md:mx-auto'>
       <div className='w-full flex flex-col items-center pt-8 pb-6 md:pt-15'>
          <h1 className='text-4xl font-medium mb-5 text-white text-center leading-12 md:text-5xl md:leading-14 '>Emotion <span className='text-[#C084FC]'>Analysis</span> ChatBot....</h1>

          <p className='text-[17px] text-white leading-7 md:text-[20px] md:leading-9'>Discover the feelings behind your words</p>
          <p className='text-[17px] text-white text-center leading-7 md:text-[20px] md:leading-9'>Reflect on your emotions. Get instant analysis. Understand yourself better.</p>
       </div>
        <InputBox setLoading={setLoading} setEmotionalData={setEmotionalData}/>



        { loading ?<Loader></Loader>:((emotionalData.length!==0) && emotionalData.map((data, i) => <Card key={i} data={data}/>))}
      
    </div>
  )
}
