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

export const attachEmail = async (formData) =>
  fetch('/api/attachEmail', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data; boundary=???',
      Accept: 'multipart/form-data',
    },
  });
