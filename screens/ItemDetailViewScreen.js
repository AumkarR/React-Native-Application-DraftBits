import React from "react"
import { withTheme, ScreenContainer, Image, Stepper, Button, Container } from "@draftbit/ui"
import { Text, StyleSheet } from "react-native"
import Images from "../config/Images"

class ItemDetailView extends React.Component {
  state = { stepperValue: undefined }

  render() {
    const { theme } = this.props
    const { navigation } = this.props

    return (
      <ScreenContainer hasSafeArea={false} scrollable={false}>
        <Image resizeMode="cover" source={Images.Ramen} style={styles.imageQ8} />
        <Container useThemeGutterPadding={true} elevation={0} style={styles.containerIc}>
          <Text
            style={StyleSheet.flatten([
              styles.textVb,
              theme.typography.headline4,
              { color: theme.colors.strong }
            ])}
          >
            Spicy Miso Ramen
          </Text>
          <Text
            style={StyleSheet.flatten([
              styles.textEf,
              theme.typography.subtitle2,
              { color: theme.colors.medium }
            ])}
          >
            Ground pork, kung pao chilies, and napa cabbage. All ramen are served with tokyo wavy
            noodles from sun noodle.
          </Text>
          <Text
            style={StyleSheet.flatten([
              styles.textFk,
              theme.typography.caption,
              { color: theme.colors.light }
            ])}
          >
            840 Cal.
          </Text>
          <Text
            style={StyleSheet.flatten([
              styles.text8W,
              theme.typography.headline5,
              { color: theme.colors.primary }
            ])}
          >
            $ 12.99
          </Text>
        </Container>
        <Container
          elevation={0}
          useThemeGutterPadding={true}
          style={StyleSheet.flatten([
            styles.containerTh,
            { backgroundColor: theme.colors.divider }
          ])}
        >
          <Stepper
            value={this.state.stepperValue}
            value={1}
            onChange={stepperValue => this.setState({ stepperValue })}
            style={styles.stepperKo}
          />
          <Button
            onPress={() => navigation.navigate("LoginWithSocialAuthScreen")}
            type="solid"
            color={theme.colors.primary}
            style={styles.button1L}
          >
            Add To Cart
          </Button>
        </Container>
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  textVb: {
    textAlign: "auto",
    width: "100%"
  },
  imageQ8: {
    height: "35%",
    width: "100%"
  },
  stepperKo: {
    width: 126,
    height: 42,
    marginBottom: 16
  },
  button1L: {
    height: 48,
    width: "100%"
  },
  textEf: {
    width: "100%",
    marginTop: 8,
    textAlign: "auto"
  },
  containerIc: {
    paddingBottom: 16,
    paddingTop: 16
  },
  containerTh: {
    justifyContent: "flex-end",
    flexGrow: 1,
    paddingBottom: 40,
    alignItems: "center"
  },
  textFk: {
    textAlign: "auto",
    marginTop: 8,
    width: "100%"
  },
  text8W: {
    textAlign: "left",
    marginTop: 16
  }
})

export default withTheme(ItemDetailView)
