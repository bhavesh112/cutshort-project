const StepTab = ({ active, children }) => {
  if (!active) return null;
  return <>{children}</>;
};

export default StepTab;
