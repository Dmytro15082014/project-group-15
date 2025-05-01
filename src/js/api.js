import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

export function getReviews(limit) {
    return axios.get(`https://portfolio-js.b.goit.study/api/reviews?limit=${limit}`);
}

export function setFormEmail({email, comment }) {
    return fetch('https://portfolio-js.b.goit.study/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, comment }),
      });
}