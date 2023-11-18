const TabContent = ({ title, sampleContent }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{sampleContent.explanation}</p>
      <pre>
        <code>{sampleContent.code}</code>
      </pre>
    </div>
  );
};

export default TabContent;
