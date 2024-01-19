import {StyleSheet} from "react-native";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const HomeStyles = StyleSheet.create({
    homeView:{
        flex:1,
        paddingLeft:2,
        paddingRight:2,
    },
    ViewOne:{
     width:'100%',
        height:250,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
    },
    ViewTwo: {
        padding: '5%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    faBars: {
        color: '#FFF',
        alignContent:'space-between'
    },
    faSignOut: {
        color: '#FFF',
        marginLeft:'80%',
        alignContent:'space-between',
    },
    ImageOne:{
        width:'35%',
        height:140,
        resizeMode:'cover',
        borderRadius:5
    },
    ViewThree:{
        padding:10
    },
    TextStyleOne:{
        fontSize:25,
        color:'#FFF',
        fontWeight:'700'
    },
    ViewFour:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf:'center',
        alignContent:'flex-end',
        marginTop:'5%'
    },
    ViewFive:{
        padding: '2%',
    },
    buttonOne: {
        alignItems: 'center',
        backgroundColor: '#5E5E60',
        width:'28%',
        height:37,
        justifyContent:'center',
        color:'#FFF',
        fontWeight:'bold',
        borderRadius:10
    },
    TextTwo:{
        fontSize:18,
        color:'#000',
        fontWeight:'bold'
    },
    TextThree:{
        fontSize:12,
        color:'#000',
        fontWeight:'bold'
    },
    ViewSix:{
        padding: '1%',

    },
    ViewSeven:{
        padding: '1%',
    },
    innerViewOne:{
        backgroundColor:'green',
        padding:15,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
    },
    backgroundImageOne:{
        width:'100%',
        height:200,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imageBoxOne:{
        width:'30%',
        height:30,
        justifyContent:"center",
        alignItems:'flex-start',
        margin:12,
        backgroundColor:'#979696',
        textAlign:'left'
    },
    imageBoxTwo:{
        width:'20%',
        height:30,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#979696',
        marginLeft:'40%',
        marginTop:12
    },
    ViewEight:{
        padding: '1%',
        height:60
    },
    boxView:{
        padding:7,
        backgroundColor:'#D9D9D9'
    },
    imageBoxThree:{
        width:'40%',
        height:30,
        justifyContent:"center",
        alignItems:'flex-start',
        margin:5,
        backgroundColor:'#979696',
        textAlign:'left'
    },
    boxViewTwo:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        height:80
    },
    font1:{
        color:'#000',
        fontSize:19
    }
});

export default HomeStyles