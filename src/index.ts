/*
 **
 **
 */

export interface Country {
  _id: String;
  title: String;
}

export interface City {
  _id: String;
  title: String;
  slug: String;
  country: Country;
}

export interface Region {
  _id: String;
  title: String;
  city: City;
  country: Country;
}
export interface Translations {
  title: {
    ar: String;
    en: String;
  };
  slug: {
    ar: String;
    en: String;
  };
  description: {
    ar: String;
    en: String;
  };
  address: {
    ar: String;
    en: String;
  };
}
export interface ProviderCategory {
  _id: string;
  title: string;
  slug: string;
  type: string;
}
export interface ProviderSpecialization {
  _id: string;
  title: string;
  slug: string;
  type: string;
}
export interface Provider {
  _id: string;
  title: string;
  slug: string;
  logoUrl: string;
  address: string;
  description: string;
  phoneNumbers: string[];
  category: ProviderCategory;
  specialization: ProviderSpecialization;
  createdAt: Date;
  rate: number;
  branchCount: number;
}

export interface ProviderBranch {
  _id: string;
  title: string;
  distance: number;
  category: Category;
  provider: Provider;
}

export interface Branch {
  _id: string;
  title: string;
  slug: string;
  logoUrl: string;
  address: string;
  description: string;
  phoneNumbers: string[];
  category: ProviderCategory;
  specialization: ProviderSpecialization;
  createdAt: Date;
  translations: Translations;
  city: City;
  region: Region;
  location: Location;
  rate: number;
  provider: Provider;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  iconUrl: string;
  createdAt: Date;
  numberOfProviders: number;
}

export interface Service {
  _id: string;
  service: {
    _id: string;
    title: string;
    iconUrl: string;
  };
  contract: {
    discount: number;
  };
}

export interface Advertisement {
  _id: string;
  imageUrl: string;
  title: string;
  description: string;
  target: string;
  source: string;
  data: {};
}

export interface User {
  _id: string;
  avatarUrl: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  token: string;
  subscriptions: Subscriptions;
}

export interface Subscriptions {
  _id: string;
  price: number;
  end_date: Date;
  start_date: Date;
  package: Package;
  token: string;
}

export interface Package {
  _id: string;
  translations: Translations;
  contract: {
    max_persons: number;
    points: number;
  };
  type: string;
  title: string;
  duration: number;
  price: number;
}
export enum LocationTypes {
  COORDINATES = 'COORDINATES',
  CITIES_AND_REGION = 'CITIES_AND_REGION',
}
interface Location {
  coordinates: [number, number];
}
export interface ConfigReduxState {
  location: {
    coordinates: [number, number];
    type: LocationTypes;
    city: City;
    region: Region;
  };
}
