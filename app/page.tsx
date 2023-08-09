import Image from 'next/image';
import {AiFillYoutube, AiFillMail, AiFillPhone, AiFillCopyrightCircle} from 'react-icons/ai';
import logo from '../public/logo1.png';
import web1 from "../public/work1.png";
import web2 from "../public/work2.png";
import web3 from "../public/work3.jpg";
import web4 from "../public/work4.jpg";

export default function Home() {
  return (

    <main className='bg-white px-10 md:px-20 lg:px-40'>
      <section id="Home" className='min-h-screen'>
        <nav className='py-5 mb-12 flex justify-between'>
          <div>
            <Image src={logo} height={100} width={100} alt='logo'/>
          </div>
          <ul className='flex items-center'>
            <li>
              <a className='bg-logo-blue text-white px-4 py-2 rounded-md ml-8 text-sm lg:text-lg' href="https://www.youtube.com/@oncedaily" target='_blank'>Chech out Now!</a>
            </li>
          </ul>
        </nav>
        <div className='text-center pt-10'>
          <h2 className='text-3xl py-2 text-black font-medium md:text-6xl lg:text-6xl'>Welcome to <span className='text-logo-blue'>Once Daily</span> channel Page</h2>
          <h3 className='text-1.5xl py-2 md:text-3xl lg:text-3xl'>Factoid YouTube Channel</h3>
          <p className='text-md py-5 leading-8 text-gray-800 max-w-sm mx-auto'>We create videos about different interesting facts in the
            world in a brief manner.
          </p>
        </div>
        <div className='text-9xl flex justify-center'>
          <a href="https://www.youtube.com/@oncedaily" target='_blank' className='text-black hover:text-red-600 py-2 transition duration-500 transform motion-reduce:transition-none motion-reduce:hover:transform-none'>
            <AiFillYoutube/></a>
        </div>
      </section>

      <section id='About'>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1'>
            <h3 className='text-3xl mt-5 font-semibold'>About Us</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Welcome to our channel, where we explore the fascinating world of science through fun and informative videos! 
            Our goal is to bring you the latest scientific discoveries and interesting facts about the world we live in. From the 
            mysteries of space to the wonders of the natural world, we cover a wide range of topics to keep you engaged and entertained.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>Our team of passionate researchers and educators 
            \are dedicated to providing you with accurate and up-to-date information in an accessible and easy-to-understand way. 
            We believe that science is for everyone, and our videos are designed to spark curiosity and inspire a love of learning.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
            Join us on our journey of discovery as we delve into the amazing world of science. Subscribe to our channel and hit the 
            notification bell to stay updated with our latest videos. We can&apos;t wait to share our knowledge and enthusiasm with you!
            </p>
          </div>
          <div className="h-100 w-1 bg-gray-500 mx-4"></div>
          <div className='basis-1 flex-1'>
            <h3 className='text-3xl mt-5 font-semibold'>We create videos about</h3>
            <ul className='py-2 px-4 list-disc font text-md leading-8 text-gray-800'>
              <li>Science</li>
              <li>Technology</li>
              <li>History</li>
              <li>General Knowledge</li>
            </ul>

          </div>
        </div>
      </section>


      <section id='Videos'>
      <h3 className='text-3xl py-1 mt-10 font-semibold'>Videos</h3>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <a href="https://www.youtube.com/watch?v=pWROmmB_E4U" target='_blank'>
              <Image
                className="rounded-lg object-cover grayscale transition duration-500 ease-in-out hover:grayscale-0"
                width={100}
                height={100}
                layout="responsive"
                src={web1}
                alt='end of iss'
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <a href="https://www.youtube.com/watch?v=kd4jHNptvR0" target='_blank'>
              <Image
                className="rounded-lg object-cover grayscale transition duration-500 ease-in-out hover:grayscale-0"
                width={100}
                height={100}
                layout="responsive"
                src={web2}
                alt='farthest man-made object'
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <a href="https://www.youtube.com/watch?v=Ylx2UoTiLKE" target='_blank'>
              <Image
                className="rounded-lg object-cover grayscale transition duration-500 ease-in-out hover:grayscale-0"
                width={100}
                height={100}
                layout="responsive"
                src={web3}
                alt='fusion'
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <a href="https://www.youtube.com/watch?v=xqx6pb-2B_s" target='_blank'>
              <Image
                className="rounded-lg object-cover grayscale transition duration-500 ease-in-out hover:grayscale-0"
                width={100}
                height={100}
                layout="responsive"
                src={web4}
                alt='history'
              />
              </a>
            </div>
        </div>
      </section>

      <section id='Contact' className='bg-black -mx-10 md:-mx-20 lg:-mx-40'>
        <div className='mt-10 mx-10 text-white md:mx-20 lg:mx-40'>
          <h1 className='text-3xl py-7 font-semibold'>Contact</h1>
          <p className='flex text-md leading-4 gap-2 py-2'><AiFillMail/>4oncedaily@gmail.com</p>
          <p className='flex text-md leading-4 gap-2 py-2 mb-7'><AiFillYoutube/><a href="https://www.youtube.com/@oncedaily" target='_blank'>Checkout our channel</a></p>
        </div>
        <div className="py-5 bg-logo-blue text-white text-center">
                <p className='flex justify-center text-md leading-4 gap-2 py-2'>Copyright <AiFillCopyrightCircle/>2023 OnceDaily. All rights reserved</p>
        </div>
      </section>
    </main>
  )
}