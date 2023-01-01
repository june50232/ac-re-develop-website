import $ from 'jquery';

export const sendContactForm = async (data) =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export const sendCareerForm = async (formData) =>
  fetch('/api/career', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data; boundary=???',
      Accept: 'multipart/form-data',
    },
  });

export const attachEmail = async (formData) => {
  $.ajax({
    url: 'http://localhost:8080/api/send-attachment',
    type: 'POST',
    datatype: 'json',
    processData: false,
    contentType: false,
    data: formData,
    success: (response) => {
      // eslint-disable-next-line no-console
      console.log(response);
    },
    error: (error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    },
  });
};
/*
  fetch('http://localhost:8080/api/send-attachment', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data; boundary=???',
      Accept: 'multipart/form-data; boundary=???',
    },
  });
*/
