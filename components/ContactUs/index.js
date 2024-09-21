import FormValidation from '@/utils/formValidation';
import React from 'react'
import { useForm } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import helpers from '@/utils/helpers';

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const formValidation = FormValidation()
    const onformSubmit = (e) => {
    }

    return (
        <section className="contact" id="contact">
            <h2 className="heading"><i className="fas fa-headset" /> Get in <span>Touch</span></h2>
            <div className="container">
                <div className="content">
                    <div className="image-box">
                        <img draggable="false" src="./images/contact1.png" alt />
                    </div>
                    <form onSubmit={handleSubmit(onformSubmit)}>
                        <div className="form-group">
                            <div className='mb-3'>
                                <div className="field">
                                    <input type="text" {...register('fullName', formValidation.fullName)} placeholder="Enter Name" />
                                    <i className="fas fa-user" />
                                </div>
                                {helpers.andOperator(errors?.fullName, <ErrorMessage message={errors?.fullName?.message} errorClass={'text-red-500 px-3'} />)}
                            </div>
                            <div className='mb-3'>
                                <div className="field">
                                    <input type="text" name="email"  {...register('email', formValidation.email)} placeholder="Enter Email" />
                                    <i className="fas fa-envelope" />
                                </div>
                                {helpers.andOperator(errors?.email, <ErrorMessage message={errors?.email?.message} errorClass={'text-red-500 px-3'} />)}
                            </div>
                            <div className='mb-3'>
                                <div className="field">
                                    <input type="text" name="phone" {...register('mobile', formValidation.mobile)} placeholder="Enter Phone" />
                                    <i className="fas fa-phone-alt" />
                                </div>
                                {helpers.andOperator(errors?.mobile, <ErrorMessage message={errors?.mobile?.message} errorClass={'text-red-500 px-3'} />)}
                            </div>
                            <div className='mb-3'>
                                <div className="message">
                                    <textarea placeholder="Enter Message" {...register('description', formValidation.description)} />
                                    <i className="fas fa-comment-dots" />
                                </div>
                                {helpers.andOperator(errors?.description, <ErrorMessage message={errors?.description?.message} errorClass={'text-red-500 px-3'} />)}
                            </div>
                        </div>
                        <div className="button-area">
                            <button type="submit">
                                Submit <i className="fa fa-paper-plane" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactUs