import React from 'react'

function DateToday() {

    const date = React.useRef(null)
    React.useEffect(()=>{
        const intervalId = setInterval(() => {
            if (date.current) {
                date.current.innerHTML = new Date().toLocaleDateString();
              }
        },86400000)

        return () => clearInterval(intervalId);
    },[])
  return (
    <h1 ref={date} className="text-3xl datetime w-1/3 text-right pr-16 ">
        { new Date().toLocaleDateString() }
    </h1>
  )
}

export default DateToday