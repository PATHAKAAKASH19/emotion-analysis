import React, {useState} from 'react'

export default function InputBox() {


    const [value, setValue] = useState()

    const handleValue = async(e) => {
       try {
          e.preventDefault
        const res = await fetch(`http://localhost:5173`,{
            method:"POST",

        } )

        const data = await res.json()

        if(res.status === 200){
          console.log(data)
        }
       } catch (error) {
        console.log("error", error)
       }
    }
  return (
    <div>
        <input type='text' placeholder='enter any value' value={value} onChange={(e)=> setValue(e.target.value)}></input>
        <button type='button' onClick={handleValue}>submit</button>
    </div>
  )
}
