import React, {useState} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {useTranslation} from 'react-i18next';
import {SheetProps} from 'react-native-actions-sheet';
import {City, Region} from '~/types';
import {View} from 'react-native';
import CustomText from '~/common/components/atoms/text';
import styles from './styles';
import CustomTextInput from '~/common/components/atoms/input';
import Picker from '~/common/components/atoms/picker';
import {useQuery} from '@apollo/client';
import {Queries} from '~/graphql';
import Button from '~/common/components/atoms/button';
import Divider from '~/common/components/atoms/divider';
import apolloClient from '~/services/apolloClient/apolloClient';
import {useDispatch} from 'react-redux';
import {setLocation} from '~/redux/reducers/config';
import {SheetManager} from 'react-native-actions-sheet';
import CurrentLocationButton from './components/currentLocationButton';
import { LocationTypes } from '~/config/constants';

interface Query {
  data?: Data;
}

interface Data {
  cities: City[];
}

interface LocationDataProps {
  city?: City;
  region?: Region;
}

function LocationSheet(props: SheetProps) {
  const dispatch = useDispatch();
  const [regions, setRegions] = useState([]);
  const [locationData, setLocationData] = useState<LocationDataProps>({});
  const {data}: Query = useQuery(Queries.queries.citiesQuery, {
    variables: {
      limit: 1000,
      page: 1,
    },
  });

  const onSelectCities = async (city: City) => {
    setLocationData(prev => ({...prev, city}));
    const {data} = await apolloClient.query({
      query: Queries.queries.regionsQuery,
      variables: {
        city: city.slug,
      },
    });
    setRegions(data.regions);
  };
  const onSelectRegions = (region: Region) => {
    setLocationData(prev => ({...prev, region}));
    // return false;
  };
  const saveLocation = () => {
    dispatch(setLocation(locationData));
    setLocation({
      type: LocationTypes.CITIES_AND_REGION,
      city: locationData.city,
      region: locationData.region,
    }),
    SheetManager.hide('LocationSheet');
  };

  const {t} = useTranslation();
  return (
    <ActionSheet id={props.sheetId} i18nIsDynamicList gestureEnabled>
      <View style={styles.locationContainer}>
        <Picker
          title={'المدينة'}
          options={data?.cities}
          modalTitle={'اختر المدينة'}
          onSelect={onSelectCities}
        />
        <Picker
          title={'المنطقة'}
          options={regions}
          modalTitle={'اختر المنطقة'}
          onSelect={onSelectRegions}
        />
        <Button title="حفظ" onPress={saveLocation} />
        <Divider />
        <CurrentLocationButton />
      </View>
    </ActionSheet>
  );
}

export default LocationSheet;
