import { FaSolidVideo } from "solid-icons/fa";
import { BsDot } from "solid-icons/bs";
import { showDate, showTime } from "../utils/dateTime";
export default function Navbar() {
  return (
    <header class="bg-gray-800 px-2 md:px-0 py-2">
      <nav class="container mx-auto flex items-center justify-between py-2">
        <h1 class="flex items-center gap-2">
          <FaSolidVideo size={32} class="text-blue-500" />
          <span class="text-2xl">Solid Meet</span>
        </h1>

        <div class="hidden sm:block">
          <time class="flex items-center gap-0 text-gray-300 md:text-lg">
            <span>{showTime()}</span>
            <BsDot size={24} />
            <span>{showDate()}</span>
          </time>
        </div>
      </nav>
    </header>
  );
}
