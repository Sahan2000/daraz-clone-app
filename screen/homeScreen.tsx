
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { IconButton, MD3Colors } from 'react-native-paper';

export default function HomeScreen() {
    return (
        <SafeAreaView style= {{backgroundColor: 'white'}}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle="dark-content"
            />
            <View style={styles.container}>
                <IconButton icon={require('@/assets/images/scan.png')} iconColor={MD3Colors.error0} size={30} onPress={() => console.log('Pressed')}/>
                <View style={styles.searchContainer}>
                    <IconButton icon={require('@/assets/images/camera.png')} iconColor={MD3Colors.error0} size={30} onPress={() => console.log('pressed')}/>
                    <TextInput style={styles.searchText} placeholder="search here"/>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Text style={styles.searchBtnText}>Search</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Image source={require('@/assets/images/payIcon.png')}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    searchContainer: {
        borderWidth: 2,
        borderColor: '#F85606',
        width: 270,
        height: 45,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
        padding:10,
    },
    searchText: {
        width: 160,
        height: 25,
        fontSize: 16,
    },
    searchBtn: {
        backgroundColor: '#F85606',
        width: 65,
        height: 35,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBtnText: {
        color: 'white',
    },
});