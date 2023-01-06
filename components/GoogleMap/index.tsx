import React from 'react';
import GoogleMapReact from 'google-map-react';
import { ImLocation2 } from 'react-icons/im';

const AnyReactComponent = (props) => (
  <div className="relative" data-lat={props.lat} data-lng={props.lng}>
    <ImLocation2
      color="red"
      fontSize="3rem"
      className="absolute bottom-0 -left-6"
    />
  </div>
);

// Map
export default function GoogleMap() {
  const setting = {
    key: 'AIzaSyD8YT4z-cC_Mi15d-IDybklyXgwI4nq95E',
    center: {
      lat: 25.0469492,
      lng: 121.5254558,
    },
    mark: {
      lat: 25.0485715,
      lng: 121.5337711,
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="h-full w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: setting.key }}
        defaultCenter={setting.center}
        defaultZoom={setting.zoom}
      >
        <AnyReactComponent lat={setting.mark.lat} lng={setting.mark.lng} />
      </GoogleMapReact>
    </div>
  );
}
