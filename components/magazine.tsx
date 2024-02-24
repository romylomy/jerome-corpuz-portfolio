import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/shdcn/ui/carousel"

import Image from "next/image";

import mp1 from "@/public/mp1.jpg"
import mp2 from "@/public/mp2.jpg"
import mp3 from "@/public/mp3.jpg"
import mp4 from "@/public/mp4.jpg"
import mp5 from "@/public/mp5.jpg"
import mp6 from "@/public/mp6.jpg"
import mp7 from "@/public/mp7.jpg"
import mp8 from "@/public/mp8.jpg"

export default function Magazine() {
  return (
    <div className='mt-20'>
        <Carousel orientation="vertical" >
            <CarouselContent>
                <CarouselItem className="basis-1" ><Image alt="page one" width={400} height={400}  src={mp1}/></CarouselItem>
                <CarouselItem className="basis-1"><Image alt="page one" width={400} height={400}  src={mp2}/></CarouselItem>
                <CarouselItem className="basis-1"><Image alt="page one" width={400} height={400}  src={mp3}/></CarouselItem>
                <CarouselItem className="basis-1"><Image alt="page one" width={400} height={400}  src={mp4}/></CarouselItem>
                <CarouselItem className="basis-1"><Image alt="page one" width={400} height={400}  src={mp5}/></CarouselItem>
                <CarouselItem className="basis-1"><Image alt="page one" width={400} height={400}  src={mp6}/></CarouselItem>
                <CarouselItem className="basis-1"><Image alt="page one" width={400} height={400}  src={mp7}/></CarouselItem>
                <CarouselItem className="basis-1"><Image alt="page one" width={400} height={400}  src={mp8}/></CarouselItem>
            </CarouselContent>
        
            </Carousel>
    </div>
  )
}

