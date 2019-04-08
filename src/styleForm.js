import styled from 'styled-components';

export const StyleForm = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.4rem;
  
  .form-block {
    // text-align: center;
    .form-item {
      padding: 1rem 0;
    }

    label {
      color: #999;
      cursor: pointer;
      font-size: 14px;
    }

    input {
      width: 50%;
      // margin-left: 1rem;
      padding: 1rem;
      border: 1px solid #999;
      
      &:focus {
        outline: 0;
      }
    }

    .input-name {
      text-transform: capitalize;
    }

    .input-file {
      display: none;
    }

    .id-card {
      padding: 1rem;
      background-color: #999;
      color: #fff;
    }

    .block-img {
      position: relative;
      width: 30rem;
      height: 30rem;
      margin: 2rem 0;
      border: 1px solid #999;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }

      .btn-close {
        position: absolute;
        z-index: 1000;
        background: #fff;
        width: 3rem;
        height: 3rem;
        top: 0;
        right: 0;
        transition: 0.3s;
        padding: 0;
        margin: 0;
        font-size: 1.8rem;
        color: #000;
        cursor: pointer;
        border: 0;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .error {
      color: red;

      &-input {
        border: 1px solid red;
      }
    }
  }

  .btn-block {
    .btn {
      width: 25rem;
      height: 3rem;
      border: 0;
      background-color: #999;
      margin: 0 1rem;
      color: #fff;
      cursor: pointer;

      &:focus {
        outline: 0;
      }
    }
  }

`