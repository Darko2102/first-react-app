import React from "react";
import{View, Text, FlatList, StyleSheet} from "react-native";
import data from '../data/countries.json';

class CountriesScreen extends React.Component{

    constructor() {
        super();
        this.state = {
            countries: [],
        }
    }


    componentDidMount() {
        this.setState({
            countries: data,
        })
    }

    render() {
        return(
            <View>
                <Text style={styles.screenTitle}>Countries Screen</Text>
                <FlatList
                    data={this.state.countries}
                    keyExtractor={countries => countries.id}
                    renderItem={({item})=> (
                        <View style={styles.cardWrapper}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("CountryDetailsScreen", {country: item})}
                            >
                                <Text>City name: {item.name}</Text>
                                <Text style={styles.countryStyle}>City name: {item.country}</Text>
                                <Text>CDescription name: {item.description}</Text>
                                <Text>Population name: {item.population}</Text>
                            </TouchableOpacity>
                            
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15,
    },
    cardWrapper:{
        backroundColor: '#d3d3d3',
        marginBottom: 15,
    },
    countryStyle:{
        fontWeight: 'bold',
    }
})

export default CountriesScreen;