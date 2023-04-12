import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListItem, Link, ListIcon } from "@chakra-ui/react";
import NextLink from 'next/link'

const Sidebar = () => {
    return (
        <List color='white' fontSize='1.2em' spacing={4}>
            <ListItem>
                <Link as={NextLink} href='/'>
                    <ListIcon as={CalendarIcon} color='white'/>
                    Dashboard
                </Link>
            </ListItem>
            <ListItem>
                <Link as={NextLink} href='/'>
                    <ListIcon as={EditIcon} color='white'/>
                    New Task
                </Link>
            </ListItem>
            <ListItem>
                <Link as={NextLink} href='/profile'>
                    <ListIcon as={AtSignIcon} color='white'/>
                    Profile
                </Link>
            </ListItem>
        </List>

    );
}
 
export default Sidebar;