import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/shdcn/ui/carousel"

import Image from "next/image";

import A1 from "@public/article/A1.jpg"
import A2 from "@/public/article/A2.jpg"
import A3 from "@/public/article/A3.jpg"
import A4 from "@/public/article/A4.jpg"
import A5 from "@/public/article/A5.jpg"


export default function Article() {
  return (
    <div className='mt-20'>
        <Carousel orientation="vertical" >
            <CarouselContent>
                <CarouselItem className="basis-1" ><Image alt="page one" width={400} height={400}  src={ A1}/></CarouselItem>
                <CarouselItem className="basis-1"><Image alt="page one" width={400} height={400}  src={A2}/></CarouselItem>
                <CarouselItem className="basis-1"><Image alt="page one" width={400} height={400}  src={A3}/></CarouselItem>
                <CarouselItem className="basis-1"><Image alt="page one" width={400} height={400}  src={A4}/></CarouselItem>
                <CarouselItem className="basis-1"><Image alt="page one" width={400} height={400}  src={A5}/></CarouselItem>
                
            </CarouselContent>
        
            </Carousel>
    </div>
  )
}
