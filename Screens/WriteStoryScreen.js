import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class WriteStory extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: "gold" }}>
          <Header
            containerStyle={{ backgroundColor: "teal" }}
            centerComponent={{
              text: "Story Hub",
              style: {
                fontSize: 20,
                color: "white",
                fontStyle: "italic",
                
              },
            }}
          />
          <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Title" />
            <TextInput style={styles.input} placeholder="Author" />
            <TextInput
              style={styles.storyInput}
              placeholder="Write Story"
              multiline={true}
            />

            <TouchableOpacity style={styles.submitBtn}>
              <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gold",
  },
  input: {
    margin: 15,
    width: 200,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
  },
  storyInput: {
    margin: 15,
    width: 200,
    height: 170,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
  },
  submitBtn: {
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 30,
  },
  submitBtnText: {
    fontSize: 16,
    textDecorationLine: "underline",
    textDecorationColor: "grey",
    fontWeight: "bold",
    color: "grey",
  },
});
