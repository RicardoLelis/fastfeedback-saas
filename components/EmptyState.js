import React from 'react'
import {
    Heading,
    Flex,
    Text,
    Button
} from '@chakra-ui/core'
import DashboardShell from './DashboardShell'
import AddSiteModal from './AddSiteModal'

const EmptyState = () => (
    <DashboardShell>
        <Flex
            width="100%"
            backgroundColor="white"
            borderRadius="8px"
            p={16}
            justify="center"
            align="center"
            direction="column"
        >
            <Heading as="h2" mb={2} size="lg" fontWeight="bold" color="black">
                You haven't added any sites.
                </Heading>
            <Text mb={4} color="black">Let's get started.</Text>
            <AddSiteModal />
        </Flex>
    </DashboardShell>
)

export default EmptyState