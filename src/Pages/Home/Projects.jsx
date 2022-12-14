import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { AiFillGithub } from 'react-icons/ai';

import pharma from '../../assets/projects/pharma.png';
import pharma2 from '../../assets/projects/pharma2.png';
import pharma3 from '../../assets/projects/pharma3.png';

import dailydeals from '../../assets/projects/daily-deals.png';
import dailydeals2 from '../../assets/projects/daily-deals-2.png';
import dailydeals3 from '../../assets/projects/daily-deals-3.png';

import quizlet from '../../assets/projects/quizlet.png';
import quizlet1 from '../../assets/projects/quizlet1.png';
import quizlet2 from '../../assets/projects/quizlet2.png';

import brownsKitchen from '../../assets/projects/brownsKitchen.png';
import brownsKitchen2 from '../../assets/projects/brownsKitchen2.png';
import brownsKitchen3 from '../../assets/projects/brownsKitchen3.png';

import pirates from '../../assets/projects/pirates.png';
import pirates2 from '../../assets/projects/pirates2.png';
import pirates3 from '../../assets/projects/pirates3.png';

import hrms from '../../assets/projects/hrms.png';
import hrms2 from '../../assets/projects/hrms2.png';
import hrms3 from '../../assets/projects/hrms3.png';

import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

const projects = [
    {
        _id: 1,
        name: 'Daily Deals e-commerce application (MERN)',
        image: [dailydeals, dailydeals2, dailydeals3],
        desc: 'Designed and developed a fully functional buying and selling used laptops and accessories website. It is a complete e-commerce website where sellers can sell and buyers can buy their products. Dashboard features added.',
        features: [
            'Designed and developed a dashboard for different users role(seller, buyer and admin)',
            'Implemented Advertisement features for sellers to advertise their products for better reach',
            'Added Stripe Payment integration to purchase or order products using customer???s card / visa',
        ],
        technologies: 'React(Vite), Node.js, Express.js, MongoDB, Firebase, Tailwind CSS',
        clientCode: 'https://github.com/mickeymaruf/dailydeals',
        serverCode: 'https://github.com/mickeymaruf/dailydeals/tree/server',
        live: 'https://dailydeals-37e5b.firebaseapp.com/'
    },
    {
        _id: 2,
        name: 'Staff Deck - An HR management software',
        image: [hrms, hrms2, hrms3],
        desc: 'An HR management software that helps companies to organize employee databases, Time & Attendance, Talent Onboarding, Managing Events, and more. The goal of Staff Deck is to make it easy for HR to streamline their processes and improve efficiency.',
        features: [
            'Visual representation of company\'s growth, evaluation and statistics.',
            'Hiring and Recruiting',
            'Department & Employee Management',
            'Payroll System',
            'Admin authorization',
            'Event Management',
            'Company\'s Home Page',
            'Careers/Job Portal',
        ],
        technologies: 'React, Redux, Node.js, Express.js, MongoDB, Firebase Auth, Firebase Admin SDK, Tailwind CSS (Flowbite)',
        clientCode: 'https://github.com/Rubayet-billah/hr-management-client',
        serverCode: 'https://github.com/Rubayet-billah/hr-management-server',
        live: 'https://hr-management-client-2a430.web.app/',
        highlight: 'Group Project',
        myContribution: [
            'Designed and developed the front page of the dashboard with different charts that help HRs to observe the evaluation and statistics of the company.',
            'Integrated Firebase Admin SDK for managing permissions for admins and super admins.',
            'Implemented calendar feature for scheduling events of the company.',
            'Designed the Careers page, Account settings, etc.',
        ]
    },
    {
        _id: 3,
        name: 'Pharma - Clinic management app',
        image: [pharma, pharma2, pharma3],
        desc: 'Designed and developed a whole doctors service platform to manage patients and visiting. Implemented appointment booking system according to the date and time slots. Implemented role- based functionality and added Firebase for authentication.',
        features: [
            'Designed and developed a whole doctors service platform to manage patients and visiting',
            'Implemented appointment booking system according to the date and time slots',
            'Restricted users from booking multiple slots at a day, but eligible to book different services',
        ],
        technologies: 'React(Vite), Node.js, Express.js, MongoDB, Firebase, Tailwind CSS',
        clientCode: 'https://github.com/mickeymaruf/pharma',
        serverCode: 'https://github.com/mickeymaruf/pharma//tree/server',
        live: 'https://pharma-1cc98.web.app/'
    },
    {
        _id: 4,
        name: 'Quizlet - Online Quiz (React)',
        image: [quizlet, quizlet1, quizlet2],
        desc: 'An online quiz application. You will find quizzes on different topics about Programming concepts. You can start any quiz and it will show you right/wrong based on your selection. There is a answer reveal button to reveal the correct answer.',
        features: [
            'Live Quiz and Answer: It will tell you right or wrong based on your selected answer.',
            'Reveal Answer: If you click the show button, It will show you the right answer.',
            'Blog: QNA',
        ],
        technologies: 'React, Tailwind CSS, React Dom',
        clientCode: 'https://github.com/mickeymaruf/quizlet',
        live: 'https://quizlet1.netlify.app/'
    },
    {
        _id: 5,
        name: 'Browns Kitchen - Food service review app',
        image: [brownsKitchen, brownsKitchen2, brownsKitchen3],
        desc: 'A homemade food delivery service review website. Users can leave reviews on any particular dish. A new dish can be added. Users can edit/update, delete their comments and rate a dish using starts. Firebase authentication added.',
        features: [
            'Created reviews and rating functionality for users to leave reviews on a particular dish',
            'Implemented a rating feature using the start icon so that users can rate any dish out of 5',
            'Applied user authentication so that users can only review when they are logged in',
        ],
        technologies: 'React, Node.js, Express.js, Firebase, MongoDB, Tailwind CSS',
        clientCode: 'https://github.com/mickeymaruf/browns-kitchen',
        serverCode: 'https://github.com/mickeymaruf/browns-kitchen/tree/server',
        live: 'https://browns-kitchen.web.app/'
    },
    {
        _id: 6,
        name: 'Pirates of Programming Educational Website',
        image: [pirates, pirates2, pirates3],
        desc: 'It is a educational website where a student can enroll any courses. Course materials have detail information in detail page and courses are listed unser categories. React, React-router-dom, Firebase authentication, Private route added.',
        features: [
            'User Authentication using login and signup.',
            'Courses are listed down in the course page.You can choose a course and see the detail content about the course.',
            'Print course details is a extra features where you can print down any particular course information.',
            'Get premium access is a protected route to access which you need to login first and after authenticated user will get redirected to that checkout page automatically.',
            'User Profile: You can update the user info in this section.',
        ],
        technologies: 'React, React-Router, Firebase, Node.js, Tailwind CSS',
        clientCode: 'https://github.com/mickeymaruf/pirates-of-programming',
        serverCode: 'https://github.com/mickeymaruf/pirates-of-programming/tree/server',
        live: 'https://pirates-of-programming.web.app/'
    },

]

