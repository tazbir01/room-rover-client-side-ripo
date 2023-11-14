import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const defaultProps = {
        center: {
            lat: 23.9051,
            lng: 90.2200
        },
        zoom: 11
    };
    return (
        <div className='max-w-6xl mx-auto'>
            <div className=' ' style={{ height: '300px', maxWidth: '600px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="RoomRover Hotel service"
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default Map;