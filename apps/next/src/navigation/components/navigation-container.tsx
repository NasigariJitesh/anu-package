interface NavigationContainerProps {
  children: React.ReactNode;
}

/**
 * Wrapper to provide navigation context to all children
 *
 * @param {NavigationContainerProps} properties
 */
function NavigationContainer(properties: NavigationContainerProps) {
  const { children } = properties;

  return <NavigationContainer>{children}</NavigationContainer>;
}

export default NavigationContainer;
