import {TabList, TabPanel, TabPanels, Tabs, Tab} from '@chakra-ui/react'
const Profile = () => {
    return ( 
        <Tabs mt='40px' p='20px' colorScheme='purple' variant='enclosed'>
            <TabList>
                <Tab _selected={{color: 'white', bg: 'purple.400'}}>Account Info</Tab>
                <Tab _selected={{color: 'white', bg: 'purple.400'}}>Task History</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>

                </TabPanel>
            </TabPanels>
        </Tabs>

    );
}
 
export default Profile;