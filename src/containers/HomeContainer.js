import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart, removeFromCart} from '../service/actions/actions'

//to send state to multiple components
const mapStateToProps=state=>({
    // data:state.cardItems
})


//it get data and stores
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeFromCartHandler:data=>dispatch(removeFromCart(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
