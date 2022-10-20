import Button from "./buttons/button/Button";
import BodyText from "./text/BodyText";

type PaginationProps = {
  page: number;
  setPage: (value: React.SetStateAction<number>) => void;
  data: { count: number; previous: string | null; next: string | null };
};

export default function Pagination({ page, setPage, data }: PaginationProps) {
  if (data.next || data.previous) {
    return (
      <div className="pagination">
        <div className="buttons">
          <Button
            name="previous"
            size="btn--large"
            variant="btn--primary"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={!data.previous}
          />

          <Button
            name="next"
            size="btn--large"
            variant="btn--primary"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!data.next}
          />
        </div>
        <BodyText text={`Page ${page} of ${Math.ceil(data.count / 10)}`} />
      </div>
    );
  }
  return <></>;
}
