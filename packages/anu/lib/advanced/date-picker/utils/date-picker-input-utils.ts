/**
 *
 * @param withDateFormatInLabel
 * @param inputFormat
 * @param label
 */
export const getLabel = (withDateFormatInLabel: boolean, inputFormat: string, label?: string) => {
  if (withDateFormatInLabel) {
    return label ? `${label} (${inputFormat})` : inputFormat;
  }
  return label || '';
};

export const getDatePickerInputWithoutModalStyles = () => {
  const root = {};
  const inputContainer = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  } as const;
  const input = {};

  return { root, inputContainer, input };
};
