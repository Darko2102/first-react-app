import React from "react";;
import {Text, StyleSheet, FlatList, View} from 'react-native';

const students=[
    {name:"Darko", surname:"Danicic", age:'14'},
    {name:"Mikka", surname:"Muurinen", age:"18"},
    {name:"Isaac", surname:"Bonga", age:"25"},
];

const ListScreen = () => {
    return (
        <View>
            <Text>ListScreen</Text>
            <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={student=>student.surname}
            data={students}
            renderItem={({item})=>{
                return <Text style={styles.studentWrapper}>{item.name}-{item.surname}-{item.age}</Text>


            }
        }
            
            />

            

        </View>
    
    )
}

const style=StyleSheet.create({})

export default ListScreen;

