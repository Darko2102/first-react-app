import React from "react";;
import {Text, StyleSheet, FlatList, View} from 'react-native';

const partizan=[
    {name:"Carlic", surname:"Jones", age:'27', position:"PG"},
    {name:"Tyrique", surname:"Jones", age:"28", position:"C"},
    {name:"Vanja", surname:"Marinkovic", age:"28", position:"SF"},
];

const ListScreen2 = () => {
    return (
        <View>
            <Text>ListScreen2</Text>
            <FlatList 
            horizontal={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={partizan=>partizan.position}
            data={partizan}
            renderItem={({item})=>{
                return <Text style={styles.partizanWrapper}>{item.name}-{item.surname}-{item.age}-{item.position}</Text>


            }
        }
            
            />

            

        </View>
    
    )
}

const style=StyleSheet.create({})

export default ListScreen2;

