
const Banner = () => {
    return (
        <div className="carousel w-full h-[70vh]">
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
            
        </div>
    );
};

export default Banner;