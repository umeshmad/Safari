import {useState} from 'react';
import { useEffect } from 'react';
import logo from '../assets/logo.png'
import image1 from '../assets/Hero section1.png'
import image2 from '../assets/image 2.png'
import icon1 from '../assets/Icon1.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon3.png'
import icon4 from '../assets/Icon.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import icon5 from '../assets/icon4.png'
import icon6 from '../assets/icon5.png'
import icon7 from '../assets/icon6.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'
import image10 from '../assets/image10.png'
import room1 from '../assets/image11.png'
import room2 from '../assets/image12.png'
import room3 from '../assets/image13.png'
import image11 from '../assets/image14.png'
import image12 from '../assets/image15.png'
import image13 from '../assets/image16.png'
import image14 from '../assets/image17.png'
import image15 from '../assets/image18.png'
import image16 from '../assets/image19.png'
import image17 from '../assets/image20.png'
import image18 from '../assets/image21.png'
import image19 from '../assets/image22.png'
import image20 from '../assets/image23.png'
import image21 from '../assets/image24.png'
import image22 from '../assets/image25.png'
import icon8 from '../assets/icon7.png'
import image23 from '../assets/image26.png'
import icon9 from '../assets/icon8.png'
import icon10 from '../assets/icon9.png'
import image24 from '../assets/image27.png'
import footerLogo from "../assets/icon10.png";
import iconLocation from "../assets/icon13.png";
import iconPhone from "../assets/icon14.png";
import iconMail from "../assets/icon15.png";
import iconGoogle from "../assets/icon8.png";
import iconFacebook from "../assets/icon11.png";
import iconInstagram from "../assets/icon12.png";
import image25 from '../assets/image28.png'
import image26 from '../assets/image29.png'
import image27 from '../assets/image30.png'
import icon11 from '../assets/icon16.png'
import icon12 from '../assets/icon17.png'
import icon13 from '../assets/icon18.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'
import slide4 from '../assets/slide4.png'
import slide5 from '../assets/slide5.png'
import slide6 from '../assets/slide6.png'
import slide7 from '../assets/slide7.png'
import slide8 from '../assets/slide8.png'
import slide9 from '../assets/slide9.png'
import slide10 from '../assets/slide10.png'
import slide11 from '../assets/slide11.png'
import slide12 from '../assets/slide12.png'

