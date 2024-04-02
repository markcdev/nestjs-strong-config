export const toTypedObjectKey = <TObject extends object>(
  obj: TObject,
): Array<keyof TObject> => {
  return Object.keys(obj) as Array<keyof TObject>;
};
