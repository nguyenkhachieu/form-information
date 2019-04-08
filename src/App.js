import React, { Component } from 'react';
import { StyleForm } from './styleForm.js';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { getApi, submitForm } from './actions';
import { validationForm } from './validation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      idCard: null,
      content: '',
      startDate: null,
    };
  }

  componentDidMount() {
    this.props.onGetApi();
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
  }

  handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        idCard: event.target.files[0],
      });
    }
  }

  onRemoveImg = () => {
    this.setState({
      idCard: null,
    });
  }

  onReset = (event) => {
    event.preventDefault();
    this.setState({
      name: '',
      phone: '',
      idCard: null,
      content: '',
      startDate: null,
    });
  }

  render() {
    const dataForm = validationForm(this.state);
    const errorInput = this.props.errors;
    const urlImage = this.state.idCard && URL.createObjectURL(this.state.idCard);
    return (
      <StyleForm>
        <div>
          <form className="form-block" onSubmit={this.handleSubmit}>
            <div className="form-item">
              <label>
                <input
                  className={`input-name ${errorInput['name'] && errorInput['name'] === dataForm.errors['name'] ? 'error-input' : ''}`}
                  name="name"
                  type="text"
                  value={this.state.name}
                  placeholder="Họ và tên"
                  onChange={this.handleInputChange} 
                />
              </label>
              <p className="error">{errorInput['name'] && errorInput['name'] === dataForm.errors['name'] && errorInput['name']}</p>
            </div>
            <div className="form-item">
              <label>
                <input
                  className={`${errorInput['phone'] && errorInput['phone'] === dataForm.errors['phone'] ? 'error-input' : ''}`}
                  name="phone"
                  type="text"
                  value={this.state.phone}
                  placeholder="Số điện thoại"
                  onChange={this.handleInputChange} 
                />
              </label>
              <p className="error">{errorInput['phone'] && errorInput['phone'] === dataForm.errors['phone'] && errorInput['phone']}</p>
            </div>
            <div className="form-item">
              <DatePicker
                className={`${errorInput['startDate'] && errorInput['startDate'] === dataForm.errors['startDate'] ? 'error-input' : ''}`}
                selected={this.state.startDate}
                onChange={this.handleChange}
                placeholderText="Ngày sinh"
              />
              <p className="error">{errorInput['startDate'] && errorInput['startDate'] === dataForm.errors['startDate'] && errorInput['startDate']}</p>
            </div>
            <div className="form-item">
              <label className="id-card">
                Chứng minh nhân dân
                <input
                  className={`input-file ${errorInput['idCard'] && errorInput['idCard'] === dataForm.errors['idCard'] ? 'error-input' : ''}`}
                  type="file"
                  onChange={this.handleFileChange}
                />
              </label>
              <p className="error">{errorInput['idCard'] && errorInput['idCard'] === dataForm.errors['idCard'] && errorInput['idCard']}</p>
              { this.state.idCard ?
                (
                  <div className="block-img">
                    <button className="btn-close" onClick={this.onRemoveImg}>x</button>
                    <img src={urlImage} alt="identity card"/>
                  </div>
                ) : null
              }
            </div>
            <div className="form-item">
              <label>
                <input
                  className={`${errorInput['content'] && errorInput['content'] === dataForm.errors['content'] ? 'error-input' : ''}`}
                  name="content"
                  type="text"
                  placeholder="Nội dung"
                  maxLength="100"
                  value={this.state.content}
                  onChange={this.handleInputChange}
                />
              </label>
              <p className="error">{errorInput['content'] && errorInput['content'] === dataForm.errors['content'] && errorInput['content']}</p>
            </div>
            <div className="btn-block">
              <label>
                <button
                  className="btn btn-submit"
                  name="submit"
                  type="submit"
                >
                Submit
                </button>
              </label>
              <button className="btn btn-reset" onClick={this.onReset}>Reset</button>
            </div>
          </form>
        </div>
      </StyleForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.dataReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetApi : () => {
      dispatch(getApi());
    },
    onSubmitForm : (data) => {
      dispatch(submitForm(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
