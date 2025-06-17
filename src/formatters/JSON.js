const jsonFormatter = (diffTree) => {
<<<<<<< HEAD
  const convertValue = (value) => {
    if (typeof value === 'object' && value !== null) {
      return JSON.parse(JSON.stringify(value));
    }
    return value;
  };

  const convertNode = (node) => {
    if (node.type === 'nested') {
      return {
        ...node.children.reduce((acc, child) => ({
          ...acc,
          [child.key]: convertNode(child),
        }), {}),
=======
  const convertNode = (node) => {
    if (node.type === 'nested') {
      return {
        ...node.children.reduce((acc, child) => (
          {
            ...acc,
            [child.key]: convertNode(child),
          }), {}),
>>>>>>> 7ec56c45578ae1adb895f16d1ff9463ff5183f77
      };
    }

    if (node.type === 'changed') {
      return {
        changing: node.type,
<<<<<<< HEAD
        value1: convertValue(node.oldValue),
        value2: convertValue(node.newValue),
=======
        value1: node.oldValue,
        value2: node.newValue,
>>>>>>> 7ec56c45578ae1adb895f16d1ff9463ff5183f77
      };
    }

    return { changing: node.type, value: convertValue(node.value) };
  };

<<<<<<< HEAD
  return JSON.stringify(diffTree.reduce((acc, node) => ({
    ...acc,
    [node.key]: convertNode(node),
  }), {}));
=======
  return JSON.stringify(diffTree.reduce((acc, node) => (
    {
      ...acc,
      [node.key]: convertNode(node),
    }), {}));
>>>>>>> 7ec56c45578ae1adb895f16d1ff9463ff5183f77
};

export default jsonFormatter;
