import styled from "styled-components";

export const ImageSlide = styled.div`
    display: flex;
    gap: 4vmin;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0%, -50%);
    width: 40vmin;
    height: 56vmin;
`

export const Image = styled.img`
    width: 40vmin;
    height: 56vmin;
    object-fit: cover;
    object-position: center;
`
