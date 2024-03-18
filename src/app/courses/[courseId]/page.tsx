"use client"
import React from 'react'
import courseData from '@/data/music_courses.json'
import { Course } from '@/components/FeaturedCourses'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import Link from 'next/link'
function page({params}: {
    params: {courseId:string}
  }
){
  var route:string=params.courseId
  
  const selectedCourse=courseData.courses.filter((course:Course)=>course.slug==route)
  const words = [
    {
      text: "Enhance",
    },
    {
      text: "Your",
    },
    {
      text: "Music",
    },
    {
      text: "Journay",
    },
    {
      text: "with",
    },
    {
      text: "Music-School.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className=' mt-[100px] flex flex-col items-center justify-center'>
      <TypewriterEffectSmooth words={words} />
      <div className='flex mt-4'>
      <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
          <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{selectedCourse[0].title}</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{selectedCourse[0].description}</p>
          <img className="my-4" src={selectedCourse[0].image}></img>
          <div className='flex gap-2 items-center'>
            <Link href={"/"}>
            Purchase
            </Link>
            <span className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
              ${selectedCourse[0].price}
            </span>
          </div>
        </div>
      </BackgroundGradient>
      </div>
    </div>
  )
}

export default page