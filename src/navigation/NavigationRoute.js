import ArtWorkScreen from '../components/HomeTab/ArtWorkScreen';
import DetailArtist from '../components/HomeTab/DetailArtist';
import SearchPage from '../components/HomeTab/SearchPage';
import SearchResult from '../components/HomeTab/SearchResult';
import TrendingArtist from '../components/HomeTab/TrendingArtist';
import FilterResult from '../containers/FilterResult';
import OnBoarding from '../containers/OnBoarding';
import Splash from '../containers/Splash';
import HomeTab from '../containers/Tab/HomeTab';
import BudgetScreen from '../containers/auth/BudgetScreen';
import CreatePasswordScreen from '../containers/auth/CreatePasswordScreen';
import FollowArtistScreen from '../containers/auth/FollowArtistScreen';
import FollowCategoriesScreen from '../containers/auth/FollowCategoriesScreen';
import FullNameScreen from '../containers/auth/FullNameScreen';
import LoginScreen from '../containers/auth/LoginScreen';
import AuthNavigation from './Type/AuthNavigation';
import TabNavigation from './Type/TabNavigation';

export const StackRoute = {
  Splash,
  OnBoarding,
  AuthNavigation,
  TabNavigation,
  ArtWorkScreen,
  FilterResult,
  TrendingArtist,
  DetailArtist,
  SearchPage,
  SearchResult,
};

export const AuthRoute = {
  LoginScreen,
  CreatePasswordScreen,
  FullNameScreen,
  FollowArtistScreen,
  FollowCategoriesScreen,
  BudgetScreen,
};

export const TabRoute = {
  HomeTab,
};
