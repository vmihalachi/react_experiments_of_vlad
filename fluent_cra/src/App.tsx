import React from 'react'
import {Provider, teamsTheme, Flex, Button} from '@fluentui/react-northstar'

function App() {
    return (
        <Provider theme={teamsTheme}>
            <Flex gap="gap.small">
                <Button content="Accept" />
                <Button content="Deny" />
            </Flex>
        </Provider>
    )
}

export default App
