const BodyLayout = ({ color, children, other }) => {
  return (
    <div className={`${color} px-8 ${other}`}>
      <div className="mx-auto max-w-screen-xl">{children}</div>
    </div>
  );
};
export default BodyLayout;
