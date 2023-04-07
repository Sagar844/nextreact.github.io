import CartContext from "@/Context/ContextProvider";
import { useContext } from "react";


// eslint-disable-next-line react/display-name
const  withprovider = (provider:any) => (IncomingComponets:any) => (props:any) => {
const  datacontext:any = useContext(provider);
return <IncomingComponets {...props} {...datacontext}/>

}
export default withprovider;
export const withcart = withprovider(CartContext)