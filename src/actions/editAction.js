import { NEW_MERCH } from './types';
import axios from 'axios';


export const editAbout = (merchant_id, abt) => {
    axios.put(`http://localhost:5000/api/merchant/${merchant_id}/about`, {
            about: abt.about, 
        })
        .then(abt => ({
            type: NEW_MERCH,
            paload: abt.data
        }))
     
}
