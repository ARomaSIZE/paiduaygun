import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";


const Input = forwardRef((props, ref) => (
  <input
    ref={ref}
    style={{ borderColor: "blue", position: "relative" }}
    {...props}
  />
));

export default function Places() {
  const [data, setData] = useState();



  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    console.log(lat);
    console.log(lng);


  };

  return (<>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      getOptionLabel={() => {

      }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />

    <Combobox
      
      onSelect={handleSelect}>
      <ComboboxInput
      as={Input}
      aria-labelledby="demo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"

      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  </>

  );
};