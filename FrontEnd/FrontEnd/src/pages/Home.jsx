import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'
import image1 from '../assets/Hero section1.jpeg'
import image2 from '../assets/image2.jpeg'
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
import image28 from '../assets/image31.png'
import image29 from '../assets/image32.png'
import image30 from '../assets/image31.jpeg'
import image31 from '../assets/image32.jpeg'
import image32 from '../assets/image33.jpeg'
import image33 from '../assets/image34.jpeg'
import image34 from '../assets/image35.jpeg'
import image35 from '../assets/image36.jpeg'
import image36 from '../assets/image37.jpeg'
import image37 from '../assets/image38.WEBP'
import image38 from '../assets/image39.jpeg'
import image39 from '../assets/image40.jpeg'
import image40 from '../assets/image41.jpeg'
import image41 from '../assets/image42.jpeg'
import image42 from '../assets/image43.jpeg'
import image43 from '../assets/image44.jpeg'
import image44 from '../assets/image45.jpeg'
import image45 from '../assets/image46.jpeg'
import image46 from '../assets/image47.jpeg'
import image47 from '../assets/image48.jpeg'
import image48 from '../assets/image49.jpeg'
import image49 from '../assets/image50.jpeg'
import image50 from '../assets/image51.jpeg'



function Home() {
    const [currentHeaderSilde, setCurrentHeaderSlide] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const slides = [
        { image: image1 },
        { image: slide2 },
        { image: image39 },
        { image: image49 }
    ];
    const [curruntSlide, setCurrentSlide] = useState(0);
    const [chooseAreaAnimate, setChooseAreaAnimate] = useState(true)
    const chooseAreaSlides = [
        {
            image: slide6,
            desc: 'THE EXPERIENCE'
        },
        {
            image: slide7,
            desc: 'THE HUMAN CONNECTION'
        },
        {
            image: slide8,
            desc: 'COMFORT & SAFETY'
        },
        {
            image: slide9,
            desc: 'THE EXPERIENCE'
        },
        {
            image: slide10,
            desc: 'THE HUMAN CONNECTION'
        },
        {
            image: image45,
            desc: 'COMFORT & SAFETY'
        },
        {
            image: slide12,
            desc: 'COMFORT & SAFETY'
        }

    ]

    const reviewsData = [
        {
            name: "Lean Lander",
            date: "March 12, 2026",
            rating: 5,
            image: image23
        },
        {
            name: "Jaqu S.",
            date: "March 17, 2026",
            rating: 5,
            image: image28
        },
        {
            name: "Kim Grobe-Venhaus",
            date: "March 19, 2026",
            rating: 5,
            image: image29
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeaderSlide((prev) => (prev + 1) % slides.length)
        }, 8000);
        return () => clearInterval(interval);
    }, []
    );
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => prev + 1);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (curruntSlide === chooseAreaSlides.length) {
            const timer = setTimeout(() => {
                setChooseAreaAnimate(false);
                setCurrentSlide(0);
                setTimeout(() => setChooseAreaAnimate(true), 50);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [curruntSlide, chooseAreaSlides.length]);

    const whatsappNumber = "94769392153";

    const handleWhatsApp = (message) => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    // Gallery lightbox state
    const galleryImages = [
        image11, image12, image13, image14,
        image15, image16, image42, image18,
        image19, image20, image21, image22,
        // Additional images to fill 50+
        image30, image31, image32, image33,
        image37, image36, image35, image34,
        image38, image39, image40, image41,
        image42, image43, image44, image45,
        image49, image48, image47, image46,
        image50, image6, image11, image12,
        image13, image14, image15, image16,
        image17, image18, image19, image20,
        image21, image22, image7, image8,
        image9, image10, image6, image11,
        image12, image13
    ];
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };
    const closeLightbox = () => setLightboxOpen(false);
    const prevImage = () => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    const nextImage = () => setLightboxIndex((prev) => (prev + 1) % galleryImages.length);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInquirySubmit = () => {
        if (!formData.name || !formData.phone) {
            alert("Please fill in at least your name and phone number.");
            return;
        }
        const text = `Inquiry from Website:
                Name: ${formData.name}
                Email: ${formData.email}
                Phone: ${formData.phone}
                Message: ${formData.message}`;
        handleWhatsApp(text);
    };
    return (
        <div className="min-h-screen overflow-x-hidden">

            <div id="home" className="relative h-screen">
                <img src={slides[currentHeaderSilde].image} className="absolute inset-0 w-full h-full z-0" />
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentHeaderSlide(index)}
                            className={`w-4 h-4 rounded-full transition ${currentHeaderSilde === index
                                ? "bg-lime-400 scale-110"
                                : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
                <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                <div className="relative z-20 flex flex-col min-h-[calc(100vh)]">
                    <nav className="bg-black h-16 md:h-20 flex justify-between items-center px-6 md:px-12 overflow-visible">
                        <div className="flex items-center mr-30">
                            <img src={logo} className="h-16 md:h-48 w-auto " />
                        </div>
                        {/* Desktop Navigation bar */}
                        <div className="hidden md:flex gap-8 items-center justify-end">
                            <a href="#home" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm font-medium">Home</a>
                            <a href="#about" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm font-medium">| About us</a>
                            <a href="#safari" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm font-medium">| Safari Packages</a>
                            <a href="#gallery" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm font-medium">| Gallery</a>
                            <a href="#review" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm font-medium">| Review</a>
                            <a href="#contact" className="text-white hover:text-lime-400 transition duration-300 cursor-pointer text-sm font-medium">| Contact us</a>
                            <button onClick={() => handleWhatsApp("Hello, I would like to book a safari/stay.")} className="bg-lime-400 text-black font-semibold border-0 rounded-lg h-10 px-6 hover:bg-lime-500 transition duration-300 text-sm">Book Now</button>
                        </div>
                        {/* Mobile navigation bar */}
                        <button className="md:hidden text-white text-2xl border-0 bg-transparent cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </nav>

                    {menuOpen && (
                        <div className="md:hidden fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 py-20 animate-in fade-in zoom-in duration-300 overflow-y-auto">
                            <a href="#home" className="text-white text-xl hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Home</a>
                            <a href="#about" className="text-white text-xl hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>About us</a>
                            <a href="#safari" className="text-white text-xl hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Safari Packages</a>
                            <a href="#gallery" className="text-white text-xl hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Gallery</a>
                            <a href="#review" className="text-white text-xl hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Review</a>
                            <a href="#contact" className="text-white text-xl hover:text-lime-400 transition duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>Contact us</a>
                            <button onClick={() => handleWhatsApp("Hello, I would like to book a safari/stay.")} className="bg-lime-400 text-black font-bold border-0 rounded-xl h-12 px-8 mt-4 hover:bg-lime-500 transition duration-300">Book Now</button>
                        </div>
                    )}

                    <div className="flex flex-1 flex-col items-center justify-center text-center gap-5 px-4 sm:px-6 lg:px-8">
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[50px]">UNFORGETTABLE SAFARIS &</div>
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[50px]">PREMIUM STAYS.</div>
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">Witness the giants of Udawalawe by day and relax in our eco-luxury resort by night</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-3xl">
                            <button onClick={() => document.getElementById('safari').scrollIntoView({ behavior: 'smooth' })} style={{ borderRadius: '8px' }} className="bg-lime-400 border-0 text-black font-thin px-6 py-3 md:px-7 md:py-4 text-sm md:text-base w-full">Book Safari</button>
                            <button onClick={() => document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' })} style={{ borderRadius: '8px' }} className="bg-lime-400 border-0 text-black font-thin px-6 py-3 md:px-7 md:py-4 text-sm md:text-base w-full">View Rooms</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Green Wild Section */}
            <div id="about" className="relative overflow-hidden">
                <img src={image2} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gray-900/50"></div>

                <div className="relative z-10 flex flex-col items-center text-center pt-8 md:pt-12 pb-20 md:pb-28 px-4">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex flex-row gap-2 flex-wrap justify-center">
                            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '700' }} className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-[110px] leading-none">GREEN</div>
                            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '700' }} className="text-lime-400 text-3xl sm:text-5xl md:text-7xl lg:text-[110px] leading-none">WILD</div>
                        </div>
                        <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '600' }} className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-[110px] leading-none">SAFARI RESORT</div>
                        <div className="text-sm sm:text-base md:text-xl text-gray-200 font-light mt-3 mb-8">Where The Wild Meets The Green: Your Gateway To Udawalawe.</div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="bg-white w-full rounded-2xl shadow-xl pb-12 lg:pb-6"
                    >
                        <div className="flex flex-col lg:flex-row pt-8 px-6 md:px-10 gap-6 items-start">

                            <div className="flex flex-col flex-1">
                                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }} className="text-lime-400 text-[18px] md:text-[22px] pb-3">OUR CONCEPT</div>
                                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-black text-[14px] md:text-[12px] pb-6">Built with eco-friendly materials and guided by years of expert tracking, we offer an authentic sanctuary for nature lovers. Witness the giants of the wild in unparalleled comfort.</div>
                                <div className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                            <img src={icon4} className="h-6 w-6 flex-shrink-0" />
                                            <div>
                                                <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-black text-[11px]">ECO-FRIENDLY STAYS</div>
                                                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-gray-500 text-[10px] leading-tight">Built with sustainable materials</div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                            <img src={icon3} className="h-6 w-6 flex-shrink-0" />
                                            <div>
                                                <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-black text-[11px]">WILD NEIGHBORHOOD</div>
                                                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-gray-500 text-[10px] leading-tight">Frequent sightings near resort</div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                            <img src={icon1} className="h-6 w-6 flex-shrink-0" />
                                            <div>
                                                <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-black text-[11px]">AUTHENTIC CUISINE</div>
                                                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-gray-500 text-[10px] leading-tight">Traditional Sri Lankan organic</div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                            <img src={icon2} className="h-6 w-6 flex-shrink-0" />
                                            <div>
                                                <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-black text-[11px]">EXPERT NATURALISTS</div>
                                                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-gray-500 text-[10px] leading-tight">Guiding you through secrets</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:block w-px bg-gray-300 h-70"></div>

                            <div className="flex flex-col flex-1">
                                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }} className="text-lime-400 text-[18px] md:text-[22px] pb-3">OUR STORY</div>
                                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-black text-[14px] md:text-[12px] pb-6">Our Green Wild Safari Resort was had the inception of the local tracking and friendly resort guides and has contributed to the local community. We are committed to sustainable tourism.</div>
                                <div className="flex flex-row items-center gap-3">
                                    <img src={image3} className="rounded-full h-14 w-14 object-cover shrink-0" />
                                    <div className="flex flex-col">
                                        <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-black text-[10px]">SEALIS CERTIFIED</div>
                                        <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-black text-[10px]">GUIDE NETWORK</div>
                                        <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-black text-[10px]">SRI LANKA</div>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex flex-row gap-4 shrink-0 items-end mb-0 lg:-mb-20 relative z-20 justify-center self-center w-full lg:w-auto mt-12 lg:mt-0"
                            >
                                <div className="flex flex-col gap-4 h-60 lg:h-104">
                                    <img src={image6} className="w-28 md:w-32 lg:w-44 flex-1 object-cover rounded-xl shadow-xl hover:scale-105 transition duration-300" />
                                    <img src={image30} className="w-28 md:w-32 lg:w-44 flex-1 object-cover rounded-xl shadow-xl hover:scale-105 transition duration-300" />
                                </div>
                                <div className="flex flex-col gap-4 h-60 lg:h-104">
                                    <img src={image5} className="w-28 md:w-32 lg:w-44 flex-1 object-cover rounded-xl shadow-xl hover:scale-105 transition duration-300" />
                                    <img src={image4} className="w-28 md:w-32 lg:w-44 flex-1 object-cover rounded-xl shadow-xl hover:scale-105 transition duration-300" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/*Why Choose Us*/}
            <div className="relative min-h-screen bg-white">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col items-center py-16 md:py-24 text-center px-10 max-w-[1400px] mx-auto w-full"
                >
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="font-semibold text-black text-3xl sm:text-4xl md:text-[48px]">WHY CHOOSE</div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="-mt-2 font-semibold text-black text-3xl sm:text-4xl md:text-[48px]">OUR SAFARI TOURS</div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-black text-sm sm:text-base md:text-[20px] mt-2">Authentic, sustainable, And Unforgettable Encounters In Udawalawe</div>
                </motion.div>
                <div className="flex flex-col lg:flex-row px-10 gap-10 items-center justify-center max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="flex flex-col flex-1"
                    >

                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-black font-semibold text-xl md:text-[24px]">10+ YEARS OF EXPERTISE</div>
                        <div className="flex flex-row items-center pt-5 gap-4">
                            <img src={icon5} className="h-8 w-auto shrink-0" />
                            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-black text-sm md:text-[16px]">Over a decade of tracking and exploring Udawalawe. Experience is your ultimate guide.</div>
                        </div>
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-black font-semibold text-xl md:text-[24px] mt-8 md:mt-15">EXPERT NATURALISTS</div>
                        <div className="flex flex-row items-center pt-5 gap-4">
                            <img src={icon6} className="h-8 w-auto shrink-0" />
                            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-black text-sm md:text-[16px]">Our guides know every hidden trail, ensuring safe and intimate wildlife moments..</div>
                        </div>
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-black font-semibold text-xl md:text-[24px] mt-8 md:mt-15">ETHICAL & ECO-FRIENDLY</div>
                        <div className="flex flex-row items-center pt-5 gap-4">
                            <img src={icon7} className="h-8 w-auto shrink-0" />
                            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-black text-sm md:text-[16px]">Committed to 'nature first. Tours are 100% eco-friendly, respecting habitat.</div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="overflow-hidden flex-1 w-full"
                    >
                        <div
                            className={`flex gap-10 ${chooseAreaAnimate ? 'transition-transform duration-500 ease-in-out' : ''}`}
                            style={{
                                transform: `translateX(calc(-${curruntSlide} * (75% + 2.5rem)))`
                            }}
                        >
                            {[...chooseAreaSlides, chooseAreaSlides[0]].map((slide, index) => (
                                <img
                                    key={index}
                                    src={slide.image}
                                    className="w-[75%] h-64 md:h-90 object-cover rounded-xl shrink-0"
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex justify-center py-16 md:py-24 px-10 text-center"
                >
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="font-semibold text-black text-2xl sm:text-3xl md:text-[48px]">UDAWALAWE NATIONAL PARK</div>
                </motion.div>
                <div className="flex flex-col lg:flex-row px-10 gap-12 items-center justify-center max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="flex flex-col sm:grid sm:grid-cols-2 gap-0 lg:flex lg:flex-col lg:gap-0 shrink-0"
                    >
                        <div className="flex gap-0">
                            <img src={image7} className="h-40 lg:h-75 w-full lg:w-80 object-cover"></img>
                            <img src={image8} className="h-40 lg:h-75 w-full lg:w-80 object-cover"></img>
                        </div>
                        <div className="flex gap-0">
                            <img src={image9} className="h-40 lg:h-75 w-full lg:w-95 object-cover"></img>
                            <img src={image10} className="h-40 lg:h-73 w-full lg:w-64 object-cover"></img>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="flex flex-col flex-1 lg:pl-8"
                    >
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-black text-base leading-relaxed mb-4">
                            Udawalawe National Park is a premier wildlife sanctuary in Sri Lanka, spanning over 30,000 hectares. It is most famous for being a guaranteed location to see herds of wild Sri Lankan Elephants (sometimes hundreds a day) roaming freely in their natural habitat. Beyond the elephants, the park is home to a rich variety of wildlife, including:
                        </p>
                        <ul className="list-disc space-y-4 pl-6">
                            <li style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-black text-base">
                                <span className="font-semibold">Animals:</span> Large herds of wild water buffalo, spotted deer, and more elusive species like leopards.
                            </li>
                            <li style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-black text-base">
                                <span className="font-semibold">Birds:</span> A paradise for birdwatchers, with over 180 species recorded.
                            </li>
                        </ul>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-black text-base leading-relaxed mb-4 mt-10">
                            The open landscape and large reservoir provide stunning photographic opportunities, especially during sunrise and sunset. A jeep safari here offers an immersive and unforgettable wilderness experience
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="py-16 md:py-24 max-w-[1500px] mx-auto px-6"
                >
                    <div
                        id="safari"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                        className="text-black font-semibold flex justify-center text-center text-2xl sm:text-3xl md:text-[48px] px-4"
                    >
                        OUR EXCLUSIVE SAFARI PACKAGES
                    </div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-gray-400 flex justify-center text-center text-base sm:text-xl md:text-[28px] px-4">Tailor-made wildlife experiences designed for comfort, safety, and breathtaking sightings</div>
                    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-stretch gap-8 md:gap-20 px-4 md:px-10 pt-10 md:pt-20">

                        {/* Card 1 */}
                        <div style={{ backgroundColor: '#2D2F2C' }} className="flex flex-col h-full w-full max-w-sm border-2 border-transparent rounded-xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-2xl hover:border-lime-400/50 transition-all duration-300 group">
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-lg sm:text-[20px] font-medium text-center mb-4 group-hover:text-lime-400 transition-colors duration-200">MORNING SAFARI</div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[11px] text-center mb-3">Best For: Elephant sightings and bird watching.</div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-xs sm:text-[11px] text-center mb-4">Time: 6:00 AM – 10:00 AM</div>
                            <div className="flex flex-col items-center px-4">
                                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-lime-400 text-xs sm:text-[11px] text-center mb-4 uppercase tracking-wider mt-2">What's included</div>
                                <div className="grid grid-cols-[auto_min-content_1fr] gap-x-1 gap-y-2 w-full max-w-xs md:max-w-70">
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[10px] font-bold text-left whitespace-nowrap">Expert Guide</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[10px] text-left leading-tight pl-1">Experience from a professional naturalist.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[10px] font-bold text-left whitespace-nowrap">Comfortable 4x4</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[10px] text-left leading-tight pl-1">Specially modified safari jeep.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[10px] font-bold text-left whitespace-nowrap">Park Fees</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[10px] text-left leading-tight pl-1">All entry permits and taxes included.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[10px] font-bold text-left whitespace-nowrap">Light Snacks</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[10px] text-left leading-tight pl-1">Fresh water and morning snacks.</div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-8 mb-2">
                                <button onClick={() => handleWhatsApp("Hello, I would like to book a Safari package.")} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="bg-lime-400 font-semibold text-black text-sm sm:text-[14px] border-0 rounded-xl px-6 sm:px-8 py-2.5 transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto">BOOK NOW</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div style={{ backgroundColor: '#2D2F2C' }} className="flex flex-col h-full w-full max-w-sm border-2 border-transparent rounded-xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-2xl hover:border-lime-400/50 transition-all duration-300 group">
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-lg sm:text-[20px] font-medium text-center mb-4 group-hover:text-lime-400 transition-colors duration-200">EVENING SAFARI</div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[11px] text-center mb-3">Best For: Golden hour photography and dramatic landscapes</div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-xs sm:text-[11px] text-center mb-2">Time: 2:30 PM – 6:30 PM</div>
                            <div className="flex flex-col items-center px-4">
                                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-lime-400 text-xs sm:text-[11px] text-center mb-4 uppercase tracking-wider mt-4">What's included</div>
                                <div className="grid grid-cols-[auto_min-content_1fr] gap-x-1 gap-y-2 w-full max-w-xs md:max-w-70">
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[10px] font-bold text-left whitespace-nowrap">Photo Ops</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[10px] text-left leading-tight pl-1">Guided stops at the best sunset viewpoints.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[10px] font-bold text-left whitespace-nowrap">Luxury Jeep</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[10px] text-left leading-tight pl-1">4x4 vehicle with open-top viewing.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[10px] font-bold text-left whitespace-nowrap">Trackers</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[10px] text-left leading-tight pl-1">Experienced trackers to find leopards and bears.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[10px] font-bold text-left whitespace-nowrap">Refreshments</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[10px] text-left leading-tight pl-1">Chilled water and evening beverages.</div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6 mb-2">
                                <button onClick={() => handleWhatsApp("Hello, I would like to book a Safari package.")} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="bg-lime-400 font-semibold text-black text-sm sm:text-[14px] border-0 rounded-xl px-6 sm:px-8 py-2.5 transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto">BOOK NOW</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div style={{ backgroundColor: '#2D2F2C' }} className="flex flex-col h-full w-full max-w-sm border-2 border-transparent rounded-xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-2xl hover:border-lime-400/50 transition-all duration-300 group">
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-lg sm:text-[20px] font-medium text-center mb-4 group-hover:text-lime-400 transition-colors duration-200">FULL DAY SAFARI</div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[11px] text-center mb-3">BEST FOR: DEEP EXPLORATION AND SPOTTING RARE WILDLIFE</div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-xs sm:text-[11px] text-center mb-4">Time: 6:00 AM – 6:00 PM</div>
                            <div className="flex flex-col items-center px-4">
                                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-lime-400 text-xs sm:text-[11px] text-center mb-4 uppercase tracking-wider">What's included</div>
                                <div className="grid grid-cols-[auto_min-content_1fr] gap-x-1 gap-y-2 w-full max-w-xs md:max-w-70">
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[10px] font-bold text-left whitespace-nowrap">Full Access</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[10px] text-left leading-tight pl-1">Extended exploration of the deep jungle.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[10px] font-bold text-left whitespace-nowrap">Gourmet Picnic</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[10px] text-left leading-tight pl-1">Packed breakfast and lunch inside the park.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[10px] font-bold text-left whitespace-nowrap">Premium Service</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[10px] text-left leading-tight pl-1">Dedicated guide for the entire 12 hours.</div>

                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-xs sm:text-[10px] font-bold text-left whitespace-nowrap">All-Inclusive</div>
                                    <div className="text-white text-xs sm:text-[10px] font-bold">:</div>
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-white text-xs sm:text-[10px] text-left leading-tight pl-1">Parking, entry fees, and insurance cover.</div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button onClick={() => handleWhatsApp("Hello, I would like to book a Safari package.")} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="bg-lime-400 font-semibold text-black text-sm sm:text-[14px] border-0 rounded-xl px-6 sm:px-8 py-2.5 transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ROOM CARDS SECTION */}
                <motion.div
                    id="rooms"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="pt-4 md:pt-4 max-w-[1600px] mx-auto px-6"
                >
                    <div className="flex flex-col items-center pb-4 text-center px-4">
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="font-semibold text-black text-3xl md:text-[48px] leading-tight">A LUXURY STAY WHERE WILD ELEPHANTS<br />ROAM NEARBY</div>
                        <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-black text-base md:text-[18px] mt-4 max-w-2xl">Experience Eco-Luxury Living Just Minutes Away From The Udawalawe National Park. Your Sanctuary In The Heart Of The Wild.</div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between px-8 md:px-25 pt-10 gap-12 pb-20 ">

                        {/* Room Card 1 */}
                        <div className="w-full lg:w-90 bg-[#3A3A3A] p-3 rounded-2xl">

                            <div className="rounded-xl overflow-hidden border-2 border-gray-600">
                                <div className="relative">
                                    <img src={room1} className="w-full h-80 object-cover" />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                        <h3 className="text-white text-sm sm:text-[15px] font-semibold"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            THE EXPLORER'S ESCAPE
                                        </h3>

                                        <p className="text-white text-xs sm:text-[10px] mt-1 leading-tight"
                                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            STANDARD ECO-CABIN (AC/NON-AC OPTIONS). <br />
                                            INCLUDES BED & BREAKFAST
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#3A3A3A] px-4 pt-4 pb-2 text-center">
                                <button onClick={() => handleWhatsApp("Hello, I would like to book a stay.")} className="w-full bg-lime-400 text-black text-[12px] font-semibold rounded-md py-2 hover:bg-lime-500 transition"
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
                                        <h3 className="text-white text-sm sm:text-[15px] font-semibold"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            THE EXPLORER'S ESCAPE
                                        </h3>

                                        <p className="text-white text-xs sm:text-[10px] mt-1 leading-tight"
                                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            STANDARD ECO-CABIN (AC/NON-AC OPTIONS). <br />
                                            INCLUDES BED & BREAKFAST
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#3A3A3A] px-4 pt-4 pb-2 text-center">
                                <button onClick={() => handleWhatsApp("Hello, I would like to book a stay.")} className="w-full bg-lime-400 text-black text-[12px] font-semibold rounded-md py-2 hover:bg-lime-500 transition"
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    BOOK NOW
                                </button>
                            </div>

                            <div className="bg-[#3A3A3A] pb-3 text-center">
                                <span className="text-lime-400 text-xs sm:text-[10px] underline cursor-pointer"
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
                                        <h3 className="text-white text-sm sm:text-[15px] font-semibold"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            THE EXPLORER'S ESCAPE
                                        </h3>

                                        <p className="text-white text-xs sm:text-[10px] mt-1 leading-tight"
                                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            STANDARD ECO-CABIN (AC/NON-AC OPTIONS). <br />
                                            INCLUDES BED & BREAKFAST
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#3A3A3A] px-4 pt-4 pb-2 text-center">
                                <button onClick={() => handleWhatsApp("Hello, I would like to book a stay.")} className="w-full bg-lime-400 text-black text-[12px] font-semibold rounded-md py-2 hover:bg-lime-500 transition"
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    BOOK NOW
                                </button>
                            </div>

                            <div className="bg-[#3A3A3A] pb-3 text-center">
                                <span className="text-lime-400 text-xs sm:text-[10px] underline cursor-pointer"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    What’s Included
                                </span>
                            </div>

                        </div>
                    </div>
                </motion.div>
                {/*Gallerry*/}
                <div className="pt-4 md:pt-4 max-w-[1450px] mx-auto">
                    <div id="gallery" className="flex flex-col items-center justify-center mb-6 px-4 text-center">
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-black text-2xl sm:text-3xl md:text-[48px] font-semibold">
                            WILDERNESS &amp; WELLBEING
                        </div>
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="text-black text-base sm:text-xl md:text-[28px] font-semibold">
                            Authentic safaris, refined relaxation. Captured by our guests.
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 px-4 md:px-16">
                        {galleryImages.slice(0, 12).map((img, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden group cursor-default"
                                onClick={() => openLightbox(index)}
                            >
                                <img src={img} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                {/*12th image */}
                                {index === 11 && (
                                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center transition-opacity">
                                        <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-white text-4xl md:text-5xl font-bold">more</span>
                                        <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }} className="text-white/80 text-sm md:text-base mt-1">View Gallery</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lightbox Overlay */}
                {lightboxOpen && (
                    <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center cursor-default" onClick={closeLightbox}>
                        {/* Close button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                            className="absolute top-6 right-6 text-white text-5xl font-light hover:text-lime-400 transition-colors z-50 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center border-0 cursor-pointer"
                            style={{ fontFamily: 'sans-serif', lineHeight: 1 }}
                        >
                            &times;
                        </button>

                        {/* Image counter */}
                        <div className="absolute top-6 left-6 text-white/70 text-sm z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {lightboxIndex + 1} / {galleryImages.length}
                        </div>

                        {/* Previous button */}
                        <div
                            className="absolute left-0 top-20 bottom-0 w-1/3 flex items-center justify-start pl-4 md:pl-8 z-10"
                            style={{ cursor: 'default' }}
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Next button */}
                        <div
                            className="absolute right-0 top-20 bottom-0 w-1/3 flex items-center justify-end pr-4 md:pr-8 z-10"
                            style={{ cursor: 'default' }}
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>

                        {/* Enlarged Image */}
                        <motion.img
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            src={galleryImages[lightboxIndex]}
                            className="w-full max-w-[1000px] h-[60vh] md:h-[75vh] object-cover rounded-lg shadow-2xl border-2 border-white/20"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
                {/*Gest Expiriance*/}
                <div className="py-16 md:py-24">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        id="review"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                        className="text-black text-2xl sm:text-3xl md:text-[48px] font-semibold flex justify-center mt-4 px-4 text-center"
                    >
                        GUEST EXPERIENCES
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="relative overflow-hidden mt-10 py-10 bg-gray-50/50"
                    >
                        <div className="flex w-full overflow-hidden">
                            <motion.div
                                className="flex gap-10 whitespace-nowrap"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                {/* Duplicate the reviewsData to create a seamless loop */}
                                {[...reviewsData, ...reviewsData, ...reviewsData, ...reviewsData].map((review, index) => (
                                    <div key={index} className="shrink-0">
                                        <img
                                            src={review.image}
                                            alt={`Review ${index}`}
                                            className="h-[300px] md:h-[400px] w-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 pointer-events-none"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                {/*contact us */}
                <div className="pt-4 md:pt-4 max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        id="contact"
                        className="flex flex-col items-center px-4 md:px-20 text-center"
                    >
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-black text-2xl sm:text-3xl md:text-[45px] font-semibold">CONTACT OUR WILD GUIDES</div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }} className="text-black/50 text-base sm:text-xl md:text-[28px] text-center">Planning your adventure in Udawalawe should be as smooth as the experience itself Our expert guides are ready to help you</div>
                    </motion.div>
                    <div className="flex flex-col lg:flex-row px-4 md:px-15 pt-10 md:pt-15 gap-10">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="flex flex-col flex-1"
                        >
                            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }} className="font-semibold text-lime-400 text-xl md:text-[28px]">
                                SEND US A NOTE
                            </div>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }} className="pt-4 text-[13px] text-black/70 pb-6">
                                Use the from below for any inquiries oe bespoke safari planning we will get back to you within 24 hours
                            </div>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-row items-center gap-3">
                                        <div className="w-10 h-10 rounded-full border-2 border-lime-400 flex items-center justify-center shrink-0">
                                            <img src={iconPhone} className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-[12px] text-black/70">Call/WhatsApp</div>
                                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-xs sm:text-[11px] text-black">0769392153</div>
                                        </div>
                                    </div>
                                    {/* Email */}
                                    <div className="flex flex-row items-center gap-3">
                                        <div className="w-10 h-10 rounded-full border-2 border-lime-400 flex items-center justify-center shrink-0">
                                            <img src={iconMail} className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-[12px] text-black/70">Email</div>
                                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-xs sm:text-[11px] text-black">greenwildsafariresort@gmail.com</div>
                                        </div>
                                    </div>
                                    {/* Location */}
                                    <div className="flex flex-row items-start gap-3">
                                        <div className="w-10 h-10 rounded-full border-2 border-lime-400 flex items-center justify-center shrink-0">
                                            <img src={iconLocation} className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-[12px] text-black/70">Our Location</div>
                                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-xs sm:text-[11px] text-black">Green Wild Safari Resort,<br />Thanamalvila Rd, Udawalawa 70190</div>
                                        </div>
                                    </div>
                                    {/* Support*/}
                                    <div className="mt-2">
                                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }} className="text-[12px] text-black/70 mb-2">SUPPORT &amp; RESOURCES</div>
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
                        </motion.div>

                        {/* Right Side */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="flex-1 flex flex-col gap-4"
                        >
                            <div className="bg-[#3A3A3A] rounded-3xl p-6 md:p-8">
                                <div className="flex flex-col gap-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col">
                                            <label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-[12px] mb-2">
                                                FULL NAME
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Gimshan Menaka"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="bg-transparent border-2 border-lime-400 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-lime-300"
                                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-[12px] mb-2">
                                                EMAIL ADDRESS
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="gimshanmenaka@gmail.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="bg-transparent border-2 border-lime-400 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-lime-300"
                                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-[12px] mb-2">
                                            PHONE NUMBER
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="07x xx xx xxx"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="bg-transparent border-2 border-lime-400 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-lime-300"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} className="text-white text-[12px] mb-2">
                                            YOUR MESSAGE
                                        </label>
                                        <textarea
                                            placeholder="message"
                                            rows="6"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="bg-transparent border-2 border-lime-400 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-lime-300 resize-none"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex justify-center"
                            >
                                <button
                                    onClick={handleInquirySubmit}
                                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}
                                    className="bg-lime-400 text-black font-bold text-[16px] px-12 py-3 rounded-xl hover:bg-lime-500 transition duration-300"
                                >
                                    SEND INQUIRE
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                {/*other places*/}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col items-center py-16 md:py-24 px-4 text-center"
                >
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }} className="text-black text-2xl sm:text-3xl md:text-[45px] font-semibold">OTHER PLACES IN UDAWALAWE</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }} className="text-black/70 text-base sm:text-xl md:text-[28px] text-center">Step outside the safari and uncover the rich history and scenic beauty of the Udawalawe region.</div>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col lg:flex-row justify-center gap-10 px-10 mt-12 pb-15"
                >

                    {/* Card 1 */}
                    <div className="bg-[#3A3A3A] rounded-2xl p-4 w-full max-w-sm">

                        <div className="flex items-center gap-2 mb-3">
                            <img src={icon11} className="w-8 h-8" />
                            <div className="text-white text-sm font-light">
                                Elephant Transit Home (ETH)<br />
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

                        <button
                            onClick={() => window.open("https://en.wikipedia.org/wiki/Udawalawe_Elephant_Transit_Home", "_blank")}
                            className="w-full bg-lime-400 text-black text-sm py-2 rounded-xl hover:bg-lime-500 transition"
                        >
                            View Details
                        </button>
                    </div>


                    {/* Card 2 */}
                    <div className="bg-[#3A3A3A] rounded-2xl p-4 w-full max-w-sm">

                        <div className="flex items-center gap-2 mb-3">
                            <img src={icon12} className="w-8 h-8" />
                            <div className="text-white text-sm font-light">
                                Sankapala Raja Maha Vihara <br />Legendary Cave Temple
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

                        <button
                            onClick={() => window.open("https://amazinglanka.com/wp/sankapala/", "_blank")}
                            className="w-full bg-lime-400 text-black text-sm py-2 rounded-xl hover:bg-lime-500 transition"
                        >
                            View Details
                        </button>
                    </div>


                    {/* Card 3 */}
                    <div className="bg-[#3A3A3A] rounded-2xl p-4 w-full max-w-sm">

                        <div className="flex items-center gap-2 mb-3">
                            <img src={icon13} className="w-8 h-8" />
                            <div className="text-white text-sm font-light">
                                Maduwanwela Walawwa <br />Historic Manor House
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

                        <button
                            onClick={() => window.open("https://si.wikipedia.org/wiki/%E0%B6%B8%E0%B6%A9%E0%B7%94%E0%B7%80%E0%B6%B1%E0%B7%8A%E0%B7%80%E0%B7%99%E0%B6%BD_%E0%B7%80%E0%B6%BD%E0%B7%80%E0%B7%8A%E0%B7%80", "_blank")}
                            className="w-full bg-lime-400 text-black text-sm py-2 rounded-xl hover:bg-lime-500 transition"
                        >
                            View Details
                        </button>
                    </div>

                </motion.div>
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
                                <li><a href="#home" className="hover:text-lime-400 transition duration-300 cursor-pointer">• Home</a></li>
                                <li><a href="#about" className="hover:text-lime-400 transition duration-300 cursor-pointer">• About Us</a></li>
                                <li><a href="#safari" className="hover:text-lime-400 transition duration-300 cursor-pointer">• Safari Packages</a></li>
                                <li><a href="#gallery" className="hover:text-lime-400 transition duration-300 cursor-pointer">• Gallery</a></li>
                                <li><a href="#review" className="hover:text-lime-400 transition duration-300 cursor-pointer">• Review</a></li>
                                <li><a href="#contact" className="hover:text-lime-400 transition duration-300 cursor-pointer">• Contact Us</a></li>
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
                            Designed & Developed By <a href="https://www.axstartech.com/" target="_blank" rel="noopener noreferrer" className="text-lime-400 font-semibold hover:text-lime-300 transition duration-300">AXSTAR</a>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Home;