import React from 'react'

const ListItems = () => {

    const categories=[
        "All","Music","React routers","Computer Programming","Reverberation","Movie musicals","India national criceket team","News","Mixes","1990s","Telugu cinerma","Live","Dramedy","Dubbing","Indian soap opera","Cricket","Footboll","Learn Coding"
    ];

  return (
    <div className='flex overflow-x-scroll px-4 scrollbar-none'>
        <div className='flex space-x-3 flex-nowrap'>
        {
            categories.map((category)=>{
                return(
                    <div key={category} className='flex-none border-b-2 border-gray-200 py-1 px-3 bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl text-sm text-gray-700 cursor-pointer'>{category}</div>
                )
            })
        }
        </div>
    </div>
  )
}

export default ListItems