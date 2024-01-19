import {StyleSheet} from "react-native";

const DetailStyles = StyleSheet.create({
    scrollView: {
        flex: 1,
        paddingLeft: 2,
        paddingRight: 2,
    },
    view1: {
        padding: 10,
        backgroundColor: '#03882C',
        marginTop: 30,
        marginHorizontal: 20,
        height: 150,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    view2: {
        padding: 10,
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 20,
    },
    innerView1: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(0,0,0,0.6)',
        borderWidth: 1,
        borderRadius: 10,
    },
    innerImage1: {
        margin: 24,
        width: 90,
        height: 90
    },
    innerBoxText: {
        backgroundColor: '#7F0194',
        width: '80%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginBottom: 15,
    },
    view3: {
        padding: 10,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 20,
    },
    box2: {
        borderColor: 'rgba(0,0,0,0.6)',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    innerImage2: {
        marginLeft: 14,
        marginTop: 3,
        marginBottom: 3,
        width: 70,
        height: 90
    },
    view4: {
        padding: 10,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 20,

    },
    supportView: {
        backgroundColor: '#219512',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        borderRadius:40
    },
    innerImage3: {
        marginLeft: 14,
        marginTop: 8,
        marginBottom: 3,
        width: 70,
        height: 70
    },

});

export default DetailStyles;