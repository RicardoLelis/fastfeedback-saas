import React from 'react'
import {
    Heading,
    Box,
    Text,
    Button
} from '@chakra-ui/core'
import DashboardShell from './DashboardShell'

const FreePlanEmptyState = () => (
    <DashboardShell>
        <Box
            width="100%"
            color="white"
            borderRadius="8px"
            p={8}
            backgroundColor="white"
        >
            <Heading as="h2" size="md" fontWeight="bold" color="black">
                Get feedback on your site instantly.
                </Heading>
            <Text color="black">Start today, then grow with us 🌱</Text>
            <Button variant="solid" size="md" color="black">
                Upgrade to Starter
            </Button>
        </Box>

    </DashboardShell>


)

export default FreePlanEmptyState