{
  /* children prop is build in in react to get the child in every component */
}
const TabButton = ({ children, onSelect }) => {
  return <button onClick={onSelect}>{children}</button>;
};

export default TabButton;
