import { errorForm } from './config';
export const validationForm = (data) => {
    let checkInput = true;
    const errors = {};
    const vnfRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    const formatName = /[!@#$%^&*()/_+~`\-=,.?":{}|<>]/;
    const sizeImg = data['idCard'] && data['idCard'].size;
    const sizeImgMB = (sizeImg/1024)/1024;

    if (data['name'].length < 3 || formatName.test(data['name']) ) {
        errors['name'] = errorForm.name;
        checkInput = false;
    }
    
    if (!vnfRegex.test(data['phone'])) {
        errors['phone'] = errorForm.phone;
        checkInput = false;
    }
    
    if (!data['idCard'] || sizeImgMB >= 2) {
        errors['idCard'] = errorForm.idCard;
        checkInput = false;
    }
    
    if (data['content'].length < 10 || data['content'].length > 100) {
        errors['content'] = errorForm.content;
        checkInput = false;
    }
    
    if (!data['startDate']) {
        errors['startDate'] = errorForm.startDate;
        checkInput = false;
    };
    return {checkInput, errors};
}


