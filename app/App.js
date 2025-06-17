
import { StatusBar, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import pokemonList from "../data.json";

export default function App(){
    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView style={styles.ScrollView}>
                {pokemonList.map((pokemon) => {
                    return (
                        <View style={styles.card} key={pokemon.id}>
                            <Text style = {styles.cardText}>{pokemon.type}</Text>
                            <Text style = {styles.cardText}>{pokemon.name}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        paddingTop: StatusBar.currentHeight,
    },
    ScrollView: {
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 13,
        borderWidth: 1,
        marginBottom: 16,
    },
    cardText: {
        fontSize: 20,
    },
});