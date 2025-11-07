import React from 'react'

function Team() {
  const executiveBoard = [
    {
      id: 1,
      name: 'Arshit Thakur',
      position: 'GENERAL SECRETARY',
      image: '/ebpics/arshit.jpg',
    },
    {
      id: 2,
      name: 'Bhumika Bandyopadhyay',
      position: 'GENERAL SECRETARY',
      image: '/ebpics/bhumika.jpg',
    },
    {
      id: 3,
      name: 'Harkirat Singh',
      position: 'JOINT SECRETARY',
      image: '/ebpics/harkirat.jpg',
    },
    {
      id: 4,
      name: 'Simran',
      position: 'JOINT SECRETARY',
      image: '/ebpics/simran.png',
    },
    {
      id: 5,
      name: 'Maurya Kandhari',
      position: 'JOINT SECRETARY',
      image: '/ebpics/maurya.jpg',
    },
    {
      id: 6,
      name: 'Riddhima Aggarwal',
      position: 'FINANCE SECRETARY',
      image: '/ebpics/riddhima.JPG',
    },
    {
      id: 7,
      name: 'Abheet Singh',
      position: 'FINANCE SECRETARY',
      image: '/ebpics/abheet.jpg',
    },
    {
      id: 8,
      name: 'Akhil Gupta',
      position: 'WEB DEV LEAD',
      image: '/ebpics/akhil.jpg',
    },
    {
      id: 9,
      name: 'Priyanshu Patel',
      position: 'WEB DEV LEAD',
      image: '/ebpics/priyanshu.jpg',
    },
    {
      id: 10,
      name: 'Tanisha Lal',
      position: 'DESIGN AND MEDIA HEAD',
      image: '/ebpics/tanisha.jpg',
    },
    {
      id: 11,
      name: 'Aditi Sikarwar',
      position: 'DESIGN AND MEDIA HEAD',
      image: '/ebpics/aditi.jpg',
    },
    {
      id: 12,
      name: 'Vandan Arora',
      position: 'AI /ML LEAD',
      image: '/ebpics/vandan.jpeg',
    },
    {
      id: 13,
      name: 'Jasmeet Kaur',
      position: 'AI /ML LEAD',
      image: '/ebpics/jasmeet.jpg',
    },
    {
      id: 14,
      name: 'Gautam Narang',
      position: 'ELECTRONICS HEAD',
      image: '/ebpics/gautam.jpg',
    },
    {
      id: 15,
      name: 'Harneet Singh',
      position: 'ELECTRONICS HEAD',
      image: '/ebpics/harneet.jpg',
    },
    {
      id: 16,
      name: 'Aryan Batra',
      position: 'MARKETING AND PR HEAD',
      image: '/ebpics/aryan.jpg',
    },
    {
      id: 17,
      name: 'Anjum Garg',
      position: 'MARKETING AND PR HEAD',
      image: '/ebpics/anjum.jpg',
    },
  ]

  const layout = [2, 3, 2, 2, 2, 2, 2, 2]

  const groupedMembers = []
  let index = 0
  layout.forEach((count) => {
    groupedMembers.push(executiveBoard.slice(index, index + count))
    index += count
  })

  const renderGroup = (group, rowIndex) => (
    <div
      key={rowIndex}
      className="flex flex-wrap justify-center gap-32 px-6 py-8 max-w-7xl mx-auto"
    >
      {group.map((member) => (
        <div
          key={member.id}
          className="w-80 rounded-lg overflow-hidden shadow-lg bg-white text-black flex flex-col font-abeezee"
        >
          <div className="w-full h-60 overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="px-6 py-4 flex-grow flex flex-col justify-between">
            <div>
              <div className="font-bold text-xl mb-2 line-clamp-2">
                {member.name}
              </div>
              <p className="text-gray-700 text-base line-clamp-2">
                {member.position}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Title Section */}
      <section className="text-4xl font-extrabold text-center py-12 tracking-wider uppercase bg-[url('/assets/landingBG1.png')] bg-cover bg-center bg-no-repeat">
        Executive Board
        {groupedMembers.slice(0, 1).map(renderGroup)}
      </section>

      {/* Section 2 */}
      <section className="font-extrabold bg-[url('/assets/landingBG2.png')] bg-cover bg-center bg-no-repeat">
        {groupedMembers.slice(1, 3).map(renderGroup)}
      </section>

      {/* Section 3 */}
      <section className="font-extrabold bg-[url('/assets/landingBG1.png')] bg-cover bg-center bg-no-repeat">
        {groupedMembers.slice(3).map(renderGroup)}
      </section>
    </div>
  )
}

export default Team
