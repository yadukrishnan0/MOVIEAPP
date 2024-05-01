import { FaLanguage } from 'react-icons/fa';
import * as Yup from 'yup';


export const Addmovievalidation =Yup.object({
 Title : Yup.string().required('please enter movie title'),
 Cast : Yup.string().required('please enter the cast'),
 rating : Yup.number().required('please enter the rating'),
 language:Yup.string().required('please  enter the rating'),
 discription:Yup.string().required('please enter discription')
});
