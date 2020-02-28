import React from "react"
import {
  withTheme,
  Container,
  ScreenContainer,
  Image,
  Button,
  TextField,
  Touchable
} from "@draftbit/ui"
import { KeyboardAvoidingView, StyleSheet, Text } from "react-native"
import Images from "../config/Images"

class LoginWithSocialAuth extends React.Component {
  state = {}

  render() {
    const { theme } = this.props
    const { navigation } = this.props

    return (
      <ScreenContainer hasSafeArea={true} scrollable={true} style={styles.screenContainerXR}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={20}
          enabled={true}
          style={styles.keyboardAvoidingViewUt}
        >
          <Container useThemeGutterPadding={true} elevation={0} style={styles.containerF2}>
            <Image source={Images.DraftbitMark} resizeMode="contain" style={styles.imageOi} />
            <Button type="solid" icon="FontAwesome/facebook" style={styles.buttonEP}>
              Log in with Facebook
            </Button>
            <Button icon="FontAwesome/google" type="outline" style={styles.buttonE6}>
              Log in with Google
            </Button>
            <Text
              style={StyleSheet.flatten([
                styles.text8R,
                theme.typography.headline6,
                { color: theme.colors.medium }
              ])}
            >
              OR
            </Text>
            <TextField
              keyboardType="email-address"
              onChangeText={textFieldValue => this.setState({ textFieldValue })}
              label="Email"
              leftIconMode="inset"
              type="underline"
              value={this.state.textFieldValue}
              style={styles.textFieldG0}
            />
            <TextField
              value={this.state.textFieldValue}
              label="Password"
              keyboardType="default"
              leftIconMode="inset"
              onChangeText={textFieldValue => this.setState({ textFieldValue })}
              secureTextEntry={true}
              type="underline"
              style={styles.textField6Q}
            />
            <Button
              onPress={() => navigation.navigate("BasicProfileScreen")}
              type="solid"
              color={theme.colors.primary}
              style={styles.buttonJw}
            >
              Login
            </Button>
            <Touchable onPress={() => navigation.navigate("BasicProfileScreen")}>
              <Text
                style={StyleSheet.flatten([
                  styles.textP9,
                  theme.typography.button,
                  { color: theme.colors.primary }
                ])}
              >
                Need an account? Sign Up
              </Text>
            </Touchable>
            <Touchable>
              <Text
                style={StyleSheet.flatten([
                  styles.textEj,
                  theme.typography.button,
                  { color: theme.colors.primary }
                ])}
              >
                Forgot Password?
              </Text>
            </Touchable>
            <Text
              style={StyleSheet.flatten([
                styles.text7B,
                theme.typography.caption,
                { color: theme.colors.light }
              ])}
            >
              By tapping "Log in", you agree to our Terms of Service, Privacy Policy and Cookie
              Policy.{" "}
            </Text>
          </Container>
        </KeyboardAvoidingView>
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  keyboardAvoidingViewUt: {
    flexGrow: 1
  },
  containerF2: {
    height: "100%",
    justifyContent: "space-evenly",
    flexGrow: 1
  },
  screenContainerXR: {
    justifyContent: "space-around"
  },
  textEj: {
    textAlign: "center"
  },
  textP9: {
    textAlign: "center",
    width: "100%"
  },
  imageOi: {
    height: 125,
    width: 125,
    alignSelf: "center"
  },
  buttonEP: {
    height: 48,
    marginTop: 16,
    alignSelf: "stretch"
  },
  buttonE6: {
    alignSelf: "stretch",
    marginTop: 16,
    height: 48
  },
  text8R: {
    textAlign: "center"
  },
  textFieldG0: {
    height: 82
  },
  textField6Q: {
    height: 82
  },
  buttonJw: {
    height: 48,
    marginBottom: 8
  },
  text7B: {
    textAlign: "center",
    width: "100%"
  }
})

export default withTheme(LoginWithSocialAuth)
