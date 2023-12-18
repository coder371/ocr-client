import React, {useState} from 'react';
// import Geolocation from 'react-native-geolocation-service';
import Button from '~/common/components/atoms/button';
import {SheetManager} from 'react-native-actions-sheet';
import {useDispatch} from 'react-redux';
import {setLocation} from '~/redux/reducers/config';
import {LocationTypes} from '~/config/constants';
import GetLocation from 'react-native-get-location';
import {requestLocationAndPermission} from '~/services/location';
import {View} from 'react-native';
interface Location {
  longitude: number;
  latitude: number;
}
export default function CurrentLocationButton() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const getLocation = async () => {
    setLoading(true);
    const location: any = await requestLocationAndPermission();
    if (location) {
      console.log(location);
      dispatch(
        setLocation({
          type: LocationTypes.COORDINATES,
          coordinates: [location.longitude, location.latitude],
        }),
      );
      setLoading(false);
      SheetManager.hide('LocationSheet');
    }
    setLoading(false);
  };
  return (
    <View>
      <Button loading={loading} title="الموقع الحالي" onPress={getLocation} />
    </View>
  );
}
