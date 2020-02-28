import React from "react"
import { withTheme, ScreenContainer, Touchable, Image, Container, Button } from "@draftbit/ui"
import { Text, StyleSheet } from "react-native"
import Images from "../config/Images"

class CalendarPermissions extends React.Component {
  render() {
    const { theme } = this.props
    const { navigation } = this.props

    return (
      <ScreenContainer hasSafeArea={true} scrollable={false} style={styles.screenContainerJk}>
        <Container useThemeGutterPadding={true} elevation={0} />
        <Container elevation={0} useThemeGutterPadding={true} style={styles.containerMf}>
          <Image resizeMode="contain" source={Images.PermissionsCalendar} style={styles.imageBO} />
          <Text
            style={StyleSheet.flatten([
              styles.textRg,
              theme.typography.headline4,
              { color: theme.colors.strong }
            ])}
          >
            Enable Calendar
          </Text>
          <Text
            style={StyleSheet.flatten([
              styles.textIr,
              theme.typography.subtitle1,
              { color: theme.colors.strong }
            ])}
          >
            Let us help you keep everything in sync.{" "}
          </Text>
        </Container>
        <Container useThemeGutterPadding={true} elevation={0} style={styles.containerS7}>
          <Touchable
            onPress={() => navigation.navigate("LocationPermissionsScreen")}
            style={styles.touchableOx}
          >
            <Text
              style={StyleSheet.flatten([
                styles.textUc,
                theme.typography.button,
                { color: theme.colors.light }
              ])}
            >
              SKIP
            </Text>
          </Touchable>
          <Button type="solid" style={styles.buttonBA}>
            ENABLE CALENDAR
          </Button>
        </Container>
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  textUc: {
    height: 20,
    alignItems: "auto",
    textAlign: "center",
    alignContent: "auto"
  },
  screenContainerJk: {
    justifyContent: "space-between"
  },
  touchableOx: {
    marginBottom: 24
  },
  imageBO: {
    width: 150,
    height: 150,
    marginBottom: 16
  },
  containerMf: {
    alignItems: "center"
  },
  buttonBA: {
    width: "100%",
    height: 48
  },
  textRg: {
    textAlign: "center",
    height: 20,
    width: "90%"
  },
  textIr: {
    height: 20,
    textAlign: "center",
    width: "90%"
  },
  containerS7: {
    marginBottom: 24
  }
})

export default withTheme(CalendarPermissions)
