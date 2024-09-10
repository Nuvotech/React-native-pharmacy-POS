import { Link } from "expo-router";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.loginText}>
        <Text>Logo and text section</Text>
      </View>
      <View style={styles.loginForm}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Link href="/cashier" style={styles.btnLink}>
          Login
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "aliceblue",
    paddingHorizontal: 25,
    marginBottom: 25,

    rowGap: 25,
  },
  loginForm: {
    backgroundColor: "coral",
    flex: 1,
    height: "100%",
  },
  loginText: {
    backgroundColor: "oldlace",
    flex: 1,
  },
  btnLink: {
    marginVertical: 10,
    fontWeight: "bold",
    paddingVertical: 10,
    backgroundColor: "red",
    color: "white",
    padding: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
