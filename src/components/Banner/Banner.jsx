
const Banner = () => {
    return (
        <div>
            <div>
                <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/zWdzqF7/visualsofdana-T5p-L6ci-En-I-unsplash.jpg)', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"center" }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Discover Your Perfect Getaway</h1>
                            <p className="mb-5">Embark on a journey to luxury and relaxation. Book your dream escape with our exquisite accommodations and exceptional service.</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="carousel w-full h-[70vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/MhptGsP/sasha-kaunas-67-s-Oi7m-VIk-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/DtF65Lv/humphrey-muleba-dyj7-RTs85-Fs-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/zWdzqF7/visualsofdana-T5p-L6ci-En-I-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;