/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Container, Typography } from 'anu/lib';
import SortableList from 'anu/lib/advanced/sortable-list/components/sortable-list';

const HomeScreen = () => {
  return (
    <Container
      align='center'
      justify='center'
      disableGutters
      sx={{ marginLeft: 30, marginTop: 50, height: '100%', width: '80%', backgroundColor: 'red' }}
    >
      <SortableList
        itemHeight={60}
        itemWidth={100}
        containerWidth={300}
        data={['hello', 'hii', 'heyyy']}
        keyExtractor={(item: string) => item}
        onSort={(from: number, to: number) => console.log(from, to)}
        renderItem={(item: string, index: number) => {
          return (
            <Typography.Body key={index} style={{ width: 100 }}>
              {item}
            </Typography.Body>
          );
        }}
        onSortEnd={(to: number) => console.log(to, 'to')}
        onSortStart={(from: number) => console.log(from, 'from')}
      />
    </Container>
  );
};

export default HomeScreen;
