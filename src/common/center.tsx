export default function Center({ screen, children }) {
  if (screen) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        {children}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
