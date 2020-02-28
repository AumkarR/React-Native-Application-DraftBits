import React from "react"
import { withTheme, ScreenContainer, Touchable, Image, Container, Button } from "@draftbit/ui"
import { Text, StyleSheet } from "react-native"
import Images from "../config/Images"

class NotificationPermissions extends React.Component {
  render() {
    const { theme } = this.props
    const { navigation } = this.props

    return (
      <ScreenContainer scrollable={false} hasSafeArea={true} style={styles.screenContainerG3}>
        <Container useThemeGutterPadding={true} elevation={0} />
        <Container elevation={0} useThemeGutterPadding={true} style={styles.containerIr}>
          <Image
            resizeMode="contain"
            source={Images.PermissionsNotification}
            style={styles.imageYh}
          />
          <Text
            style={StyleSheet.flatten([
              styles.textBa,
              theme.typography.headline4,
              { color: theme.colors.strong }
            ])}
          >
            Notifications
          </Text>
          <Text
            style={StyleSheet.flatten([
              styles.textHn,
              theme.typography.subtitle1,
              { color: theme.colors.strong }
            ])}
          >
            Always stay up to date with the latest updates and alerts.{" "}
          </Text>
        </Container>
        <Container elevation={0} useThemeGutterPadding={true} style={styles.container5G}>
          <Touchable
            onPress={() => navigation.navigate("ItemDetailViewScreen")}
            style={styles.touchableJP}
          >
            <Text
              style={StyleSheet.flatten([
                styles.textFf,
                theme.typography.button,
                { color: theme.colors.light }
              ])}
            >
              SKIP
            </Text>
          </Touchable>
          <Button type="solid" style={styles.button9D}>
            ENABLE NOTIFICATIONS
          </Button>
        </Container>
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  textFf: {
    alignContent: "auto",
    alignItems: "auto",
    height: 20,
    textAlign: "center"
  },
  screenContainerG3: {
    justifyContent: "space-between"
  },
  touchableJP: {
    marginBottom: 24
  },
  imageYh: {
    width: 150,
    height: 150,
    marginBottom: 16
  },
  containerIr: {
    alignItems: "center"
  },
  button9D: {
    width: "100%",
    height: 48
  },
  textBa: {
    textAlign: "center",
    width: "90%",
    height: 20
  },
  textHn: {
    textAlign: "center",
    width: "90%",
    height: 20
  },
  container5G: {
    marginBottom: 24
  }
})

export default withTheme(NotificationPermissions)
