import React, {useRef} from 'react';
import Section from '~/common/components/atoms/section';
import CustomTextInput from '~/common/components/atoms/input';
import styles from './style';
import {Alert} from 'react-native';

interface ProvidersSectionProps {
  placeholder: String;
  setSearchTitle: (value: String) => void;
}

export default function SearchBar({
  placeholder,
  setSearchTitle,
}: ProvidersSectionProps) {
  const appendData = useRef<any>(null);
  const onChange = (value: String) => {
    clearTimeout(appendData.current);
    appendData.current = setTimeout(() => {
      setSearchTitle(value);
    }, 700);
    return () => {
      clearTimeout(appendData.current);
    };
  };

  return (
    <Section
      gutter
      backgroundColorWhite={false}
      sectionStyle={styles.searchBar}>
      <CustomTextInput
        style={styles.searchBarInputText}
        placeholder={`${placeholder}`}
        onChangeText={(value: String) => onChange(value)}
      />
    </Section>
  );
}
