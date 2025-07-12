

export default function Card({data}) {



  
  return (
    <div className="flex flex-col shadow-2xl w-full rounded-2xl px-6 py-6 gap-4 bg-white md:w-2xl ">
      {Object.entries(data).map(([emotion, score],key) => {
        return <h1 className='text-[18px] font-medium md:text-[20px] md:font-light' key={key}>{`${emotion} ${Math.round(score * 100)}` }%</h1>
})}
    </div>
  )
}
