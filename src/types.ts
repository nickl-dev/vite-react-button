export type Item = {
  className: string;
  text: string;
  nestedElement?: string;
};

export type Collection = {
  title: string;
  items: Item[];
};
