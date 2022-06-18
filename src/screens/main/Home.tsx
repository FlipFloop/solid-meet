import JoinMeeting from "../../components/JoinMeeting";
import NewMeeting from "../../components/NewMeeting";

import videoMeetImg from "../../assets/video-call.svg";
export default function Home() {
  return (
    <div class="my-16">
      <section class="flex flex-col gap-6 md:flex-row justify-center  items-center">
        <div class="max-w-lg">
          <h1 class="text-center md:text-left text-4xl md:text-5xl">
            Open source video meetings. Powered by Solidjs.
          </h1>
          <p class="text-center md:text-left mt-6 text-gray-300 text-lg">
            Click <strong>New meeting</strong> to get a link you can send to
            people you want to meet with
          </p>

          <div class="mt-8 flex flex-col md:flex-row gap-3 items-center">
            <NewMeeting />
            <JoinMeeting />
          </div>
        </div>
        <div class="flex justify-center flex-none">
          <img
            class="w-96 h-96"
            src={videoMeetImg}
            alt="Solid Meet"
            role="img"
          ></img>
        </div>
      </section>
    </div>
  );
}
