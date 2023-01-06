import $ from 'jquery'
const { apiDomain } = process.env

/*
export const sendContactForm = async (data) =>
  fetch(`${apiDomain}/api/contact`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  */

export const sendContactForm = (data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${apiDomain}contact-form`,
      //url: `https://ac-re-api.onrender.com/send-attachment`,
      type: 'POST',
      datatype: 'json',
      contentType: 'application/json;charset=utf-8',
      data,
      success: (response) => {
        // eslint-disable-next-line no-console
        console.log(response)
        resolve();
      },
      error: (error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        reject()
      }
    })
  });
}

export const sendCareerForm = (formData) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${apiDomain}career-form`,
      //url: `https://ac-re-api.onrender.com/send-attachment`,
      type: 'POST',
      datatype: 'json',
      processData: false,
      contentType: false,
      data: formData,
      success: (response) => {
        // eslint-disable-next-line no-console
        console.log(response)
        resolve();
      },
      error: (error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        reject()
      }
    })
  });
}