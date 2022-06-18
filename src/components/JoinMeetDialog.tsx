import { RiDocumentFileCopyLine } from "solid-icons/ri";
import { IoClose } from "solid-icons/io";
import { useParams } from "solid-app-router";
import { createSignal, Show } from "solid-js";
import { copyToClipboard } from "../utils/clipboard";
import clickOutside from "../directives/clickOutside";

export default function JoinMeetDialog() {
  const [showJoinDialog, setShowJoinDialog] = createSignal(true);
  const params = useParams();

  return (
    <Show when={showJoinDialog()}>
      <div
        class="absolute top-0 left-0 max-full p-4"
        use:clickOutside={() => setShowJoinDialog(false)}
      >
        <div class="bg-gray-700 shadow rounded-lg px-3 py-4">
          <section class="flex justify-between items-center">
            <h6 class="text-xl">Your meeting`s ready</h6>

            <button
              onClick={[setShowJoinDialog, false]}
              class="rounded-full hover:bg-gray-600 p-2"
            >
              <IoClose size={20} />
            </button>
          </section>

          <section class="my-4">
            <p class="text-gray-300">
              Share this meeting link with others you want in the meeting
            </p>

            <div class="my-2 bg-gray-600 rounded py-2 px-2 flex flex-col md:flex-row items-center gap-2">
              <code class="text-sm text-clip">
                {location.origin}/{params.meetCode}
              </code>
              <button
                class="rounded-full hover:bg-gray-700 p-2"
                onClick={[
                  copyToClipboard,
                  `${location.origin}/${params.meetCode}`,
                ]}
              >
                <RiDocumentFileCopyLine size={20} />
              </button>
            </div>
          </section>
        </div>
      </div>
    </Show>
  );
}
