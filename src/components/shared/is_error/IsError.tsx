type IsErrorProps = {
  message: string;
};

export default function IsError({ message }: IsErrorProps) {
  return (
    <main>
      <div className="container">
        <h1 className="heading heading--h1">Oops!</h1>
        <p className="body-text">Something went wrong? {message}.</p>
        <button>try again</button>
        <button>home</button>
      </div>
    </main>
  );
}
