import React from "react"
import { withTheme, ScreenContainer, Touchable, Image, Container, Button } from "@draftbit/ui"
import { Text, StyleSheet } from "react-native"
import Images from "../config/Images"

class LocationPermissions extends React.Component {
  render() {
    const { theme } = this.props
    const { navigation } = this.props

    return (
      <ScreenContainer scrollable={false} hasSafeArea={true} style={styles.screenContainerMz}>
        <Container useThemeGutterPadding={true} elevation={0} />
        <Container useThemeGutterPadding={true} elevation={0} style={styles.containerJ8}>
          <Image resizeMode="contain" source={Images.PermissionsLocations} style={styles.imageAb} />
          <Text
            style={StyleSheet.flatten([
              styles.textBv,
              theme.typography.headline4,
              { color: theme.colors.strong }
            ])}
          >
            Enable Location
          </Text>
          <Text
            style={StyleSheet.flatten([
              styles.textPl,
              theme.typography.subtitle1,
              { color: theme.colors.strong }
            ])}
          >
            To view a list of places or friends nearby.
          </Text>
        </Container>
        <Container useThemeGutterPadding={true} elevation={0} style={styles.container3J}>
          <Touchable
            onPress={() => navigation.navigate("NotificationPermissionsScreen")}
            style={styles.touchableP1}
          >
            <Text
              style={StyleSheet.flatten([
                styles.textPa,
                theme.typography.button,
                { color: theme.colors.light }
              ])}
            >
              SKIP
            </Text>
          </Touchable>
          <Button type="solid" style={styles.buttonH9}>
            ENABLE LOCATION
          </Button>
        </Container>
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  textPa: {
    height: 20,
    alignItems: "auto",
    alignContent: "auto",
    textAlign: "center"
  },
  screenContainerMz: {
    justifyContent: "space-between"
  },
  touchableP1: {
    marginBottom: 24
  },
  imageAb: {
    width: 150,
    height: 150,
    marginBottom: 16
  },
  containerJ8: {
    alignItems: "center"
  },
  buttonH9: {
    width: "100%",
    height: 48
  },
  textBv: {
    textAlign: "center",
    width: "90%",
    height: 20
  },
  textPl: {
    width: "90%",
    textAlign: "center",
    height: 20
  },
  container3J: {
    marginBottom: 24
  }
})

export default withTheme(LocationPermissions)
