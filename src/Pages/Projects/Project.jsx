import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Project = () => {
    const location = useLocation();
    const { name, image, desc, features, technologies, clientCode, serverCode, live, highlight, myContribution } = location.state;
    return (
        <div className="bg-slate-900 text-white min-h-screen p-10 md:p-20 ">
            <div className='grid md:grid-cols-2 lg:grid-cols-3 items-stretch gap-5'>
                <img src={image[0]} alt="" />
                <img src={image[1]} alt="" />
                <img src={image[2]} alt="" />
            </div>
            <div className='mt-8'>
                <a target="_blank" href={clientCode}><button className='btn bg-blue-600 text-xs font-medium mr-4'>Client Code</button></a>
                {
                    serverCode &&
                    <a target="_blank" href={serverCode}><button className='btn bg-blue-600 text-xs font-medium mr-4'>Server Code</button></a>
                }
                <a target="_blank" href={live}><button className='btn bg-blue-600 text-xs font-medium mr-4'>Live Site</button></a>
            </div>
            <h1 className='text-4xl mt-5 mb-5'>{name} {highlight && `(${highlight})`}</h1>
            <p className='text-xl'>{desc}</p>
            <h3 className='text-2xl font-medium mt-5'>Features</h3>
            <ul className='list-disc ml-10 text-xl'>
                {
                    features?.map((feature, idx) => <li key={`feature${idx}`}>{feature}</li>)
                }
            </ul>
            {
                myContribution &&
                <>
                    <h3 className='text-2xl font-medium mt-5'>My Contributions</h3>
                    <ul className='list-disc ml-10 text-xl'>
                        {
                            myContribution?.map((i, idx) => <li key={`feature${idx}`}>{i}</li>)
                        }
                    </ul>
                </>
            }
            <h3 className='text-2xl font-medium mt-5'>Technologies:</h3>
            <ul className='ml-10 flex flex-wrap gap-3 mt-2'>
                {
                    technologies?.split(",").map((item, idx) => <li key={`technology${idx}`} className='border rounded-full px-4 py-1'>{item}</li>)
                }
            </ul>
            <Link to="/#projects"><button className='btn mt-8 flex items-center gap-2 text-sm'><AiOutlineArrowLeft /> Go Home</button></Link>
        </div>
    );
};

export default Project;