import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';

import formComponentValidation from './FormComponent.Validation';

const FormComponent = () => {
	
	const sendForm = (values) => {
		console.log(values)
	};
	
	return (
		<div className="container py-3">
			<div className="row">
				<div className="col-md-12">
					<h2 className="text-center text-white mb-4">React Form</h2>
					<div className="row">
						<div className="col-md-6 mx-auto">
							<div className="card rounded">
								<div className="card-header">
									<h3 className="mb-0">Add Post</h3>
								</div>
								<div className="card-body">
									<Formik
										initialValues={
											{
												title: '',
												body: ''
											}
										}
										validateOnBlur={false}
										validationSchema={formComponentValidation}
										onSubmit={sendForm}
									>
										{({errors, status, touched}) => (
											<Form>
												<div className="form-group">
													<label htmlFor="title">Title</label>
													<Field type="text"
																 className={`form-control ${(errors.title && touched.title) ? ' is-invalid' : ''}`}
																 placeholder="title"
																 name="title"
													/>
													<ErrorMessage name="title"
																				render={msg => <small className="text-danger"><strong>{msg}</strong></small>}
													/>
												</div>
												<div className="form-group">
													<label htmlFor="publication">Publication</label>
													<Field className={`form-control ${(errors.body && touched.body) ? ' is-invalid' : ''}`}
																 rows="5"
																 component="textarea"
																 placeholder="Write something..."
																 name="body"
													/>
													<ErrorMessage name="body"
																				render={msg => <small className="text-danger"> <strong>{msg}</strong></small>}
													/>
												</div>
												<button type="submit" className="btn btn-block btn-info">Send</button>
											</Form>
										)}
									</Formik>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormComponent;
