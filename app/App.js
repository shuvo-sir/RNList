
import { StatusBar, SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import pokemonList from "../data.json";

export default function App(){
    return (
        <SafeAreaView style = {styles.container}>
            {/* <ScrollView style={styles.ScrollView}>
                {pokemonList.map((pokemon) => {
                    return (
                        <View style={styles.card} key={pokemon.id}>
                            <Text style = {styles.cardText}>{pokemon.type}</Text>
                            <Text style = {styles.cardText}>{pokemon.name}</Text>
                        </View>
                    );
                })}
            </ScrollView> */}
            {/* Flat list help to smooth scrolling  */}
            <View style={styles.ScrollView}>
            <FlatList
                data={pokemonList}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<Text style={styles.listEmptyComponent}>No Item Found</Text>}
                renderItem={({item}) => {
                    return (
                        <View style={styles.card} key={item.id}>
                            <Text style = {styles.cardText}>{item.type}</Text>
                            <Text style = {styles.cardText}>{item.name}</Text>
                        </View>
                    );
                }}
                />
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
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
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cardText: {
        fontSize: 20,
    },
    listEmptyComponent: {
        fontSize: 30,
        textAlign: "center"
    }
});