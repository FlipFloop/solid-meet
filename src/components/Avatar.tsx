export default function Avatar(props: any) {
  return (
    <div
      class={`grid place-items-center rounded-full bg-gray-700 text-5xl text-white ${props.className}`}
    >
      {props.children}
    </div>
  );
}
