import { Box, Flex, Provider, Select } from '@stoplight/mosaic';
import './App.css';

function App() {
  return (
    <Provider>
      <Box className="App">
        <Flex justify="center">
          <Select
            w="1/5"
            aria-label="Color"
            options={[
              { value: 'red' },
              { value: 'orange' },
              { value: 'yellow' },
              { value: 'green' },
              { value: 'blue' },
              { value: 'purple' },
            ]}
          />
        </Flex>
      </Box>
    </Provider>
  );
}

export default App;

