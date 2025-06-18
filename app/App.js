
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
                renderItem={({item}) => {
                    return (
                        <View style={styles.card} key={item.id}>
                            <Text style = {styles.cardText}>{item.type}</Text>
                            <Text style = {styles.cardText}>{item.name}</Text>
                        </View>
                    );
                }}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<Text style={styles.listEmptyComponent}>No Item Found</Text>}
                ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
                ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
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
        textAlign: "center",
    },
    headerText: {
        fontSize: 27,
        textAlign: "center",
        paddingBottom: 12,
    },
    footerText: {
        fontSize: 24,
        textAlign: "center",
        paddingBottom: 17,
    },
});