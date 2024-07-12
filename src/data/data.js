export const todos = [
  {
    id: 1,
    content:
      "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.124124124",
    isClosed: false,
    category: "Apple",
  },
  {
    id: 2,
    content:
      "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.12412412",
    isClosed: false,
    category: "Microsoft",
  },
  {
    id: 3,
    content:
      "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.1241242312weqg",
    isClosed: false,
    category: "IBM",
  },
  {
    id: 4,
    content:
      "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.askgslagasklg34124",
    isClosed: false,
    category: "IBM",
  },
  {
    id: 5,
    content:
      "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.12342qrwer",
    isClosed: false,
    category: "Samsung",
  },
  {
    id: 6,
    content:
      "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.124213qwrsaf",
    isClosed: false,
    category: "IBM",
  },
];

let todolastId = todos.length;

export const getTodos = ({ category, search } = {}) => {
  let filteredTodos = todos;

  if (category) {
    filteredTodos = filteredTodos.filter((el) => el.category === category);
  }

  if (search) {
    filteredTodos = filteredTodos.filter(
      (el) =>
        el.content.toLowerCase().includes(search.toLowerCase()) ||
        el.category.toLowerCase().includes(search.toLowerCase())
    );
  }

  return filteredTodos.sort();
};

export const getTodo = (id) => {
  return todos.find((el) => el.id === id);
};

export const addTodo = ({ content }) => {};

export const updateTodo = (id, { content, isClosed, category }) => {
  const index = todos.findIndex((el) => el.id === id);

  if (![null, undefined].includes(content)) {
    todos[index].content = content;
  }
  if (![null, undefined].includes(isClosed)) {
    todos[index].isClosed = isClosed;
  }

  if (![null, undefined].includes(category)) {
    todos[index].category = category;
  }
};

export const removeTodo = (id) => {
  const index = todos.findIndex((el) => el.id === id);
  todos.splice(index, 1);
};

export const createTodo = ({ content, isClosed, category }) => {
  const id = todolastId + 1;

  todolastId = id;

  todos.push({
    id,
    content,
    isClosed,
    category,
  });
};

export const categories = ["Apple", "Microsoft", "IBM", "Samsung"];

export const getCategories = () => {
  return categories;
};
