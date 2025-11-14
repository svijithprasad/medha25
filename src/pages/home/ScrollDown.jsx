import styled from 'styled-components';

const ScrollDown = () => {
  return (
    <StyledWrapper className='absolute scale-105 bottom-5 right-5 md:right-10 z-99 md:animate-bounce'>
      <div className="container_mouse">
        <span className="mouse-btn">
          <span className="mouse-scroll" />
        </span>
        <span className='text-white text-shadow-lg select-none'>Scroll Down</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .mouse-btn {
    margin: 10px auto;
    width: 40px;
    height: 80px;
    border: 3px solid rgba(255, 255, 255, 0.918);
    border-radius: 20px;
    display: flex;
  }

  .mouse-scroll {
    display: block;
    width: 20px;
    height: 20px;
    background: linear-gradient(170deg, rgba(255, 255, 255, 0.918), rgb(123, 124, 124));
    border-radius: 50%;
    margin: auto;
    animation: scrolling13 1s linear infinite;
  }

  @keyframes scrolling13 {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }

    100% {
      opacity: 1;
      transform: translateY(20px);
    }
  }`;

export default ScrollDown;
