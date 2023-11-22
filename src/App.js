import { Box, Flex, Provider, Select } from '@stoplight/mosaic';
import './App.css';
import { Example } from './Example';

function App() {
  return (
    <div className="App">
      <div>UUU</div>
      <div>
        <Provider>
          <Box m={3} border={3}>
            Kle mech
          </Box>
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
              onOpen={() => console.log('open color')}
              onClose={() => console.log('close color')}
            />
            <Select
              w="1/5"
              aria-label="Numbers"
              options={[
                { value: 'one' },
                { value: 'two' },
                { value: 'three' },
                { value: 'four' },
                { value: 'five' },
                { value: 'six' },
              ]}
              onOpen={() => console.log('open number')}
              onClose={() => console.log('close number')}
            />
          </Flex>
        </Provider>
      </div>
    </div>
  );
}

export default App;

