import Room from "./04_Room";

export default function Chamber(props) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-yellow-400 w-[90%]">
      <h1>Chamber</h1>
      <Room {...props} />
    </div>
  );
}
