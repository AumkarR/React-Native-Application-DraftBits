import React from "react"
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation"
import LoginWithSocialAuthScreen from "./screens/LoginWithSocialAuthScreen"
import BasicProfileScreen from "./screens/BasicProfileScreen"
import CalendarPermissionsScreen from "./screens/CalendarPermissionsScreen"
import LocationPermissionsScreen from "./screens/LocationPermissionsScreen"
import ItemDetailViewScreen from "./screens/ItemDetailViewScreen"
import NotificationPermissionsScreen from "./screens/NotificationPermissionsScreen"

import { Icon, Touchable } from "@draftbit/ui"

function shouldShowBackButton(stackRouteNavigation) {
  let parent = stackRouteNavigation.dangerouslyGetParent()
  return parent.state.routes.indexOf(stackRouteNavigation.state) > 0
}

const AppNavigator = createSwitchNavigator(
  {
    Navigator: createStackNavigator(
      {
        LoginWithSocialAuthScreen: {
          screen: LoginWithSocialAuthScreen,
          navigationOptions: ({ navigation }) => ({ title: "Login With Social Auth" })
        },
        BasicProfileScreen: {
          screen: BasicProfileScreen,
          navigationOptions: ({ navigation }) => ({ title: "Basic Profile" })
        },
        CalendarPermissionsScreen: {
          screen: CalendarPermissionsScreen,
          navigationOptions: ({ navigation }) => ({ title: "Calendar Permissions" })
        },
        LocationPermissionsScreen: {
          screen: LocationPermissionsScreen,
          navigationOptions: ({ navigation }) => ({ title: "Location Permissions" })
        },
        ItemDetailViewScreen: {
          screen: ItemDetailViewScreen,
          navigationOptions: ({ navigation }) => ({ title: "Item Detail View" })
        },
        NotificationPermissionsScreen: {
          screen: NotificationPermissionsScreen,
          navigationOptions: ({ navigation }) => ({ title: "Notification Permissions" })
        }
      },
      {}
    )
  },
  {}
)
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
