import {
  Badge,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaTrash } from "react-icons/fa";
import "./TodoList.css";

const TodoList = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" className="container" borderRadius="lg">
        No Todos, Yay !!
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.200"
      borderWidth={2}
      p={4}
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
      className="container"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            color="red"
            isRound="true"
            onClick={() => deleteTodo(todo.id)}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