const Projects = () => {
    return (
        <div id='projects' className='relative -top-56'>
            <h1 className='text-center text-5xl font-thin'>Projects</h1>
            <div className='px-10 mx:px-0 py-10'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    spaceBetween={10}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    initialSlide={1}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        // when window width is >= 0px
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 5
                        },
                        // when window width is >= 640px
                        670: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        // when window width is >= 1200px
                        1200: {
                            spaceBetween: 25
                        }
                    }}
                >
                    {
                        projects.map(project => <SwiperSlide key={project._id} className='my-5 pb-3'>
                            <div className='shadow-lg shadow-sky-300/20 rounded-lg border border-slate-400'>
                                <img className='rounded-t-lg' src={project.image[0]} alt="" />
                                <h2 className='mt-3 mx-5 text-center text-3xl'>{project.name}</h2>
                                <div className='px-8 pt-6 pb-4'>
                                    <p>
                                        {project.desc}
                                    </p>
                                    <Link to={`/projects/${project._id}`} state={project}><button className='btn mt-3'>Details</button></Link>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                    <SwiperSlide className='my-5 pb-3'>
                        <div className='shadow-lg shadow-sky-300/20 backdrop-blur-sm border border-slate-400 rounded-lg relative'>
                            <div className='invisible'>
                                <img className='rounded-t-lg' src={pharma} alt="" />
                                <h2 className='mt-3 mx-5 text-center text-3xl'>Full stack e-commerce application (MERN)</h2>
                                <div className='px-8 py-6'>
                                    <p>I've Developed this eCommerce application using MERN technologies. Users can create accounts and order products also can manage the orders from the dashboard. Implemented role-based functionality and ui. Utilized Firebase for authentication.</p>
                                    <button className='btn mt-3'>Details</button>
                                </div>
                            </div>
                            <a target="_blank" href="https://github.com/mickeymaruf"><button className='bg-slate-500 px-5 py-3 rounded-lg absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 uppercase flex items-center gap-3'>View More on <AiFillGithub className='w-8 h-8' /></button></a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default Projects;