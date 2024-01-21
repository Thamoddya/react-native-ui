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
        padding: '3%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    faBars: {
        color: '#FFF',
        alignContent:'space-between'
    },
    faSignOut: {
        color: '#FFF',
        marginLeft:'77%',
        alignContent:'space-between',
    },
    ImageOne:{
        width:'32%',
        height:135,
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
        marginTop:'10%',
        marginLeft:10,
        marginRight:10
    },
    ViewFive:{
        padding: '3%',
        marginLeft:10,
        marginRight:10
    },
    buttonOne: {
        alignItems: 'center',
        backgroundColor: '#5E5E60',
        width:'28%',
        height:37,
        justifyContent:'center',
        color:'#FFF',
        fontWeight:'bold',
        borderRadius:6
    },
    TextTwo:{
        fontSize:17,
        color:'#000',
        fontWeight:'bold'
    },
    TextThree:{
        fontSize:11,
        color:'#000',
        fontWeight:'bold'
    },
    ViewSix:{
        padding: '2%',
        marginLeft:10,
        marginRight:10
    },
    ViewSeven:{
        marginLeft:10,
        marginRight:10,
    },
    innerViewOne:{
        backgroundColor:'#037035',
        padding:5,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        marginTop:0
    },
    backgroundImageOne:{
        width:'100%',
        height:165,
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
        marginTop: '3%',
        height:60,
        marginLeft:10,
        marginRight:10
    },
    boxView:{
        padding:5,
        backgroundColor:'#D9D9D9',
        height:120
    },
    imageBoxThree:{
        width:'40%',
        height:30,
        justifyContent:"center",
        alignItems:'flex-start',
        margin:5,
        backgroundColor:'#979696',
        textAlign:'left',
    },
    boxViewTwo:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        height:80
    },
    font1:{
        color:'#000',
        fontSize:16
    }
});

export default HomeStyles