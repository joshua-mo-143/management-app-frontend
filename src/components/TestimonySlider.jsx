import { faArrowLeft, faArrowRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react'
import {custReviews} from '../data'

const TestimonySlider = () => {

    const [sliderIndex, setIndex] = useState(1);

    const sliderLeft= () => {
        setIndex(sliderIndex == 1 ? custReviews.length : sliderIndex-1)
    }


    const sliderRight = () => {
        setIndex(sliderIndex == custReviews.length ? 1 : sliderIndex+1)
    }

  return (
    <div className="relative w-4/5 h-full m-auto bg-red-500 rounded-xl p-5 pb-10 shadow-md">
        {custReviews.filter(x => x.id == sliderIndex).map((x) => (
            <div key={x.id} className="relative">
                <h1 className="text-center font-bold text-5xl">{x.custName}</h1>
                <div onClick={()=>sliderLeft()} className="absolute top-1/2 bg-white/50 p-5 px-6 rounded-full cursor-pointer">
                <FontAwesomeIcon icon={faArrowLeft}/>
        </div>
                <div className="flex flex-row justify-around mt-5">
                    <div className="basis-1/4 flex justify-center items-center pr-5">
                        <img src={x.custImg} className="rounded-full items-center"/>
                    </div>
                    <div className="relative basis-2/4 -ml-20">
                        <FontAwesomeIcon icon={faQuoteLeft} className="absolute text-6xl -left-20 -top-5"/>
                            <span className="text-xl" id="testimony">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quibusdam perferendis culpa quidem tempora? Unde repellendus assumenda cumque. Ab distinctio possimus cumque hic impedit, laboriosam magnam sequi nulla repellendus eos harum. Eos itaque consequuntur cumque repudiandae sapiente unde dicta. Quisquam deserunt voluptatibus odio illo perferendis id modi soluta voluptatem omnis ea cupiditate nesciunt ducimus repudiandae at aliquam, eum saepe laudantium molestias ipsum sequi inventore et iure blanditiis. At totam deleniti ab nobis iusto ipsa eveniet cum dolorum optio consectetur iste atque magni impedit, dolorem consequuntur animi alias, molestias soluta quibusdam, reiciendis officiis! Necessitatibus sed tempora nihil sapiente mollitia culpa rerum!
                            </span>
                    </div>
                    <FontAwesomeIcon icon={faQuoteRight} className="absolute text-6xl right-0 -bottom-5"/>
                </div>
                <div onClick={()=>sliderRight()} className="absolute top-1/2 right-0 bg-white/50 p-5 px-6 rounded-full cursor-pointer">
            <FontAwesomeIcon icon={faArrowRight}/>
        </div>
            </div>
        ))}
        <div>

        </div>
    </div>
  )
}

export default TestimonySlider