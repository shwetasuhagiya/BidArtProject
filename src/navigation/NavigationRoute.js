import AddBillingAddress from '../components/DiscoverTab/AddBillingAddress';
import AddCreditCard from '../components/DiscoverTab/AddCreditCard';
import DetailArt from '../components/DiscoverTab/DetailArt';
import RegisterBid from '../components/DiscoverTab/RegisterBid';
import SearchDiscover from '../components/DiscoverTab/SearchDiscover';
import ArtWorkScreen from '../components/HomeTab/ArtWorkScreen';
import BidArtEvent from '../components/HomeTab/BidArtEvent';
import Chat from '../components/HomeTab/Chat';
import DetailArtist from '../components/HomeTab/DetailArtist';
import DetailEvent from '../components/HomeTab/DetailEvent';
import SearchArtist from '../components/HomeTab/SearchArtist';
import SearchEvent from '../components/HomeTab/SearchEvent';
import SearchPage from '../components/HomeTab/SearchPage';
import SearchResult from '../components/HomeTab/SearchResult';
import TrendingArtist from '../components/HomeTab/TrendingArtist';
import VoiceCall from '../components/HomeTab/VoiceCall';
import Payment from '../components/ProfileTab.js/Payment';
import Setting from '../components/ProfileTab.js/Setting';
import SettingAccount from '../components/ProfileTab.js/SettingAccount';
import SubmitWork from '../components/ProfileTab.js/SubmitWork';
import WhisList from '../components/ProfileTab.js/WhisList';
import FilterResult from '../containers/FilterResult';
import OnBoarding from '../containers/OnBoarding';
import Splash from '../containers/Splash';
import DiscoverTab from '../containers/Tab/DiscoverTab';
import HomeTab from '../containers/Tab/HomeTab';
import InboxTab from '../containers/Tab/InboxTab';
import ProfileTab from '../containers/Tab/ProfileTab';
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
  BidArtEvent,
  DetailEvent,
  SearchEvent,
  SearchDiscover,
  DetailArt,
  RegisterBid,
  AddCreditCard,
  AddBillingAddress,
  SubmitWork,
  WhisList,
  SettingAccount,
  Payment,
  Setting,
  SearchArtist,
  Chat,
  VoiceCall
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
  DiscoverTab,
  InboxTab,
  ProfileTab,
};
