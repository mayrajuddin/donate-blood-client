import React from 'react';

const AboutUs = () => {
    return (
        <section className='py-8'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow-xl">
                        <h2 className="text-center font-bold pt-10 text-xl capitalize text-primary">our vission</h2>
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-lg" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus atque autem deleniti tenetur, deserunt repellat quasi enim perspiciatis ducimus dolor aperiam itaque provident nesciunt totam accusamus cupiditate? Quae, sunt veritatis.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <h2 className="text-center font-bold pt-10 text-xl capitalize text-primary">our goal</h2>
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-lg" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus atque autem deleniti tenetur, deserunt repellat quasi enim perspiciatis ducimus dolor aperiam itaque provident nesciunt totam accusamus cupiditate? Quae, sunt veritatis.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <h2 className="text-center font-bold pt-10 text-xl capitalize text-primary">our mission</h2>
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-lg" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus atque autem deleniti tenetur, deserunt repellat quasi enim perspiciatis ducimus dolor aperiam itaque provident nesciunt totam accusamus cupiditate? Quae, sunt veritatis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;