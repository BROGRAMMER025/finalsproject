import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { countyCoordinates} from "./Coordinates";

const Map = ({ user }) => {
  useEffect(() => {
    const coordinates = user.parcel.map((parcel) => {
      if (parcel.destination) {
        return {
          parcelNumber: parcel.parcel_number,
          coordinates: countyCoordinates(parcel.destination)
        };
      }
      return null;
    });

    setDestinationCoordinates(coordinates.filter(Boolean));
  }, [user.parcel]);

  const [destinationCoordinates, setDestinationCoordinates] = useState([]);

  return (
    <MapContainer
      center={[1.2921, 36.8219]}
      zoom={5}
      style={{ height: "400px", width: "100%" }}
      className="rounded-md shadow-md my-8"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {destinationCoordinates.map((destination) => (
        <React.Fragment key={destination.parcelNumber}>
          <Marker position={destination.coordinates}>
            <Popup>{`Order ${destination.parcelNumber} destination`}</Popup>
          </Marker>
        </React.Fragment>
      ))}

      {user.parcel.map((parcel) => (
        <React.Fragment key={parcel.parcel_number}>
          {parcel.destination && parcel.current_location && (
            <Polyline
              positions={[
                countyCoordinates(parcel.current_location),
                ...destinationCoordinates
                  .filter((d) => d.parcelNumber === parcel.parcel_number)
                  .map((d) => d.coordinates),
              ]}
              color="blue"
              weight={4}
              arrowheads="true"
            />
          )}
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default Map;
