import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

{
  /* children prop is build in in react to get the child in every component */
}

const TabButton = ({ children, fontAwesomeIcon, makeActive, ...props }) => {
  return (
    <button className={makeActive ? "active" : undefined} {...props}>
      <span>
        <FontAwesomeIcon icon={fontAwesomeIcon} />
        &nbsp;{children}
      </span>
    </button>
  );
};

export default TabButton;
