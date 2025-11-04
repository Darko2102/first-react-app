import React from "react";
import{View, Text, StyleSheet} from "react-native";


const CountryDetailsScreen = (props) => {
        const{item}=props.params;
        return(
            <View style={styles.cardWrapper}>
                <Text>City name: {item.name}</Text>
                <Text style={styles.countryStyle}>City name: {item.country}</Text>
                <Text>Description name: {item.description}</Text>
                <Text>Population name: {item.population}</Text>
            </View>
        )
            
                        
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

export default CountryDetailsScreen;