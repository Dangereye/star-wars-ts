type IsLoadingProps = {
  message: string;
};

export default function IsLoading({ message }: IsLoadingProps) {
  return (
    <main>
      <div className="container">
        <h1 className="heading heading--h1">Loading </h1>
        <p className="body-text">{message}...</p>
      </div>
    </main>
  );
}
