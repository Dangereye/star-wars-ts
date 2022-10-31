import BodyText from "../text/BodyText";
import HDiv from "../text/HDiv";

type IsLoadingProps = {
  message: string;
};

export default function IsLoading({ message }: IsLoadingProps) {
  return (
    <article className="article article__is-loading">
      <div className="container">
        <HDiv variant="heading--h3" text="Please wait" />
        <BodyText text="Loading Films..." />
      </div>
    </article>
  );
}
