import React from 'react';

const ButtonSection = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 space-x-5 m-10'>
            <div className="container mx-auto shadow-sm text-center justify-center p-5">
                <h2 className='text-2xl font-bold'>10</h2>
                <p className='text-sm font-light'>Total Friends</p>
            </div>
            <div className="container mx-auto shadow-sm text-center justify-center p-5">
                <h2 className='text-2xl font-bold'>5</h2>
                <p className='text-sm font-light'>On Track</p>
            </div>
            <div className="container mx-auto shadow-sm text-center justify-center p-5">
                <h2 className='text-2xl font-bold'>3</h2>
                <p className='text-sm font-light'>Need Attention</p>
            </div>
            <div className="container mx-auto shadow-sm text-center justify-center p-5">
                <h2 className='text-2xl font-bold'>8</h2>
                <p className='text-sm font-light'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default ButtonSection;