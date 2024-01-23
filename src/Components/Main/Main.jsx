import React,{useEffect} from 'react'
import './main.css'
import img from '../../Assets/img (1).jpeg'
import img2 from '../../Assets/img (2).jpeg'
import img3 from '../../Assets/img (3).jpeg'
import img4 from '../../Assets/img (4).jpeg'
import img5 from '../../Assets/img (5).jpeg'
import img6 from '../../Assets/img (6).jpeg'
import img7 from '../../Assets/img (7).jpeg'
import img8 from '../../Assets/img (8).jpeg'
import img9 from '../../Assets/img (9).jpeg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is a volcano set on one of the most beautiful lagoons in the world, a million shades of blue. The huge motu of Bora Boras white sand beaches lined with coconut trees encircle the emerald lagoon populated with myriad fish and multi-colored corals.'
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is a volcano set on one of the most beautiful lagoons in the world, a million shades of blue. The huge motu of Bora Boras white sand beaches lined with coconut trees encircle the emerald lagoon populated with myriad fish and multi-colored corals.'
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is a volcano set on one of the most beautiful lagoons in the world, a million shades of blue. The huge motu of Bora Boras white sand beaches lined with coconut trees encircle the emerald lagoon populated with myriad fish and multi-colored corals.'
  },
  {
    id:4,
    imgSrc: img4,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is a volcano set on one of the most beautiful lagoons in the world, a million shades of blue. The huge motu of Bora Boras white sand beaches lined with coconut trees encircle the emerald lagoon populated with myriad fish and multi-colored corals.'
  },
  {
    id:5,
    imgSrc: img5,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is a volcano set on one of the most beautiful lagoons in the world, a million shades of blue. The huge motu of Bora Boras white sand beaches lined with coconut trees encircle the emerald lagoon populated with myriad fish and multi-colored corals.'
  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is a volcano set on one of the most beautiful lagoons in the world, a million shades of blue. The huge motu of Bora Boras white sand beaches lined with coconut trees encircle the emerald lagoon populated with myriad fish and multi-colored corals.'
  },
  {
    id:7,
    imgSrc: img7,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is a volcano set on one of the most beautiful lagoons in the world, a million shades of blue. The huge motu of Bora Boras white sand beaches lined with coconut trees encircle the emerald lagoon populated with myriad fish and multi-colored corals.'
  },
  {
    id:8,
    imgSrc: img8,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is a volcano set on one of the most beautiful lagoons in the world, a million shades of blue. The huge motu of Bora Boras white sand beaches lined with coconut trees encircle the emerald lagoon populated with myriad fish and multi-colored corals.'
  },
   {
    id:9,
    imgSrc: img9,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is a volcano set on one of the most beautiful lagoons in the world, a million shades of blue. The huge motu of Bora Boras white sand beaches lined with coconut trees encircle the emerald lagoon populated with myriad fish and multi-colored corals.'
  }

]

const Main = () => {
  
    //lets create a react hook to add a scroll animation
    useEffect(()=>{
      Aos.init({duration:2000})
    },[])


  return (
    <section className='main container section' >

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/*Here, high ardfer array method (map) will be used and to do that
        i will use a list of objects in one array, I will create an array named
        data and from that i will map arran to fetch all destinations at once*/}
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                {/*here it will return single id from the array map */}
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}
                  </h4>
                  <span className="contonent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>

                </div>
              </div>
            )

          })
        }


      </div>

    </section>
  )
}

export default Main