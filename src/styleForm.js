import styled from 'styled-components';
import Color from './colors';

export const StyleForm = styled.div`
  height: 100%;
  margin: 5rem;
  font-size: 1.4rem;
  
  .form-block {
    .form-item {
      padding: 1rem 0;
    }

    label {
      color: ${Color.grey};
      cursor: pointer;
      font-size: 14px;
      transition: 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }

    input, textarea {
      width: 36rem;
      padding: 1rem;
      border: 1px solid ${Color.grey};
    }

    .input-name {
      text-transform: capitalize;
    }

    .input-file {
      display: none;
    }

    .id-card {
      padding: 1rem;
      background-color: ${Color.grey};
      color: ${Color.white};
    }

    .block-img {
      position: relative;
      width: 20rem;
      height: 20rem;
      margin: 2rem 0;
      border: 1px solid ${Color.grey};
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }

      .btn-close {
        position: absolute;
        z-index: 1000;
        background: ${Color.white};
        width: 3rem;
        height: 3rem;
        top: 0;
        right: 0;
        transition: 0.3s;
        padding: 0;
        margin: 0;
        font-size: 1.8rem;
        color: ${Color.black};
        cursor: pointer;
        border: 0;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .error {
      color: ${Color.red};

      &-input {
        border: 1px solid ${Color.red};
      }
    }
  }

  .btn-block {
    .btn {
      width: 18.6rem;
      height: 4rem;
      font-size: 1.5rem;
      border: 0;
      background-color: ${Color.grey};
      margin-right: 1rem;
      color: ${Color.white};
      cursor: pointer;
      transition: 0.3s;

      &:focus {
        outline: 0;
      }

      :hover {
        opacity: 0.8;
      }
    }
  }
  
  @media only screen and (max-width: 480px) {
    .form-block {
      input, textarea {
        width: 23rem;
      }
    }
    
    .btn-block {
      .btn {
        margin-top: 1rem;
      }
    }
  }

`