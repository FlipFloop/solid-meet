export default function Alert(props: any) {
  return (
    <div class="absolute top-0 flex w-full items-center justify-center  p-2">
      <div class="bg-gray-700 shadow rounded-lg px-4 py-2">
        <p>{props.text}</p>
      </div>
    </div>
  );
}
