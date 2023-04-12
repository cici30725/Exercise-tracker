import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.50"> 
        <GridItem
            as='aside'
            colSpan='1'
            bg='purple.400'
            minHeight='100vh'
            p='30px'
        >
            <Sidebar/>
        </GridItem>

        <GridItem
            as='main'
            colSpan='5'
            p='40px'
        >
            <Navbar/>
            {children}
        </GridItem>
        </Grid>
    );
}
 
export default Layout;