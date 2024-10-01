const parsers = {
  json: JSON.parse,
};

export default (data, typeFile) => parsers[typeFile](data);