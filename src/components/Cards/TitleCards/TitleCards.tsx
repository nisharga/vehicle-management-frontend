import Subtitle from "../Typography/Subtitle";

function TitleCard({
  title,
  children,
  topMargin,
  TopSideButtons,
}: {
  title: any;
  children: any;
  topMargin: any;
  TopSideButtons: any;
}) {
  return (
    <div
      className={
        "card w-full p-6 bg-base-100 shadow-xl text-textColor border bg-white rounded-lg " +
        (topMargin || "mt-6")
      }
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      {/* Title for Card */}
      <Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
        {title}

        {/* Top side button, show only if present */}
        {TopSideButtons && (
          <div className="inline-block float-right">{TopSideButtons}</div>
        )}
      </Subtitle>

      <div className="divider mt-2"></div>

      {/** Card Body */}
      <div className="h-full w-full pb-6 bg-base-100">{children}</div>
    </div>
  );
}

export default TitleCard;
