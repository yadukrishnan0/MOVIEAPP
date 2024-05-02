import { FaLanguage } from 'react-icons/fa';
import * as Yup from 'yup';


export const Addmovievalidation =Yup.object({
 Title : Yup.string().required('please enter movie title'),
 cast : Yup.string().required('please enter the cast'),
 language:Yup.string().required('please  enter the language'),
 discription:Yup.string().required('please enter discription'),
 image:Yup.string().url('invalide url').required('please enter image url')
});