function Home(){
    const [currentHeaderSilde, setCurrentHeaderSlide] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const slides=[
        {image:image1},
        {image:slide2},
        {image:slide3},
        {image:slide4}
    ];
    const [curruntSlide, setCurrentSlide]=useState(0);
    const [chooseAreaAnimate, setChooseAreaAnimate]=useState(true)
    const chooseAreaSlides=[
        {
            image:slide6,
            desc:'THE EXPERIENCE'   
        },
        {
            image:slide7,
            desc:'THE HUMAN CONNECTION'
        },
        {
            image:slide8,
            desc:'COMFORT & SAFETY'
        },
        {
            image:slide9,
            desc:'THE EXPERIENCE'
        },
        {
            image:slide10,
            desc:'THE HUMAN CONNECTION'
        },
        {
            image:slide11,
            desc:'COMFORT & SAFETY'
        },
        {
            image:slide12,
            desc:'COMFORT & SAFETY'
        }

    ]
    const[reviewSlide,setReviewSlide]=useState(0);
    const reviewsData = [
        {
            name: "Lean Lander",
            date: "March 12, 2026",
            rating: 5,
            review: "An absolutely incredible experience! The safari was breathtaking and the resort was pure luxury. Our guide was knowledgeable and made sure we saw elephants up close. Highly recommend!",
            image: image23
        },
        {
            name: "Sarah Mitchell",
            date: "February 28, 2026",
            rating: 5,
            review: "Best safari experience in Sri Lanka! The eco-cabins were comfortable and the morning safari was magical. We saw over 50 elephants in one day. The staff was friendly and professional.",
            image: image23
        },
        {
            name: "John Peterson",
            date: "January 15, 2026",
            rating: 5,
            review: "A perfect blend of adventure and relaxation. The full-day safari exceeded our expectations. The resort's commitment to sustainability is impressive. Will definitely return!",
            image: image23
        }
    ];
    useEffect(()=>{const interval=setInterval(()=>{
                setReviewSlide((prev)=>(prev+1)%3)
                },8000);
                return()=>clearInterval(interval);},[]
            );
    useEffect(()=>{const interval=setInterval(() => {
                    setCurrentHeaderSlide((prev)=>(prev+1)%slides.length)
                },8000 );
                return () => clearInterval(interval);},[]
            );
    useEffect(()=>{const interval=setInterval(()=>{
                    setChooseAreaAnimate(false);
                    setTimeout(()=>{
                        setCurrentSlide((prev)=>(prev+1)%chooseAreaSlides.length);
                        setChooseAreaAnimate(true);
                    },300);
                },8000);
            return()=>clearInterval(interval);},[]
            );
    return(
        <div className="min-h-screen">

            <div id="home" className="relative h-screen mb-1">
                <img src={slides[currentHeaderSilde].image} className="absolute inset-0 w-full h-full z-0" />
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
                    {slides.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => setCurrentHeaderSlide(index)}
                        className={`w-4 h-4 rounded-full transition ${
                            currentHeaderSilde === index
                            ? "bg-lime-400 scale-110"
                            : "bg-white/50"
                        }`}
                        />
                    ))}
                </div>
                <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                <div className="relative z-20 pt-10">
                    <nav className="bg-black/50 h-14 flex justify-between items-center px-4 overflow-visible">
                        <div className="flex items-center" style={{marginTop: '-20px'}}>
                            <img src={logo} className="h-24 sm:h-48 w-auto mt-4" />
                        </div>
                        {/* Desktop Navigation bar */}
                        <div className="hidden md:flex gap-6 pt-1 flex-wrap justify-end">
                            <a href="#home" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm">Home</a>
                            <a href="#about" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm">| About us</a>
                            <a href="#safari" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm">| Safari Packages</a>
                            <a href="#gallery" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm">| Gallery</a>
                            <a href="#review" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm">| Review</a>
                            <a href="#contact" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm">| Contact us</a>
                            <button className="mb-2 bg-lime-400 text-white border-0 rounded-xl h-8 px-2 hover:bg-lime-500 transition duration-300 text-sm">Book Now</button>
                        </div>
                        {/* Mobile navigation bar */}
                        <button className="md:hidden text-white text-2xl border-0 bg-transparent cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </nav>
                    
                    {menuOpen && (
                        <div className="md:hidden absolute top-14 left-0 right-0 bg-black/90 z-40 flex flex-col items-center gap-4 py-6">
                            <a href="#home" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Home</a>
                            <a href="#about" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>About us</a>
                            <a href="#safari" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Safari Packages</a>
                            <a href="#gallery" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Gallery</a>
                            <a href="#review" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Review</a>
                            <a href="#contact" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Contact us</a>
                            <button className="bg-lime-400 text-white border-0 rounded-xl h-9 px-4 hover:bg-lime-500 transition duration-300">Book Now</button>
                        </div>
                    )}
                    <div className="flex flex-col items-center justify-center mt-16 sm:mt-20 text-center px-4">
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="text-white font-semibold text-2xl sm:text-3xl md:text-[50px]">UNFORGATABLE SAFARIES &</div>
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="text-white font-semibold text-2xl sm:text-3xl md:text-[50px]">& PREMIUM STAYS.</div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-6 md:mt-20 text-center px-4">
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-white/70 text-base sm:text-xl md:text-[36px]">Witness the giants of Udawalawe by day and relax in our</div>
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-white/70 text-base sm:text-xl md:text-[36px]">eco-luxury resort by night</div>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-8 gap-4 md:gap-20">
                        <button style={{borderRadius:'8px'}} className="bg-lime-400 border-0 text-black font-thin px-5 py-3 md:px-7 md:py-4 text-sm md:text-base">Book Safari</button>
                        <button style={{borderRadius:'8px'}} className="bg-lime-400 border-0 text-black font-thin px-5 py-3 md:px-7 md:py-4 text-sm md:text-base">View Rooms</button>
                    </div>
                </div>
            </div>

            {/* Green Wild Section */}
            <div id="about" className="relative overflow-hidden">
                <img src={image2} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gray-900/50"></div>

                <div className="relative z-10 flex flex-col items-center text-center pt-8 md:pt-12 pb-20 md:pb-28 px-4">
                    <div className="flex flex-row gap-2 flex-wrap justify-center">
                        <div style={{fontFamily:'Montserrat,sans-serif',fontWeight:'700'}} className="text-white text-5xl sm:text-7xl md:text-[110px] leading-none">GREEN</div>
                        <div style={{fontFamily:'Montserrat,sans-serif',fontWeight:'700'}} className="text-lime-400 text-5xl sm:text-7xl md:text-[110px] leading-none">WILD</div>
                    </div>
                    <div style={{fontFamily:'Montserrat,sans-serif',fontWeight:'600'}} className="text-white text-5xl sm:text-7xl md:text-[110px] leading-none">SAFARI RESORT</div>
                    <div className="text-sm sm:text-base md:text-xl text-gray-200 font-light mt-3 mb-8">Where The Wild Meets The Green: Your Gateway To Udawalawe.</div>

                <div className="bg-white w-full rounded-2xl shadow-xl pb-6">
                    <div className="flex flex-col lg:flex-row pt-8 px-6 md:px-10 gap-6 items-start">

                            <div className="flex flex-col flex-1">
                                <div style={{fontFamily: 'Poppins, sans-serif', fontWeight: '700'}} className="text-lime-400 text-[18px] md:text-[22px] pb-3">OUR CONCEPT</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-black text-[12px] pb-6">Built with eco-friendly materials and guided by years of expert tracking, we offer an authentic sanctuary for nature lovers. Witness the giants of the wild in unparalleled comfort.</div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-row flex-wrap gap-x-6 gap-y-3">
                                        <div className="flex flex-row items-center gap-2">
                                            <img src={icon4} className="h-6 w-auto shrink-0" />
                                            <div className="flex flex-col">
                                                <div style={{fontFamily: 'Poppins, sans-serif'}} className="font-bold text-black text-[11px]">ECO-FRIENDLY STAYS</div>
                                                <div style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}} className="text-gray-500 text-[10px]">Built with sustainable materials</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            <img src={icon3} className="h-6 w-auto shrink-0" />
                                            <div className="flex flex-col">
                                                <div style={{fontFamily: 'Poppins, sans-serif'}} className="font-bold text-black text-[11px]">WILD NEIGHBORHOOD</div>
                                                <div style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}} className="text-gray-500 text-[10px]">Frequent sightings near resort</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row flex-wrap gap-x-6 gap-y-3">
                                        <div className="flex flex-row items-center gap-2">
                                            <img src={icon1} className="h-6 w-auto shrink-0" />
                                            <div className="flex flex-col">
                                                <div style={{fontFamily: 'Poppins, sans-serif'}} className="font-bold text-black text-[11px]">AUTHENTIC CUISINE</div>
                                                <div style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}} className="text-gray-500 text-[10px]">Traditional Sri Lankan organic</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            <img src={icon2} className="h-5 w-auto shrink-0 ml-2" />
                                            <div className="flex flex-col">
                                                <div style={{fontFamily: 'Poppins, sans-serif'}} className="font-bold text-black text-[11px]">EXPERT NATURALISTS</div>
                                                <div style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}} className="text-gray-500 text-[10px]">Guiding you through secrets</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:block w-px bg-gray-300 h-70"></div>

                            <div className="flex flex-col flex-1">
                                <div style={{fontFamily: 'Poppins, sans-serif', fontWeight: '700'}} className="text-lime-400 text-[18px] md:text-[22px] pb-3">OUR STORY</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-black text-[12px] pb-6">Our Green Wild Safari Resort was had the inception of the local tracking and friendly resort guides and has contributed to the local community. We are committed to sustainable tourism.</div>
                                <div className="flex flex-row items-center gap-3">
                                    <img src={image3} className="rounded-full h-14 w-14 object-cover shrink-0" />
                                    <div className="flex flex-col">
                                        <div style={{fontFamily: 'Poppins, sans-serif'}} className="font-bold text-black text-[10px]">SEALIS CERTIFIED</div>
                                        <div style={{fontFamily: 'Poppins, sans-serif'}} className="font-bold text-black text-[10px]">GUIDE NETWORK</div>
                                        <div style={{fontFamily: 'Poppins, sans-serif'}} className="font-bold text-black text-[10px]">SRI LANKA</div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:flex flex-row gap-4 shrink-0 items-end -mb-20 relative z-20">
                                <img 
                                    src={image3} 
                                    className="w-44 md:w-56 h-85 md:h-104 rounded-2xl shadow-2xl" 
                                />
                                <div className="flex flex-col gap-4 h-85 md:h-104">
                                    <img src={image5} className="w-32 md:w-44 h-1/2 object-cover rounded-xl shadow-xl" />
                                    <img src={image4} className="w-32 md:w-44 h-1/2 object-cover rounded-xl shadow-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Why Choose Us*/}        
            <div className="relative min-h-screen bg-white">
                <div className="flex flex-col items-center pt-8 text-center px-4">
                    <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="font-semibold text-black text-4xl md:text-[48px]">WHY CHOOSE</div>
                    <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="-mt-2 font-semibold text-black text-4xl md:text-[48px]">OUR SAFARI TOURS</div>
                    <div style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}} className="text-black text-base md:text-[20px] mt-2">Authentic, sustainable, And Unforgettable Encounters In Udawalawe</div>
                </div>
                <div className="flex flex-col lg:flex-row pt-10 px-6 md:px-15 gap-10 mt-10">
                    <div className="flex flex-col flex-1">
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="text-black font-semibold text-xl md:text-[24px]">10+ YEARS OF EXPERTISE</div>
                        <div className="flex flex-row items-center pt-5 gap-4">
                            <img src={icon5} className="h-8 w-auto shrink-0" />
                            <div style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}} className="text-black text-sm md:text-[16px]">Over a decade of tracking and exploring Udawalawe. Experience is your ultimate guide.</div>
                        </div>
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="text-black font-semibold text-xl md:text-[24px] mt-8 md:mt-15">EXPERT NATURALISTS</div>
                        <div className="flex flex-row items-center pt-5 gap-4">
                            <img src={icon6} className="h-8 w-auto shrink-0" />
                            <div style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}} className="text-black text-sm md:text-[16px]">Our guides know every hidden trail, ensuring safe and intimate wildlife moments..</div>
                        </div>
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="text-black font-semibold text-xl md:text-[24px] mt-8 md:mt-15">ETHICAL & ECO-FRIENDLY</div>
                        <div className="flex flex-row items-center pt-5 gap-4">
                            <img src={icon7} className="h-8 w-auto shrink-0" />
                            <div style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}} className="text-black text-sm md:text-[16px]">Committed to 'nature first. Tours are 100% eco-friendly, respecting habitat.</div>
                        </div>
                    </div>
                   <div className="overflow-hidden w-full lg:w-125">
                        <div 
                            className="flex gap-10 transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(calc(-${curruntSlide} * (75% + 2.5rem)))`
                            }}
                        >
                            {chooseAreaSlides.map((slide, index) => (
                                <img
                                    key={index}
                                    src={slide.image}
                                    className="w-[75%] h-64 md:h-90 object-cover rounded-xl shrink-0"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-10 md:pt-25 px-4 text-center">
                    <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="font-semibold text-black text-2xl sm:text-3xl md:text-[48px]">UDAWALAWE NATIONAL PARK</div>
                </div>
                <div className="flex flex-col lg:flex-row px-4 md:px-10 pt-10 gap-8">
                    <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-col lg:gap-2 shrink-0">
                        <div className="flex gap-2">
                            <img src={image7} className="h-40 lg:h-75 w-full lg:w-80 object-cover"></img>
                            <img src={image8} className="h-40 lg:h-75 w-full lg:w-80 object-cover"></img>
                        </div>
                        <div className="flex gap-2">
                            <img src={image9} className="h-40 lg:h-75 w-full lg:w-95 object-cover"></img>
                            <img src={image10} className="h-40 lg:h-73 w-full lg:w-64 object-cover"></img>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 lg:pl-8">
                        <p style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}} className="text-black text-base leading-relaxed mb-4">
                            Udawalawe National Park is a premier wildlife sanctuary in Sri Lanka, spanning over 30,000 hectares. It is most famous for being a guaranteed location to see herds of wild Sri Lankan Elephants (sometimes hundreds a day) roaming freely in their natural habitat. Beyond the elephants, the park is home to a rich variety of wildlife, including:
                        </p>
                        <ul className="list-disc space-y-4 pl-6">
                            <li style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}} className="text-black text-base">
                                <span className="font-semibold">Animals:</span> Large herds of wild water buffalo, spotted deer, and more elusive species like leopards.
                            </li>
                            <li style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}} className="text-black text-base">
                                <span className="font-semibold">Birds:</span> A paradise for birdwatchers, with over 180 species recorded.
                            </li>
                        </ul>
                        <p style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}} className="text-black text-base leading-relaxed mb-4 mt-10">
                            The open landscape and large reservoir provide stunning photographic opportunities, especially during sunrise and sunset. A jeep safari here offers an immersive and unforgettable wilderness experience
                        </p>
                    </div>
                </div>
                <div id="safari" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="text-black font-semibold flex justify-center text-center text-2xl sm:text-3xl md:text-[48px] mt-12 md:mt-20 px-4">OUR EXCLUSIVE SAFARI PACKAGES</div>
                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-gray-400 flex justify-center text-center text-base sm:text-xl md:text-[28px] px-4">Tailor-made wildlife experiences designed for comfort, safety, and breathtaking sightings</div>
                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 px-4 md:px-10 pt-10 md:pt-20">

                    {/* Card 1 */}
                    <div style={{backgroundColor:'#2D2F2C'}} className="h-auto w-full max-w-sm border-0 rounded-xl p-8">
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-white text-[20px] font-medium text-center mb-4">MORNING SAFARI</div>
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[11px] text-center mb-3">Best For: Elephant sightings and bird watching.</div>
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-white text-[11px] text-center mb-4">Time: 6:00 AM – 10:00 AM</div>
                        <div className="flex flex-col items-center px-4">
                            <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-lime-400 text-[11px] text-center mb-4 uppercase tracking-wider mt-2">What's included</div>
                            <div className="grid grid-cols-[auto_min-content_1fr] gap-x-1 gap-y-2 w-full max-w-70">
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}} className="text-white text-[10px] font-bold text-left whitespace-nowrap">Expert Guide</div>
                                <div className="text-white text-[10px] font-bold">:</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[10px] text-left leading-tight pl-1">Experience from a professional naturalist.</div>
                                
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}} className="text-white text-[10px] font-bold text-left whitespace-nowrap">Comfortable 4x4</div>
                                <div className="text-white text-[10px] font-bold">:</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[10px] text-left leading-tight pl-1">Specially modified safari jeep.</div>
                                
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}} className="text-white text-[10px] font-bold text-left whitespace-nowrap">Park Fees</div>
                                <div className="text-white text-[10px] font-bold">:</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[10px] text-left leading-tight pl-1">All entry permits and taxes included.</div>
                                
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}} className="text-white text-[10px] font-bold text-left whitespace-nowrap">Light Snacks</div>
                                <div className="text-white text-[10px] font-bold">:</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[10px] text-left leading-tight pl-1">Fresh water and morning snacks.</div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <button style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="bg-lime-400 font-semibold text-black text-[14px] border-0 rounded-xl px-8 py-2.5 transition-all hover:scale-105 active:scale-95 shadow-lg">BOOK NOW</button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div style={{backgroundColor:'#2D2F2C'}} className="h-auto w-full max-w-sm border-0 rounded-xl p-8">
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-white text-[20px] font-medium text-center mb-4">EVENING SAFARI</div>
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[11px] text-center mb-3">Best For: Golden hour photography and dramatic landscapes</div>
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-white text-[11px] text-center mb-2">Time: 2:30 PM – 6:30 PM</div>
                        <div className="flex flex-col items-center px-4">
                            <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-lime-400 text-[11px] text-center mb-4 uppercase tracking-wider mt-4">What's included</div>
                            <div className="grid grid-cols-[auto_min-content_1fr] gap-x-1 gap-y-2 w-full max-w-70">
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}} className="text-white text-[10px] font-bold text-left whitespace-nowrap">Photo Ops</div>
                                <div className="text-white text-[10px] font-bold">:</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[10px] text-left leading-tight pl-1">Guided stops at the best sunset viewpoints.</div>
                                
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}} className="text-white text-[10px] font-bold text-left whitespace-nowrap">Luxury Jeep</div>
                                <div className="text-white text-[10px] font-bold">:</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[10px] text-left leading-tight pl-1">4x4 vehicle with open-top viewing.</div>
                                
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}} className="text-white text-[10px] font-bold text-left whitespace-nowrap">Trackers</div>
                                <div className="text-white text-[10px] font-bold">:</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[10px] text-left leading-tight pl-1">Experienced trackers to find leopards and bears.</div>
                                
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}} className="text-white text-[10px] font-bold text-left whitespace-nowrap">Refreshments</div>
                                <div className="text-white text-[10px] font-bold">:</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[10px] text-left leading-tight pl-1">Chilled water and evening beverages.</div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <button style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="bg-lime-400 font-semibold text-black text-[14px] border-0 rounded-xl px-8 py-2.5 transition-all hover:scale-105 active:scale-95 shadow-lg">BOOK NOW</button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div style={{backgroundColor:'#2D2F2C'}} className="h-auto w-full max-w-sm border-0 rounded-xl p-8">
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-white text-[20px] font-medium text-center mb-4">FULL DAY SAFARI</div>
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[11px] text-center mb-3">BEST FOR: DEEP EXPLORATION AND SPOTTING RARE WILDLIFE</div>
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-white text-[11px] text-center mb-4">Time: 6:00 AM – 6:00 PM</div>
                        <div className="flex flex-col items-center px-4">
                            <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-lime-400 text-[11px] text-center mb-4 uppercase tracking-wider">What's included</div>
                            <div className="grid grid-cols-[auto_min-content_1fr] gap-x-1 gap-y-2 w-full max-w-70">
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}} className="text-white text-[10px] font-bold text-left whitespace-nowrap">Full Access</div>
                                <div className="text-white text-[10px] font-bold">:</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[10px] text-left leading-tight pl-1">Extended exploration of the deep jungle.</div>
                                
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}} className="text-white text-[10px] font-bold text-left whitespace-nowrap">Gourmet Picnic</div>
                                <div className="text-white text-[10px] font-bold">:</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[10px] text-left leading-tight pl-1">Packed breakfast and lunch inside the park.</div>
                                
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}} className="text-white text-[10px] font-bold text-left whitespace-nowrap">Premium Service</div>
                                <div className="text-white text-[10px] font-bold">:</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[10px] text-left leading-tight pl-1">Dedicated guide for the entire 12 hours.</div>
                                
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}} className="text-white text-[10px] font-bold text-left whitespace-nowrap">All-Inclusive</div>
                                <div className="text-white text-[10px] font-bold">:</div>
                                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-white text-[10px] text-left leading-tight pl-1">Parking, entry fees, and insurance cover.</div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <button style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="bg-lime-400 font-semibold text-black text-[14px] border-0 rounded-xl px-8 py-2.5 transition-all hover:scale-105 active:scale-95 shadow-lg">BOOK NOW</button>
                        </div>
                    </div>
                </div>

                {/* ─── ROOM CARDS SECTION ─── */}
                <div className="flex flex-col items-center pt-16 pb-4 text-center px-4 mt-10">
                    <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="font-semibold text-black text-3xl md:text-[48px] leading-tight">A LUXURY STAY WHERE WILD ELEPHANTS<br/>ROAM NEARBY</div>
                    <div style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}} className="text-black text-base md:text-[18px] mt-4 max-w-2xl">Experience Eco-Luxury Living Just Minutes Away From The Udawalawe National Park. Your Sanctuary In The Heart Of The Wild.</div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between px-6 md:px-25 pt-10 gap-6 pb-20">

                    {/* Room Card 1 */}
                    <div className="w-full lg:w-80 bg-[#3A3A3A] p-3 rounded-2xl">

                        <div className="rounded-xl overflow-hidden border-2 border-gray-600">
                            <div className="relative">
                            <img src={room1} className="w-full h-80 object-cover" />

                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                <h3 className="text-white text-[15px] font-semibold"
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                THE EXPLORER'S ESCAPE
                                </h3>

                                <p className="text-white text-[10px] mt-1 leading-tight"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                STANDARD ECO-CABIN (AC/NON-AC OPTIONS). <br />
                                INCLUDES BED & BREAKFAST
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[#3A3A3A] px-4 pt-4 pb-2 text-center">
                            <button className="w-full bg-lime-400 text-black text-[12px] font-semibold rounded-md py-2 hover:bg-lime-500 transition"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            BOOK NOW
                            </button>
                        </div>

                        <div className="bg-[#3A3A3A] pb-3 text-center">
                            <span className="text-lime-400 text-[10px] underline cursor-pointer"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                            What’s Included
                            </span>
                        </div>

                    </div>

                    {/* Room Card 2 */}
                    <div className="w-full lg:w-80 bg-[#3A3A3A] p-3 rounded-2xl">

                        <div className="rounded-xl overflow-hidden border-2 border-gray-600">
                            <div className="relative">
                            <img src={room2} className="w-full h-80 object-cover" />

                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                <h3 className="text-white text-[15px] font-semibold"
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                THE EXPLORER'S ESCAPE
                                </h3>

                                <p className="text-white text-[10px] mt-1 leading-tight"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                STANDARD ECO-CABIN (AC/NON-AC OPTIONS). <br />
                                INCLUDES BED & BREAKFAST
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className="bg-[#3A3A3A] px-4 pt-4 pb-2 text-center">
                            <button className="w-full bg-lime-400 text-black text-[12px] font-semibold rounded-md py-2 hover:bg-lime-500 transition"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            BOOK NOW
                            </button>
                        </div>

                        <div className="bg-[#3A3A3A] pb-3 text-center">
                            <span className="text-lime-400 text-[10px] underline cursor-pointer"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                            What’s Included
                            </span>
                        </div>

                    </div>
                    {/* Room Card 3 */}
                   <div className="w-full lg:w-80 bg-[#3A3A3A] p-3 rounded-2xl">
                        <div className="rounded-xl overflow-hidden border-2 border-gray-600">
                            <div className="relative">
                            <img src={room3} className="w-full h-80 object-cover" />

                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                <h3 className="text-white text-[15px] font-semibold"
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                THE EXPLORER'S ESCAPE
                                </h3>

                                <p className="text-white text-[10px] mt-1 leading-tight"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                STANDARD ECO-CABIN (AC/NON-AC OPTIONS). <br />
                                INCLUDES BED & BREAKFAST
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className="bg-[#3A3A3A] px-4 pt-4 pb-2 text-center">
                            <button className="w-full bg-lime-400 text-black text-[12px] font-semibold rounded-md py-2 hover:bg-lime-500 transition"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            BOOK NOW
                            </button>
                        </div>

                        <div className="bg-[#3A3A3A] pb-3 text-center">
                            <span className="text-lime-400 text-[10px] underline cursor-pointer"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                            What’s Included
                            </span>
                        </div>

                    </div>
                </div>
                {/*Gallerry*/}
                <div id="gallery" className="flex flex-col items-center justify-center mb-6 px-4 text-center">
                    <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="text-black text-2xl sm:text-3xl md:text-[48px] font-semibold">
                        WILDERNESS &amp; WELLBEING
                    </div>
                    <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="text-black text-base sm:text-xl md:text-[28px] font-semibold">
                        Authentic safaris, refined relaxation. Captured by our guests.
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-16">
                    {/* row 1*/}
                    <div className="">
                        <img src={image11} className="w-full h-full"></img>
                    </div>
                    <div className="">
                        <img src={image12} className="w-full h-full"></img>
                    </div>
                    <div className="">
                        <img src={image13} className="w-full h-full"></img>
                    </div>
                    <div className="">
                        <img src={image14} className="w-full h-full"></img>
                    </div>

                    {/*row 2*/}
                    <div className="">
                        <img src={image15} className="w-full h-full"></img>
                    </div>
                    <div className="">
                        <img src={image16} className="w-full h-full"></img>
                    </div>
                    <div className="">
                        <img src={image17} className="w-full h-full"></img>
                    </div>
                    <div className="">
                        <img src={image18} className="w-full h-full"></img>
                    </div>

                    {/*row 3*/}
                    <div className="">
                        <img src={image19} className="w-full h-full"></img>
                    </div>
                    <div className="">
                        <img src={image20} className="w-full h-full"></img>
                    </div>
                    <div className="">
                        <img src={image21} className="w-full h-full"></img>
                    </div>
                    <div className="">
                        <img src={image22} className="w-full h-full"></img>
                    </div>
                    
                </div>
                {/*Gest Expiriance*/}
                <div id="review" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="text-black text-2xl sm:text-3xl md:text-[48px] font-semibold flex justify-center mt-12 px-4 text-center">
                    GUEST EXPERIENCES
                </div>

                <div className="relative overflow-visible px-4 md:px-15 mt-10 pb-10">
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-6xl min-h-137.5 flex items-center justify-center py-8">
                            {reviewsData.map((review, index) => {
                                const position = (index - reviewSlide + reviewsData.length) % reviewsData.length;
                                
                                return (
                                    <div
                                        key={index}
                                        style={{backgroundColor:'#2D2F2C'}}
                                        className={`absolute border-0 rounded-3xl px-4 sm:px-8 py-6 transition-all duration-700 ease-in-out w-full max-w-md ${
                                            position === 0 
                                                ? 'translate-x-[-120%] scale-75 opacity-30 z-0' 
                                                : position === 1 
                                                ? 'translate-x-0 scale-110 opacity-100 z-20 shadow-2xl' 
                                                : 'translate-x-[120%] scale-75 opacity-50 z-10'
                                        }`}
                                    >
                                        {/* Stars */}
                                        <div className="flex flex-row gap-2 pt-6">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <img key={i} src={icon8} className="w-6 h-6" alt="star" />
                                            ))}
                                        </div>
                                        
                                        {/* Image */}
                                        <div className="flex items-center justify-center">
                                            <img src={review.image} className="w-full max-w-xs pt-5 object-contain" alt="review" />
                                        </div>
                                    
                                        {/* User Infomation */}
                                        <div className="flex flex-row">
                                            <div className="pt-5">
                                                <img src={icon9} className="w-6 h-6" alt="user" />
                                            </div>
                                            <div className="flex flex-col pt-4 pl-4">
                                                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} 
                                                    className="text-white text-[15px]">
                                                    {review.name}
                                                </div>
                                                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '275' }} 
                                                    className="text-white text-[10px] font-light">
                                                    {review.date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/*contact us */}
                <div id="contact" className="flex flex-col items-center mt-10 md:mt-15 px-4 md:px-20 text-center">
                    <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="text-black text-2xl sm:text-3xl md:text-[45px] font-semibold">CONTACT OUR WILD GUIDES</div>
                    <div style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}} className="text-black/50 text-base sm:text-xl md:text-[28px] text-center">Planning your adventure in Udawalawe should be as smooth as the experience itself Our expert guides are ready to help you</div>    
                </div>
                <div className="flex flex-col lg:flex-row px-4 md:px-15 pt-10 md:pt-15 gap-10">
                    <div className="flex flex-col flex-1">
                        <div style={{fontFamily: 'Inter, sans-serif', fontWeight: '600'}} className="font-semibold text-lime-400 text-xl md:text-[28px]">
                            SEND U S A NOTE
                        </div>
                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '400'}} className="pt-4 text-[13px] text-black/70 pb-6">
                            Use the from below for any inquiries oe bespoke safari planning we will get back to you within 24 hours
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-row items-center gap-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-lime-400 flex items-center justify-center shrink-0">
                                        <img src={iconPhone} className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="text-[12px] text-black/70">Call/WhatsApp</div>
                                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-[11px] text-black">0769392153</div>
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="flex flex-row items-center gap-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-lime-400 flex items-center justify-center shrink-0">
                                        <img src={iconMail} className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="text-[12px] text-black/70">Email</div>
                                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-[11px] text-black">greenwildsafariresort@gmail.com</div>
                                    </div>
                                </div>
                                {/* Location */}
                                <div className="flex flex-row items-start gap-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-lime-400 flex items-center justify-center shrink-0">
                                        <img src={iconLocation} className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="text-[12px] text-black/70">Our Location</div>
                                        <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-[11px] text-black">Green Wild Safari Resort,<br/>Thanamalvila Rd, Udawalawa 70190</div>
                                    </div>
                                </div>
                                {/* Support*/}
                                <div className="mt-2">
                                    <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '600'}} className="text-[12px] text-black/70 mb-2">SUPPORT &amp; RESOURCES</div>
                                    <div className="flex gap-3 items-center">
                                        <img src={iconGoogle} className="w-7 h-7 cursor-pointer hover:opacity-75 transition" />
                                        <img src={iconFacebook} className="w-7 h-7 cursor-pointer hover:opacity-75 transition" />
                                        <img src={iconInstagram} className="w-7 h-7 cursor-pointer hover:opacity-75 transition" />
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="flex items-start">
                                <img src={image24} className="w-48 sm:w-56 md:w-64 h-auto rounded-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="bg-[#3A3A3A] rounded-3xl p-6 md:p-8">
                            <div className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-white text-[12px] mb-2">
                                            FULL NAME
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder="Gimshan Menaka"
                                            className="bg-transparent border-2 border-lime-400 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-lime-300"
                                            style={{fontFamily: 'Montserrat, sans-serif'}}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-white text-[12px] mb-2">
                                            EMAIL ADDRESS
                                        </label>
                                        <input 
                                            type="email" 
                                            placeholder="gimshanmenaka@gmail.com"
                                            className="bg-transparent border-2 border-lime-400 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-lime-300"
                                            style={{fontFamily: 'Montserrat, sans-serif'}}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-white text-[12px] mb-2">
                                        PHONE NUMBER
                                    </label>
                                    <input 
                                        type="tel" 
                                        placeholder="07x xx xx xxx"
                                        className="bg-transparent border-2 border-lime-400 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-lime-300"
                                        style={{fontFamily: 'Montserrat, sans-serif'}}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-white text-[12px] mb-2">
                                        YOUR MESSAGE
                                    </label>
                                    <textarea 
                                        placeholder="message"
                                        rows="6"
                                        className="bg-transparent border-2 border-lime-400 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-lime-300 resize-none"
                                        style={{fontFamily: 'Montserrat, sans-serif'}}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button 
                                style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}}
                                className="bg-lime-400 text-black font-bold text-[16px] px-12 py-3 rounded-xl hover:bg-lime-500 transition duration-300"
                            >
                                SEND INQUIRE
                            </button>
                        </div>
                    </div>
                </div>
                {/*other places*/}
                <div className="flex flex-col items-center mt-10 md:mt-15 px-4 text-center">
                    <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '700'}} className="text-black text-2xl sm:text-3xl md:text-[45px] font-semibold">OTHER PLACES IN UDAWALAWE</div>
                    <div style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}} className="text-black/70 text-base sm:text-xl md:text-[28px] text-center">Step outside the safari and uncover the rich history and scenic beauty of the Udawalawe region.</div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-10 px-10 mt-12 pb-15">

                    {/* Card 1 */}
                    <div className="bg-[#3A3A3A] rounded-2xl p-4 w-full max-w-sm">
                        
                        <div className="flex items-center gap-2 mb-3">
                            <img src={icon11} className="w-8 h-8" />
                            <div className="text-white text-sm font-light">
                                Elephant Transit Home (ETH)<br/>
                                Care for Orphaned Giants
                            </div>
                        </div>

                        <img src={image25} className="w-full h-52 object-cover rounded-lg mb-3" />

                        <p className="text-gray-300 text-xs mb-3">
                            Witness baby elephants being rehabilitated and bottle-fed. 
                            A heartwarming look at conservation in action.
                        </p>

                        <div className="flex gap-2 mb-2">
                            <span className="bg-gray-600 text-white text-[10px] px-2 py-1 rounded-full">Nature</span>
                            <span className="bg-gray-600 text-white text-[10px] px-2 py-1 rounded-full">Wildlife</span>
                        </div>

                        <div className="text-gray-400 text-[10px] mb-4">
                            Distance: 5 mins | Time: 1 hour
                        </div>

                        <button className="w-full bg-lime-400 text-black text-sm py-2 rounded-xl hover:bg-lime-500 transition">
                            View Details
                        </button>
                    </div>


                    {/* Card 2 */}
                    <div className="bg-[#3A3A3A] rounded-2xl p-4 w-full max-w-sm">
                        
                        <div className="flex items-center gap-2 mb-3">
                            <img src={icon12} className="w-8 h-8" />
                            <div className="text-white text-sm font-light">
                                Sankapala Raja Maha Vihara <br/>Legendary Cave Temple            
                            </div>
                        </div>

                        <img src={image26} className="w-full h-52 object-cover rounded-lg mb-3" />

                        <p className="text-gray-300 text-xs mb-3">
                            Explore ancient rock caves and history linked to King Dutugemunu’s giant warrior, Pussadeva.
                        </p>

                        <div className="flex gap-2 mb-2">
                            <span className="bg-gray-600 text-white text-[10px] px-2 py-1 rounded-full">History</span>
                            <span className="bg-gray-600 text-white text-[10px] px-2 py-1 rounded-full">Culture</span>
                        </div>

                        <div className="text-gray-400 text-[10px] mb-4">
                            Distance: 25 mins | Time: 1.5 hours
                        </div>

                        <button className="w-full bg-lime-400 text-black text-sm py-2 rounded-xl hover:bg-lime-500 transition">
                            View Details
                        </button>
                    </div>


                    {/* Card 3 */}
                    <div className="bg-[#3A3A3A] rounded-2xl p-4 w-full max-w-sm">
                        
                        <div className="flex items-center gap-2 mb-3">
                            <img src={icon13} className="w-8 h-8" />
                            <div className="text-white text-sm font-light">
                                Maduwanwela Walawwa <br/>Historic Manor House
                            </div>
                        </div>

                        <img src={image27} className="w-full h-52 object-cover rounded-lg mb-3" />

                        <p className="text-gray-300 text-xs mb-3">
                            Step back in time at this massive 17th-century aristocratic home, famous for its architecture.
                        </p>

                        <div className="flex gap-2 mb-2">
                            <span className="bg-gray-600 text-white text-[10px] px-2 py-1 rounded-full">History</span>
                            <span className="bg-gray-600 text-white text-[10px] px-2 py-1 rounded-full">Architecture</span>
                        </div>

                        <div className="text-gray-400 text-[10px] mb-4">
                            Distance: 45 mins | Time: 2 hours
                        </div>

                        <button className="w-full bg-lime-400 text-black text-sm py-2 rounded-xl hover:bg-lime-500 transition">
                            View Details
                        </button>
                    </div>

                </div>
                {/*Footer*/}
                <footer className="bg-[#2D2F2C] text-white px-10 pt-12 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Left */}
                    <div>
                    <div className="flex items-center gap-4">
                        <img src={footerLogo} className="w-16 h-16" />
                        <div className="text-xl font-semibold">
                        GREEN WILD SAFARI RESORT
                        </div>
                    </div>

                    <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                        EXPERIENCE NATURE’S TRUE GIANTS. Committed to sustainable sustainability and ethical wildlife encounters since 2010. Sri Lanka’s Premier Safari Experience."
                    </p>

                    <div className="flex gap-4 mt-6">
                        <img src={iconGoogle} className="w-6 h-6 cursor-pointer" />
                        <img src={iconFacebook} className="w-6 h-6 cursor-pointer" />
                        <img src={iconInstagram} className="w-6 h-6 cursor-pointer" />
                    </div>
                    </div>

                    {/* Middle */}
                    <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>• Home</li>
                        <li>• About Us</li>
                        <li>• Safari Packages</li>
                        <li>• Gallery</li>
                        <li>• Review</li>
                        <li>• Contact Us</li>
                    </ul>
                    </div>

                    {/* Right */}
                    <div>
                    <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>

                    <div className="flex items-start gap-3 mb-4">
                        <img src={iconLocation} className="w-5 h-5 mt-1" />
                        <p className="text-gray-300 text-sm">
                        Green Wild Safari Resort, Thanamalvila Rd, Udawalawe 70190
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <img src={iconPhone} className="w-5 h-5" />
                        <p className="text-gray-300 text-sm">0769392153</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={iconMail} className="w-5 h-5" />
                        <p className="text-gray-300 text-sm">
                        greenwildsafariresort@gmail.com
                        </p>
                    </div>
                    </div>
                </div>

                <div className="border-t border-lime-400 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    
                    <div>© 2026 Green Wild Safari Resort</div>

                    <div className="mt-2 md:mt-0">
                    Designed & Developed By <span className="text-lime-400 font-semibold">AXSTAR</span>
                    </div>
                </div>
                </footer>
            </div>

        </div>
    )
}

export default Home;