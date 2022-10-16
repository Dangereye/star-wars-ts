type IsLoadingProps = {
  message: string;
};

export default function IsLoading({ message }: IsLoadingProps) {
  return (
    <main>
      <div className="container">
        <div className="message">Loading {message}</div>
      </div>
    </main>
  );
}
