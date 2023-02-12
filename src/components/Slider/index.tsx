import { ImageSlide, Image } from "./style";

export function Slider() {

  return (
    <ImageSlide id="image-slide" data-mouse-down-location="0">
      <Image
        src="https://images.unsplash.com/photo-1670272506253-3a185e06d102?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        draggable="false"
      />
      <Image
        src="https://images.unsplash.com/photo-1670272504471-61a632484750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        draggable="false"
      />
      <Image
        src="https://images.unsplash.com/photo-1676056570140-5067b1fe7a19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        draggable="false"
      />
      <Image
        src="https://images.unsplash.com/photo-1676056570140-5067b1fe7a19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        draggable="false"
      />{" "}
      <Image
        src="https://images.unsplash.com/photo-1676056570140-5067b1fe7a19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        draggable="false"
      />{" "}
      <Image
        src="https://images.unsplash.com/photo-1676056570140-5067b1fe7a19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        draggable="false"
      />
    </ImageSlide>
  );
}
