import faker from 'faker';
import {
  Checkbox,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

type Todo = {
  title: string;
  isCompleted: boolean;
};

const instState: Todo[] = Array(20)
  .fill(false)
  .map(() => {
    return {
      title: faker.lorem.sentence(3),
      isCompleted: faker.datatype.boolean(),
    };
  });

export default function () {
  const [list, setList] = React.useState<Todo[]>(instState);
  const [inputValue, setInputValue] = React.useState('');
  const addItem = (title: string) => {
    setList([
      ...list,
      {
        title: title,
        isCompleted: false,
      },
    ]);
  };
  const handleDelete = (index: number) => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
  };
  const handleStatusChange = (index: number) => {
    const temp = list.map((item, itemI) =>
      itemI !== index
        ? item
        : {
            ...item,
            isCompleted: !item.isCompleted,
          },
    );
    setList(temp);
  };
  return (
    <ScrollView>
      <VStack p={5}>
        <Heading mb="5">Shopping list</Heading>
        <HStack space={2}>
          <Input
            flex={1}
            onChangeText={(v: string) => setInputValue(v)}
            value={inputValue}
            placeholder="Add Task"
          />
          <IconButton
            borderRadius="sm"
            variant="solid"
            icon={
              <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
            }
            onPress={() => {
              const value = inputValue || faker.lorem.sentence(3);
              addItem(value);
              setInputValue('');
            }}
          />
        </HStack>
      </VStack>

      <View>
        {list.map((item, itemI) => (
          <HStack
            px={5}
            py={1}
            justifyContent="space-between"
            alignItems="center"
            key={item.title + itemI.toString()}>
            <Checkbox
              isChecked={item.isCompleted}
              onChange={() => handleStatusChange(itemI)}
              value={item.title}>
              <Text
                paddingY={2}
                mx="2"
                strikeThrough={item.isCompleted}
                _light={{
                  color: item.isCompleted ? 'gray.400' : 'coolGray.800',
                }}
                _dark={{
                  color: item.isCompleted ? 'gray.400' : 'coolGray.50',
                }}>
                {item.title}
              </Text>
            </Checkbox>
            <IconButton
              size="sm"
              colorScheme="trueGray"
              icon={
                <Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />
              }
              onPress={() => handleDelete(itemI)}
            />
          </HStack>
        ))}
      </View>
    </ScrollView>
  );
}
