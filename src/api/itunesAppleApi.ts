import axios from 'axios';
import { ITUNES_APPLE_API } from './configApi';

export const itunesAppleApi = axios.create({
    baseURL: ITUNES_APPLE_API,
})
