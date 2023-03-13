import * as yup from 'yup';

export const regSchema = yup.object().shape({
    name: yup.string().required().min(3,'min value 3').trim(),
    email: yup.string().required().nullable().email('wrong mail').trim(),
    password: yup.string().required('input somthing').nullable().min(8,'min value 8').max(16,'max value 16').trim(),
});