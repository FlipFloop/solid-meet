import { createEffect } from "solid-js";
import { getVideoSrc } from "../directives/video";

export default function Stream(props: any) {
  return (
    <div class="relative">
      <video
        autoPlay
        controls={false}
        playsInline
        use:getVideoSrc={props.stream}
        class=""
      ></video>
      <h6 class="font-bold text-sm absolute top-0  p-4 text-white">
        {props.name}
      </h6>
    </div>
  );
}
