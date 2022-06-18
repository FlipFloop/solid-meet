import { useNavigate } from "solid-app-router";

export default function Error(props: any) {
  const navigate = useNavigate();
  return (
    <div class="h-screen bg-gray-900 text-white grid place-items-center">
      <div class="flex flex-col space-y-4">
        <h5 class="text-2xl">{props.error.name}</h5>
        <p class="text-xl">{props.error.message}</p>
        <button
          onClick={() => navigate("/", { replace: true })}
          class="text-white bg-red-500 py-2 px-4 "
        >
          Leave Meeting
        </button>
      </div>
    </div>
  );
}
