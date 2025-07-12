import React, {useState} from 'react'


export default function InputBox({setLoading, setEmotionalData}) {


    const [value, setValue] = useState("")
    

    const handleValue = async(e) => {
       try {
       
         setLoading(true)
          e.preventDefault()
            
          const res = await fetch(`${import.meta.env.BACKEND_URL}`,{
            method:"POST",
            headers:{
               "Content-Type":"application/json"
            },
            body:JSON.stringify({
              text:value
            })
        } )

        const data = await res.json()

        if(res.status === 200){
          console.log(data)

          const data = JSON.parse(localStorage.getItem("emotionData"))
          setEmotionalData(prev =>  [data.emotions, ...data])

          localStorage.removeItem("emotionData")
          localStorage.setItem("emotionData", JSON.stringify([...data, data.emotions]))
          setLoading(false)
          setValue("")
        }
       } catch (error) {
        console.log("error", error)
       }
    }
  return (
    <div className='w-full  flex  justify-between h-13 gap-4 md:px-6'>
        <input type='text' placeholder='enter any value' value={value} onChange={(e)=> setValue(e.target.value)} className= 'rounded-[0.5em] px-2 h-13 w-full border-white bg-white md:px-4 '></input>
        <button type='button' onClick={handleValue} className='rounded-[0.5em] px-4 bg-[#C084FC] text-white font-medium h-13'>submit</button>
    </div>
  )
}
