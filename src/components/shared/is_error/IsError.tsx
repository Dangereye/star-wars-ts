import BodyText from "../text/BodyText";
import HDiv from "../text/HDiv";

type IsErrorProps = {
  message: string;
};

export default function IsError({ message }: IsErrorProps) {
  return (
    <article className="article article__is-error">
      <div className="container">
        <HDiv variant="heading--h3" text="Error" />
        <BodyText text={message} />
        <button>try again</button>
        <button>home</button>
      </div>
    </article>
  );
}
