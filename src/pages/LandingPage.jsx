import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/pages/NavBar';
import Button from '@/Components/Button';
import image from '../assets/uni.jpg'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'

const img = [image1, image2, image3, image4, image5];
const LandingPage = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <NavBar></NavBar>
      <main className='flex flex-col mt-[20px] items-center space-y-15'>
        <div className='flex gap-8 mt-[20px] flex-col space-y-3 items-center w-[80%]'>
          <h1 className='text-[2.5em] text-center font-bold'>Welcome to StuHub</h1>
          <p className='text-center ml-20 mr-20 text-[1.25em]'>Introducing the StuHub Platform—a digital space designed to enhance the student experience at University XYZ. Whether you're looking for campus events, academic resources, or opportunities to connect with peers, StuHub is your go-to platform.</p>

          <Button style={"p-2 rounded hover:bg-blue-600"} onClick={() => {
            navigate('/events');

          }} text={"Explore"}></Button>

          <div className="flex justify-center mt-12 w-full">
            <img src={image} loading="lazy" className="h-full w-full object-cover rounded-2xl shadow-2xl" alt="university" />
          </div>

        </div>




        <div className='mt-40 mx-auto sm:mx-10 md:mx-20 lg:mx-30 w-full'>
          <div className='flex flex-col md:flex-row justify-around items-center gap-6 md:gap-10'>
            <div className='max-w-sm leading-relaxed'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl'>Never Miss an Event</h1>
              <p className='mt-5 text-justify'>Stay updated with the latest happenings at University XYZ! From exciting concerts and engaging seminars to hands-on workshops, the StuHub platform makes it easy to explore and register for events that interest you. Whether you’re looking to expand your knowledge or just have fun, there’s always something going on.</p>
              <div className='flex gap-4 mt-10'>
                <Button style={"p-2 rounded hover:bg-blue-600"} text={"Try now"} onClick={() => { navigate('/events'); window.scrollTo(0, 0); }}></Button>
                <button>Learn more</button>
              </div>
            </div>
            <div>
              <img src={img1} loading="lazy" className='max-w-xm sm:max-w-sm md:max-w-md' />
            </div>
          </div>


          <div className='flex mt-20 flex-col md:flex-row justify-around items-center gap-6 md:gap-10'>
            <div>
              <img src={img2} loading="lazy" className='max-w-xm sm:max-w-sm md:max-w-md' />
            </div>
            <div className='max-w-sm leading-relaxed'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl'>Find Your Community</h1>
              <p className='mt-5 text-justify'>Looking to meet like-minded peers or form study groups? StuHub helps you connect with fellow students through clubs, organizations, and collaborative spaces. Whether you’re passionate about academics, arts, or activism, there’s a community waiting for you. Build friendships, share ideas, and make the most of your university experience.</p>
              <div className='flex gap-4 mt-10'>
                <Button style={"p-2 rounded hover:bg-blue-600"} text={"Try now"} onClick={() => { navigate('/clubs'); window.scrollTo(0, 0); }}></Button>
                <button>Learn more</button>
              </div>
            </div>
          </div>
        </div>




        <div className='mt-40 mb-60 flex flex-col justify-center items-center w-full px-4 sm:px-8 md:px-12 lg:px-20'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl text-center'>What's New?</h1>
          <p className='mt-10 text-center text-sm sm:text-base md:text-lg max-w-3xl'>
            Stay updated with the latest features and events at StuHub! We're constantly improving to provide you with the best experience. Whether you're looking for exciting events, new resources, or ways to connect with your peers, there's always something new to discover on our platform.
          </p>

          <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-10 w-full'>

            <div className='flex flex-col items-center text-center w-full sm:w-1/3'>
              <img
                src={img3} loading="lazy"
                className='w-full max-w-sm sm:max-w-full md:max-w-lg rounded-lg shadow-lg border border-gray-300 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110'
              />
              <h1 className='mt-6 text-xl sm:text-2xl font-semibold'>Campus Events</h1>
              <p className='mt-3 text-sm sm:text-md lg:text-lg text-gray-600'>
                Never miss out on any campus events! From seminars and workshops to concerts and cultural fests, StuHub brings all the exciting events to your fingertips. Browse through our event listings, register for your favorites, and mark your calendar so you’re always in the loop.
              </p>
            </div>

            <div className='flex flex-col items-center text-center w-full sm:w-1/3'>
              <img
                src={img4} loading="lazy"
                className='w-full max-w-sm sm:max-w-full md:max-w-lg rounded-lg shadow-lg border border-gray-300 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110'
              />
              <h1 className='mt-6 text-xl sm:text-2xl font-semibold'>Join Student Clubs</h1>
              <p className='mt-3 text-sm sm:text-md lg:text-lg text-gray-600'>
                Looking to join a club or society? StuHub makes it easy to find and join clubs based on your interests. Whether you're passionate about sports, arts, technology, or activism, there's a student organization waiting for you to be part of. Get involved and make a difference!
              </p>
            </div>

            <div className='flex flex-col items-center text-center w-full sm:w-1/3'>
              <img
                src={img5} loading="lazy"
                className='w-full max-w-sm sm:max-w-full md:max-w-lg rounded-lg shadow-lg border border-gray-300 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110'
              />
              <h1 className='mt-6 text-xl sm:text-2xl font-semibold'>Collab and Connect</h1>
              <p className='mt-3 text-sm sm:text-md lg:text-lg text-gray-600'>
                Build your network and connect with fellow peers through StuHub. Find study groups, collaborate on projects, or form new connections. The platform’s social features make it easier to meet like-minded students and build friendships that will last beyond university life.
              </p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
