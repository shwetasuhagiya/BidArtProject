import OnBoarding from "../containers/OnBoarding"
import Splash from "../containers/Splash"
import CreatePasswordScreen from "../containers/auth/CreatePasswordScreen"
import FollowArtistScreen from "../containers/auth/FollowArtistScreen"
import FollowCategoriesScreen from "../containers/auth/FollowCategoriesScreen"
import FullNameScreen from "../containers/auth/FullNameScreen"
import LoginScreen from "../containers/auth/LoginScreen"
import AuthNavigation from "./Type/AuthNavigation"

export const StackRoute={
    Splash,
    OnBoarding,
    AuthNavigation
}

export const AuthRoute ={
    LoginScreen,
    CreatePasswordScreen,
    FullNameScreen,
    FollowArtistScreen,
    FollowCategoriesScreen
}