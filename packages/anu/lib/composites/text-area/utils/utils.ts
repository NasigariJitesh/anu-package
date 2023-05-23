export const getTextAreaStyles = () => {
  const style = {
    height: 100,
  };
  const textStyle = {
    flex: 1,
    marginTop: 8,
    textAlignVertical: 'top',
  } as const;

  return { style, textStyle };
};
