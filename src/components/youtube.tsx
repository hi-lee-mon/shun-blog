import styled from '@emotion/styled';

const StyledYoutube = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export default function YouTube({ id }: { id: string }) {
  return (
    <StyledYoutube>
      <iframe src={`https://www.youtube.com/embed/${id}`} allow='autoplay; encrypted-media' title='Embedded YouTube video' />
    </StyledYoutube>
  );
}
