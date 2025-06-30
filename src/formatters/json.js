import _ from 'lodash'

const jsonFormatter = (diffTree) => {
  const convertValue = (value) => {
    if ((_.isObject(value) || Array.isArray(value)) && value !== null) {
      return JSON.parse(JSON.stringify(value))
    }

    return value
  }

  const convertNode = (node) => {
    if (node.type === 'nested') {
      return {
        ...node.children.reduce((acc, child) => (
          {
            ...acc,
            [child.key]: convertNode(child),
          }), {}),
      }
    }

    if (node.type === 'changed') {
      return {
        changing: node.type,
        value1: convertValue(node.oldValue),
        value2: convertValue(node.newValue),
      }
    }

    return { changing: node.type, value: convertValue(node.value) }
  }

  return JSON.stringify(diffTree.reduce((acc, node) => (
    {
      ...acc,
      [node.key]: convertNode(node),
    }), {}))
}

export default jsonFormatter
