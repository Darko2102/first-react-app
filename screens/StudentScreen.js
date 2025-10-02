import React from "react";;
import {Text, StyleSheet, FlatList, View} from 'react-native';

const student={
    name: "Darko",
    surname: "Danicic",
    date:  "21/02/11",
    index: "10",
    hobbies: [
        "Playing basketball", "workout", "programming"
    ],
    grades: [
        {
            subject: "Math",
            grade: 9,
        },
        {
            subject: "IT",
            grade: 10,
        },
        {
            subject: "Physic",
            grade: 7,
        },
        {
            subject: "Chemistry",
            grade: 8,
        },
    ],
}
    


const StudentScreen = () => {
    
    return(
    <View>
        <Text style={style.container}>Student Info</Text>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        keyExtractor={student=>student.index}
        data={student}
        renderItem={({item})=>{
            return <Text>{item.name}-{item.surname}-{item.date}-{item.index}</Text>
        }

        }
    

        />

        
        <Text style={style.container}>Student Grades</Text>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        keyExtractor={student=>student.grade}
        data={student}
        renderItem={({item})=>{
            return <Text>{item.grades}</Text>
        }

        }
    

        />

        
        <Text style={style.container}>Student Hobbies</Text>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        keyExtractor={student=>student.hobbies}
        data={student}
        renderItem={({item})=>{
            return <Text>{item.hobbies}</Text>
        }

        }
    

        />
        
        
    </View>
)
}



const style=StyleSheet.create({
    container: {
        flex: 1,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 25,
    },
    
})

export default StudentScreen;