{
  /* children prop is build in in react to get the child in every component */
}
const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <button className={isSelected ? "active" : undefined} onClick={onSelect}>
      {children}
    </button>
  );
};

export default TabButton;
