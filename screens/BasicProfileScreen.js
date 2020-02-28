import React from "react"
import { withTheme, ScreenContainer, Button, Container, AvatarEdit, TextField } from "@draftbit/ui"
import { KeyboardAvoidingView, StyleSheet, Text } from "react-native"

class BasicProfile extends React.Component {
  state = {}

  render() {
    const { theme } = this.props
    const { navigation } = this.props

    return (
      <ScreenContainer hasSafeArea={true} scrollable={true}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={60}
          enabled={true}
          behavior="padding"
          style={styles.keyboardAvoidingViewD2}
        >
          <Container elevation={0} useThemeGutterPadding={true} style={styles.containerKs}>
            <Text
              style={StyleSheet.flatten([
                styles.textHX,
                theme.typography.headline4,
                { color: theme.colors.strong }
              ])}
            >
              Create Your Profile
            </Text>
            <Text
              style={StyleSheet.flatten([
                styles.textDL,
                theme.typography.body1,
                { color: theme.colors.strong }
              ])}
            >
              Since this is your first time, we just need some basic information to get you started.
            </Text>
            <AvatarEdit
              image="https://apps-draftbit-com.s3.amazonaws.com/0KJdGXtj/assets/33d18a1b-0aaa-4ad7-a414-dcaf4460be6c"
              size={80}
              style={styles.avatarEditZ4}
            />
            <TextField
              type="underline"
              label="Name"
              keyboardType="default"
              leftIconMode="inset"
              onChangeText={textFieldValue => this.setState({ textFieldValue })}
              value={this.state.textFieldValue}
              style={styles.textFieldTn}
            />
            <TextField
              keyboardType="default"
              label="Title"
              type="underline"
              onChangeText={textFieldValue => this.setState({ textFieldValue })}
              value={this.state.textFieldValue}
              leftIconMode="inset"
              style={styles.textFieldRU}
            />
          </Container>
          <Container useThemeGutterPadding={true} elevation={0} style={styles.containerBa}>
            <Button
              type="solid"
              onPress={() => navigation.navigate("CalendarPermissionsScreen")}
              style={styles.buttonMS}
            >
              CONTINUE
            </Button>
          </Container>
        </KeyboardAvoidingView>
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  keyboardAvoidingViewD2: {
    justifyContent: "space-between",
    flexGrow: 1
  },
  buttonMS: {
    alignSelf: "stretch",
    height: 48
  },
  containerKs: {
    marginTop: 24
  },
  textHX: {
    textAlign: "center"
  },
  containerBa: {
    alignItems: "center"
  },
  textDL: {
    marginTop: 16,
    textAlign: "center"
  },
  avatarEditZ4: {
    alignSelf: "center",
    marginTop: 24,
    width: 64,
    height: 64
  },
  textFieldTn: {
    height: 82,
    marginTop: 16
  },
  textFieldRU: {
    height: 82,
    marginTop: 16
  }
})

export default withTheme(BasicProfile)
