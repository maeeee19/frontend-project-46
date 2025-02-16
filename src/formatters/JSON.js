const jsonFormatter = (diffTree) => {
  console.log(diffTree)
  const convertNode = (node) => {
    if (node.type === 'nested') {
      return { ...node.children.reduce((acc, child) => ({ ...acc, [child.key]: convertNode(child) }), {}) };
    } 

    if (node.type === 'changed') {
      return { changing: node.type, value1: node.oldValue, value2: node.newValue };
    }

    return { changing: node.type, value: node.value };
  };

  return JSON.stringify(diffTree.reduce((acc, node) => ({ ...acc, [node.key]: convertNode(node) }), {}));
};

export default jsonFormatter;