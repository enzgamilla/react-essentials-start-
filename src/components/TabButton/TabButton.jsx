{
  /* children prop is build in in react to get the child in every component */
}
const TabButton = ({ children, makeActive, ...props }) => {
  return (
    <button className={makeActive ? "active" : undefined} {...props}>
      {children}
    </button>
  );
};

export default TabButton;
